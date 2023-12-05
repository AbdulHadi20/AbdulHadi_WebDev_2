// anime ( {
//     targets: '.parent div',
//     rotate: 90,
//     delay: anime.stagger(200, {grid: [3, 3], from: 'center'}),
//     duration: 2000,

// })

const squares = anime ( {
    targets: '.parent div',
    rotate: 90,
    delay: anime.stagger(200, {grid: [3, 3], center: 'x'}),
    duration: 2000,
    autoplay: false,
})

document.querySelector('.play').onclick =  squares.play;
document.querySelector('.pause').onclick =  squares.pause;
document.querySelector('.restart').onclick =  squares.restart;
document.querySelector('.reverse').onclick =  squares.reverse;

const getTimestamp=document.querySelector('.timestamp');
getTimestamp.oninput=function(){
    squares.seek(getTimestamp.value)
}
const getScroller=document.querySelector('.scroller');
getScroller.oninput=function(){
    squares.seek(squares.duration*(getScroller.value/100))
}
