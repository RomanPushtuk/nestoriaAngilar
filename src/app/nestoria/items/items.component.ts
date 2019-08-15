import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, DoCheck, OnInit } from '@angular/core';

import { NestoriaService } from '../../common/nestoria.service';
import { IOffer } from '../../common/interfaces/offer';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit, DoCheck {
  offers:Observable<IOffer[]>;
  isShowMore:boolean;

  constructor(
    private nestoriaService: NestoriaService,
    private router: Router,
  ) { }

  showMore(offer:IOffer) {
    this.router.navigate(['modal', offer]);
  }

  ngOnInit() {
    this.isShowMore = this.nestoriaService.isShowMore;
  }

  ngDoCheck() {
    this.offers = this.nestoriaService.offers;
    this.isShowMore = this.nestoriaService.isShowMore;
  }

}
