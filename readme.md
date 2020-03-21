# Paprika Account Scraper

## Setup
1. Clone repo
1. `cd` into repo
1. Set the following env vars (this can be done with a .env file if you like)
```
MAILGUN_DOMAIN=<your mailgun domain>
MAILGUN_API_KEY=<your mailgun api key>
PAPRIKA_EMAIL=<your paprika account email>
PAPRIKA_PASSWORD=<your Paprika account password>
DESTINATION_EMAIL_ADDRESS=<email to send CSV to>
```

## Build and Run Locally
1. `npm install`
1. `npm run build`
1. `node` then run:
```
var run = require('./build/index').run
run()
```
4. Check your email for a CSV containing your Paprika recipes

## Adding a new email address
1. Login to Mailgun and navigate to Domain
1. Add email to "Authorized Recipients"
1. Login to email and complete confirmation
1. Start sending emails to the new address!

