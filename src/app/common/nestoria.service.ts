import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, tap }  from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IOffer } from './interfaces/offer';

@Injectable()
export class NestoriaService {
  isShowMore:boolean = true;
  // Тут хранятся все предожения
  offers:Observable<IOffer[]>
  // Наша карзина выбранных товаров
  basket:IOffer[] = [];
  // Задаем начальное состояние
  searchData = {
    page: 1,
    country: 'uk',
    text: 'london',
  }

  constructor( private http: HttpClient ) { }

  save() {
    localStorage.setItem("basket", JSON.stringify(this.basket));
  }

  // Добавляет в сохраненки
  addOffer(offer:IOffer){
    this.basket = this.loadFromBasket() || [];
    this.basket.push(offer);
    localStorage.setItem("basket", JSON.stringify(this.basket));
  }

  // Загружает из LS
  loadFromBasket() {
    if (!localStorage.getItem("basket")) {
      localStorage.setItem("basket", JSON.stringify(""));
    }
    return JSON.parse(localStorage.getItem("basket"));
  }

  getIndex(url:string):number {
    return this.basket.map(item => {
      return item.lister_url;
      }).indexOf(url);
  }

  checkOffer({lister_url}) {
    return this.getIndex(lister_url) > 0 ? true : false;
  }

  deleteOffer(url:string) {
    const index = this.getIndex(url);
    this.basket.splice(index, 1);
    this.save();
    return this.basket;
  }

  getOffers(obj = this.searchData):any {
    const {page, text, country} = obj;
    let url:string;
    if (country === "uk") {
      url = `https://api.nestoria.co.uk/api?encoding=json&pretty=1&page=${page}&action=search_listings&country=uk&listing_type=buy&place_name=${text}`;
    }
    if (country === "br") {
      url = `https://api.nestoria.com.br/api?encoding=json&pretty=1&page=${page}&action=search_listings&country=br&listing_type=buy&place_name=${text}`;
    }
    if (country === "fr") {
      url = `https://api.nestoria.fr/api?encoding=json&pretty=1&page=${page}&action=search_listings&country=fr&listing_type=buy&place_name=${text}`;
    }

    this.offers = this.http.jsonp(url, 'callback').pipe(
      pluck('response'),
      pluck('listings'),
      tap((items:IOffer[]) => {
        return items.map(item => {
          return {
            img_url: item.img_url,
            lister_url: item.lister_url,
            summary: item.summary,
            price_formatted: item.price_formatted,
            title: item.title,
            keywords: item.keywords,
            bathroom_number: item.bathroom_number,
            bedroom_number: item.bedroom_number,
          }
        });
      }),
    )
  }
}
