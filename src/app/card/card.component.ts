import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() srcimage !:string;
  @Input() titre !:string;
  @Input() desc !:string;
  @Input() date !:string;
  @Input() index !:number;

}
