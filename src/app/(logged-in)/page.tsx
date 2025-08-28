"use client";
import { useEffect, useState } from "react";
import { useFavorites } from "@/context/favoritesContext";
import { RecipeSection } from "@/components/RecipeGridLayout/recipeSection";
import { useLoginState } from "../../../hooks/useLoginState";

type MealSummary = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
};

export default function Home() {
  const { favorites } = useFavorites(); // tex ["52772", ...]

  const [meals, setMeals] = useState<MealSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchFavorites() {
      setLoading(true);
      try {
        if (favorites.length === 0) {
          if (!cancelled) setMeals([]);
          return;
        }

        const results = await Promise.all(
          favorites.map(async (id) => {
            const res = await fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            const data = await res.json();
            return data.meals?.[0] as MealSummary | undefined;
          })
        );

        const cleaned = results.filter(Boolean) as MealSummary[];
        if (!cancelled) setMeals(cleaned);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchFavorites();
    return () => {
      cancelled = true;
    };
  }, [favorites]);

  if (loading) return <div className="p-8">Laddar favoriter…</div>;

  if (meals.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-2">Dina favoriter</h1>
        <p className="text-gray-600">
          Du har inga favoritmarkeringar ännu. Gå till recepten och tryck på stjärnan för att lägga till!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-6 sm:px-10 py-8">
      <div className="mx-auto w-full max-w-7xl">
        <RecipeSection title="Dina favoriter" meals={meals} />
      </div>
    </div>
  );
}
