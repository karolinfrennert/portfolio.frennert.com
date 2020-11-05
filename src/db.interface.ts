export interface Data {

  firstName: string;
  lastName: string;
  email: string;
  fullName: string;
  project: [{
    name: string;
    technology: [string: any];
    description: string;
    github: string;
    picture: string;
  }];



}