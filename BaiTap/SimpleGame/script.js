function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
    }

    this.moveLeft = function () {
        this.left -= this.speed;
    }

    this.moveTop = function () {
        this.top += this.speed
    }
    this.moveDown = function () {
        this.top -= this.speed
    }

}

var hero = new Hero('1.png', 20, 30, 200, 300);


function start() {
    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            hero.moveDown()
        } else if (e.keyCode == '40') {
            hero.moveTop()
        } else if (e.keyCode == '37') {
            hero.moveLeft()
        } else if (e.keyCode == '39') {
            hero.moveRight();
        }

    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 200)
}

start();