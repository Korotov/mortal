const fighters =  {
    scorpion : {
        name : 'Scorpion',
        hp :   100,
        img:   './assets/fighters/scorpion.gif',
        weapon: ['axe'],
        attack: function() {
            console.log(this.name + ' fight...')
        }
    },
    liukang : {
        name : 'Liu Kang',
        hp :   90,
        img:   './assets/fighters/liukang.gif',
        weapon: ['knife'],
        attack: function() {
            console.log(this.name + ' fight...')
        }
    }
}
function createPlayer(playerClass, fighter) {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = fighter.hp;

    const $name = document.createElement('div');
    $name.innerText = fighter.name;

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');
    const $img = document.createElement('img');
    $img.src = fighter.img;
    $character.appendChild($img);

    $player.appendChild($progressBar);
    $player.appendChild($character);

    return $player;
}
const $arena = document.querySelector('.arenas')
$arena.appendChild(
    createPlayer('player1', fighters.scorpion)
    );
$arena.appendChild(
    createPlayer('player2', fighters.liukang)
)
