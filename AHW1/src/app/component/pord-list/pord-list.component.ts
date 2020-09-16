import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'pord-list',
  templateUrl: './pord-list.component.html',
  styleUrls: ['./pord-list.component.css']
})
export class PordListComponent {
  
  @Input() captionButton: string = '';
  @Input() titleList: string = '';
  @Input() products: Product[];
  @Output() setFavorite = new EventEmitter<Product>();
  setFavoriteList(product:Product) {
    this.setFavorite.emit(product);
  }
}
