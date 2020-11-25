import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFactoryComponent } from './pet-factory.component';

describe('PetFactoryComponent', () => {
  let component: PetFactoryComponent;
  let fixture: ComponentFixture<PetFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
