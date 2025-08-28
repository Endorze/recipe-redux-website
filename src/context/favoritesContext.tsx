// context/favoritesContext.tsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useLoginState } from "../../hooks/useLoginState";

type FavoritesContextType = {
  favorites: string[];                      // idMeal[]
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const { user } = useLoginState();
  const [favorites, setFavorites] = useState<string[]>([]);

  // Seed från inloggad användare (och deduplicera)
  useEffect(() => {
    const initial = user?.favoriteMealIds ?? [];
    setFavorites(Array.from(new Set(initial)));
  }, [user]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used inside FavoritesProvider");
  return ctx;
}
