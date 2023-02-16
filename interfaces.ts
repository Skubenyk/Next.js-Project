export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  address: IAddress;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface ISocial {
  id: number;
  icon: string;
  path: string;
}
