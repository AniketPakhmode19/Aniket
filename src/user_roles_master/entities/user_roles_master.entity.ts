import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class UserRolesMaster {

  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({ nullable: false })
  role_name: string;
 
  @Column({ nullable: false })
  role_description: string;
 
  @Column()
  crtupddate: String;
  
}