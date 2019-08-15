import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestoriaComponent } from './nestoria.component';

describe('NestoriaComponent', () => {
  let component: NestoriaComponent;
  let fixture: ComponentFixture<NestoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
