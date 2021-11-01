import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js";

function _drawImage() {
  let image = ProxyState.images
  document.body.style.backgroundImage = `url(${image.url})`
  document.body.style.backgroundRepeat = `no-repeat`
  document.body.style.backgroundSize = `cover`

}

function _drawClock() {
  let today = new Date();
  let date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + ' ' + time;
  // console.log(dateTime)
  document.getElementById('clock').innerText = dateTime
  setTimeout(_drawClock, 1000)
}

export class ImagesController {
  constructor() {
    this.getImage()
    ProxyState.on('images', _drawImage)
    _drawClock()
  }

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error("GetImage is broken", error)
    }
  }
}