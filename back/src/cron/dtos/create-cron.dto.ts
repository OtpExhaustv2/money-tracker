import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCronDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  cron: string;
}
