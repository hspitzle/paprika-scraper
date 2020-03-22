import formatCsv from './formatter';
import sendEmail from './mailer';
import fetchRecipes from './scraper';

const run = async (request: any, response: any) => {
  const recipes = await fetchRecipes();
  const csv = formatCsv(recipes);
  try {
    await sendEmail(csv);
  } catch(err) {
    console.log('Mailgun email failed:', err.message);
  }
  return response ? response.status(200).send('Recipes scraped and sent!') : 'complete';
};

// exports.event = (event, callback) => {
//   callback();
// };

export { run };
