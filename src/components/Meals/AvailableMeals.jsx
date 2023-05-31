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
        description: "Juicy burger tasteless bread crumbs",
        price: 25.99
    },
    {
        id: 14,
        name: "Pizza",
        description: "Beans cheese romaine crumbled chips",
        price: 30.99
    },
    {
        id: 15,
        name: "Tater tots",
        description: "Stir in flour garlic onion powder",
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