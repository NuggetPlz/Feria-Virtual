import { TestBed } from '@angular/core/testing';

import { ServicioService } from './servicio.service';
//import { ServicioInsertService} from './servicio.service';

describe('ServicioService', () => {
  let service: ServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
/*
describe('ServicioInsertService', () => {
  let service: ServicioInsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioInsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
*/