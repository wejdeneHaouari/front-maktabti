export class User {
  id: number;
  username: string;
  name: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string; // i don't need this anymore
  role: string;
  email: string;
  address: string;
  city?: string;
  codePostal?: string;
  numTel?: string;
  address2?: string;
  country?: string;
}
