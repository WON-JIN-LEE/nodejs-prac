import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoardDocument = Board & Document;

@Schema()
export class Board {
    @Prop()
    userId: string;

    @Prop()
    title: string;

    @Prop()
    imgUrl: string;

    @Prop()
    contents: string;

    @Prop()
    stech: string[];

    @Prop()
    period: number;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
