import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postDealer(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {
      return res;
    }))

  }



  getDealer() {
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res: any) => {
      return res;
    }))
  }

  updateDealer(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
      return res;
    }))


  }


  deleteDealer(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
      return res;
    }))





  }

    postCar(data: any){
      return this.http.post<any>("http://localhost:3000/cars", data).pipe(map((res: any) => {
        return res;
      }))

    }



    getCar(){
      return this.http.get<any>("http://localhost:3000/cars").pipe(map((res: any) => {
        return res;
      }))
    }

    updateCar(data: any, id: number){
      return this.http.put<any>("http://localhost:3000/cars/" + id, data).pipe(map((res: any) => {
        return res;
      }))


    }


    deleteCar(id: number){
      return this.http.delete<any>("http://localhost:3000/cars/" + id).pipe(map((res: any) => {
        return res;
      }))


    }


  }
