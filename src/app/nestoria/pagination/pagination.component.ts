import { Component, ChangeDetectorRef } from '@angular/core';

import { NestoriaService } from '../../common/nestoria.service';
import { IOffer } from '../../common/interfaces/offer';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  numberPage: number = 1;
  navigationClass:boolean = true;
  showMoreClass:boolean = false;
  offers:IOffer[];
  changeShowMore:boolean;
  constructor(private nestoriaService: NestoriaService, public cd: ChangeDetectorRef) { }

  showMore() {
    this.navigationClass = false;
    this.showMoreClass = true;
    this.nestoriaService.isShowMore = false;
  }

  previousPage() {
    if (this.numberPage > 1) {
      this.numberPage -= 1;
      this.nestoriaService.searchData.page = this.numberPage;
      this.nestoriaService.getOffers();
    }
  }

  nextPage() {
    this.numberPage += 1;
    this.nestoriaService.searchData.page = this.numberPage;
    this.nestoriaService.getOffers();
  }

}
