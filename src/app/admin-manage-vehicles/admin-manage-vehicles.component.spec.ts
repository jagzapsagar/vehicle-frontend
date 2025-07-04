import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageVehiclesComponent } from './admin-manage-vehicles.component';

describe('AdminManageVehiclesComponent', () => {
  let component: AdminManageVehiclesComponent;
  let fixture: ComponentFixture<AdminManageVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminManageVehiclesComponent]
    });
    fixture = TestBed.createComponent(AdminManageVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
