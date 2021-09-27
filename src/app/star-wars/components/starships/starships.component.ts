import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Starship } from '../../../core/models/starships.model';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipComponent implements OnInit {

  @Input() starship!: Starship;
  constructor() { }

  ngOnInit() {
  }

  setearLike() {
    window.alert("Su pediddo va a ser registrado!")
  }
}
