import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal, AnimalDocument } from '../database/schema/animal.schema';

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
        var entity = await this.animalModel.create(data);
        return entity;
    }

    async remove(id: string): Promise<any> {
        return this.animalModel.deleteOne({_id: id}).exec();
    }

    async update(id: string, data: Animal): Promise<any> {
        return await this.animalModel.updateOne({_id: id}, {name: data.name, type: data.type, age: data.age, health: data.health}).exec();
    }
}
