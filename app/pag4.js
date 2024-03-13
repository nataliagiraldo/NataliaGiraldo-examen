class Pag4 extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.render()
        let op1 = this.querySelector("#cont1");
        let op2 = this.querySelector("#cont2");
        let op3 = this.querySelector("#cont3");
        let op4 = this.querySelector("#cont4");

        let contenedor = this.querySelector("#main");

        op1.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-5></pag-5>`;
            suma += 380000
        });
        op2.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-5></pag-5>`;
            suma += 380000
        });
        op3.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-5></pag-5>`;
            suma += 380000
        });
        op3.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-5></pag-5>`;
            suma += 380000
        });
        op4.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-5></pag-5>`;
            suma += 380000
        });
    }
    render(){
        this.innerHTML = `<section id="main">
        <h2 class="titulo">¿Que diseño quieres que tenga tu app?</h2>
        
        <div class="opciones">
            <div class="cont" id="cont1">
                <img src="imagenes/answer-3-1.png" alt="">
                <p>interfaz sencilla</p>

            </div>
            <div class="cont" id="cont2">
                <img src="imagenes/answer-3-2.png" alt="">
                <p>interfaz personalizada</p>

            </div>
            <div class="cont" id="cont3">
                <img src="imagenes/answer-3-3.png" alt="">
                <p>interfaz replixada de la web</p>

            </div>
            <div class="cont" id="cont4">
                <img src="imagenes/answer-3-4.png" alt="">
                <p>No necesito diseño</p>

            </div>
        </div>
    </section> `;
        
        


    }


    
}
customElements.define("pag-4", Pag4)