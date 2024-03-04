import { Module } from '@nestjs/common';
import { UserDetailsMasterService } from './user_details_master.service';
import { UserDetailsMasterController } from './user_details_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetailsMaster } from './entities/user_details_master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserDetailsMaster])],
  controllers: [UserDetailsMasterController],
  providers: [UserDetailsMasterService],
})
export class UserDetailsMasterModule {}
