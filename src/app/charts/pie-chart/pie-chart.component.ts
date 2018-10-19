import { Component, OnInit } from '@angular/core';
import { PIE_CHART_DATA , PIE_CHART_LABELS } from '../../mock/mockData';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  pieChartData: number[];           // mocking data : pieChartData: number[]    = PIE_CHART_DATA;
  pieChartLabels: string[];         // mocking data : pieChartLabels: string[]  = PIE_CHART_LABELS;
  color: any[] = [
    {
    backgroundColor: ['#26547c','#ff6b6b','#ffd166']
    }
  ] ;

  pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
