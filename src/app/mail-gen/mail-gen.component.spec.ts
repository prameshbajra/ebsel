import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailGenComponent } from './mail-gen.component';

describe('MailGenComponent', () => {
  let component: MailGenComponent;
  let fixture: ComponentFixture<MailGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
