1、全局安装babel,npm install --global babel-cli
2、检查babel是否安装成功，babel --version
3、定义.babelrc是babel的配置文件，存放在根目录下，该文件用来设置转码规则和插件
    3.1,babel是转码器，把es6代码转成es5运行，因为es6浏览器的兼容很差，所有要兼容
4、安装转码器，npm install -save-dev babel-preset-es2015
5、转码方法
    5.1、转码结果写入一个文件,mkdir dist1
    5.2、转码指定文件，命令：babel src/example.js -o dist1/compiled.js
    5.3、整个目录转码 babel src -d dist2