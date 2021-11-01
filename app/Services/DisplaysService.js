import { ProxyState } from "../AppState.js"
import { Display } from "../Models/Display.js"
// import { Image } from "../Models/Image.js"
import { sandboxApi } from "./AxiosService.js"

class DisplaysService {





  removeDisplay(id) {
    const displays = ProxyState.displays.filter(v => v.id !== id)
    ProxyState.displays = displays
  }
}

export const displaysService = new DisplaysService();

