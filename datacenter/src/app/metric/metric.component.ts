import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {

  @Input() title: string;
  @Input() description: string;
  @Input() value: number;
  @Input() max: number;

  @Input('used')
  set value_(value: number) {
    if (isNaN(value)) {
      value = 0;
    }
    this.value = value;
  }

  get value_(): number { return this.value; }

  @Input('available')
  set max_(max: number) {
    if (isNaN(max)) {
      max = 100;
    }
    this.max = max;
  }

  get max_(): number { return this.max; }

  isDanger() {
    return this.value / this.max > 0.7;
  }
}
