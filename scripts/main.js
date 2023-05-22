let img = document.querySelector('img')
img.onclick = function () {
    let src = img.getAttribute('src')
    if (src == 'images/mozilla.svg') {
        img.setAttribute('src', 'images/google.svg')
    } else {
        img.setAttribute('src', 'images/mozilla.svg')
    }
}

let button = document.querySelector('button')
let h1 = document.querySelector('h1')

function setUserName() {
    let name = prompt('请输入名字')
    if (!name) {
        setUserName()
    } else {
        localStorage.setItem('name', name)
        h1.textContent = 'Mozilla酷毙了，' + name
    }
}

button.onclick = function () { setUserName() }

let storageName = localStorage.getItem('name')
if (!storageName) {
    setUserName()
} else[
    h1.textContent = 'Mozilla酷毙了，' + storageName
]