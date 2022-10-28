import { TestBed } from '@angular/core/testing';

import { TodosDadosService } from './todos-dados.service';

describe('TodosDadosService', () => {
  let service: TodosDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
