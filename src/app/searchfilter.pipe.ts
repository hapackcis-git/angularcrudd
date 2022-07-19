import { Pipe, PipeTransform } from '@angular/core';
import { DashboardModel } from './dashboard/dashboard-modal';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(DashboardModelOb:DashboardModel[],searchValue:string): DashboardModel[] {
  if(!DashboardModelOb||!searchValue){
    return DashboardModelOb;
  }
  return DashboardModelOb.filter(dd=>
    dd.Name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    dd.amt_of_cars.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    dd.total_budget.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    dd.remaining_budget.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    dd.owners_first_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    dd.owners_last_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    dd.longtitude.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    dd.latitude.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    dd.Brand.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    dd.Model.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    dd.Color.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    dd.Price.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())

    );
  }

}
