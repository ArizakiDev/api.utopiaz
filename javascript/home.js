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