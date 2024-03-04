import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { UserDetailsMasterService } from './user_details_master.service';
import { CreateUserDetailsMasterDto } from './dto/create-user_details_master.dto';
import { UpdateUserDetailsMasterDto } from './dto/update-user_details_master.dto';
import { DetailsInterceptor } from 'src/interceptor/details.interceptor';

@Controller('userdetail')
export class UserDetailsMasterController {

  constructor(private readonly userDetailsMasterService: UserDetailsMasterService) {}

  @Get()
  findAll() {
    return this.userDetailsMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDetailsMasterService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDetailsMasterDto: CreateUserDetailsMasterDto) {
    return this.userDetailsMasterService.create(createUserDetailsMasterDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDetailsMasterDto: UpdateUserDetailsMasterDto) {
    return this.userDetailsMasterService.update(+id, updateUserDetailsMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDetailsMasterService.remove(+id);
  }
}
