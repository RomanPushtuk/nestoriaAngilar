import { ActivatedRoute } from '@angular/router';
import { Component, OnInit,  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IOffer } from '../../common/interfaces/offer'
import { NestoriaService } from '../../common/nestoria.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [NestoriaService],
})
export class ModalComponent implements OnInit, OnDestroy {
  subscribe:Subscription;
  offer:IOffer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private nestoriaService: NestoriaService,
  ) { }

  saveOffer(offer:IOffer) {
    this.nestoriaService.addOffer(offer);
  }

  ngOnInit() {
    this.subscribe = this.activatedRoute.params.subscribe((offer:IOffer) => {
      this.offer = offer;
    })
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
