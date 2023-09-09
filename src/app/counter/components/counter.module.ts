import { NgModule } from '@angular/core';
import { CounterComponent } from './counters/counter.component';

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
