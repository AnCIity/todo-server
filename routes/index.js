const TodoModel = require('../models/todo')

module.exports = router => {
  router.prefix('/todo')

  // 新增
  router.post('/', async function (ctx, next) {
    const data = await TodoModel.create(ctx.request.body)
    ctx.body = {
      status: true,
      msg: '创建成功',
      data
    }
  })

  // 删除
  router.delete('/:id', async function (ctx, next) {
    const id = ctx.params.id

    const data = await TodoModel.delete(id)

    ctx.body = {
      status: true,
      msg: '删除成功',
      data
    }
  })

  // 更新
  router.put('/:id', async function (ctx, next) {
    const id = ctx.params.id
    const info = ctx.request.body

    const data = await TodoModel.update(id, info)

    ctx.body = {
      status: true,
      msg: '更新成功',
      data
    }
  })

  // 获取
  router.get('/:id', async function (ctx, next) {
    const id = ctx.params.id

    const data = await TodoModel.select(id)

    ctx.body = {
      status: true,
      msg: '查询成功',
      data
    }
  })

  // 获取所有
  router.get('/', async function (ctx, next) {
    const data = await TodoModel.selectAll()

    ctx.body = {
      status: true,
      msg: '查询成功',
      data
    }
  })
}
