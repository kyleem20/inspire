import { ProxyState } from "../AppState.js"
import { displaysService } from "../Services/DisplaysService.js"
import { todosService } from "../Services/TodosService.js";


//Private
function _draw() {
  let displays = ProxyState.displays;
  let template = ''
  displays.forEach(d => template += d.Template)
  document.getElementById("weather").innerHTML = /*html*/`
  <div class="my-3">
    <button class="btn btn-secondary text-white elevation-2" onclick="app.displaysController.addDisplay()">Add Value</button>  
    <div class="values d-flex flex-wrap my-3">
      ${template}
    </div>
  </div>
  `

}

function _drawClock() {
  let today = new Date();
  let date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + ' ' + time;
  console.log(dateTime)
  document.getElementById("clock").innerText = dateTime
  // setInterval(_drawClock(), 30000)

}

// function _drawImage() {
//   let image = ProxyState.images
//   // document.getElementById("img").innerHTML = displaysService.getImage(img)
//   document.body.style.backgroundImage = `url('${images.img}')`
//   document.body.style.backgroundRepeat = `no-repeat`
//   document.body.style.backgroundSize = `cover`

//   let imgElem = document.getElementById('image')
//   imgElem.innerHTML = image.Template
// }

function _drawTodos() {

  document.getElementById("todo").innerHTML = todosService.template
}



export class DisplaysController {
  constructor() {
    ProxyState.on("displays", _draw)
    // ProxyState.on("weathers", _drawWeathers)
    // ProxyState.on("images", _drawImage)
    // ProxyState.on("quotes", _quotesDraw)
    ProxyState.on("todos", _drawTodos)
    _draw()
    _drawClock()
    // _drawImage()
    // _drawTodos
  }



  removeDisplay(id) {
    displaysService.removeDisplay(id)
  }

}
