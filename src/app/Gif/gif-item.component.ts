import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gif-item',
  templateUrl: './gif-item.component.html',
  styleUrls: ['./gif-item.component.scss']
})
export class GifItemComponent implements OnInit {
  @Input() public gifUrl: string;
  @Input() public gifId: number;
  public showGif = false;

  @Input() public correctAttempt: true;

  @Output() valueChange = new EventEmitter();
  public attempt = 1;

  @Output() gifItemId = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  checkGifID() {
    this.showGif = true;
    this.valueChange.emit(this.attempt);
    this.gifItemId.emit(this.gifId);
  }
}
