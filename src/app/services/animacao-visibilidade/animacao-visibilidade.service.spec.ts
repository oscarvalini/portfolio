import { TestBed } from '@angular/core/testing';

import { AnimacaoVisibilidadeService } from './animacao-visibilidade.service';

describe('AnimacaoVisibilidadeService', () => {
  let service: AnimacaoVisibilidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimacaoVisibilidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
