export interface Product {

  id?:number;
  name?:string;
  description?:string;
  photoName?:string;
  available?:string;
  _links:{
    self:{
      href:string;
    },
    product:{
      href:string;
    },
    categorie:{
      href:string;
    }
  }


}
