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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cPaocvrv9Ic:APA91bHiDgM84B4dFyy2m_Rr5HfXBbyo45_6dqAoEurRbIpdq9SFHzs8VByILn2WY8ASNbAVAahUtK_nUd1aFJxoKbVUrEPGCopmEUkJlMicjm23iLh7Gy-WwE3JGWMEYvVoKteql_1D","expirationTime":null,"keys":{"p256dh":"BNLelDOEpgjAVXSdjBZPV83DFNqLWLipdGcsNjoVVmNehTvAMA-iigfwgU-Vq9QB_DbrZyYiCWS8YXkXQwXn2H8","auth":"HG-5i7jZ8I3pc0DJ4vLteg"}}

webpush.sendNotification(pushSubscription, 'hhhhhhh');
