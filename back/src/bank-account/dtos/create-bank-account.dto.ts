import {
  IsBoolean,
  IsIBAN,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsIBAN()
  @IsNotEmpty()
  iban: string;

  @IsNumber()
  @IsNotEmpty()
  balance: number;

  @IsBoolean()
  @IsOptional()
  isFavorite: boolean;
}
