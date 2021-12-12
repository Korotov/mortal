const FIGHTERS =  {
    scorpion : {
        name : 'Scorpion',
        img:   './assets/fighters/scorpion.gif',
        weapon: ['axe'],
        attack: function() {
            console.log(this.name + ' fight...')
        }
    },
    liukang : {
        name : 'Liu Kang',
        img:   './assets/fighters/liukang.gif',
        weapon: ['knife'],
        attack: function() {
            console.log(this.name + ' fight...')
        }
    }
}
const $arena = document.querySelector('.arenas');
const player1 = {
    player: 1,
    fighter: FIGHTERS.scorpion,
    hp: 100
}
const player2 = {
    player: 2,
    fighter: FIGHTERS.liukang,
    hp: 100
}
// Helper functions

//Возвращает случайное целое число в диапазоне [min,max]
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
// возращает HTMLElement с классами, по emmet подобному синтаксису p.myclass -> <p class="myclass">
// .some -> <div class = "some" 
createElement = function(emmet) {
    emmet = emmet.trim();
    let emmetList = emmet.split('.');
    let $el = (emmet[0] != '.') ? document.createElement(emmetList[0].trim())
                                : document.createElement('div')
    emmetList.shift();
    if (emmetList.length === 0) {
        return $el;
    }
    for (className of emmetList) {
        $el.classList.add(className.trim());
    }
    return $el;
} 

function createPlayer(player) {
    let playerClass = 'player' + player.player;
    const $player = createElement('.' + playerClass);
    
    const $progressBar = createElement('.progressbar');
    const $life = createElement('.life');
    $life.style.width = player.hp + '%';
    const $name = createElement('.name');
    $name.innerText = player.fighter.name;
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    const $character = createElement('.character');
    const $img = createElement('img');
    $img.src = player.fighter.img;
    $character.appendChild($img);

    $player.appendChild($progressBar);
    $player.appendChild($character);

    return $player;
}

$arena.appendChild(
    createPlayer(player1)
    );
$arena.appendChild(
    createPlayer(player2)
)
