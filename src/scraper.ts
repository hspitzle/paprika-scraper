import config from './config';

import Bluebird from 'bluebird';
import { PaprikaApi, RecipeItem, Recipe } from 'paprika-api';

export default async (): Promise<Recipe[]> => {
  const client = new PaprikaApi(config.get('paprika.email'), config.get('paprika.password'));

  const recipes: RecipeItem[] = await client.recipes();
  return Bluebird.map(recipes, recipe => client.recipe(recipe.uid));
};
