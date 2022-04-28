import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcueilService {

  public subject=new Subject<any[]>();

   entreprises:any=[
    {
      id:1,
      titre:'Gtm Angré',
      photo:'../../../assets/image/chantierAngre.jpg',
      commentaire:'Situé à Angré Après le Châteaux (derrière le terrain militaire), c\'est l\'un des principaux lieux de fabrication de pavé, Brique, Banc de jardin...',
    nomGerant:'Guira Dramane',
    profit:'../../../assets/image/2.png'
    },
    {
      id:1,
      titre:'Gtm Athéna 12',
      photo:'../../../assets/image/chantierAngre.jpg',
      commentaire:'Situé à Bingerville derrière l’école militaire EMPT plus précisement à',
      nomGerant:'Guira Dramane',
      profit:'../../../assets/image/2.png'
    },
    {
      id:1,
      titre:'Songon 1 &amp;Songon 2',
      photo:'../../../assets/image/chantierAngre.jpg',
      commentaire:'Nous disposons de deux (2) chantiers de production et vente dans la localité de songon.',
      nomGerant:'Guira Dramane',
      profit:'../../../assets/image/2.png'
    }
  ]

  partenaires:any=[
    {
      id:1,
      nom:'Promogim',
      image:'../../../assets/image/promogim.jpg'
    },
    {
      id:2,
      nom:'CIFTE',
      image:'../../../assets/image/ciftelogo.png'
    },
    {
      id:3,
      nom:'GEDF',
      image:'../../../assets/image/gedf.png'
    },
    {
      id:4,
      nom:'INTERBAT',
      image:'../../../assets/image/interbat.png'
    },
    {
      id:5,
      nom: 'INTERBAT',
      image: '../../../assets/image/interbat.png'
    }
  ]

  partenaire2=[
    {
      nom:'ETS GUIRA',
      content:'ETABLISSEMENTS GUIRA rassemble les activités de vente et de fabrication artisanale et industrielle de Hourdis, Pavets,Bordures… ETS GUIRA représente les chantiers de fabrication et de livraison de briques, ciments, Sable, Gravier… Et Livraison sur l’ensemble du territoire Ivoirien.',
      photo:'../../../assets/image/Brique_manuel.jpg'
    },
    {
      nom:'GTM',
      content:'GUIRA TRADING & MANAGEMENT Centré sur les échanges divers, l’accompagnement et management de services avec des partenaires d’ici et d’ailleurs, GTM est un partenaire crédible pour dans vos échanges B2B aussi bien dans les domaines de TP, Equipement, Bâtiment et Divres.',
      photo:'../../../assets/image/machineparpin.jpg'
    },
    {
      nom:'ETTC',
      content:'ENTREPRISE DE TRAVAUX DE CONSTRUCTION ET DE COMMERCE. Crée pour l’accompagnement des particuliers et professionnels de la construction de logement à caractère social et de standing. Apte à satisfaire les besoins des clients sur la fourniture des matériaux de qualité',
      photo:'../../../assets/image/conteneur.jpg'
    }

  ]

  constructor() { }


}
