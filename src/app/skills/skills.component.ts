import { Component, OnInit } from '@angular/core';
import {Chart} from "angular-highcharts";


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
 
  chart = new Chart ({   
    chart: {
       type: 'column'
    },
    title: {
       text: 'Technologies'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
  
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total percent skills'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
       {
          name: 'Technologies :',
          colorByPoint : true,
          type : "column",
          data: [
            {
              name:"Angular, BootStrap",
              y:70,
              drilldown :"Symfony, Wordpress"
            },
            {
              name:"Symfony, Wordpress",
              y:75,
              drilldown :"Symfony, Wordpress"
            },
            {
              name: "PHP",
              y: 80,
              drilldown: "PHP"
          },
          {
            name:"JavaScript",
            y:85,
            drilldown :"JavaScript"
          }
        ]
       }
    ],
  });
  
  pieChart = new Chart ({   
    chart: {
       type: 'pie'
    },
    title: {
       text: 'Tools'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
  
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total percent skills'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
       {
          name: 'Tools :',
          type : "pie",
          innerSize: '80%',
          data: [
            {
              name: "Git",
              y: 80,
              drilldown: "Git"
          },
          {
            name:"Office",
            y:85,
            drilldown :"Office"
          },
          {
            name:"Linux, Windows",
            y:78,
            drilldown :"Linux, Windows"
          },
          {
            name :"Docker",
            y :52,
            drilldown : "Docker"
          }
        ]
       }
    ],
  });
  constructor() { }

  ngOnInit(): void {
  }

}
