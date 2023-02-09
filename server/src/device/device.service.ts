import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, ObjectId } from 'mongoose';
import { DeviceInfo, DeviceInfoDocument } from './schemas/device-info.schema';
import { Device, DeviceDocument } from './schemas/device.schema';
import { CreateDeviceDto } from './dto/create-device.dto';
import { FileService } from '../file/file.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(Device.name) private deviceModel: Model<DeviceDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    @InjectModel(DeviceInfo.name)
    private deviceInfoModel: Model<DeviceInfoDocument>,
    private fileService: FileService,
  ) {}

  async create(
    dto: CreateDeviceDto,
    image: { originalname: string; buffer: string | NodeJS.ArrayBufferView },
  ) {
    const {
      name,
      price,
      discount,
      brandId,
      typeId,
      screenDiagonal,
      screenRefreshRate,
      batteryCapacity,
      сonnection,
      size,
      weight,
      color,
      otherDescr,
      countryProductManufacturer,
    } = dto;
    const imgPath = this.fileService.createFile(image);
    const deviceInfo = await this.deviceInfoModel.create({
      screenDiagonal,
      screenRefreshRate,
      batteryCapacity,
      сonnection,
      size,
      weight,
      color,
      otherDescr,
      countryProductManufacturer,
    });
    const device = await this.deviceModel.create({
      name,
      price,
      discount,
      imgPath,
      info: deviceInfo._id,
      brandId,
      typeId,
    });
    return device.populate('info brandId typeId');
  }

  async update(
    dto: UpdateDeviceDto,
  ) {
    const {
			id,
      name,
      price,
      discount,
      brandId,
      typeId,
      screenDiagonal,
      screenRefreshRate,
      batteryCapacity,
      сonnection,
      size,
      weight,
      color,
      otherDescr,
      countryProductManufacturer,
    } = dto;
		if(!id) {
			throw new HttpException(
        'Введіть id',
        HttpStatus.BAD_REQUEST,
      );
		}
    const device = await this.deviceModel.findById(id);
		if (!device) {
      throw new HttpException(
        'Товар з таким id не існує',
        HttpStatus.NOT_FOUND,
      );
    }
    const deviceInfo = await this.deviceInfoModel.findById(device.info);

		await deviceInfo.updateOne({$set: {
      screenDiagonal,
      screenRefreshRate,
      batteryCapacity,
      сonnection,
      size,
      weight,
      color,
      otherDescr,
      countryProductManufacturer,
    }})
    await device.updateOne({$set:{
      name,
      price,
      discount,
      info: deviceInfo._id,
      brandId,
      typeId,
    }}, { upsert: true });
    return device.populate('info brandId typeId');
  }

  async getAll(count = 10, offset = 0) {
    const devices = await this.deviceModel
      .find()
      .populate('info brandId typeId comments')
      .skip(Number(offset))
      .limit(Number(count));
    return devices;
  }

  async search(query: string) {
    const devices = await this.deviceModel
      .find({
        name: { $regex: new RegExp(query, 'i') },
      })
      .populate('info brandId typeId');
    return devices;
  }

  async getOne(id: ObjectId) {
    const device = await this.deviceModel
      .findById(id)
      .populate('info brandId typeId comments');
			console.log(device)
    return device;
  }

  async delete(id: ObjectId) {
    const device = await this.deviceModel.findByIdAndDelete(id);
    const deviceInfo = await this.deviceInfoModel.findByIdAndDelete(
      device.info,
    );
    return [device._id, deviceInfo._id];
  }

  async addComment(dto: CreateCommentDto) {
    const device = await this.deviceModel.findById(dto.deviceId);
    const comment = await this.commentModel.create({ ...dto });
    const comments = await this.commentModel.find({ deviceId: dto.deviceId });
    const starsCount = comments.reduce(
      (currentValue, comment) => currentValue + comment.stars,
      0,
    );

		let ratingAverage = 0;
		const divideResult = (starsCount / comments.length).toFixed(2).split(".")[1];
		if(+divideResult < 25) ratingAverage = Math.floor(starsCount / comments.length);
		else if (25 < +divideResult && +divideResult < 75) ratingAverage = Math.floor(starsCount / comments.length) + 0.5;
		else if (+divideResult > 75) ratingAverage = Math.ceil(starsCount / comments.length);

    device.comments.push(comment._id);
    device.rating = ratingAverage;
    await device.save();
    return comment;
  }
}
