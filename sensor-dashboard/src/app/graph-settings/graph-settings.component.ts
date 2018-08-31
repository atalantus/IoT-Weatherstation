import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ChartTimeUnits } from '../chart-time-units';

@Component({
  selector: 'app-graph-settings',
  templateUrl: './graph-settings.component.html',
  styleUrls: ['./graph-settings.component.scss']
})
export class GraphSettingsComponent implements OnInit {
  /**
   * Settings change event
   */
  @Output() settingsChange = new EventEmitter<{}>();
  /**
   * Current time offset
   */
  @Input() timeOffset: number;
  /**
   * Current time unit
   */
  @Input() selectedUnit: ChartTimeUnits;
  timeUnits = [ChartTimeUnits.MIN, ChartTimeUnits.HOUR, ChartTimeUnits.DAY];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Handler when time offset changed
   * @param offset - new time offset
   */
  onTimeOffsetChange(offset: number) {
    this.timeOffset = offset;
    this.settingsChange.emit({offset: this.timeOffset, unit: this.selectedUnit});
  }

  /**
   * Handler when time unit changed
   * @param unit - new time unit
   */
  onTimeUnitChange(unit) {
    this.selectedUnit = unit;
    this.settingsChange.emit({offset: this.timeOffset, unit: this.selectedUnit});
  }
}
