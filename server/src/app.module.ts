import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { TextModule } from './text/text.module';

@Module({
  controllers: [AppController],
  imports: [
              MongooseModule.forRoot('mongodb+srv://AlexCool:Marshmallow364@cluster0.odjth5f.mongodb.net/test?retryWrites=true&w=majority'),
              TextModule
          ],
  providers: [AppService]

})
export class AppModule {}
