# 闲书book
# 开发步骤
下载该项目  
> git clone or fork  
> 直接在微信开发者工具里打开或者VScode
# 开发指南
* 开发环境
> 微信开发者工具
* 项目结构
> `app.js` 项目入口文件  
> `app.json` 项目全局配置文件，包括`tabBar`,`navigation`,`pages`  
> `app.wxss` 项目全局样式文件  
> `project.config.json` 项目说明文件  
> `images` 项目中需要的图片  
> `pages` 项目页面文件  
>> `books` 书架页面  
>> `buybook` 买旧书页面  
>> `sacn` 扫描书籍页面  
>> `sellbook` 卖旧书页面  
>> `start` 开始欢迎页面  
>> `typeIn` 无法扫描手动录入页面  
>>  `user` 个人中心页面  
* 代码规范
> 微信开发者工具，右键选折格式化代码
* api接口
> [豆瓣开发者](https://developers.douban.com/)里面的图书ISBN api 接口
> 为解决豆瓣屏蔽小程序接口的问题，寻找了别人已经做好的[反向代理](https://github.com/zce/douban-api-proxy)
* 技术要点
> 没有写后端，所以一些API接口通过缓存来模仿
* 代码合并步骤
  * 查看远程分支
  > git branch -r
  * 拉取远程分支并创建本地分支
  > git fetch origin 远程分支名x:本地分支名x  
  使用该方式会在本地新建分支x，但是不会自动切换到该本地分支x，需要手动checkout。但采用此种方法建立的本地分支不会和远程分支建立映射关系。
  * 拉取远程分支的另一个方法
  > git checkout -b 本地分支名x origin/远程分支名x
  使用该方式会在本地新建分支x，并自动切换到该本地分支x.采用此种方法建立的本地分支会和远程分支建立映射关系。注意要git pull一下，然后git merge该分支
  * git push推送到远程分支