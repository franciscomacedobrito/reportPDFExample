import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isDOMPresent:Boolean = typeof document === "object" && !!document;
  title = 'reportPDFPOC';
  chartOptions = {
    "responsive": true,
    "maintainAspectRatio": false,
  };
  chartDatasets = [
    {
      "data": [
        586,
        61,
        0,
        0
      ],
      "backgroundColor": [
        "#ed0007",
        "#c535bc",
        "#56b0ff",
        "#007bc0"
      ],
      "hoverBackgroundColor": [
        "#be0004",
        "#9e2896",
        "#0096e8",
        "#00629a"
      ],
      "borderWidth": 0
    }
  ];

  ngOnInit(): void {

  }

}
