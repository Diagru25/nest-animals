import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Residence } from './residence.schema';

export type AnimalDocument = Animal & Document;

@Schema()
export class Animal {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  age: number;

  @Prop()
  health: string;

  @Prop({type: Types.ObjectId, ref: Residence.name})
  residence_id: Types.ObjectId;

  @Prop()
  isWild: boolean;

  @Prop()
  imageURL: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
