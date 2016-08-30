# WREN
WREN  - 使用Webpack+React+Nodejs+Express快速构建项目

### First 

Init npm and create project structure.

The structure is like:

```
WREN
	-client						//font-end codes 前端代码
		-static					//save font-end logic codes and static files存放前端逻辑代码与静态文件
			-css				//style codes样式代码
			-img				
			-js					//javascript logic codes逻辑代码
				-store			//save logic codes of component gets and sends data with back-end, like calling  interface 存放组件与后端交互的逻辑，如接口调用等
				-view			//save all components存放所有组件
			-output				//after using webpack package js to output path webpack打包后的文件
			webpack.config.js	//webpack config file webpack配置文件
		-view					//html files html文件
			index.html			//index page 主页
	-node_modules
	-server						//back-end codes, includes connecting with db and encapsulating interface for font-end后端代码，包括与数据库的交互和接口的封装等
	index.js					//project entry, also can be named app.js项目入口文件，也可叫app.js
	package.json				//npm config file
```











---

The project is built after reading <<[从零开始 - 使用React+Webpack+Nodejs+Express快速构建项目](http://www.tuicool.com/articles/6FfQNfI)>>.

If any questions, please connect with <492753662@qq.com>.

 Thanks~