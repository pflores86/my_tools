import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { People } from '../../../core/models/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @Input() people!: People;
  constructor() { }

  ngOnInit() {
  }

  setearLike() {
    window.alert("Su pediddo va a ser registrado!")
  }
}
