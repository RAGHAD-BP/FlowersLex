var gardens = [
  {
    name: "Al-Didhan Reserve – Al-Khuttah",
    city: "Hail",
    cityName: "Hail",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyNLyOIk0gAqBGYqzXtljxREWwV8-ums5tiyUN1wwfAU9eO4-iKA0UuPwQO7qSedNm0gxj6RRyM3ovGbhnhjLk7ZZ-aVgLrd36h8i5c5NvfoAktS2SuX0_g2YEdV8ougbKoXJ_z=w408-h720-k-no",
    description: "A natural reserve located in Al-Khuttah, north of Hail. It features seasonal greenery, desert landscapes, and open areas ideal for families and nature lovers.",
    location: "Al-Khuttah Area, Hail",
    link: "https://maps.app.goo.gl/ZABArkBa9eXhBT246?g_st=ipc"
  },
  {
    name: "Al-Othman Taif Rose Farm",
    city: "taif",
    cityName: "Taif",
    image: "https://lh3.googleusercontent.com/p/AF1QipPyZaKqhMIL9H26F4H0y3b_UGWAtEjDVWmzUt9L=w426-h240-k-no",
    description: "One of the well‑known Taif rose farms specializing in traditional rose distillation. Visitors can explore the farm and learn about rose water and oil production.",
    location: "Al-Hada, Taif",
    link: "https://maps.app.goo.gl/jjTeBBws3MwHNQFMA?g_st=ipc"
  },
  {
    name: "Mazra'at al-ward al-hasawi al-mumayaz",
    city: "Eastern Province",
    cityName: "ُEastern Province",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsUIk6NPXzouO-3YH55GsAtGtL8u5Ef0uMwA&s",
    description: "A scenic park in Abha featuring seasonal flowers, green spaces, and relaxing walking paths. It is a popular destination for families and photography lovers.",
    location: "Al-Ahsa, Eastern Province",
    link: "https://maps.app.goo.gl/T7ZX4mTrwe5FR4269?g_st=ipc"
  },
  {
    name: "Dhahran Flower Field",
    city: "Eastern Province",
    cityName: "Eastern Province",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxxWnwCcIohg1j3GDArKiffUT1ZDZbyIOO_mZ46mkIL-kzPGUtxO3gzadRkSV3rVLnzgzktP_h1k5uxgiku1aF6SO0qjhOqrVspL6pr6ricuCqt08wVYyrtLG9XDti9TgB6cTd8RL1C_iH-=w408-h271-k-no",
    description: "A seasonal flower field in Dhahran known for its colorful blooms and open spaces, making it a great spot for outdoor activities and photography.",
    location: "Dhahran, Eastern Province",
    link: "https://maps.app.goo.gl/eECTymVEtRnEArYVA?g_st=ipc"
  },
  {
    name: "New Zulfi Spring Reserve",
    city: "riyadh",
    cityName: "Riyadh",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSysZqGRo64kJjJnKx1YdmN4bi3EYtTNQgHkylhquzwGI5KtdFWhCtHCahXjaAs0ekJeb-AGZwM3WFh5o7cEnEnEJMuWrresqHOnj-zKPjdKvD6GlkmyXvqEVIoBSYq4H0LvjDoYJg=w408-h544-k-no",
    description: "A natural reserve famous for its spring season, wildflowers, and open landscapes. It is one of the most visited seasonal destinations in Al-Zulfi.",
    location: "North Al-Zulfi",
    link: "https://maps.app.goo.gl/31U8sdtiqtQSZLhx8?g_st=ipc"
  },
  {
    name: "Abu Sami Rural Reserve & Farm",
    city: "Al-Qassim",
    cityName: "Al-Qassim",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4fJqKXpzx2Z1ySa-F1IQE_Y20IA4fPI7SQA&s",
    description: "A rural farm offering green spaces, seasonal flowers, and simple agricultural experiences. It is a peaceful destination for families and nature enthusiasts.",
    location: "Al-Qassim Region",
    link: "https://maps.app.goo.gl/AsV4eGgqXdM583AW6?g_st=ipc"
  },
  {
    name: "Premium Al-Ahsa Rose Farm",
    city: "Eastern Province",
    cityName: "Eastern Province",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxL_5DZwI_EAIYtlaOQfMA6qU7b8gn3a0WHur4zPK1ooWwfx6ofZ39vUQilJtaH_8njrG4zzBZ18lc6yC7dxzVJAygJRh_-LqJJx_3YelUgsyayaEJRDceqb8BlBnWrZmEsJvetWw=w408-h306-k-no",
    description: "A specialized farm known for cultivating the famous Al-Ahsa rose. It offers local rose products and a unique agricultural experience for visitors.",
    location: "Al-Ahsa, Eastern Province",
    link: "https://maps.app.goo.gl/3xT2Re784UcHVV6B9?g_st=ipc"
  }
];



