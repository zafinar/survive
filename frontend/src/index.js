document.addEventListener("DOMContentLoaded",() =>{
const gameContent = document.getElementById('game-content')
const gameScreen = () => (document.querySelector("#game-screen"))
  function renderForm(){
    return `
    <label for="name">Name: </label>
    <input required type="text" id="name" name="new-player-name" placeholder="name"><br>
    <button type="button" id="create-player">Create Player</button>
    `
  }
  gameContent.innerHTML = renderForm()

  gameContent.addEventListener('click', e => {
    if (e.target.id === 'create-player'){
    let name = document.getElementById('name').value
    fetch('http://localhost:3000/api/v1/players', {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({name: name})
    }).then( e => {
      let player = new Player(document.getElementById('name').value)
      // debugger
      console.log(player)}).then( e => {
      gameContent.innerHTML = ""
      gameContent.innerHTML = `<audio loop autoplay>
        <source src="/Users/shirleyzhang/Development/code/survive/frontend/assets/music/Carpenter Brut - LEATHER TEETH - 01 Leather Teeth.mp3" type="audio/mpeg"></audio>`

      const gameScreen = document.createElement('div')
      gameScreen.id = 'game-screen'
      gameContent.appendChild(gameScreen)
      }).then(e =>{
      const gameScreen = document.querySelector("#game-screen")
      const player = document.createElement('div')
      player.id = 'player'
      player.style = "top: 300px; left:700px"
      player.style.height = "16px"
      player.style.width = "15px"
      player.style.background = ` url(/Users/shirleyzhang/Development/code/survive/frontend/assets/images/VictimsAndVillagers.png) ${playerSpriteRender}`
      gameScreen.appendChild(player)
      enemySpawn()




    })
    }

  })


EventListener.moveListener()




})
