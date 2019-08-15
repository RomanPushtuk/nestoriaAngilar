import { Component, OnInit } from '@angular/core';

import { NestoriaService } from '../common/nestoria.service'

@Component({
  selector: 'app-nestoria',
  templateUrl: './nestoria.component.html',
  styleUrls: ['./nestoria.component.scss']
})
export class NestoriaComponent implements OnInit {
  constructor(private nestoriaService: NestoriaService) {  }

  ngOnInit() {
    this.nestoriaService.getOffers();
  }

}
