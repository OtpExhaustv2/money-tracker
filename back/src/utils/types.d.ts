import { User } from '@prisma/client';

export type AuthenticatedRequest = Request & { user: User };

export type ValidateUserDetails = {
  username: string;
  password: string;
};

export type CreateUserDetails = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
