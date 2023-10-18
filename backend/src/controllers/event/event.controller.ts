import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/CreateEvent.dto';

@Controller('event')
export class EventController {
  constructor(private EventService: EventService) {}

  @HttpCode(200)
  @Post('create')
  create(@Request() req, @Body() dto: CreateEventDto) {
    const userId = req.user.id;
    dto.createUser = userId;
    return this.EventService.create(dto);
  }

  @Get('all')
  findAll() {
    return this.EventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.EventService.findOne(id);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.EventService.delete(id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() dto: CreateEventDto) {
    return this.EventService.update(id, dto);
  }
}
