import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserAuthMasterDto {
  
  @IsNotEmpty()
  @IsString()
  readonly user_password: string;

  @IsNotEmpty()
  @IsNumber()
  readonly user_changepass: number;

  readonly crtdate?: Date;
  
  readonly upddate?: Date;
}
