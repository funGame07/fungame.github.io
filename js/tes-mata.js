const menus = document.getElementById('menus')
const menu = document.getElementById('menu')
const gameMenu = document.getElementById('games-menu')
const button = document.getElementById('answer')
const button2 = document.getElementById('answer-2')
const button3 = document.getElementById('answer-3')
const jumpscare = document.getElementById('jumpscare')
const dot = document.getElementById('dot')

menus.addEventListener('click', () =>{
    menu.style.display = "block"
})

gameMenu.addEventListener('click', () =>{
    menu.style.display = "none"
})

button.addEventListener('click', () =>{
    const reveal = document.getElementById('true')
    const game2 = document.getElementById('game-2')
    const game1 = document.getElementById('game-1')
    reveal.style.opacity = 1
    setTimeout(() =>{
        game1.style.display = 'none'
        game2.style.display = 'block'
        reveal.style.opacity = 0
    }, 2000)
    
})

button2.addEventListener('click', () =>{
    const reveal = document.getElementById('true-2')
    const game3 = document.getElementById('game-3')
    const game2 = document.getElementById('game-2')
    reveal.style.opacity = 1
    setTimeout(() =>{
        game2.style.display = 'none'
        game3.style.display = 'block'
        reveal.style.opacity = 0
    }, 2000)

})

button3.addEventListener('click', () =>{
    const game4 = document.getElementById('game-4')
    const game3 = document.getElementById('game-3')
    setTimeout(() =>{
        game3.style.display = 'none'
        game4.style.display = 'block'
    }, 1000)

    //jumpscare
    setTimeout(() =>{
        const myAudio = document.getElementById('myAudio');
        myAudio.autoplay = true;
        myAudio.load()
    },12700) 
    setTimeout(() =>{
        jumpscare.style.display = 'block'
        game4.style.display = 'none'
    }, 13100)
})

jumpscare.addEventListener('click', () =>{
    const game1 = document.getElementById('game-1')
    jumpscare.style.display = 'none';
    game1.style.display = 'block'
})