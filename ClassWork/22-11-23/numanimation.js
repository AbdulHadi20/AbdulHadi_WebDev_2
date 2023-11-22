anime ({
    targets: '.square',
    left: 500
})

const squarestats = document.querySelector('.square')
const squaredistance = { 
    distance: 0,
}

anime ({
    targets: squaredistance,
    distance: 500,

    update: function() {
        squarestats.innerHTML = JSON.stringify(squaredistance)
    }
})

anime ({
    targets: '.count',
    value: 500,
    round: 1, 
    easing: 'linear',
})

//moving diagonaly
anime({
    targets: '.square',
    translateX: '+=500',
    translateY: '+=500',
})

//using random
anime ({
    targets: '.square', 
    translateX: anime.random(100,500),
    translateY: anime.random(100,500),
})
