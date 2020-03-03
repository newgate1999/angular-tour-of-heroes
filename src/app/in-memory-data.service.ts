import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Dr Strange'},
      {id: 12, name: 'Iron Man'},
      {id: 13, name: 'Hulk'},
      {id: 14, name: 'Captain America'},
      {id: 15, name: 'Thor'},
      {id: 16, name: 'Black Windows'},
      {id: 17, name: 'Scalett witch '},
      {id: 18, name: 'Black Panther'},
      {id: 19, name: 'Tuan Anh'},
      {id: 20, name: 'Huu Canh'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
