type RecipeDetailsProps = {
  params: { idMeal: string };
};

export default function RecipeDetails({ params }: RecipeDetailsProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Recipe ID: {params.idMeal}</h1>
      <p>Här kan du fetcha detaljerad data för receptet med id {params.idMeal}.</p>
    </div>
  );
}
