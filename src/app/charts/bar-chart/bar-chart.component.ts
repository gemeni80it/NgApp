import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { SalesDataService } from 'src/app/services/SalesData.service';
import { SAMPLE_BARCHART_DATA , SAMPLE_BARCHART_LABELS } from '../../mock/mockData';
import * as moment from 'moment';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private _salesDataService: SalesDataService) { }

  orders:       any;
  orderLabels:  string[];
  orderData:    number[];

  public barChartData: any[]          // mocking data : barChartData: any[]       = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[]     // mocking data : barChartLabels: string[]  = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
    this._salesDataService.getOrders(1, 100)                 // => return an Observable
      .subscribe(res => {
        // console.log(res);
        // console.log(res['page']['data']);
        const localChartData = this.getChartData(res);
        this.barChartLabels = localChartData.map(x => x[0]).reverse();
        this.barChartData = [{ 'data': localChartData.map(x => x[1]), 'label': 'Sales'}];
      });
  }

  getChartData(res: Response) {
    this.orders = res['page']['data'];                                // response array
    const data = this.orders.map(o => o.total);
    // console.log(data);                                             // array of 'total'
    const labels = this.orders.map( o => moment(new Date(o.placed)).format('YY:MM:DD') );
    // console.log("Labels:", labels);

    
    /**
     *  Example : how to use reduce
        const myData = [ 3, 4, 5].reduce((sum, value) => { 
          return sum + value; 
        }, 0 ); // (sum + value ) + initialValue = 0  => 0 + 3 , 3 + 4 , 7 + 5 => 12
        console.log("myData reduce: ", myData);
     
    */

    // create an Array with [ Day and Total ]
    const formattedOrders : any[] = this.orders.reduce((r, e) => {
      r.push( [moment(e.placed).format('YY-MM-DD'), e.total] );
      return r;
    }, []);   // => formattedOrders = { ["18-10-18", 20920] , ["18-10-18", 2531] , ["18-10-18", 1075] , ["18-10-16", 13596] ....}

    console.log("formattedOrders" , formattedOrders);

    const p = [];

    const chartData = formattedOrders.reduce((r, e) => {
      // callback function
      const key = e[0];                       // => key 18-10-18
      // console.log("key" , key);   
      if (!p[key]) {                          // new Array p["18-10-18"] doesn.t exist
        p[key] = e;
        console.log("p[key]" , p[key] + " : e " , e);
        r.push(p[key]);
      } else {
        p[key][1] += e[1];                    // 
      }
      return r;
    }, []);

    return chartData;
  }
}
