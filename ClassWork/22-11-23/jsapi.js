anime ({
    targets: '.square',
    // left: 400, 
    duration: 2000, 
    easing: 'linear',
    loop: true,
    direction: 'alternate',
    left: {
        value: 300,
        duration: 1000,
    },
    opacity: {
        value: 0.5,
        duration: 500,
    }, 
    rotate: {
        value: 360,
        delay: 1000,
        duration: 1000,
    },
    complete: function() {
        anime ({
            targets: '.square',
            left: 0,
            duration: 1000,
            delay: 2000,
        })
    }
})

anime ({
    targets: '.square2',
    left: 800,
    duration: 4000,
    easing: 'linear',
    loop: 3,
    direction: 'reverse',
    complete: function() {
        anime ({
            targets: '.square2',
            left: 0,
            duration: 1000,
        })
    }
})

anime ({
    targets: '.square3',
    left: 800,
    duration: 1000,
    easing: 'linear',
    direction: 'alternate',
    
    complete: function () {
        document.querySelector('.square3').style.borderRadius = '50%';
    }
}).finished.then(function () {
    anime ({
        targets: '.square3',
        top: 300,
        easing: 'linear', 
        duration: 1000,
    })
});