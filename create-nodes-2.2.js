function render(arr) {
 const ul = document.createElement('ul')
 for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li')
    li.textContent = arr[i]
    ul.append(li)
 }
 document.body.prepend(ul)
}
render(['javascript', 'python', 'c++'])




// Оформи предыдущее задание в виде функции render(). Функция должна принимать
//  в качестве параметра массив из слов, создавать указанные узлы и добавлять их в тег body