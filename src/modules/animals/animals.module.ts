import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { AnimalSchema, Animal } from '../database/schema/animal.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Animal.name, schema: AnimalSchema}])],
    controllers: [AnimalsController],
    providers: [AnimalsService],
})
export class AnimalsModule {}
