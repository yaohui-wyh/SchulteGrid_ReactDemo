## Description

Live Demo: <http://alex-yh99.github.io/SchulteGrid_ReactDemo/>

#### About [SchulteGrid](https://en.wikipedia.org/wiki/Schulte_table):

A Schulte table is a grid with randomly distributed numbers or letters used for development of speed reading, peripheral vision, attention and visual perception (wikipedia)

#### About EyeMon <http://eye.qq.com/>

**EyeMon** is a startup project inside Tencent MIG. 

## Development

```
npm install webpack -g
npm install
npm run dev
```

## Test

```
npm install mocha -g
mocha --recursive --reporter mochawesome
```

Test report is generated at `mochawesome-reports/mochawesome.html`

Current [Test Report](http://alex-yh99.github.io/SchulteGrid_ReactDemo/mochawesome-reports/mochawesome.html) hosted on Github page.

## 项目介绍

#### 原型图

<img src="https://raw.githubusercontent.com/alex-yh99/SchulteGrid_ReactDemo/master/docs/prototype.png" width="30%">

#### 开发环境搭建

- `webpack` 构建工具
- `Babel` 编译JSX（**JSX** 是混合使用JavaScript和XML的React开发语言；可以通过代码而不是模版来定义UI）
- `Mocha` 单元测试工具

#### 工程结构

- **容器组件（components）**
    - `header`（*Title* + *Score*，见原型图）
    - `footer`
    - `container`（整体容器组件）
    - `control-panel`（*Start* 按钮控件 + 提示文本：如果方格内是文本而非数字，此处显示正确顺序的文本）
    - `board`（中央方格容器）
    - `cell`（单元格，响应点击逻辑）
- **数据模型（models）**
    - `grid`：代表方格内数据集，提供随机排序、查找当前格子后继的方法等
- **单元测试（tests）**
    - 主要对于Grid类中的数据集构造和洗牌算法写用例
