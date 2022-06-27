const div1 = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')

div1.append(div2)
div2.append(div3)

div1.className = 'red'
div2.className = 'green'
div3.className = 'blue'
div3.textContent = 'я вложен'




document.body.append(div1)

// const tag = document.createElement('ul')
// tag.className = 'list'
// const tag2 = document.createElement('li')
// tag2.textContent = 'Привет, мир'

// tag.append(tag2)





// document.body.prepend(tag)
