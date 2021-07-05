import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
