/**
 * @author City
 * @description 模型
 */

const mongoose = require('mongoose')

/* 引入规则 */
const todoSchema = require('../schema/todo')

/* 生成模型 */
const Todo = mongoose.model('Todo', todoSchema)

/* 模型操作 */
class TodoModel {
  static async create(info) {
    return await Todo.create(info)
  }

  static async delete(id) {
    return await Todo.deleteOne({ _id: id })
  }

  static async update(id, info) {
    return await Todo.updateOne({ _id: id }, info)
  }

  static async select(id) {
    return await Todo.findById(id)
  }

  static async selectAll() {
    return await Todo.find({})
  }
}

module.exports = TodoModel
