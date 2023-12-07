const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

// 启用Gzip压缩
app.use(compression());

// 设置MIME类型
express.static.mime.define({
    'application/wasm': ['wasm'],
    'application/octet-stream': ['data', 'mem', 'unityweb']
});

const updateInfo = {
    url1: `http://localhost:${ PORT }/public/1.mp4`,
    url_1: `http://localhost:${ PORT }/public/1.jpg`,
    url2: `http://localhost:${ PORT }/public/2.mp4`,
    url_2: `http://localhost:${ PORT }/public/2.jpg`,
    url3: `http://localhost:${ PORT }/public/3.mp4`,
    url_3: `http://localhost:${ PORT }/public/3.jpg`,
};

// 存放更新文件的目录
const updatesDirectory = path.join(__dirname, 'public');

// 设置静态文件目录为public
app.use(express.static(updatesDirectory));

// 主页路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/public/info.json', (req, res) => {
    res.json(updateInfo);
});

// 启动服务器并监听所有网络接口
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${ PORT }`);
});
