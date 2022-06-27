const tag = document.createElement('ul')
tag.className = 'list'
const tag2 = document.createElement('li')
tag2.textContent = 'Привет, мир'

tag.append(tag2)





document.body.prepend(tag)


// Следом создай узел тега li с текстовым контентом "привет, мир". 
// Вложи узел li внутрь узла ul. Выведи в консоль оба получившихся узла.