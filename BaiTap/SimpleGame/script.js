function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.width = 200;
    this.height = 200;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
    };
    this.moveLeft = function () {
        this.left -= this.speed;
    };
    this.moveUp = function () {
        this.top -= this.speed;
    };
    this.moveDown = function () {
        this.top += this.speed;
    }

}

var hero = new Hero('1.png', 20, 30, 200, 50);
let width_limit = window.innerWidth - hero.width;
let height_limit = window.innerHeight-hero.height;

function start(){
    if(hero.left < width_limit && hero.top === 20){
        hero.moveRight();
    } else if (hero.left >= width_limit && hero.top < height_limit){
        hero.moveDown();

    } else if (hero.left> 30 && hero.top > height_limit){
        hero.moveLeft();
    } else {
        hero.moveUp()
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100);
}

start();;