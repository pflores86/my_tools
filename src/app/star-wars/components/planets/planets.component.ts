import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Planet } from '../../../core/models/planets.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetComponent implements OnInit {

  @Input() planet!: Planet;
  constructor() { }

  ngOnInit() {
  }

  setearLike() {
    window.alert("Su pediddo va a ser registrado!")
  }
}
