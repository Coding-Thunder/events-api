import { IsArray,IsDate,IsDateString,IsNotEmpty,IsString } from 'class-validator';

export class CreateEventDto {

    @IsString()
    @IsNotEmpty()
    eventName: string;

    @IsDateString()
    @IsNotEmpty()
    date: string;

    @IsString()
    @IsNotEmpty()
    time: string;

    @IsString()
    @IsNotEmpty()
    duration: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsArray()
    @IsNotEmpty()
    guests: [];

    @IsString()
    @IsNotEmpty()
    notification: string;

    @IsString()
    @IsNotEmpty()
    reminder: string;

    // @Prop({ required: true })
    // attachments: number;
}