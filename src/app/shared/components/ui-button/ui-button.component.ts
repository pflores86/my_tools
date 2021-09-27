import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {
  @Input() disabled: boolean=false;
  @Input() label: string = 'New button';
  @Input() color: string = 'basic';
  constructor() { }

  ngOnInit(): void {
  }

}
