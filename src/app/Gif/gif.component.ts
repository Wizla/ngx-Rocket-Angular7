import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GifService } from './gif.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent implements OnInit {
  gif = '';
  isLoading: boolean;
  result: Observable<string>;
  gifUrl: string;

  public removeGifCover = true;
  public gifList: any[] = [];
  public gameGrid: any[] = [];
  public attempts = 0;

  public selectionX: number;
  public selectionY: number;

  constructor(private gifService: GifService) {}

  ngOnInit() {
    this.isLoading = false;
    this.gameGrid = this.gifService.createGifList();
  }

  getGifId($event: any) {
    this.removeGifCover = false;
  }

  displayCounter(attempt: any) {
    this.attempts = this.attempts + attempt;
  }

  validateSelectedOption(gifId: any) {
    if (this.attempts === 1) {
      this.selectionX = gifId;
    }
    if (this.attempts === 2) {
      this.selectionY = gifId;

      if (this.selectionX === this.selectionY) {
        console.log('OKE');
        this.attempts = 0;
        this.selectionX = 0;
        this.selectionY = 0;
      }

      if (this.selectionX !== this.selectionY) {
        console.log('NOK');
        this.attempts = 0;
        this.selectionX = 0;
        this.selectionY = 0;
      }
    }
  }

  playAudio() {
    const audio = new Audio();
    audio.src = 'https://freesound.org/people/rhodesmas/sounds/342759/';
    audio.load();
    audio.play();
  }
}
