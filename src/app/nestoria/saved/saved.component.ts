import { Component, DoCheck } from '@angular/core';

import { IOffer } from '../../common/interfaces/offer';
import { NestoriaService } from '../../common/nestoria.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
  providers: [NestoriaService]
})
export class SavedComponent implements DoCheck {
  offers:IOffer[];

  constructor(private nestoriaService: NestoriaService) { }

  deleteOffer(url:string){
    this.offers = this.nestoriaService.deleteOffer(url);
  }

  ngDoCheck() {
    this.nestoriaService.basket = this.nestoriaService.loadFromBasket();
    this.offers = this.nestoriaService.loadFromBasket();
  }
}
