import { IsArray, IsEmail, IsNotEmpty } from 'class-validator';

export class createBoardDto {
    @IsEmail()
    userId: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    imgUrl: string;

    @IsNotEmpty()
    contents: string;

    @IsArray()
    stech: string[];

    @IsNotEmpty()
    period: Date;
}
