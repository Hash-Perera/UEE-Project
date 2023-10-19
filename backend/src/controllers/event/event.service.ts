import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/CreateEvent.dto';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event.name) private EventModel: Model<Event>) {}

  async create(dto: CreateEventDto) {
    const newevent = new this.EventModel(dto);
    await newevent.save();
    return newevent;
  }

  async findAll() {
    return await this.EventModel.find();
  }

  async findOne(id: string) {
    return await this.EventModel.findById(id);
  }

  async delete(id: string) {
    return await this.EventModel.findByIdAndDelete(id);
  }

  async update(id: string, dto: CreateEventDto) {
    return await this.EventModel.findByIdAndUpdate(id, dto);
  }
}
