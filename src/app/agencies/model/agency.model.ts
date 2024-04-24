export class Agency{
  id?: string;
  name: string;
  addres: string;
  creationDate?: Date;

  constructor(name: string, address: string){
    this.name = name;
    this.addres = address;
  }

  
}
