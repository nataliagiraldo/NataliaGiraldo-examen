import { agregar } from "/api/api.js";
class Pag6 extends HTMLElement {
    constructor() {
        super()
    }
    obtenerDatos() {
        let url = "http://154.38.171.54:3001/priceL"
        let datos = {
            "cotizacion": 34000
        }
        agregar(datos, url)


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

            this.obtenerDatos()
        });
        op2.addEventListener("click", () => {

            contenedor.innerHTML = `<pag-6></pag-6>`;
            this.obtenerDatos()
        });
        op3.addEventListener("click", () => {

            contenedor.innerHTML = `<pag-6></pag-6>`;
            this.obtenerDatos()
        });
        op3.addEventListener("click", () => {

            contenedor.innerHTML = `<pag-6></pag-6>`;
            this.obtenerDatos()
        });
        op4.addEventListener("click", () => {

            contenedor.innerHTML = `<pag-6></pag-6>`;
            this.obtenerDatos()
        });
    }
    render() {
        this.innerHTML = `<section id="main">
        <h2 class="titulo">¿Tu app necesita sistema de autenticacion?</h2>
        
        <div class="opciones">
            <div class="cont" id="cont1">
                <img src="imagenes/answer-5-1.png" alt="">
                <p>Si, con redes sociales y email</p>

            </div>
            <div class="cont" id="cont2">
                <img src="imagenes/answer-5-2.png" alt="">
                <p>si, con email</p>

            </div>
            <div class="cont" id="cont2">
                <img src="imagenes/answer-5-3.png" alt="">
                <p>no</p>

            </div>
            <div class="cont" id="cont2">
                <img src="imagenes/answer-5-4.png" alt="">
                <p>no lo se todavia</p>

            </div>
        </div>
    </section> `;




    }



}
customElements.define("pag-6", Pag6)