let heroes = {
  hero1: {
    health: 100
  }
}

let boss = {
  health: 100
}

function drawHero() {
  let template = ''
  for (const key in heroes) {
    const hero = heroes[key]


    template += `
      
      <h1 class="text-light">HERO</h1>
      <img class="rounded shadow" src="https://www.otaquest.com/wp-content/uploads/2019/12/IMG_3107.jpg" alt=""
      height="300px" width="250px">
      <div class ="row">
      <div class ="col mt-2">
      <div class ="progress">
      <div class ="progress-bar" role="progressbar" style:"width ${heroes.health}%;" aria-valuenow="${heroes.health}" aria-valuemin="0"
      aria-valuemax="100" id="${key}-health">
      </div>
      </div>
      </div>
      </div>
      <button class ="btn btn bg-dark text-light mt-3" onclick="heroPunch()">
      <h3>Punch</h3>
      </button>
      <div class ="row">
      <div class ="col mt-2 text-center">
      <button class ="btn btn bg-dark text-light" id="${key}-button" onclick="heroKick('${key}')">
      <h3>Kick</h3>
      </button>
      </div>
      </div>
      `
  }
  document.getElementById('heroes').innerHTML = template
}

function drawBoss() {
  let template = ''


  template += `
    
    <h1 class="text-light text-center">BOSS</h1>
    <img class="rounded shadow"
    src="http://vignette2.wikia.nocookie.net/bloodborne/images/4/43/Martyr_Logarius.png/revision/latest?cb=20150425193635"
    alt="" height="300px" width="250px">
    <div class ="progress mt-2">
    <div class ="progress-bar 100%" role="progressbar" style="width: ${boss.health}%;" aria-valuenow="${boss.health}" aria-valuemin="0"
      aria-valuemax="100" id="boss-health">
    </div>
    `

  document.getElementById('boss').innerHTML = template
}

function heroPunch() {
  if (boss.health <= 100 && boss.health > 0) {
    boss.health -= 5
    console.log('punch', boss.health)
    drawBossesHealth()

  }
}

function heroKick(enemy) {
  if (boss.health <= 100 && boss.health > 0) {
    boss.health -= 10
    console.log('kick', boss.health)
    drawBossesHealth()

  }
}

function drawBossesHealth() {
  console.log('bossKey parameter',);
  let elem = document.getElementById(`boss-health`)
  console.log('style elem', elem);
  // .style = `width: ${bosses[bossKey].health}%`
  if (boss.health >= 0) {
    console.log('health')
    elem.style = `width:${boss.health}%`




  }

}


drawBoss()
drawHero()