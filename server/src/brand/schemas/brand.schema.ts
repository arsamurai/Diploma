import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BrandDocument = Brand & Document;

@Schema()
export class Brand {
  @Prop({ unique: true })
  name: string;

	@Prop({ unique: true })
	value: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
