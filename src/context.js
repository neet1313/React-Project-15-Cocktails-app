import React, { useState, useContext, useEffect, useCallback, createContext } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [drinksData, setDrinksData] = useState([]);
  const [loading, setloading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');

  const fetchDrinks = useCallback(async () => {
    setloading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const { drinks } = await response.json();
      if (drinks) {
        const cocktails = drinks.map(item => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = item;
          const ingredients = [strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5];

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            instructions: strInstructions,
            ingredients
          }
        });
        setDrinksData(cocktails);
      } else {
        setDrinksData([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setloading(false);
  }, [searchTerm]);


  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return <AppContext.Provider value={{ drinksData, loading, setSearchTerm }}>
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
