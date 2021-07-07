import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResidencesService } from './residences.service';
import { Residence } from '../database/schema/residence.schema';

@Controller('residences')
export class ResidencesController {
    constructor(private readonly residencesService: ResidencesService) {}

    @Get()
    async findAll(): Promise<Residence[]> {
        return this.residencesService.findAll();
    }

    @Post()
    async create(@Body() data: Residence): Promise<Residence> {
        return this.residencesService.create(data);
    }
}
