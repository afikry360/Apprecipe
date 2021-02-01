class searchMealBar extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.querySelector("#searchElement").value;
    }
     
    render(){
        this.innerHTML=`
        <div class="row">
        <div class="col-lg-12 text-center">
          <input type="text" class="form-control" placeholder="Name Meals" id="searchElement">
          </div>
          <div class="col-md text-center">
          <button type="button" class="btn btn-primary" id="buttonSearch">Search</button>
        </div>
        </div>
        </form>`;

      this.querySelector("#buttonSearch").addEventListener("click",this._clickEvent);
    }
     
}

customElements.define("search-meal-bar", searchMealBar);