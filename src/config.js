import path from 'path'

// 服务开放端口
export const startPort = {
    http: 3000,
    https: 3001
}
// 数据库连接信息
export const dbLogin = {
    host: '127.0.0.1',
    user: 'your username here',
    password: 'your password here',
    port: 3306,
    database: 'data_base_name'
}
// swagger配置信息
export const swaggerConfig = {
    swaggerDefinition: {
        info: {
            title: 'Express Template',
            description: '这是一个 express 模板',
            version: '1.0.0',
        },
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: '',
            }
        }
    },
    basedir: __dirname,
    files: [
        path.join(__dirname, '/router/*.js')
    ]
}