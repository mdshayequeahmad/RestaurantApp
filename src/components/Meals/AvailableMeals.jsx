import React from 'react';
import classes from "./AvailableMeals.module.css"

const DUMMY_MEALS = [
    {
        id: 12,
        name: "Sushi",
        description: "Finest fish and vaggies",
        price: 22.99
    },
    {
        id: 13,
        name: "Burger",
        description: "This juicy burger is jam-packed with all kinds of stuff and has no tasteless bread crumbs",
        price: 25.99
    },
    {
        id: 14,
        name: "Pizza",
        description: " It's topped with refried beans, cheese, romaine, crumbled tortilla chips, and the icing on the cake",
        price: 30.99
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)
    return (
        <section className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </section>
    )
}

export default AvailableMeals;