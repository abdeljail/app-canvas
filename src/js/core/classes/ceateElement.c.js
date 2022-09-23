
import { string } from "../../helpers/inputs/inputs.text.js";

class createElementTag {

    #element

    constructor(nameElement) {

        try {

            if (!string(nameElement))
                throw new Error('Invalid name Element name "' + nameElement + '"');

            this.#element = nameElement;
            this.#tagElement();

        } catch (error) {
            throw error;
        }

    };

    #tagElement() {
        this.#element = document.createElement(this.#element);
    }

    createClass() {
        try {
            let className = document.createAttribute('class');
            this.#element.setAttributeNode(className);
        } catch (error) {
            throw error;
        }

    }

    createId() {
        try {
            let idName = document.createAttribute('id');
            this.#element.setAttributeNode(idName);
        } catch (error) {
            throw error;
        }
    }

    createAttribute(name) {
        try {

            if (!string(name))
                throw new Error('Invalid attribute name "' + name + '"');

            let attributeName = document.createAttribute(name);
            this.#element.setAttributeNode(attributeName);

        } catch (error) {
            throw error;
        }
    }

    setAttribute(name, value) {
        try {

            if (!string(value))
                throw new Error('Invalid attribute value "' + value + '"');
            if (!string(name))
                throw new Error('Invalid attribute name "' + name + '"');

            this.#element.setAttribute(name, value);

        } catch (error) {
            throw error
        }
    }

    innerHTML(value) {
        this.#element.innerHTML = value;
    }

    get element() {
        return this.#element;
    }


}
export {
    createElementTag
}