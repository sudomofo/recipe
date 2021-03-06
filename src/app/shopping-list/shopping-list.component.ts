import { Ingredients } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingrident: Ingredients) {
    this.ingredients.push(ingrident);
  }

}
