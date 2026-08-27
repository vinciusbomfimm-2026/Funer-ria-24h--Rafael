import { IsBoolean, IsEnum, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { CanalContato } from '../../../generated/prisma/enums.js';

export class CreateContatoDto {
  @IsString()
  @MinLength(2)
  @MaxLength(150)
  nome!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(30)
  telefone!: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  mensagem?: string;

  @IsOptional()
  @IsEnum(CanalContato)
  canal?: CanalContato;

  @IsOptional()
  @IsBoolean()
  urgente?: boolean;
}
