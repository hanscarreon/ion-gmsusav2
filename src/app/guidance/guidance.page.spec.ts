import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuidancePage } from './guidance.page';

describe('GuidancePage', () => {
  let component: GuidancePage;
  let fixture: ComponentFixture<GuidancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuidancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
