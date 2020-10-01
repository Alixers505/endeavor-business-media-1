module.exports = {
  dpm: {
    emailx: {
      enabled: true,
    },
    content: {
      enabled: true,
    },
  },
  optOut: {
    address: 'Source Today<br />Endeavor Business Media<br />331 54th Avenue N.<br />Nashville, TN 37209',
    safeSenders: 'news.endeavorb2b.com and mail.endeavorb2b.com',
    privacyPolicyUrl: 'https://www.endeavorbusinessmedia.com/privacy-policy',
    phoneNumber: '800-547-7377',
    manageSubscriptions: 'https://endeavor.dragonforms.com/SRCTPrefPage?r=@{encrypted_customer_id}@&pk=NLFooter',
    signUp: 'https://endeavor.dragonforms.com/loading.do?omedasite=SRCTnewPref',
  },
  socialMediaLinks: [
    {
      provider: 'twitter',
      href: 'https://twitter.com/Source_Today?elqTrack=true',
      title: 'Follow us on Twitter',
    },
    {
      provider: 'facebook',
      href: 'https://www.facebook.com/SourceTodayMagazine/43140773120?elqTrack=true',
      title: 'Follow us on Facebook',
    },
  ],
};
