import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ResidenceDocument = Residence & Document;

@Schema()
export class Residence {
    @Prop()
    name: string;

    @Prop()
    description: string;
}

export const ResidenceSchema = SchemaFactory.createForClass(Residence);