import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  feedback: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  eventId: string;

  @IsOptional()
  createUser: string;
}
