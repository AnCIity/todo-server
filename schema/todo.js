/**
 * @author City
 * @description todo schema
 */

const mongoose = require('mongoose')

/* schema */
const schema = {
  value: {
    type: String
  },
  status: {
    type: String,
    required: [true, '状态不能为空'],
    enum: ['done', 'undone'],
    default: 'undone'
  }
}

/* user Schema */
const todoSchema = new mongoose.Schema(schema)

module.exports = todoSchema
