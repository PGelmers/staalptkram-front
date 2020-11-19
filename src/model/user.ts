export class User {

  id: number;
  firstName: string;
  surname: string;
  email: string;
  telephone: string;
  latitude: number;
  longitude: number;
  straatnaam: string;
  huisnummer: string;
  plaatsnaam: string;
  registration: string;

  public myString(): string {
    return 'User{' +
      '\tfirstName=' + this.firstName + '\n' +
      ',\tsurname=' + this.surname + '\n' +
      ',\temail=' + this.email + '\n' +
      ',\ttelephone=' + this.telephone + '\n' +
      ',\tlatitude=' + this.latitude + '\n' +
      ',\tlongitude=' + this.longitude + '\n' +
      ',\tstraatnaam=' + this.straatnaam + '\n' +
      ',\thuisnummer=' + this.huisnummer + '\n' +
      ',\tplaatsnaam=' + this.plaatsnaam + '\n' +
      ',\tregistration=' + this.registration + '\n' +
      '}';
  }


}
