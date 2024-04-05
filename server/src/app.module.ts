import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodoCategory, TodoCategorySchema } from './todo/entity/todo-category.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveysModule } from './surveys/surveys.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test'),
    MongooseModule.forFeature([{name: TodoCategory.name, schema: TodoCategorySchema}]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TodoModule,
    SurveysModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
