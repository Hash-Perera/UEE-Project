import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type EventDocument = Document<Event>;

@Schema()
export class Event {
  @Prop()
  eventName: string;

  @Prop()
  date: string;

  @Prop()
  eventType: string;

  @Prop({ type: [{ type: Object }] })
  location: Record<string, any>;

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  createUser: Types.ObjectId;
}

export const EventSchema = SchemaFactory.createForClass(Event);
