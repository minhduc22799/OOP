let ElictricLamp =  function (status) {
    this.status = status;

     this.getStatus = function (){
        return this.status;
    }
}

let SwitchButton = function (lamp, status){
    this.lamp = lamp;
    this.status = status;

    this.getLamp = function (){
        return this.lamp;
    }
    this.setLamp = function (){
        this.lamp = lamp
    }

    this.connectToLamp = function (){
        return this.lamp = ElictricLamp;
    }

    this.switchOff = function (){
        this.lamp.status = false;
        return "bong den dang tat";
    }

    this.switchOn = function (){
        this.lamp.status = true;
        return "bong den dang bat";
    }

}

let electricLamp1 = new ElictricLamp(false);
let swictchButton1 = new SwitchButton(electricLamp1,false);

document.write("</br>"+swictchButton1.switchOn());
document.write("</br>"+electricLamp1.getStatus());

document.write("</br>"+swictchButton1.switchOff());
document.write("</br>"+electricLamp1.getStatus());

