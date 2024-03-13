class Pag2 extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.render()
        
        let op1 = this.querySelector("#cont1");
        let op2 = this.querySelector("#cont2");
        let op3 = this.querySelector("#cont3");

        let contenedor = this.querySelector("#main");

        op1.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-3></pag-3>`;
            suma += 300000
            
        });
        op2.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-3></pag-3>`;
            suma += 300000
            
        });
        op3.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-3></pag-3>`;
            suma += 380000
            
        });
    }
    render() {
        this.innerHTML = `<section id="main">
        <h2 class="titulo">¿Que nivel de calidad estas buscando?</h2>
        
        <div class="opciones">
            <div class="cont" id="cont1">
                <img src="imagenes/answer-1-1.png" alt="">
                <p>calidad optima</p>

            </div>
            <div class="cont" id="cont2">
                <img src="imagenes/answer-1-2.png" alt="">
                <p>buena relacion calidad/precio</p>

            </div>
            <div class="cont" id="cont3">
                <img src="imagenes/answer-1-3.png" alt="">
                <p>no me importa tanto la calidad</p>

            </div>
            
            

        </div>
    </section>`;




    }



}
customElements.define("pag-2", Pag2)