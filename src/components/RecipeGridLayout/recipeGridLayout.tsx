import { RecipeCard } from "../RecipeCard/recipeCard";
import { RecipeCardType } from "@/types/recipeCardType";

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
};

export const RecipeGridLayout = ({ meals, title }: { meals: Meal[], title: string }) => {
  return (
    <div className="mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-8
      ">
        {meals.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            idMeal={meal.idMeal}
            recipeName={meal.strMeal}
            category={meal.strCategory ?? "Unknown"}
            area={meal.strArea ?? "Unknown"}
          />
        ))}
      </div>
    </div>
  );
};
