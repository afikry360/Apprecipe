import "./meal-item.js";
class listMeal extends HTMLElement {
    constructor(){
        super();
    }

    set meal(meal){
        this._meal = meal;
        this.render(); 
    }

    render(){
        this.innerHTML="";
        this._meal.forEach(meal => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal = meal
            this.appendChild(mealItemElement);
        });
    }

    renderError(message) {
        this.innerHTML=`
        <div class="alert alert-danger" role="alert">${message}</div>`;
    }
}
customElements.define("list-meal", listMeal);