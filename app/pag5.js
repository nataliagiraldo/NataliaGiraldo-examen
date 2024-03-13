class Pag5 extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.render()
        let op1 = this.querySelector("#cont1");
        let op2 = this.querySelector("#cont2");
        let op3 = this.querySelector("#cont3");
        let op4 = this.querySelector("#cont4");

        let contenedor = this.querySelector("#main");

        op1.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-6></pag-6>`;
            suma += 380000
        });
        op2.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-6></pag-6>`;
            suma += 380000
        });
        op3.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-6></pag-6>`;
            suma += 380000
        });
        op3.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-6></pag-6>`;
            suma += 380000
        });
        op4.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-6></pag-6>`;
            suma += 380000
        });
    }
    render() {
        this.innerHTML = `<section id="main">
        <h2 class="titulo">¿Como monetizar tu app?</h2>
        
        <div class="opciones">
            <div class="cont" id="cont1">
                <img src="imagenes/answer-4-1.png" alt="">
                <p>Aplicacion gratuita con publicidad</p>

            </div>
            <div class="cont" id="cont2">
                <img src="imagenes/answer-4-2.png" alt="">
                <p>aplicacion de pago</p>

            </div>
            <div class="cont" id="cont3">
                <img src="imagenes/answer-4-3.png" alt="">
                <p>compras dentro de la app</p>

            </div>
            <div class="cont" id="cont4">
                <img src="imagenes/answer-4-4.png" alt="">
                <p>otros/ no lo se todavia</p>

            </div>
        </div>
    </section> `;




    }



}
customElements.define("pag-5", Pag5)