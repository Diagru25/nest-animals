import { Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
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
        return await this.animalsService.update(id, data);
    }

    @Post(':id/upload')
    @UseInterceptors(FileInterceptor('file',
    {
        storage: diskStorage({
            destination: './images',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random()*16)).toString(16)).join('');
                //console.log(file.originalname);
                // const hashCode = (s) =>
                //   s.split('').reduce((a, b) => {
                //     a = (a << 5) - a + b.charCodeAt(0);
                //     return a & a;
                //   }, 0);
                // console.log(hashCode(file.originalname));
                return cb(null, `${extname(file.originalname)}`);
            }
        })
    }))
    async upload(@Param('id') id: string, @UploadedFile() file) {
        //console.log(file.filename);
        return this.animalsService.upload(id, file.filename);
    }

    @Get('/images/:fileName')
    async getImage(@Param('id') id, @Param('fileName') filename, @Res() res) {
        //return `id: ${id}, file: ${filename}`;
        res.sendFile(filename, { root: 'images' });
    }
}
