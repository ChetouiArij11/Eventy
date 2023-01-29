import { Component } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  film =[
    {"srcimage":"https://i.pinimg.com/564x/22/4a/60/224a60f9f9ca180a1d29a3e4e1abbd60.jpg","titre":"the school for good and evil","desc":"cest un film .......................","date":"22/07/2022"},
    {"srcimage":"https://i.pinimg.com/564x/22/4a/60/224a60f9f9ca180a1d29a3e4e1abbd60.jpg","titre":"good man","desc":"cest un film .......................","date":"20/08/2010"},
  ];

}
