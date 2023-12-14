import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventsDocument = HydratedDocument<Events>;

@Schema()
export class Events {
    @Prop({ required: true })
    eventName: string;

    @Prop({ required: true })
    date: string;

    @Prop({ required: true })
    time: string;

    @Prop({ required: true })
    duration: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    guests: [];

    @Prop({ required: true })
    notification: string;

    @Prop({ required: true })
    reminder: string;

    // @Prop({ required: true })
    // attachments: number;
}

export const EventsSchema = SchemaFactory.createForClass(Events);