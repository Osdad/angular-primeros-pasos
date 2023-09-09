import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: ICharacter[] = [{ name: 'Trunks', power: 50 }];

  //@Input()
  onDeleteCharacter(id?: string): void {
    //TODO: emitir el index del personaje
    if (!id) return;
    this.onDelete.emit(id);
  }
}
