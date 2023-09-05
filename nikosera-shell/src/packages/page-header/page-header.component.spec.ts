import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpasPageHeaderComponent } from './page-header.component';

describe('XpasPageHeaderComponent', () => {
    let component: XpasPageHeaderComponent;
    let fixture: ComponentFixture<XpasPageHeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [XpasPageHeaderComponent]
        });
        fixture = TestBed.createComponent(XpasPageHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
