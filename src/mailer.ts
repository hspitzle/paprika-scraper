import config from './config';

import Mailgun from 'mailgun-js';
import moment from 'moment';

export default async (recipes: any): Promise<any> => {
  const apiKey = config.get('mailgun.apiKey');
  const domain = config.get('mailgun.domain');
  const mailgun = Mailgun({ apiKey, domain });

  const date = moment().format('YYYY-MM-DD');
  const attachment = new mailgun.Attachment({data: Buffer.from(recipes), filename: `paprika-scraper-results-${date}.csv`});

  const data: Mailgun.messages.SendData = {
    from: 'Paprika Scraper <me@paprika.mailgun.org>',
    to: config.get('destinationEmailAddress'),
    subject: `paprika-scraper results ${date}`,
    text: 'Attached are your scraped paprika recipes for',
    attachment,
  };

  return mailgun.messages().send(data);
};
