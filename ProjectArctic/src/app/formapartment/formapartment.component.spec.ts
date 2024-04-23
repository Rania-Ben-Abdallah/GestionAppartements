import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormapartmentComponent } from './formapartment.component';
describe('FormapartmentComponent', () => {
  let component: FormapartmentComponent;
  let fixture: ComponentFixture<FormapartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormapartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormapartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
