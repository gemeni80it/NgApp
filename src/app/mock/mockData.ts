/** Mock data for charts - without .NET backend */

/** bar-chart.component.ts */
export const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales'},
  { data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Sales'}
];

export const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];


/** line-chart.component.ts */
export const LINE_CHART_SAMPLE_DATA: any[] = [
    { data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis'},
    { data: [12, 18, 26, 13, 28, 26], label: 'Image Recognition'},
    { data: [52, 34, 49, 53, 68, 62], label: 'Forecasting'},
  ];

export const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

/** pie-chart.component.ts */
export const PIE_CHART_DATA : number[]     = [350, 450, 120];

export const PIE_CHART_LABELS : string[]   = ['ABC' , 'HBO', 'PROTV'];