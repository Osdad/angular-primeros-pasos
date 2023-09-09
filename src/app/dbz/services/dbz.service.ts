import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: ICharacter[] = [
    {
      id: uuid(),
      name: 'JKrilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000,
    },
  ];

  addCharacter(character: ICharacter): void {
    const onNewCharacter: ICharacter = {
      id: uuid(),
      ...character,
    };

    this.characters.push(onNewCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
