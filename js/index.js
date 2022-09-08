// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../sw.js');
//   console.log('serviceWorker registered');
// }

const year = new Date().getFullYear();

document.querySelector(
  '.footer__copy'
).textContent = `© ${year} Eddie's Fitness. All rights reserved.`;
