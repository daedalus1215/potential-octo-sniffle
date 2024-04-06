import { Module } from '@nestjs/common';
import { SurveyController } from './survey-controller/survey.controller';
import { SurveyService } from './services/survey.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Survey, SurveySchema } from './entity/survey.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Survey.name, schema: SurveySchema}])],
    controllers: [SurveyController],
    providers: [SurveyService],
})
export class SurveysModule { }
