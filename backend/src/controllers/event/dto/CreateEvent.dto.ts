import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  eventName: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  eventType: string;

  @IsNotEmpty()
  location: Record<string, any>;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  createUser: string;
}
