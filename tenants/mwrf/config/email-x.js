const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('defense-electronics', [
    {
      name: 'leaderboardPrimary',
      id: '5dee672ed300774863f27718',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('product-spotlight', [
    {
      name: 'leaderboardPrimary',
      id: '5df7a50cd300776355f2e89b',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
