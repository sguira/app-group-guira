import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProduitService {



    produits = [

        {

            id: 1,
            nom: 'MACHINE',
            photo: '../../assets/image/maxx.jpg',
            elements: [{
                    titre: 'materiaux de construction',
                    nom: 'MG11',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine11.jpeg'
                        },
                        {
                            id: 2,
                            url: '../../assets/image/machine12.jpg'
                        },
                        {
                            id: 3,
                            url: '../../assets/image/machine13.jpg'
                        },
                    ]
                },
                {
                    titre: 'materiaux de construction',
                    nom: 'MATERIAUX',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine21.jpg'
                        },
                        {
                            id: 2,
                            url: '../../assets/image/machine22.jpg'
                        }
                    ]
                },
                {
                    titre: 'materiaux de construction',
                    nom: 'MG1.3',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine21.jpg'
                        },
                        {
                            id: 2,
                            url: '../../assets/image/machine22.jpg'
                        }
                    ]
                }


            ]
        },
        {
            id: 2,
            nom: 'MATERIAUX',
            photo: '../../assets/image/materiaux.png',
            elements: [{
                    titre: 'materiaux de construction',
                    nom: 'MG11',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine11.jpeg'
                        },
                        {
                            id: 2,
                            url: '../../assets/image/machine12.jpg'
                        },
                        {
                            id: 3,
                            url: '../../assets/image/machine13.jpg'
                        },
                    ]
                },
                {
                    titre: 'materiaux de construction',
                    nom: 'MATERIAUX',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine21.jpg'
                        },
                        {
                            id: 2,
                            url: '../../assets/image/machine22.jpg'
                        }
                    ]
                },
                {
                    titre: 'materiaux de construction',
                    nom: 'MG1.3',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine21.jpg'
                        },
                        {
                            id: 2,
                            url: '../../assets/image/machine22.jpg'
                        }
                    ]
                }


            ]
        },
        {
            id: 3,
            nom: 'DIVERS',
            photo: '../../assets/image/machine1.jpeg',
            elements: [{
                    titre: 'materiaux de construction',
                    nom: 'MG11',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine11.jpeg'
                        },
                        {
                            id: 2,
                            url: '../../assets/image/machine12.jpg'
                        },
                        {
                            id: 3,
                            url: '../../assets/image/machine13.jpg'
                        },
                    ]
                },
                {
                    titre: 'materiaux de construction',
                    nom: 'MATERIAUX',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine21.jpg'
                        },
                        {
                            id: 2,
                            url: '../../../assets/image/machine22.jpg'
                        }
                    ]
                },
                {
                    titre: 'materiaux de construction',
                    nom: 'MG1.3',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine21.jpg'
                        },
                        {
                            id: 2,
                            url: '../../assets/image/machine22.jpg'
                        }
                    ]
                }


            ]
        },
        {
            id: 4,
            nom: 'MATERIAUX',
            photo: '../../assets/image/machine1.jpeg',
            elements: [{
                    titre: 'materiaux de construction',
                    nom: 'MG11',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine11.jpeg'
                        },
                        {
                            id: 2,
                            url: '../../assets/image/machine12.jpg'
                        },
                        {
                            id: 3,
                            url: '../../assets/image/machine13.jpg'
                        },
                    ]
                },
                {
                    titre: 'materiaux de construction',
                    nom: 'MATERIAUX',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine21.jpg'
                        },
                        {
                            id: 2,
                            url: '../../assets/image/machine22.jpg'
                        }
                    ]
                },
                {
                    titre: 'materiaux de construction',
                    nom: 'MG1.3',
                    photo: [{
                            id: 1,
                            url: '../../assets/image/machine21.jpg'
                        },
                        {
                            id: 2,
                            url: '../../assets/image/machine22.jpg'
                        }
                    ]
                }


            ]
        },




    ]

    constructor() {}

    getProduitById(id) {
        this.produits.forEach(produit => {
            if (produit.id == id) {
                return this.produits[id];
            }
        });
    }

}