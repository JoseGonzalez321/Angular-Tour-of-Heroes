import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {

    constructor() { }

    // getHeroes(): Hero[] { 
    //     return HEROES;
    // } 

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(_ => resolve(this.getHeroes()), 4000);
        });
    }
}