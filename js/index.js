class Select{
    constructor(id, search){
        let replacement = document.querySelector(`#${id}`);
        if(replacement.tagName != 'SELECT') return;

        let dropDown = document.createElement('div');
        dropDown.id = 'dropdown';

        dropDown.innerHTML = `
            <input type="text">
            <div class="options">
                ${this.getList(replacement.querySelectorAll('option'))}
            </div>
        `;

        this.options = dropDown.querySelector('.options');
        this.name = replacement.name;

        replacement.parentNode.replaceChild(dropDown, replacement);

        if(search) this.initSearchable(dropDown);
    }

    getList(options){
        let dd_options = '';
        for(let option of options){
            dd_options += this.getOption(option);
        }
        return dd_options;
    }

    getOption(option){
        return `
            <label>
                <input type="radio" name="${this.name}" value="${option.value}">
                <div class="value">${option.innerText}</div>
            </label>
        `;
    }

    get value(){
        return this.options.querySelector(':checked').value;
    }

    initSearchable(dropDown){
        var self = this;
        let style = document.createElement('style');
        dropDown.appendChild(style);

        dropDown.querySelector(':scope > input').addEventListener('input', function () {
            style.innerHTML = self.generateCSS(this.value);
        })
    }

    generateCSS(value){
        if(!value) return '';
        return `
            #dropdown .options :not(:checked):not([value*="${value}"]) + .value {
                display:none;
            }
        `;
    }
}