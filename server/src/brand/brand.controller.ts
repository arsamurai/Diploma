import {
  Controller,
  Get,
  Post,
	Delete,
	UseGuards,
	Param,
	Body
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Roles } from '../roles/roles.decorator';
import { RolesGuard } from '../roles/roles.guard';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('/brands')
export class BrandController {
  constructor(private brandService: BrandService) {}

	@Roles('ADMIN')
	@UseGuards(RolesGuard)
  @Post('/')
  create(@Body() dto: CreateBrandDto) {
    return this.brandService.create(dto);
  }

  @Get('/')
  getAll() {
    return this.brandService.getAll();
  }

	@Roles('ADMIN')
	@UseGuards(RolesGuard)
  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.brandService.delete(id);
  }
}
