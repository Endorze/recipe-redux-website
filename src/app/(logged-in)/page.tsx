"use client"
import { useEffect, useState } from "react";
import { useLoginState } from "../../../hooks/useLoginState";
import { RecipeSection } from "@/components/RecipeGridLayout/recipeGridLayout";


type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
};

export default function Home() {
  const { user } = useLoginState();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      const data = await response.json();
      setMeals(data.meals)
    }
    fetchMeals();
  }, [])

  const favoriteMeals = meals.filter((meal) => favorites.includes(meal.idMeal));



  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <section>
        <p>Hello {user?.username}!</p>
        {/* <RecipeCard /> */}
        <RecipeSection meals={meals} title="all recipes"/>
      </section>
    </div>
  );
}
