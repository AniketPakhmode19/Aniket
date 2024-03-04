import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserRolesMaster } from 'src/user_roles_master/entities/user_roles_master.entity';

@Entity()
export class UserDetailsMaster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  login_id: string;

  @Column({ nullable: false })
  first_name: string;

  @Column({ nullable: false })
  dob: string;
  
  @ManyToOne(()=>UserRolesMaster)
  @JoinColumn({name:"user_role"})
  user_role: number;

  @Column({ nullable: false })
  last_name: string;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false })
  dp: string;

  @Column({ nullable: false })
  crt_src_ip: string;

  @Column({ nullable: false })
  upd_src_ip: string;

  @Column({ nullable: false })
  isactive: number;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  crtdate: Date;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  upddate: Date;

}
