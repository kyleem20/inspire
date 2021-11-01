import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _drawTodos() {
  let todo = ProxyState.todos
  let template = ''
  todo.forEach(t => template += t.Template)
  document.getElementById('todo-form').innerHTML = template
}

function _drawCount() {
  const todos = ProxyState.todos
  let template = ''
  let countTodo = todos.filter(t => t.completed).length
  template = `<h6 class="text-info"> ${countTodo} Completed/ ${todos.length} Total</h6>`
  document.getElementById('todo-count').innerHTML = template

}


export class TodosController {
  constructor() {
    ProxyState.on('todos', _drawTodos)
    ProxyState.on('todos', this.isChecked)
    ProxyState.on('checked', _drawCount)
    this.isChecked()
    this.addTodo()
    _drawTodos()
    _drawCount()

  }

  async getTodo(id) {
    try {

      window.event.preventDefault()
      const form = window.event.target
      const newForm = {
        // @ts-ignore
        description: form.description.value
      }
      await todosService.getTodo(newForm)


      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('GetTodo', error)
    }
  }
  async deleteTodo(id) {
    try {
      await todosService.deleteTodo(id)
    } catch (error) {
      console.error("DeleteTodo is broken", error)
    }
  }
  async addTodo() {
    try {

      await todosService.addTodo()
    } catch (error) {
      console.error("AddTodo is broken", error)
    }
  }



  async isChecked() {
    try {
      await todosService.isChecked()
    } catch (error) {
      console.error("isChecked is broken", error)

    }
  }
  async putTodo(id) {
    try {
      await todosService.putTodo(id)
    } catch (error) {
      console.error("putTodo is broken", error)

    }
  }
}