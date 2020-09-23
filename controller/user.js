// /**
//  * @author City
//  * @description 控制器
//  */

// /* 引入模型 */
// const TodoModel = require('../models/todo')

// class TodoController {
//   static async create(ctx) {
//     const req = ctx.request.body

//     try {
//       const data = await TodoModel.createUser(req)
//       ctx.response.status = 200
//       ctx.body = {
//         code: 200,
//         msg: '创建成功',
//         data
//       }
//     } catch (error) {
//       ctx.response.status = 412
//       ctx.body = {
//         code: 412,
//         msg: '创建失败'
//       }
//     }
//   }

//   static async delete(ctx) {
//     const id = ctx.params.id

//     if (id) {
//       try {
//         const data = await TodoModel.deleteUser(id)
//         ctx.response.status = 200
//         ctx.body = {
//           code: 200,
//           msg: '删除成功',
//           data
//         }
//       } catch (error) {
//         ctx.response.status = 412
//         ctx.body = {
//           code: 412,
//           msg: '删除失败'
//         }
//       }
//     } else {
//       ctx.response.status = 416
//       ctx.body = {
//         code: 416,
//         msg: '参数不齐全'
//       }
//     }
//   }

//   static async update(ctx) {
//     const id = ctx.params.id
//     const upData = ctx.request.body

//     if (id && upData) {
//       try {
//         const data = await UserModel.updateUser(id, upData)
//         ctx.response.status = 200
//         ctx.body = {
//           code: 200,
//           msg: '更新成功',
//           data
//         }
//       } catch (error) {
//         ctx.response.status = 412
//         ctx.body = {
//           code: 412,
//           msg: '更新失败'
//         }
//       }
//     } else {
//       ctx.response.status = 416
//       ctx.body = {
//         code: 416,
//         msg: '参数不齐全'
//       }
//     }
//   }

//   /**
//    * 获取用户
//    *
//    * @static
//    * @param {Object} ctx
//    * @memberof UserController
//    */
//   static async select(ctx) {
//     const id = ctx.params.id
//     ctx.assert(id, 412, '缺少参数')

//     try {
//       const data = await UserModel.select({ _id: id })
//       ctx.body = {
//         code: 200,
//         msg: '获取成功',
//         data
//       }
//     } catch (error) {
//       ctx.response.status = 412
//       ctx.body = {
//         code: 412,
//         msg: '获取失败'
//       }
//     }
//   }

//   /**
//    * 获取所有用户
//    *
//    * @static
//    * @param {Object} ctx
//    * @memberof UserController
//    */
//   static async selectAll(ctx) {
//     try {
//       const data = await UserModel.selectAllUser()
//       ctx.response.status = 200
//       ctx.body = {
//         code: 200,
//         msg: '获取所有成功',
//         data
//       }
//     } catch (error) {
//       ctx.response.status = 412
//       ctx.body = {
//         code: 412,
//         msg: '获取所有失败'
//       }
//     }
//   }
// }

// module.exports = TodoController
