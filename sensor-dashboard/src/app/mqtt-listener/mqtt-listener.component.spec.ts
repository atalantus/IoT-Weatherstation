import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttListenerComponent } from './mqtt-listener.component';

describe('MqttListenerComponent', () => {
  let component: MqttListenerComponent;
  let fixture: ComponentFixture<MqttListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MqttListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MqttListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
