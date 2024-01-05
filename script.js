// JavaScript
console.log('Hello world!');
var map = L.map('map').setView([35.68142789721335, 139.76707115201052], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  

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

    L.marker([35.68142789721335, 139.76707115201052],{ icon: pinkIcon }).addTo(map).bindPopup('東京駅<br><img src="images/img01.png" alt="img">');
    L.marker([35.68661122497995, 139.7521900121472],{ icon: whiteIcon }).addTo(map).bindPopup('皇居').openPopup();
    L.marker([35.658763534429866, 139.74544362502766],{ icon: whiteIcon }).addTo(map).bindPopup('東京タワー<br><img src="images/img02.JPG" alt="img">');

    const circle = L.circle([35.68142789721335, 139.76707115201052], {
      color: '#0000cd', //円の輪郭線の色
  fillColor: '#87cefa	', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 3500 //半径、メートルで指定
}).addTo(map);