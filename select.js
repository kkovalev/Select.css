class Select{
    constructor(id){
        let replacement = document.querySelector(`#${id}`);
        if(replacement.tagName != 'SELECT') return;

        let dropDown = document.createElement('div');
        dropDown.id = 'dropdown';

        let mainInput = document.createElement('input');
        mainInput.type = 'text';

        let options = document.createElement('div');
        options.className = 'options';

        dropDown.appendChild(mainInput);
        dropDown.appendChild(options);
        this.options = options;
        this.name = replacement.name;
        this.setList(replacement.querySelectorAll('option'));

        replacement.parentNode.replaceChild(dropDown, replacement);
    }

    setList(options){
        let dd_options = '';
        for(let i = 0; i < options.length; i++){
            dd_options += this.getOption(options[i]);
        }

        this.options.innerHTML = dd_options;
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