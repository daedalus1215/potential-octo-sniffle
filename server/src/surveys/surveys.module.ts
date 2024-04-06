import { Module } from '@nestjs/common';
import { SurveyController } from './survey-controller/survey.controller';

@Module({
    controllers: [SurveyController]
})
export class SurveysModule { }