var currentGardens = gardens;

function displayGardens() {
  var grid = document.getElementById('gardensGrid');
  var noResults = document.getElementById('noResults');
  var results = document.getElementById('results');
  
  grid.innerHTML = '';
  
  if (currentGardens.length === 0) {
    grid.style.display = 'none';
    noResults.style.display = 'block';
  } else {
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    for (var i = 0; i < currentGardens.length; i++) {
      var garden = currentGardens[i];
      var card = createGardenCard(garden);
      grid.appendChild(card);
    }
  }
  
  var selectedCity = document.getElementById('citySelect').value;
  if (selectedCity === 'all') {
    results.textContent = 'Showing ' + currentGardens.length + ' gardens from all cities';
  } else {
    results.textContent = 'Showing ' + currentGardens.length + ' gardens in ' + currentGardens[0].cityName;
  }
}

function createGardenCard(garden) {
  var card = document.createElement('div');
  card.className = 'garden-card';
  
  var img = document.createElement('img');
  img.className = 'garden-image';
  img.src = garden.image;
  img.alt = garden.name;
  
  var content = document.createElement('div');
  content.className = 'garden-content';
  
  var header = document.createElement('div');
  header.className = 'garden-header';
  
  var name = document.createElement('h3');
  name.className = 'garden-name';
  name.textContent = garden.name;
  
  var cityBadge = document.createElement('span');
  cityBadge.className = 'city-badge';
  cityBadge.textContent = garden.cityName;
  
  header.appendChild(name);
  header.appendChild(cityBadge);
  
  var description = document.createElement('p');
  description.className = 'garden-description';
  description.textContent = garden.description;
  
  var info = document.createElement('div');
  info.className = 'garden-info';
  
  var locationItem = document.createElement('div');
  locationItem.className = 'info-item';
  locationItem.innerHTML = '<span class="info-icon">📍</span><span>' + garden.location + '</span>';
  
  var areaItem = document.createElement('div');
  areaItem.className = 'info-item';
  
  info.appendChild(locationItem);
  
  var visitBtn = document.createElement('a');
  visitBtn.className = 'visit-btn';
  visitBtn.href = garden.link;
  visitBtn.target = '_blank';
  visitBtn.textContent = '🗺️ View Location on Map';
  
  content.appendChild(header);
  content.appendChild(description);
  content.appendChild(info);
  content.appendChild(visitBtn);
  card.appendChild(img);
  card.appendChild(content);
  
  return card;
}

function filterByCity() {
  var selectedCity = document.getElementById('citySelect').value;
  
  if (selectedCity === 'all') {
    currentGardens = gardens;
  } else {
    currentGardens = [];
    for (var i = 0; i < gardens.length; i++) {
      if (gardens[i].city === selectedCity) {
        currentGardens.push(gardens[i]);
      }
    }
  }
  
  displayGardens();
}

function toggleMenu() {
  var mobileMenu = document.getElementById('mobileMenu');
  var overlay = document.getElementById('overlay');
  
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  } else {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
  }
}

window.onload = function() {
  displayGardens();
};