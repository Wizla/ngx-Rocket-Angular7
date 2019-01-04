import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import _ = require('lodash');

const baseUrl = 'http://api.giphy.com';
const routes = {
  gif: () => baseUrl + `/v1/gifs/random?api_key=dc6zaTOxFJmzC&`
};

export interface RandomGifContext {
  category: string;
}

@Injectable()
export class GifService {
  gifUrl: string;
  public gifList: any = [];
  public gameList: any[] = [];
  public gameGrid: any[] = [];
  public shuffleList: any[] = [];
  public shuffledList: any[] = [];

  constructor(private httpClient: HttpClient) {}

  createGifList(): any[] {
    for (let i = 0; i < 6; i++) {
      this.httpClient
        .get(routes.gif())
        .pipe(map((body: any) => body.data.image_url))
        .subscribe((gif: string) => {
          this.gifList[i] = {
            gifUrl: gif,
            gifId: this.gifList.length
          };
          if (this.gifList.length === 6) {
            this.createGameGrid();
          }
        });
    }
    return this.gameGrid;
  }

  createGameGrid(): void {
    this.gifList.forEach(elemelone => {
      this.gameList.push(elemelone);
    });
    this.gifList.forEach(element => {
      this.gameList.push(element);
    });

    // // shuffle the single array
    this.gameList.sort(() => Math.random() - 0.5);

    // create game grid.
    for (let i = 0; i < this.gameList.length; i++) {
      if (i % 3 === 2) {
        this.gameGrid.push([this.gameList[i], this.gameList[i - 1], this.gameList[i - 2]]);
      }
    }
    console.log(this.gameGrid);
  }

  // Shuffle(list: any[]): any[] {
  //   // for (let x = 0; x < list.length; x++) {
  //   //   // list[x].sort( () => Math.random() - 0.5);
  //   //   for (let y = 0; y < list[y].length; y++) {
  //   //     this.shuffleList.push(list[x][y]);
  //   //   }
  //   // }
  //   for (let index = 0; index < list.length; index++) {
  //     this.shuffleList = list;
  //     const randomNr = Math.floor(Math.random() * this.shuffleList.length) - 1;
  //     const tempItem = this.shuffleList[randomNr];
  //     console.log(index + '--------Index');
  //     console.log(randomNr + '--------randomNr');
  //     // this.shuffledList.push(tempItem);
  //     // this.shuffleList.splice(randomNr, 1);
  //   }

  //   return this.shuffledList;
  // }
}
