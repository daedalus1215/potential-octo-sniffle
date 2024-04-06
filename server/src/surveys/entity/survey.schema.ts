import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type SurveyDocument = Survey & Document;

@Schema()
export class Survey {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    rating: string;
}


export const SurveySchema = SchemaFactory.createForClass(Survey);
