import { TestBed } from '@angular/core/testing';

import { NestoriaService } from './nestoria.service';

describe('NestoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NestoriaService = TestBed.get(NestoriaService);
    expect(service).toBeTruthy();
  });
});
