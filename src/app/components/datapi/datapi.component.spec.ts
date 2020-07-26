import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatapiComponent } from './datapi.component';

describe('DatapiComponent', () => {
  let component: DatapiComponent;
  let fixture: ComponentFixture<DatapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
