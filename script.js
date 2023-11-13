// JavaScript
console.log('Hello world!');
var map = L.map('map').setView([35.68259848721758, 139.76724877909905], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//L.marker([35.68120413712666, 139.76433053583503]).addTo(map)
  //.bindPopup('テキスト<br><img src="images/img01.png" alt="img">');

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

    L.marker([35.68259848721758, 139.76724877909905],{ icon: pinkIcon }).addTo(map).bindPopup('こんにちは！').openPopup();