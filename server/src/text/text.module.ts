import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TextController } from "./text.controller";
import { Text, TextSchema } from "./text.schema";
import { TextService } from "./text.service";

@Module({
    providers:[TextService],
    controllers:[TextController],
    imports:[MongooseModule.forFeature([{name:Text.name,schema:TextSchema}])]  
})
export class TextModule{}