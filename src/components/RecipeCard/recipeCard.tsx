"use client"
import { RecipeCardType } from "@/types/recipeCardType"
import { useRouter } from "next/navigation"

export const RecipeCard = ({ idMeal, recipeName, category, area }: RecipeCardType) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/recipes/${idMeal}`)} className="group rounded-2xl h-[300px] w-[350px] bg-white overflow-hidden border border-gray-200 cursor-pointer">
            <img
                src={"/alexrestaurantlogo.png"}
                className="w-full h-[205px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-2">
                <div className="flex justify-between">
                    <h5 className="font-semibold">{recipeName}</h5>
                    <button>Favorite</button>
                </div>
                <p>{area} Meal</p>
                <div className="flex gap-2">
                    <p>{category}</p>
                </div>
            </div>
        </div>
    )
}
