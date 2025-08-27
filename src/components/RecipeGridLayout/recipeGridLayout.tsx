import { RecipeCard } from "../RecipeCard/recipeCard";

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
};

export const RecipeSection = ({ meals, title }: { meals: Meal[], title: string }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="max-w-7xl flex gap-4 overflow-x-auto scrollbar-hide">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="flex-shrink-0 w-[250px]">
            <RecipeCard
              idMeal={meal.idMeal}
              recipeName={meal.strMeal}
              category={meal.strCategory ?? "Unknown"}
              area={meal.strArea ?? "Unknown"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
