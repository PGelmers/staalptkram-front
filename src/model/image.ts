export class Image {

  id: number;
  name: string;
  type: string;
  picByte: any;

  // private Long id;
  // // Deze ID dan opslaan in het Item object
  //
  // @Column(name="name")
  // private String name;
  // // Dit eventueel veranderen naar een unieke random code
  //
  // @Column(name="type")
  // private String type;
  //
  // //image bytes can have large lengths so we specify a value which is more than the default length for picByte column
  // //More or less length = 40.000 for an image of 40kB
  // @Lob()
  // @Column(name = "picByte", columnDefinition = "BLOB", length = 10_000_000)
  // private byte[] picByte;

}
