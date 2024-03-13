

class Main extends HTMLElement {
    constructor() {
        super()
    }
    
    connectedCallback() {
        this.render()
        let boton = this.querySelector("#empezar");
        let contenedor = this.querySelector("#main");


        boton.addEventListener("click", () => {
            
            contenedor.innerHTML = `<pag-2></pag-2>`;

        });



    }

    render() {
        this.innerHTML = `<body>
        <main id="main">
        <div class="imagen1">
            <img src="imagenes/answer-1-1.png" alt="">

        </div>
        
        <h2>¿Cuanto cuesta desarrollar mi <span color="blue">app GBP</span>?</h2>
        <p>calucula de forma rapida el costo para crear tu app, contestando estas sencillas preguntas </p>
        <div class="boton">
            <button id="empezar"type="button">EMPEZAR</button>

        </div>
        
    </main>
    </body>`;

    }




}
customElements.define("pag-principal", Main)