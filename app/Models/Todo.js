export class Todo {
  constructor(data) {
    this.id = data.id || ''
    this.completed = data.completed || false
    this.description = data.description || ''
    this.user = data.user || ''
  }

  get Template() {
    return `
    <div class="d-flex justify-content-start p-1">
      ${this.Checkedbox}
      ${this.description}
      </label>
      <div class="w-100 d-flex justify-content-end">
      ${this.Button}
      </div>
    </div>
    `
  }
  get Checkedbox() {
    if (!this.id) {
      return ''
    }
    return `
    <input class=" me-2" type="checkbox" name="completed" id="completed" id="flexCheckDefault" ${this.completed ? "checked" : ' '} onclick="app.todosController.isChecked()">
      <label class=" mx-2 justify-content-start" for="flexCheckDefault">
    `
  }
  get Button() {
    return `
      <button type="button" class="btn btn-danger py-1 px-2" onclick="app.todosController.deleteTodo('${this.id}')">X</button>
    `
  }
}
