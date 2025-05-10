import { store } from '../flux/Store';

class Root extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <div>
            <plan-element></plan-element>
            </div>

            `
        }
    }
}

export default Root;