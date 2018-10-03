import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent {
  @Input() value: number = 0;
  @Input() max: number = 100;

  // @Input('used')
  // set value_(value: number) {
  //   if (isNaN(value)) {
  //     value = 0;
  //   }
  //   this.value = value;
  // }

  // get value_(): number { return this.value; }

  // @Input('available')
  // set max_(max: number) {
  //   if (isNaN(max)) {
  //     max = 100;
  //   }
  //   this.max = max;
  // }

  // get max_(): number { return this.max; }

  ngOnChanges(changes) {
    if (changes.value && isNaN(changes.value.currentValue)) {
      this.value = 0;
    }
    if (changes.max && isNaN(changes.max.currentValue)) {
      this.max = 0;
    }
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }
}
