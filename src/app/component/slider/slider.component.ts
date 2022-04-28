import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
    // images = ['../../../assets/image/chantierSongon.jpg', '../../../assets/image/chantierAthena.png', '../../../assets/image/chantierAngre.jpg'];
    //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    images: any = [{
            name: 'SONGON 1 et SONGON 2',
            image: '../../../assets/image/vente-machine-agglos-guira.png'
        },
        {
            name: 'GTM ANGRE',
          image: '../../../assets/image/vente-sable-brique-gravier-200dpi.png'
        },
        {
            name: 'GTM ATHENA 12',
          image: '../../../assets/image/couvert.jpg'
        }
    ]

        constructor(config: NgbCarouselConfig) {
        config.interval = 3000;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = true;
    }

        ngOnInit(): void {



    }

}
