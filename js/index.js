class Select{
    constructor(id){
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
}