"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type RecipeDetailsProps = {
  idMeal: string;
};

const API = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export default function RecipeDetails() {

  const [meal, setMeal] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  
  const { idMeal } = useParams();
  console.log("idMeal", idMeal);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    (async () => {
      try {
        const res = await fetch(`${API}${idMeal}`, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const meal = data.meals[0];
        setMeal(meal);
      } catch (err: any) {
        if (err.name !== "AbortError") setError(err);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [idMeal]);

  console.log("meal", meal);

  return (
    <div className="p-6">
      {loading && (
        <p>Loading meal.</p>
      )}

      {meal && (

        <div>
          <h1 className="text-2xl font-bold">Recipe ID: {meal.idMeal}</h1>
          <p>Här kan du fetcha detaljerad data för receptet med id {meal.idMeal}.</p>
          <p>{meal.strCategory}</p>
        </div>
      )}
    </div>
  );
}
