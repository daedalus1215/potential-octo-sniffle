import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddSurveyDto } from '../dtos/add-survey.dto';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../entity/survey.schema';

@Controller('surveys')
export class SurveyController {
    constructor(private readonly surveyService: SurveyService) { }

    @Get()
    async getAllSurveys() {
        return await this.surveyService.findAll();
    }

    @Post()
    async addSurvey(@Body() body: AddSurveyDto): Promise<Survey> {
        return await this.surveyService.create(body);
    }
}
