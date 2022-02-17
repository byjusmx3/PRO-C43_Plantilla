class Security {

    constructor(){

        this.access1 = createInput("Código1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Comprobar');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Código1")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Comprobar');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');
//añade el código para crear y colocar el tercer cuadro de entrada y botón.
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//añade el código para que suceda lo correspondiente al hacer clic en el tercer botón.
        

    }
}