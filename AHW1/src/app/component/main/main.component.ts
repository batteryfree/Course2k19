import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import Products from '../../const/poroducts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

    public products: Product[] = Products;
    public filtredProduct: Product[] = this.products; 
    public favoritProducts: Product[] = [];
    public inputSearch: string = '';
    public isSortDescending: boolean = true;

    ngOnInit() {
      this.sortRating();
    }

    search(): void {
      this.filtredProduct = this.products.filter(product => product.Title.toLowerCase().match(this.inputSearch.toLowerCase()));
    }

    sortRating(): void {
      this.isSortDescending = !this.isSortDescending;
      this.products.sort((product1, product2) => {
        return this.isSortDescending?product1.Rating - product2.Rating:product2.Rating - product1.Rating
      });
      this.search();
    }

    addFavorite(product: Product): void {
      this.favoritProducts.push(product);
      this.products.splice(this.products.indexOf(product), 1);
      this.search();
    }
    
    removeFavorite(product: Product): void {
      this.products.push(product);
      this.favoritProducts.splice(this.favoritProducts.indexOf(product), 1);
      this.search();
      this.isSortDescending = !this.isSortDescending;
      this.sortRating();
    }
}
