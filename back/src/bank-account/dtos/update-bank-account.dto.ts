import {
  IsBoolean,
  IsIBAN,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateBankAccountDto {
  @IsIBAN()
  @IsOptional()
  iban: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  balance: number;

  @IsBoolean()
  @IsOptional()
  isFavorite: boolean;
}
