function Temperature(c, f, k) {
    this.c = c;
    this.f = f;
    this.k = k;
}

function chuyenDoi() {

    let c = 25;
    let f = (c * 1.8) + 32
    let k = c + 273.15;

    let temperature = new Temperature(c,f,k);
    alert( temperature.c +" , " +temperature.f +" , " + temperature.k ) ;

}
chuyenDoi()
