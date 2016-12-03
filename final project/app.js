 let books = [
{author: 'Thomas Pynchon' , title:'Bleeding Edge'},
{author: 'Haruki Murakami' , title:'1Q84'},
{author: 'John D MacDonald' , title:'Nightmare in pink'},
{author: 'Ncholas Zakass' , title:'Understanding Ecmascript 6'},
]

function authSearch () {
    let aName = document.getElementById('authorSearch').value.toUpperCase()
  let name = books.filter((x) => x.author.toUpperCase().indexOf(aName) !== -1)
  if (name.length > 0) {
    hideAllBooks('result')
    name.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
  } else {
    hideAllBooks('result')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aName} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}
// event listeners
document.getElementById('autSearch').addEventListener('click', authSearch)



function hideAllBooks (id) {
  document.getElementById(id).innerHTML = ''
}

function useraccount() {
  student.push({title:document.getElementById('name').value,title:document.getElementById('card').value})
  document.getElementById('name').value=""
  document.getElementById('card').value=""
}

// List of users on database

