import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretorFormsComponent } from './corretor-forms.component';

describe('CorretorFormsComponent', () => {
  let component: CorretorFormsComponent;
  let fixture: ComponentFixture<CorretorFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorretorFormsComponent]
    });
    fixture = TestBed.createComponent(CorretorFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
