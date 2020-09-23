/**
 * @author City
 * @description 数据库连接
 */

const mongoose = require('mongoose')

// 引入数据库配置
// const { user, pwd, host, port, db } = require("../config/db");

// 自动创建索引
mongoose.set('useCreateIndex', true)

// const connectStr =
//     process.env.NODE_ENV === "production"
//         ? `mongodb://${host}:${port}/${db}`
//         : `mongodb://${user}:${pwd}@${host}:${port}/${db}`;

// 连接数据库
mongoose
  .connect(`mongodb://localhost:27017/Todo`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('数据库连接成功'))
  .catch(() => console.log('数据库连接失败'))
