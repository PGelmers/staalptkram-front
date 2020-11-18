export class User {

  id: number;
  firstName: string;
  surname: string;
  email: string;
  telephone: string;
  latitude: number;
  longitude: number;
  registration: string;

  public myString(): string {
    return 'User{' +
      '\tfirstName=' + this.firstName + '\n' +
      ',\tsurname=' + this.surname + '\n' +
      ',\temail=' + this.email + '\n' +
      ',\ttelephone=' + this.telephone + '\n' +
      ',\tlatitude=' + this.latitude + '\n' +
      ',\tlongitude=' + this.longitude + '\n' +
      ',\tregistration=' + this.registration + '\n' +
      '}';
  }


}
