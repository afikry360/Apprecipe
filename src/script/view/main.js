import "../component/list-meal.js";
import "../component/search-meal-bar.js"
import DataSource from '../data/data-source.js';
const main = () => {
    const searchElement = document.querySelector("search-meal-bar");
    const listMeals = document.querySelector("list-meal");

    const onButtonClicked = async () => {
        try{
            const results = await DataSource.searchMeal(searchElement.value);
            renderResult(results);
        }catch (message){
            fallbackResult(message);
        }
        
    };

    const renderResult = results => {
        listMeals.meal = results;
   };
   const fallbackResult = message => {
    listMeals.renderError(message); 
};
searchElement.clickEvent = onButtonClicked;
};

import $ from "jquery";
import moment from "moment";

const displayTime = () =>{
    moment.locale("id");
    
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL"));
};

const updateTime = () =>{
    displayTime();
    setTimeout(updateTime, 1000)

};

updateTime();
export default main;