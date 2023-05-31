import React from 'react';
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
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
    {
        id: 15,
        name: "Tater tots",
        description: "Stir in flour, garlic powder, onion powder, oregano and dill; season with salt and pepper, to taste.",
        price: 52.99
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => (
        <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ))

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;