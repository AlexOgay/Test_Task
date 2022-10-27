import { Injectable } from "@nestjs/common";
import {InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { EMPTY } from "rxjs";
import { CreateTextDto } from "./create-text.dto";
import { TextDocument,Text } from "./text.schema";
import { UpdateTextDto } from "./update-text.dto";

@Injectable()
export class TextService{
    constructor(@InjectModel(Text.name) private textmodel: Model<TextDocument>) {}
    async create(dto:CreateTextDto): Promise<Text> {
        
        try{
            console.log("addserv")
            return await this.textmodel.create({...dto})}
        catch(ex){
            console.log(ex.Text)
            return ex.Text
        }
        ;
    }
    async getAll():Promise<Text[]>{
        const texts=await this.textmodel.find()
        console.log("readserv")
        return texts
    }
    async update(id: ObjectId, data:UpdateTextDto) : Promise<Text>{
        const text=await this.textmodel.findByIdAndUpdate(id,data)
        return text
    }
    async delete(id: ObjectId):Promise<ObjectId>{
        const text=await this.textmodel.findByIdAndDelete(id)
        return text._id
    }
}