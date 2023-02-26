import { IClient } from '../../../entities/users/client';
import { IEmployee } from '../../../entities/users/employee';
import { mockUserBlocking } from '../mocks/usersMock';

mockUserBlocking();

export interface IUsersRepository {
  blockUser: (id: string) => Promise<IClient | IEmployee>
}
