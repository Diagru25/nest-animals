import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Residence, ResidenceDocument } from '../database/schema/residence.schema';

@Injectable()
export class ResidencesService {
    constructor(@InjectModel(Residence.name) private residenceModel: Model<ResidenceDocument>){}

    async findAll(): Promise<Residence[]> {
        return this.residenceModel.find().exec();
    }

    async create(data: Residence): Promise<Residence> {
        const newEntity = new this.residenceModel(data);
        newEntity.save();
        return newEntity;
    }
}
