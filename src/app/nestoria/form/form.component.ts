import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NestoriaService } from '../../common/nestoria.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  countrySeach: FormControl;
  textSeach: FormControl;

  constructor( private nestoriaService: NestoriaService ) { }

  searchOffers() {
    const obj = {
      page: 1,
      text: this.textSeach.value,
      country: this.countrySeach.value,
    }
    this.nestoriaService.getOffers(obj)
  }

  ngOnInit() {
    this.countrySeach = new FormControl("uk");
    this.textSeach = new FormControl("london");
  }

}
