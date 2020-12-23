# 说明

此分支使用 [vuepress](https://www.vuepress.cn/) 构建文档，使用的 md 文件在 pages-frond-end-interview 分支下，并作为子模块引入

# 运行

```bash
git clone https://github.com/cuilongjin/docs.git --recursive
# or
git clone https://github.com/cuilongjin/docs.git
cd docs/docs/pages
git submodule init
git submodule update
```

```bash
npm i
npm run serve
```
