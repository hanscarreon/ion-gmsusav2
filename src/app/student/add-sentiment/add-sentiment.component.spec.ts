import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSentimentComponent } from './add-sentiment.component';

describe('AddSentimentComponent', () => {
  let component: AddSentimentComponent;
  let fixture: ComponentFixture<AddSentimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSentimentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
