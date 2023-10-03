const webpush = require('web-push');

// let vapidKeys = webpush.generateVAPIDKeys()
// console.log(vapidKeys,"===vapidKeys")
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BDzENML3i3olOw6dc77yKit2xluLrP1_t0S0rlz_UqC8gTTcq4ZYhY_tiMKQE4IlJ-KSNt45DRYSIrvf6BfxkKE',
  privateKey: 'rJbHiED4QIOmWocayoR0E55d1Eabj91Y86vFM2natNY'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
