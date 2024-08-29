import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipes() {
  try {
    const apiResponse = await fetch(
      "https://dummyjson.com/recipes" 
    );

    const data = await apiResponse.json();

    return data?.recipes;
  } catch (error) {
    console.log(error.message);
  }
}

export default async function Recipes() {
  const recipeList = await fetchListOfRecipes(); // Corrected function call
  return <RecipeList recipeList={recipeList} />; // Corrected prop name
}
