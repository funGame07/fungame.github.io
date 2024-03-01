const jokes = document.getElementById('generateJokes')
const menus = document.getElementById('menus')
const menu = document.getElementById('menu')
const gameMenu = document.getElementById('games-menu')
const mulai_game = document.getElementById('mulai-game')

jokes.addEventListener('click', () =>{
    const joke = document.getElementById('jokes')
    $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/jokes?limit=1',
    headers: { 'X-Api-Key': 'nYz2knnW/PMNZviK+7lZ5A==K1o1AYMNX2gzUi5e'},
    contentType: 'application/json',
    success: function(result) {
        const randomJokes = result[0].joke;
        joke.innerText = randomJokes

    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
})

mulai_game.addEventListener('click', () =>{
    menu.style.display = "block"
})

menus.addEventListener('click', () =>{
    menu.style.display = "block"
})

gameMenu.addEventListener('click', () =>{
    menu.style.display = "none"
})
