import { Controller, Get, Put,Delete,Post, Body,Param } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateTextDto } from './create-text.dto';
import { TextService } from './text.service';
import { UpdateTextDto } from './update-text.dto';

@Controller('/text')
export class TextController{
    constructor(
        private readonly textService:TextService
        ){}

    @Post()
    create(@Body() dto:CreateTextDto){
        return this.textService.create(dto)
    }
    @Get()
    getText(){
        return this.textService.getAll()
    }
    @Put(':id')
    update(@Param('id') id:ObjectId, @Body() data:UpdateTextDto){
        return this.textService.update(id,data)
    }
    @Delete(':id')
    delete(@Param('id') id:ObjectId){
        return this.textService.delete(id)
    }
}