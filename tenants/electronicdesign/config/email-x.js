const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('analog-power-source', [
    {
      name: 'leaderboardPrimary',
      id: '5ded409dd300776c6af275f4',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('automotive-electronics', [
    {
      name: 'leaderboardPrimary',
      id: '5deea57e76787a6e8d11efe9',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('electronic-design-daily', [
    {
      name: 'leaderboardPrimary',
      id: '5ded40d076787ae65c11e341',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('iot-for-engineers', [
    {
      name: 'leaderboardPrimary',
      id: '5df1552176787a65d9121cf3',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('product-spotlight', [
    {
      name: 'leaderboardPrimary',
      id: '5df7b919d300772820f2ea0e',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
