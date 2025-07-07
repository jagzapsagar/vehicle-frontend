import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../core/services/vehicle.service';

@Component({
  selector: 'app-admin-add-vehicle',
  templateUrl: './admin-add-vehicle.component.html',
  styleUrls: ['./admin-add-vehicle.component.css']
})
export class AdminAddVehicleComponent {
  vehicle = {
    brand: '',
    model: '',
    type: '',
    pricePerDay: 0,
    available: true,
    imageUrl: ''
  };

  constructor(private vehicleService: VehicleService, private router: Router) {}

addVehicle(): void {
  const newVehicle = {
    brand: this.vehicle.brand,
    model: this.vehicle.model,
    type: this.vehicle.type,
    pricePerDay: this.vehicle.pricePerDay,
    imageUrl: this.vehicle.imageUrl
  };

  console.log('Payload being sent:', newVehicle); // Debug log

  this.vehicleService.addVehicle(newVehicle).subscribe({
    next: () => {
      alert('✅ Vehicle added successfully!');
      this.router.navigate(['/manage-vehicles']);
    },
    error: (err) => {
      console.error('❌ Failed to add vehicle', err);
    }
  });
}

}
