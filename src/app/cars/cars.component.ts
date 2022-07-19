import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardModel } from '../dashboard/dashboard-modal';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  formValue!: FormGroup;
  DashboardModelObj: DashboardModel = new DashboardModel();
  DealerData!: any;
  searchValue!:string;
  constructor(private formbuilder: FormBuilder, private api: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({

      Brand: ['',[Validators.required]],
      Model: ['',[Validators.required]],
      Color: ['',[Validators.required]],
      Price: ['',[Validators.required]]
  

    });
    this.getAllCar();
  }
  get Brand(){
  return this.formValue.get('Brand');
  }
  get Model(){
    return this.formValue.get('Model')
  }
  get Colors(){
    return this.formValue.get('Color');
  }
  get Price(){
     return this.formValue.get('Price');
  }
  
  postCarsDetails() {
    this.DashboardModelObj.Brand= this.formValue.value.Brand;
    this.DashboardModelObj.Model = this.formValue.value.Model;
    this.DashboardModelObj.Color = this.formValue.value.Color;
    this.DashboardModelObj.Price = this.formValue.value.Price;
  
    this.api.postCar(this.DashboardModelObj).subscribe(res => {
      console.log(res);
      alert("Cars Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCar();
    },
      err => {
        alert("Something went wrong")
      });

  }

  getAllCar() {
    this.api.getCar().subscribe(res => {
      this.DealerData = res;
    })
  }

  deleteCar(item: any) {
    this.api.deleteCar(item.id).subscribe((res) => {
      alert("Dealer Deleted");
      this.getAllCar();
    })

  }


  onEdit(item: any) {
    this.DashboardModelObj.id=item.id;
    this.formValue.controls['Brand'].setValue(item.Brand);
    this.formValue.controls['Model'].setValue(item.Model);
    this.formValue.controls['Color'].setValue(item.Color);
    this.formValue.controls['Price'].setValue(item.Price);
 
  }

  updateCarDetails(){
    this.DashboardModelObj.Brand = this.formValue.value.Brand;
    this.DashboardModelObj.Model = this.formValue.value.Model;
    this.DashboardModelObj.Color = this.formValue.value.Color;
    this.DashboardModelObj.Price = this.formValue.value.Price;

    this.api.updateCar(this.DashboardModelObj,this.DashboardModelObj.id).subscribe(res=>{
      alert("Updated Successfully ")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCar();
    })
 
  }
  Move(){
    this.route.navigate(['']);
  }
}
