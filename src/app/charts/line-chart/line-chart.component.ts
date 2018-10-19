import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';
// import { LINE_CHART_SAMPLE_DATA, LINE_CHART_LABELS } from '../../mock/mockData';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  lineChartData: any;         // mocking data : lineChartData: any    = LINE_CHART_SAMPLE_DATA;
  lineChartLabels: any;       // mocking data : lineChartLabels: any  = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };

  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  constructor() { }

  ngOnInit() {
  }

}
