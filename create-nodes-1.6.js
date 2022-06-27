const div = document.createElement('div')
const ul = document.createElement('ul')
const li_one = document.createElement('li')
const li_two = document.createElement('li')
const a1 = document.createElement('a')
const a2 = document.createElement('a')

a1.href = "https://instagram.com/intocode"
a2.href = "https://intocode.ru"

a1.textContent = 'наш инстаграм'
a2.textContent = 'наш сайт'


div.append(ul)
ul.append(li_one, li_two)
li_one.append(a1)
li_two.append(a2)



document.body.prepend(div)






{/* <div>
  <ul>
    <li>
      <a href="https://instagram.com/intocode">наш инстаграм</a>
    </li>
    <li>
      <a href="https://intocode.ru">наш сайт</a>
    </li>
  <ul>
</div> */}