import { Ingredients } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingridientAdded = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }
  addIng() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingAmount);
    this.ingridientAdded.emit(newIngredient);
  }
  deleteIng() {

  }
  clearIng() {

  }
}
