import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpasShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: XpasShellComponent;
  let fixture: ComponentFixture<XpasShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [XpasShellComponent]
    });
    fixture = TestBed.createComponent(XpasShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
