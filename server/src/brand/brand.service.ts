import {
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand, BrandDocument } from './schemas/brand.schema';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brand.name) private brandModel: Model<BrandDocument>,
  ) {}

	async create(dto: CreateBrandDto) {
		const brand = await this.brandModel.create({...dto});
    return brand;
  }
	
	async getAll() {
    const brands = await this.brandModel.find();
    return brands;
  }

	async getOne(value: string) {
    const brand = await this.brandModel.findOne({value});
    return brand;
  }

	async delete(id: ObjectId) {
		const brand = await this.brandModel.findOne({_id: id});
		await brand.remove();
    return brand;
  }
}
