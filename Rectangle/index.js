function Rectangle(x, y, dai, rong) {
    this.x = x;
    this.y = y;
    this.dai = dai;
    this.rong = rong;
}


function createRectangle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var dai = Math.floor(Math.random() * 100);
    var rong = Math.floor(Math.random() * 100);
    var rectangle = new Rectangle(200, 200, dai, rong);
    ctx.beginPath();
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.dai, rectangle.rong);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    document.getElementById("canh1").innerText = "canh 1 = " + dai
    document.getElementById("canh2").innerText = "canh 2 = " + rong
    document.getElementById("chuVi").innerText = "Chu vi = " + (dai+rong)*2;
    document.getElementById("dienTich").innerText = "Dien tích = " + dai*rong;
}

createRectangle();