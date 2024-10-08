import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { IsCNPJ } from '../../utils/cnpj.decorator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsCNPJ()
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class UpdateCompanyDto extends CreateCompanyDto {}
