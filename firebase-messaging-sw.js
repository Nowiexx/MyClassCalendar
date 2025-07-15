
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB0W6A33XlgRsT9AfBfnMqARbkK0yoJqzs",
  authDomain: "myclasscalendar-3ffb9.firebaseapp.com",
  projectId: "myclasscalendar-3ffb9",
  messagingSenderId: "211711795991",
  appId: "1:211711795991:web:770a5785783b84ce778d52"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
