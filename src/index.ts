import formatCsv from './formatter';
import sendMail from './mailer';
import fetchRecipes from './scraper';

const run = async (request: any, response: any) => {
  const recipes = await fetchRecipes();
  const csv = formatCsv(recipes);
  await sendMail(csv);
  return response ? response.status(200).send('Recipes scraped and sent!') : 'complete';
};

// exports.event = (event, callback) => {
//   callback();
// };

export { run };
