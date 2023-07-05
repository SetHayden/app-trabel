import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAsientosComponent } from './registrar-asientos.component';

describe('RegistrarAsientosComponent', () => {
  let component: RegistrarAsientosComponent;
  let fixture: ComponentFixture<RegistrarAsientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAsientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAsientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
