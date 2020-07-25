import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContinentPage } from './continent.page';

describe('ContinentPage', () => {
  let component: ContinentPage;
  let fixture: ComponentFixture<ContinentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContinentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
