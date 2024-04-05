import { Expose } from "class-transformer";

export class CreateTodoCategoryDto {
    @Expose()
    name: string;

    @Expose()
    rating: string;
}