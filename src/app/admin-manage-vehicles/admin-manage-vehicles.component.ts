import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../core/services/vehicle.service';
import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'app-admin-manage-vehicles',
  templateUrl: './admin-manage-vehicles.component.html',
  styleUrls: ['./admin-manage-vehicles.component.css']
})
export class AdminManageVehiclesComponent implements OnInit {
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





deleteVehicle(id: number): void {
  if (confirm('Are you sure you want to delete this vehicle?')) {
    this.vehicleService.deleteVehicle(id).subscribe({
      next: (message: string) => {
        console.log('Success:', message); // This will log: Vehicle deleted successfully
        alert(message); // Optional: show popup
        this.loadVehicles(); // Refresh list
      },
      error: (err) => {
        console.error('Error deleting vehicle:', err);
        alert('Failed to delete vehicle.');
      }
    });
  }
}

selectedVehicle: any = {};

openEditModal(vehicle: any): void {
  console.log('Opening modal for vehicle:', vehicle);
  this.selectedVehicle = { ...vehicle }; // Clone for safety
}


updateVehicle(): void {
  this.vehicleService.updateVehicle(this.selectedVehicle.id, this.selectedVehicle).subscribe({
    next: () => {
      alert('Vehicle updated successfully!');
      this.loadVehicles();
    },
    error: (err) => {
      console.error('Update error:', err);
      alert('Failed to update vehicle');
    }
  });
}



}

