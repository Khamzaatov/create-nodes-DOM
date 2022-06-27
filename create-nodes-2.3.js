const ul = document.createElement('ul')
function render(arr) {
 for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = arr[i].url
    a.textContent = arr[i].name
    li.append(a)
    ul.append(li)
 }
}
render([
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ])
  
  document.body.prepend(ul)