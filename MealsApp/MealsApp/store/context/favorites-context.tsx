import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})

export const FavoritesContextProvider = ({children}) => {
    
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealIds((currentMealIds) => [...currentMealIds, id]);
    };
    
    const removeFavorite = (id) => {
        setFavoriteMealIds((currentMealIds) => currentMealIds.filter((mealId) => mealId !== id))
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

