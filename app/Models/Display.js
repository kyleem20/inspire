
export class Display {
  constructor(data) {
    this.id = data.id || ''
    this.index = data.index || ''
    this.weather = data.weather
    this.quote = data.quote
    // this.image = data.image
    this.todo = data.todo

  }
  get Template() {
    return /*html*/`

    `
  }
}
