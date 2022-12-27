import {
  IsBoolean,
  IsIBAN,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBankAccountDto {
  @IsIBAN()
  @IsNotEmpty()
  iban: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  balance: number;

  @IsBoolean()
  @IsOptional()
  isFavorite: boolean;
}
