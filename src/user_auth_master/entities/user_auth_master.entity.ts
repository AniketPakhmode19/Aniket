import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserDetailsMaster } from 'src/user_details_master/entities/user_details_master.entity';

@Entity() export class UserAuthMaster {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserDetailsMaster)
  @JoinColumn({name:'id'})
  UserDetailsMaster: UserDetailsMaster;

  @Column({ nullable: false })
  user_password: string;

  @Column({ nullable: false })
  user_changepass: number;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  crtdate: Date;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  upddate: Date;


  
}
