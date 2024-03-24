var lastUpdateElement = document.getElementById('lastUpdate');
var lastUpdateDate = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
lastUpdateElement.textContent = lastUpdateDate.toLocaleDateString('fr-FR', options);

function toggleModal() {
  var modal = document.getElementById('infos');
  modal.classList.toggle('is-active');
}

var modalButton = document.querySelector('[data-target="infos"]');
modalButton.addEventListener('click', toggleModal);
document.addEventListener('DOMContentLoaded', function() {
  if (navigator.hardwareConcurrency) {
    document.getElementById('cpuInfo').textContent = navigator.hardwareConcurrency + ' cœurs';
  } else {
    document.getElementById('cpuInfo').textContent = 'Informations non disponibles';
  }

  document.getElementById('osInfo').textContent = navigator.platform;

  document.getElementById('screenResolution').textContent = window.screen.width + 'x' + window.screen.height;

  if (navigator.deviceMemory) {
    document.getElementById('availableMemory').textContent = navigator.deviceMemory + ' Go';
  } else {
    document.getElementById('availableMemory').textContent = 'Informations non disponibles';
  }

  fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('publicIp').textContent = data.ip;
    });

  var browserInfo = navigator.userAgent;
  document.getElementById('browserInfo').textContent = browserInfo;

  document.getElementById('protocol').textContent = window.location.protocol;
  document.getElementById('port').textContent = window.location.port || "80";
});

function changeTheme() {
  var themeSelector = document.getElementById('themeSelector');
  var selectedTheme = themeSelector.options[themeSelector.selectedIndex].value;
  applyTheme(selectedTheme);
}

function applyTheme(theme) {
  if (theme === 'default') {
    removeSnowflakes();
    removeCherryBlossoms();
    removeCoconuts();
    removeOrangeLeaves();
  } else if (theme === 'christmas') {
    createSnowflakes();
    removeCherryBlossoms();
    removeCoconuts();
    removeOrangeLeaves();
  } else if (theme === 'summer') {
    createCoconuts();
    removeSnowflakes();
    removeCherryBlossoms();
    removeOrangeLeaves();
  } else if (theme === 'spring') {
    createCherryBlossoms();
    removeCoconuts();
    removeSnowflakes();
    removeOrangeLeaves();
  } else if (theme === 'autumn') {
    createOrangeLeaves();
    removeCoconuts();
    removeSnowflakes();
    removeCherryBlossoms();
  } else {
    removeSnowflakes();
    removeCherryBlossoms();
    removeCoconuts();
    removeOrangeLeaves();
  }
}
function createCherryBlossoms() {
  var cherryBlossomsContainer = document.getElementById('cherry-blossoms-container');
  for (var i = 0; i < 50; i++) {
    var cherryBlossom = document.createElement('div');
    cherryBlossom.className = 'cherry-blossom';
    cherryBlossom.innerHTML = '🌸';
    cherryBlossom.style.left = Math.random() * 100 + 'vw';
    cherryBlossom.style.animationDuration = Math.random() * 2 + 2 + 's';
    cherryBlossomsContainer.appendChild(cherryBlossom);
  }
}

function removeCherryBlossoms() {
  var cherryBlossomsContainer = document.getElementById('cherry-blossoms-container');
  cherryBlossomsContainer.innerHTML = '';
}

function createCoconuts() {
  var coconutsContainer = document.getElementById('coconuts-container');
  for (var i = 0; i < 30; i++) {
    var coconut = document.createElement('div');
    coconut.className = 'coconut';
    coconut.innerHTML = '🥥';
    coconut.style.left = Math.random() * 100 + 'vw';
    coconut.style.animationDuration = Math.random() * 2 + 2 + 's';
    coconutsContainer.appendChild(coconut);
  }
}

function removeCoconuts() {
  var coconutsContainer = document.getElementById('coconuts-container');
  coconutsContainer.innerHTML = '';
}

function createOrangeLeaves() {
  var orangeLeavesContainer = document.getElementById('orange-leaves-container');
  for (var i = 0; i < 50; i++) {
    var orangeLeaf = document.createElement('div');
    orangeLeaf.className = 'orange-leaf';
    orangeLeaf.innerHTML = '🍁';
    orangeLeaf.style.left = Math.random() * 100 + 'vw';
    orangeLeaf.style.animationDuration = Math.random() * 2 + 2 + 's';
    orangeLeavesContainer.appendChild(orangeLeaf);
  }
}

function removeOrangeLeaves() {
  var orangeLeavesContainer = document.getElementById('orange-leaves-container');
  orangeLeavesContainer.innerHTML = '';
}

function removeSnowflakes() {
  var snowflakesContainer = document.getElementById('snowflakes-container');
  snowflakesContainer.innerHTML = '';
}

function createSnowflakes() {
  var snowflakesContainer = document.getElementById('snowflakes-container');
  for (var i = 0; i < 100; i++) {
    var snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '*';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 2 + 2 + 's';
    snowflakesContainer.appendChild(snowflake);
  }
}

function removeSnowflakes() {
  var snowflakesContainer = document.getElementById('snowflakes-container');
  snowflakesContainer.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
  changeTheme();
});


function getRandomColor() {
  var hue = Math.floor(Math.random() * 360); // Teinte
  var saturation = Math.floor(Math.random() * 50) + 50; // Saturation entre 50% et 100%
  var lightness = Math.floor(Math.random() * 30) + 60; // Luminosité entre 60% et 90%
  return 'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)';
}

// Fonction pour changer la couleur du texte
function changeTextColor() {
  var multicolorText = document.getElementById('multicolorText');
  multicolorText.style.color = getRandomColor();
}

// Mettre à jour la couleur toutes les 1000 millisecondes (1 seconde)
setInterval(changeTextColor, 400);

function credits() {
  var modal = document.getElementById('credits');
  modal.classList.toggle('is-active');
}

var modalButton = document.querySelector('[data-target="credits"]');
modalButton.addEventListener('click', credits);

document.addEventListener("DOMContentLoaded", function() {
  fetch('https://api.ipbase.com/v1/json/')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      const country = data.country_name;
      const city = data.city;
      const time_zone = data.time_zone;
      const country_code = data.country_code;

      const payload = {
        embeds: [{
          title: "Nouvelle visite sur le site",
          description: `IP provenant de la page des cracks: ${ipAddress}`,
          fields: [
            { name: "Pays", value: country },
            { name: "Ville", value: city },
            { name: "Time zone", value: time_zone },
            { name: "Code pays", value: country_code },

          ],
          color: 0x0099ff // Couleur du message
        }]
      };

      const webhookUrl = "https://ptb.discord.com/api/webhooks/1221437715426574386/mFJXqWZW7Vx756_x2Gq-CTf1MsVCS5bm672lkjgLt_rExeC-I8P_MdKVnLM1jz_bMv4C"; // Remplacez ceci par votre propre URL de webhook Discord

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(response => {
          if (response.ok) {
            console.log("Données envoyées avec succès sur le webhook Discord");
          } else {
            console.error("Erreur lors de l'envoi des données sur le webhook Discord");
          }
        })
        .catch(error => {
          console.error("Erreur lors de la requête au webhook Discord", error);
        });
    })
    .catch(error => {
      console.error("Erreur lors de la récupération des informations", error);
    });
});
