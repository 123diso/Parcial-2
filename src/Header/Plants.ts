import {GetPlants} from "../services/service"

type plant = {
    id:number,
    commonName:string,
    scientificName:string,
    
}


class PlantsList extends HTMLElement {
    constructor () {
        super(),
        this.attachShadow({mode:'open'})
    }
    async connectedCallback () {
        if(this.shadowRoot){
        const response = await GetPlants();
        console.log(response);
        this.shadowRoot.innerHTML = `
        <div>
        ${response.map((platas:plant)=>`
            <div>
            <h1>${platas.id}</h1>
            <h1>${platas.commonName}</h1>
            <h1>${platas.scientificName}</h1>
            </div>

            <button class ="n-b">boton</button>

            <style>
            
            </style>

            
            `).join("")}
        <div>
        `
        /*
        this.shadowRoot.querySelector.("n-b",(b)=>{
            b.eventLister('click') 
        })
        */
    }}
}

export default PlantsList;

