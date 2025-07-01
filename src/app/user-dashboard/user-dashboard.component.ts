import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../core/services/vehicle.service';
import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles() {
    this.vehicleService.getAll().subscribe({
      next: data => this.vehicles = data,
      error: err => console.error('Error fetching vehicles:', err)
    });
  }
}
