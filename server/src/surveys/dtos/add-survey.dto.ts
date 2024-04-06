import { Expose } from "class-transformer";

export class AddSurveyDto {
    @Expose()
    name: string;

    @Expose()
    rating: string;
}