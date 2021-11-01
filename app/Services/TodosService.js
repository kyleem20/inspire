import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"



class TodosService {

  async getTodo(newTodo) {
    let result = await sandboxApi.post('/kylee/todos', newTodo)
    const results = new Todo(result.data)
    ProxyState.todos = [...ProxyState.todos, results]
  }

  async addTodo() {
    let res = await sandboxApi.get('/kylee/todos')
    ProxyState.todos = res.data.map(t => new Todo(t))
    ProxyState.todos = ProxyState.todos
  }

  async deleteTodo(id) {
    if (window.confirm('Do you want to delete this Todo?')) {
      await sandboxApi.delete('/kylee/todos/' + id)
      ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
      ProxyState.todos = ProxyState.todos
    }
  }

  async putTodo(id) {
    let find = ProxyState.todos.find(f => f.id == id)
    const res = await sandboxApi.put('kylee/todos/' + id, find)
    find = new Todo(res.data)
    ProxyState.todos = ProxyState.todos
  }

  async isChecked() {
    const todos = ProxyState.todos
    todos.completed = !todos.completed
    const res = await sandboxApi.put('kylee/todos/', todos.completed)
    ProxyState.todos = ProxyState.todos
  }



}


export const todosService = new TodosService()

