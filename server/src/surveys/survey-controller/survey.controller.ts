import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddSurveyDto } from '../dtos/add-survey.dto';

@Controller('surveys')
export class SurveyController {

    @Post()
    addSurvey(@Body() body: AddSurveyDto): AddSurveyDto {
        return body;
    }
}
