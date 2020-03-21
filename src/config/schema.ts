export default {
  mailgun: {
    apiKey: {
      doc: 'Mailgun api key',
      format: String,
      default: '[secret-mailgun-api-key]',
      env: 'MAILGUN_API_KEY',
    },
    domain: {
      doc: 'Mailgun domain',
      format: String,
      default: '[secret-mailgun-domain]',
      env: 'MAILGUN_DOMAIN',
    },
  },
  paprika: {
    email: {
      doc: 'Paprika login email',
      format: String,
      default: '[secret-paprika-email]',
      env: 'PAPRIKA_EMAIL',
    },
    password: {
      doc: 'Paprika login password',
      format: String,
      default: '[secret-paprika-password]',
      env: 'PAPRIKA_PASSWORD',
    }
  },
  destinationEmailAddress: {
    doc: 'Email address to send resulting CSV to',
    format: String,
    default: '[destination-email-address]',
    env: 'DESTINATION_EMAIL_ADDRESS',
  },
};
