import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalicedName(): string {
    return this.name.toUpperCase();
  }

  getNameAndAge(): string {
    return `${this.name} - ${this.age}`;
  }

  changeAge(value: number): void {
    this.age = value;
  }

  changeName(value: string): void {
    // value = 'Spiderman';
    this.name = value;
  }

  resetPro(): void {
    this.age = 45;
    this.name = 'ironman';
  }
}
