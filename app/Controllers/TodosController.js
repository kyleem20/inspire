import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _drawTodos() {
  let todo = ProxyState.todos
  let template = ''
  todo.forEach(t => template += t.Template)
  document.getElementById('todo-form').innerHTML = template
  _drawCount()
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
    ProxyState.on('checked', _drawCount)

    this.getTodo()
  }

  async addTodo() {
    try {

      window.event.preventDefault()
      const form = window.event.target
      const newForm = {
        // @ts-ignore
        description: form.description.value
      }
      await todosService.addTodo(newForm)
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
  async getTodo() {
    try {
      await todosService.getTodo()
    } catch (error) {
      console.error("AddTodo is broken", error)
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