"use client";
import { RecipeCardType } from "@/types/recipeCardType";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import { useFavorites } from "@/context/favoritesContext";

export const RecipeCard = ({
  idMeal,
  recipeName,
  category,
  area,
  strMealThumb,
  strMeal,
}: RecipeCardType) => {

  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div
      onClick={() => router.push(`/recipes/${idMeal}`)}
      className="group rounded-2xl bg-white overflow-hidden border border-gray-200 cursor-pointer w-full"
    >
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          <h5 className="font-semibold line-clamp-1">{recipeName}</h5>
          <button className="text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200" onClick={((e) => {
            e.stopPropagation();
            toggleFavorite(idMeal);
          })
          }
            aria-pressed={isFavorite(idMeal)}
            aria-label={isFavorite(idMeal) ? "Remove from Favorites" : "Add to favorites"}>
            <Star
              className="w-6 h-6"
              fill={isFavorite(idMeal) ? "gold" : "none"}
              stroke={isFavorite(idMeal) ? "gold" : "currentColor"}
            />
          </button>
        </div>

        <p className="text-sm text-gray-600 mt-1">{area} Meal</p>

        <div className="flex gap-2 text-xs text-gray-700 mt-2">
          <span className="rounded-full bg-gray-100 px-2 py-0.5">{category}</span>
        </div>
      </div>
    </div>
  );
};
