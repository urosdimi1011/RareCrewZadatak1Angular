
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
})
//Ovo ovde je moglo jos da se izgeneralizuje da se ne pisu ovde svojstva, vec da se napravi neki vid naslednjivanja i interfejs koji ce govoriti koja svojstva treba da ima 
export class AppPieChartComponent implements OnChanges {
  @Input() datas : any;
  lineChartData : any;
  lineChartOptions : any;
  precentageOfEmploees: Array<Number> = [];
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['datas'] && this.datas.length) {
      this.updateChartData();
    }
  }
  getPrecentage(){

    let totalHourse = this.datas.reduce((accumulator : any, currentValue : any) => { 
      return accumulator + currentValue.totalHourse
      },0);

      this.precentageOfEmploees = this.datas.map((item : any) => { 
        console.log(item);
        return  Math.round((item.totalHourse / totalHourse) * 100);
      });
      console.log(this.precentageOfEmploees);
  }
  updateChartData() {
    this.getPrecentage();
    this.lineChartData = {
      labels: this.datas.map((item : any)=>item.fullName),
      datasets: [
        {
          data: this.precentageOfEmploees,
          label: 'Total Time Worked (Hours)',
        },
      ],
    };
    this.lineChartOptions = {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
        datalabels: {
          formatter: (value : any, context : any) => {
            return value + '%';
          },
          color: (context: any) => {
            const backgroundColor = context.dataset.backgroundColor[context.dataIndex];
            return this.getContrastingColor(backgroundColor);
          },
          anchor: 'center',
          font: {
            weight: 'bold',
          },
        },
      },
    };
  }
  getContrastingColor(backgroundColor: string){
  let r = 0, g = 0, b = 0;

  if (backgroundColor.startsWith('rgb')) {
    const rgbValues = backgroundColor.match(/\d+/g);
    if (rgbValues) {
      r = parseInt(rgbValues[0], 10);
      g = parseInt(rgbValues[1], 10);
      b = parseInt(rgbValues[2], 10);
    }
  } else {
    const color = backgroundColor.substring(1);
    r = parseInt(color.substring(0, 2), 16);
    g = parseInt(color.substring(2, 4), 16);
    b = parseInt(color.substring(4, 6), 16);
  }

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  // console.log(brightness);
  return brightness > 150 ? 'black' : 'white';
  }
}
