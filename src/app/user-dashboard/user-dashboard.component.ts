import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../core/services/vehicle.service';
import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  //vehicles: Vehicle[] = [];
  startDate: string = '';
  endDate: string = '';
  vehicles: any[] = [];
  today: string = '';

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    //this.loadVehicles();
    const now = new Date();
  this.today = now.toISOString().split('T')[0];
  }

  loadVehicles() {
    this.vehicleService.getAll().subscribe({
      next: data => this.vehicles = data,
      error: err => console.error('Error fetching vehicles:', err)
    });
  }

  onDateRangeChange(): void {
  if (this.startDate && this.endDate) {
    this.vehicleService.getAvailableVehiclesByDateRange(this.startDate, this.endDate).subscribe({
      next: (data) => this.vehicles = data,
      error: (err) => console.error('Error fetching vehicles:', err)
    });
  }
}
}
