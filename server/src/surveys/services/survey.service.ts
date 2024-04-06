import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Survey, SurveyDocument } from "../entity/survey.schema";
import { Model } from "mongoose";
import { AddSurveyDto } from "../dtos/add-survey.dto";

@Injectable()
export class SurveyService {
    constructor(@InjectModel(Survey.name) private model: Model<SurveyDocument>) { }

    async findAll() {
        return await this.model.find();
    }

    async create(dto: AddSurveyDto): Promise<Survey> {
        const survey = await this.model.create((dto))
        return await survey.save();
    }
}