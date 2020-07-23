import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EachItemComponent } from './each-item.component';

describe('EachItemComponent', () => {
  let component: EachItemComponent;
  let fixture: ComponentFixture<EachItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EachItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
