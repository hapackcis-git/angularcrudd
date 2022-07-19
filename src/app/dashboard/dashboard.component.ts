import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { DashboardModel } from './dashboard-modal';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formValue!: FormGroup;
  DashboardModelObj: DashboardModel = new DashboardModel();
  DealerData!: any;
  searchValue!:string;
  constructor(private formbuilder: FormBuilder, private api: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({

      Name: ['',[Validators.required]],
      amt_of_cars: ['',[Validators.required]],
      total_budget: ['',[Validators.required]],
      remaining_budget: ['',[Validators.required]],
      owners_first_name: ['',[Validators.required]],
      owners_last_name: ['',[Validators.required]],
      longtitude: ['',[Validators.required]],
      latitude: ['',Validators.required]


    });
    this.getAllDealer();
  }
  get Name(){
  return this.formValue.get('Name');
  }
  get amt_of_cars(){
    return this.formValue.get('amt_of_cars')
  }
  get total_budget(){
    return this.formValue.get('total_budget');
  }
  get remaining_budget(){
     return this.formValue.get('remaining_budget');
  }
  get owners_first_name(){
    return this.formValue.get('owners_first_name')
  }

  get owners_last_name(){
    return this.formValue.get('owners_last_name');

  }
  get longtitude(){
    return this.formValue.get('longtitude');
  }
  get latitude(){
    return this.formValue.get('latitude');
  }
  postDealerDetails() {
    this.DashboardModelObj.Name = this.formValue.value.Name;
    this.DashboardModelObj.amt_of_cars = this.formValue.value.amt_of_cars;
    this.DashboardModelObj.total_budget = this.formValue.value.total_budget;
    this.DashboardModelObj.remaining_budget = this.formValue.value.remaining_budget;
    this.DashboardModelObj.owners_first_name = this.formValue.value.owners_first_name;
    this.DashboardModelObj.owners_last_name = this.formValue.value.owners_last_name;
    this.DashboardModelObj.longtitude = this.formValue.value.longtitude;
    this.DashboardModelObj.latitude = this.formValue.value.latitude;
    this.api.postDealer(this.DashboardModelObj).subscribe(res => {
      console.log(res);
      alert("Employee Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllDealer();
    },
      err => {
        alert("Something went wrong")
      });

  }

  getAllDealer() {
    this.api.getDealer().subscribe(res => {
      this.DealerData = res;
    })
  }

  deleteDealer(item: any) {
    this.api.deleteDealer(item.id).subscribe((res) => {
      alert("Dealer Deleted");
      this.getAllDealer();
    })

  }


  onEdit(item: any) {
    this.DashboardModelObj.id=item.id;
    this.formValue.controls['Name'].setValue(item.Name);
    this.formValue.controls['amt_of_cars'].setValue(item.amt_of_cars);
    this.formValue.controls['total_budget'].setValue(item.total_budget);
    this.formValue.controls['remaining_budget'].setValue(item.remaining_budget);
    this.formValue.controls['owners_first_name'].setValue(item.owners_first_name);
    this.formValue.controls['owners_last_name'].setValue(item.owners_last_name);
    this.formValue.controls['longtitude'].setValue(item.longtitude);
    this.formValue.controls['latitude'].setValue(item.latitude);
  }

  updateDealeerDetails(){
    this.DashboardModelObj.Name = this.formValue.value.Name;
    this.DashboardModelObj.amt_of_cars = this.formValue.value.amt_of_cars;
    this.DashboardModelObj.total_budget = this.formValue.value.total_budget;
    this.DashboardModelObj.remaining_budget = this.formValue.value.remaining_budget;
    this.DashboardModelObj.owners_first_name = this.formValue.value.owners_first_name;
    this.DashboardModelObj.owners_last_name = this.formValue.value.owners_last_name;
    this.DashboardModelObj.longtitude = this.formValue.value.longtitude;
    this.DashboardModelObj.latitude = this.formValue.value.latitude;
    this.api.updateDealer(this.DashboardModelObj,this.DashboardModelObj.id).subscribe(res=>{
      alert("Updated Successfully ")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllDealer();
    })
 
  }
  Move(){
    this.route.navigate(['/cars']);
  }
}
