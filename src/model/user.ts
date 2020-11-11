export class User {

  id: number;
  firstName: string;
  surname: string;
  email: string;
  telephone: string;
  registration: string;

  toString(): string {
    return 'User{' +
      'firstName=' + this.firstName + '\n' +
      ', surname=' + this.surname + '\n' +
      ', email=' + this.email + '\n' +
      ', telephone=' + this.telephone + '\n' +
      ', registration=' + this.registration +
      '}';
}


}
