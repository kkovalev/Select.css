class Select{
    constructor(id){
        let replacement = document.querySelector(`#${id}`);

        let dropDown = document.createElement('div');
        dropDown.id = 'dropdown';

        let mainInput = document.createElement('input');
        mainInput.type = 'text';

        let options = document.createElement('div');
        options.className = 'options';

        dropDown.appendChild(mainInput);
        dropDown.appendChild(options);
        this.dropDown = dropDown;
        this.options = options;

        replacement.parentNode.replaceChild(dropDown, replacement);
        return this;
    }

    setList(arr){
        this.options
            .innerHTML = arr.map(item => {
                return `
                    <label>
                        <input type="radio" name="r">
                        <div class="value">${item}</div>
                    </label>
                `;
            }).join('');
    }

    get value(){
        return this.options.querySelector(':checked + .value').innerText;
    }
}