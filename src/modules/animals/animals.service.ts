import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Animal, AnimalDocument } from '../database/schema/animal.schema';

let ObjectId = Types.ObjectId;
@Injectable()
export class AnimalsService {
    constructor(@InjectModel(Animal.name) private animalModel: Model<AnimalDocument>) {}

    async findAll(): Promise<Animal[]> {
        return this.animalModel.find().exec();
    }

    async findOne(id: string): Promise<Animal> {
        return this.animalModel.findOne({_id: id}).exec();
    }

    async create(data: Animal): Promise<Animal> {
        const temp = {...data, residence_id: new ObjectId(data.residence_id)}
        const entity = await this.animalModel.create(temp);
        return entity;
    }

    async remove(id: string): Promise<any> {
        return this.animalModel.deleteOne({_id: id}).exec();
    }

    async update(id: string, data: Animal): Promise<any> {
        const entity = await this.animalModel.findOneAndUpdate({_id: id}, {...data, residence_id: new ObjectId(data.residence_id)}, {new: true});
        return entity;
    }

    async upload(id: string, imageURL: string): Promise<any> {
        return this.animalModel.findOneAndUpdate({_id: id}, {imageURL: imageURL}, {new: true}).exec();
    }
}
