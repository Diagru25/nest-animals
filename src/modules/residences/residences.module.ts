import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ResidencesController } from './residences.controller';
import { ResidencesService } from './residences.service';
import { ResidenceSchema, Residence } from '../database/schema/residence.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Residence.name, schema: ResidenceSchema}])],
    controllers: [ResidencesController],
    providers: [ResidencesService],
})
export class ResidencesModule {}
