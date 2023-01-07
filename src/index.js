import '../index.css'
import JS_IMAGE from '../assets/js.png'


const jsImgHtml = document.createElement('img')
jsImgHtml.className = 'js-img'
jsImgHtml.src = JS_IMAGE

document.body.append(jsImgHtml)
console.log('Hello World!')