import { getRandomColor } from '../src/utils'

export default function initApp() {
    console.log('Hello world')

    const body =  document.body
    const button = document.createElement('button')
    button.classList.add('button')
    button.textContent = 'Изменить цвет страницы'
    body.append(button)

    button.addEventListener('click', (event) => {
        body.style.backgroundColor = getRandomColor()
    })
}