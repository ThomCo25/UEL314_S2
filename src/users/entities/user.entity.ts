import { Entity, Column, PrimaryGeneratedColumn, EntityRepository, Repository } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;
}

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}
