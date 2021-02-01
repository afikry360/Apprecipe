class mealItem extends HTMLElement {
       constructor(){
           super();

       }
    set meal(meal){
        this._meal = meal;
        this.render()
    }

    render(){
        this.innerHTML=`
        <div class="card mb-3">
  <img src=${this._meal.strMealThumb} class="card-img-top" alt="Meal-Image">
  <div class="card-body">
    <h5 class="card-title">${this._meal.strMeal}</h5>
    <p class="card-text">${this._meal.strInstructions}</p>
    <p class="card-text"><small class="text-muted">${this._meal.strSource}</small></p>
  </div>
</div>`;
    }
}

customElements.define("meal-item", mealItem);