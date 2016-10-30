## Usage

```html 
<link rel="stylesheet" href="../style.css">
<script src="index.js"></script>

<select name="s" id="select">
    <option value="111">1text1</option>
    <option value="222">2text2</option>
    <option value="333">3text3</option>
</select>
```

```javascript
const mySelect = new Select('select');
mySelect.value // вернет текущее выбранное значение
```

Чтобы инициализировать строку поиска, передаем вторым параметром true
```javascript
const mySelect = new Select('select', true);
```