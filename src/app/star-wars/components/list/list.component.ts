import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

//import { Product } from './../../../core/models/product.model';
import { StarWarsService } from './../../../core/services/star-wars/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items = [];
  type = '';

  constructor(
    private route: ActivatedRoute,
    private starWarsService: StarWarsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.type = params.type;
      this.fetchList(this.type);
    });
  }

  fetchList(type:string) {
    this.starWarsService.getAll(type)
    .subscribe(output => {
      this.items = output.results;
    });
  }

}
