export class User {

  id: number;
  firstName: string;
  surname: string;
  email: string;
  telephone: string;
  registration: string;

  public myString(): string {
    return 'User{' +
      '\tfirstName=' + this.firstName + '\n' +
      ',\tsurname=' + this.surname + '\n' +
      ',\temail=' + this.email + '\n' +
      ',\ttelephone=' + this.telephone + '\n' +
      ',\tregistration=' + this.registration + '\n' +
      '}';
  }


}
