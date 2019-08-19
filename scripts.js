console.log('JS up and running');

const iphone = document.querySelector('iphone');
const android = document.querySelector('android');

function appStore() {
  alert('Going to the App Store');
}

function googleStore() {
  alert('Going to the Google Play Store');
}

iphone.addEventListeners('click', appStore, false);
android.addEventListeners('click', googleStore, false);