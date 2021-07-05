import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Animal } from '../database/schema/animal.schema';
import { AnimalsService } from './animals.service';

@Controller('animals')
export class AnimalsController {
    constructor(private readonly animalsService: AnimalsService){}

    @Get()
    async findAll(): Promise<Animal[]>{
        return this.animalsService.findAll();
    }
    
    @Get('id')
    async findOne(@Param('id') id: string): Promise<Animal> {
        return this.animalsService.findOne(id);
    }

    @Post()
    async create(@Body() body: Animal): Promise<Animal> {
        return this.animalsService.create(body);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.animalsService.remove(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: Animal): Promise<any> {
        return this.animalsService.update(id, data);
    }
}
