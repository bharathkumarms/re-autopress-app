import {Component} from '@angular/core'

@Component({
    selector:'re-recipe',
    templateUrl:'./recipe.component.html',
    styles:[`
        
    `]
})
export class RecipeComponent{
    isIn = false;   // store state
    toggleStateRecipe() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
}