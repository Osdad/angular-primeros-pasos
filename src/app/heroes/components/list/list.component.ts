import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public deleteHero?: string;
  public heroNames: string[] = [
    'Superman',
    'ironman',
    'Spiderman',
    'Thor',
    'Hulk',
  ];

  deleteLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
