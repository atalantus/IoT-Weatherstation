import { ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { TemperatureData } from '../temp_data';
import { ChartTimeUnits } from '../chart-time-units';
import { TempDataService } from '../temp-data.service';

@Component({
  selector: 'app-data-graph',
  templateUrl: './data-graph.component.html',
  styleUrls: ['./data-graph.component.scss']
})

export class DataGraphComponent implements OnInit {
  timeOffset = 5;
  chartTimeUnit = ChartTimeUnits.MIN;
  /**
   * Last displayed data
   */
  lastData: TemperatureData;
  chart: Chart;

  @ViewChild('graph') graph: ElementRef;

  constructor(private tempDataService: TempDataService) { }

  ngOnInit() {
    const graphCtx = this.graph.nativeElement.getContext('2d');

    // Create graph
    this.chart = new Chart(
      graphCtx,
      {
        'type': 'line',
        'data': {
          labels: [],
          datasets: [
            {
              'label': 'CPU',
              'borderColor': '#eb4d4b',
              'data': []
            },
            {
              'label': 'Sensor',
              'borderColor': '#6ab04c',
              'data': []
            },
            {
              'label': 'Room',
              'borderColor': '#22a6b3',
              'data': []
            },
          ]
        },
        'options': {
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Temperature in °C'
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Time'
              }
            }]
          }
        }
      }
    );

    // Fill graph with data
    this.reloadData();
  }

  /**
   * Handler when any settings changed.
   * @param settings - settings object
   */
  onSettingsChange(settings: {offset: number, unit: ChartTimeUnits}) {
    this.timeOffset = settings.offset;
    this.chartTimeUnit = settings.unit;
    /**
     * TODO: https://angular.io/tutorial/toh-pt6#fix-the-herosearchcomponent-class
     */
    this.reloadData();
  }

  /**
   * Adds a new data-element to the graph.
   * @param newData - data to add
   */
  addData(newData: TemperatureData) {
    this.lastData = newData;
    this.chart.data.labels.push(this.formatDate(new Date(newData.timestamp * 1000)));
    this.chart.data.datasets[0].data.push(newData.cpu);
    this.chart.data.datasets[1].data.push(newData.sensor);
    this.chart.data.datasets[2].data.push(newData.room);
  }

  /**
   * Iterates through an @see TemperatureData array
   * and adds all wanted data to the graph.
   * @param data Data to check and add
   */
  addDataArray(data: TemperatureData[]) {
    data.forEach(d => {
      if (this.isDataNeeded(d)) {
        this.addData(d);
      }
    });
  }

  /**
   * Handles incoming data from the MQTT server
   * @param data - @see TemperatureData in JSON-string format
   */
  checkNewData(data: string) {
    const jsonData = JSON.parse(data);
    const newData = this.toTempDataObj(jsonData);

    this.tempDataService.addData(jsonData as TemperatureData).subscribe(receivedData => {
      console.log('DATA PUSHED: ' + receivedData);
    });

    if (this.isDataNeeded(newData)) {
      this.addData(newData);
      this.chart.update();
    }
  }

  /**
   * Clears the graph and then adds all the wanted
   * data again.
   */
  reloadData(): void {
    /**
     * TODO: SEHR INEFFIZIENT!
     * Es werden JEDES MAL alle Temperatur Daten geladen und erst DANACH gefiltert!
     *
     * OPTION 1:
     *   Ein einziges mal alle Daten laden und dann in einer Variable halten, so dass man
     *   beim naechsten 'reloadData()' auf die lokalen Daten zurueckgreifen kann, anstatt
     *   sie wieder vom Server zu laden.
     *   NACHTEIL: Alle Daten festzuhalten wuerde theoretisch sehr viel Speicherplatz
     *   benoetigen
     *
     * OPTION 2:
     *   Den Zeitunterschieds-Filter direkt in die Query einbauen.
     *   Geht das?
     */
    this.tempDataService.getData()
        .subscribe((data) => {
          this.chart.data = {
            labels: [],
            datasets: [
              {
                'label': 'CPU',
                'borderColor': '#eb4d4b',
                'data': []
              },
              {
                'label': 'Sensor',
                'borderColor': '#6ab04c',
                'data': []
              },
              {
                'label': 'Room',
                'borderColor': '#22a6b3',
                'data': []
              },
            ]
          };
          this.lastData = undefined;
          this.addDataArray(data);
          this.chart.update();
        });
  }

  /**
   * Checks if a @see TemperatureData is needed as data-element
   * in the graph.
   * @param newData - data to check
   */
  private isDataNeeded(newData: TemperatureData): boolean {
    if (this.lastData !== undefined) {
      const newDate = new Date(newData.timestamp * 1000);
      const lastDate = new Date(this.lastData.timestamp * 1000);
      if (this.timeUnitBetween(lastDate, newDate, this.chartTimeUnit) < this.timeOffset) {
        return false;
      }
    }
    return true;
  }

  /**
   * Formats a @see Date to a string-array to display
   * in the graph.
   * @param date - date to format
   */
  private formatDate(date: Date): string[] {
    const s = [];
    s.push(this.toTimeString(date.toLocaleTimeString()));
    s.push(date.toLocaleDateString());
    return s;
  }

  /**
   * Removes the seconds from a time-string
   * of format: hh:mm:ss
   * @param time - time string
   */
  private toTimeString(time: string) {
    const t = time.split(':');
    return t[0] + ':' + t[1];
  }

  /**
   * Evaluates the time differents between two dates based on a
   * @see ChartTimeUnits .
   * @param date1 - the older date
   * @param date2 - the newer date
   * @param unit - the wanted @see ChartTimeUnits for the difference
   */
  private timeUnitBetween(date1: Date, date2: Date, unit: string ) {
    let unitMs = 1000;

    /**
     * WANTED FALL-THROUGH!!!
     */
    switch (unit) {
      case ChartTimeUnits.DAY:
        unitMs *= 24;
      // tslint:disable-next-line:no-switch-case-fall-through
      case ChartTimeUnits.HOUR:
        unitMs *= 60;
      // tslint:disable-next-line:no-switch-case-fall-through
      case ChartTimeUnits.MIN:
        unitMs *= 60;
    }

    const date1ms = date1.getTime();
    const date2ms = date2.getTime();

    const difference_ms = date2ms - date1ms;

    return difference_ms / unitMs;
  }

  /**
   * Parses a JSON-object to a new @see TemperatureData
   * object.
   * @param jsonData - JSON-data
   */
  private toTempDataObj(jsonData): TemperatureData {
    const tempData = new TemperatureData(jsonData.cpu, jsonData.sensor, jsonData.room, jsonData.timestamp);
    return tempData;
  }
}
