class Pag3 extends HTMLElement{
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
            
            contenedor.innerHTML = `<pag-4></pag-4>`;
            suma += 380000
        });
        op2.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-4></pag-4>`;
            suma += 380000
        });
        op3.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-4></pag-4>`;
            suma += 380000
        });
        op3.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-4></pag-4>`;
            suma += 380000
        });
        op4.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-4></pag-4>`;
            suma += 380000
        });
    }
    render(){
        this.innerHTML = `<section id="main" >
        <h2 class="titulo">¿Que tipo de app necesitas?</h2>

        <div class="opciones">
            <div class="cont" id= "cont1">
                <img src="imagenes/answer-2-1.png" alt="">
                <p>Aplicacion android</p>

            </div>
            <div class="cont" id= "cont2">
                <img src="imagenes/answer-2-2.png" alt="">
                <p>Aplicacion ios</p>

            </div>
            <div class="cont" id= "cont3">
                <img src="imagenes/answer-2-3.png" alt="">
                <p>Aplicacion windows iphone</p>

            </div>
            <div class="cont" id= "cont4">
                <img src="imagenes/answer-2-4.png" alt="">
                <p>Aplicacion Android ios</p>

            </div>
        </div>
    </section> `;
        
        


    }


    
}
customElements.define("pag-3", Pag3)