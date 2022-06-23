import { Document } from 'mongoose';

export interface Board extends Document {
    id: string;
    title: string;
    status: BoardStatus;
    userId: string;
    imgUrl: string;
    contents: string;
    stech: string[];
    period: Date;
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}
