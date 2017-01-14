# Paper White - A Hexo Theme
================

[![](https://od8634671.qnssl.com/github/Paper-White/Showcase-Template-Flat-Presentation.png)](https://github.com/xingoxu/hexo-theme-paper-white/archive/master.zip)

[图看不到点这里~~~~(>_<)~~~~](https://od8634671.qnssl.com/github/Paper-White/Showcase-Template-Flat-Presentation.png)

# Intro

[Yilia](https://github.com/litten/hexo-theme-yilia) 是为 [hexo](https://github.com/tommy351/hexo) 2.4+制作的主题。崇尚简约优雅，以及极致的性能。 
  
本主题是在Yilia的基础上，对界面进行大幅改造，使其看起来更清爽，简单  
在功能上，对一些感觉好像并没有什么卵用的东西进行了屏蔽（暂时，会逐步剔除）   
在细节上，增加了一些动画，使得整个页面阅读区清晰，交互区有趣，并仍保持极致的性能    
   
~~以上都是我瞎编的~~   
  
暂时仍然没有向IE8及以下兼容  

~~（当然不会慢慢继续兼容的）~~  


你可以点击 [我的博客](http://blog.xingoxu.com/) 与 [示例文章](https://blog.xingoxu.com/2016/03/hexo-theme-paper-white/) 查看最新效果。           
 
完成仓促，如果你有任何的**建议**或者**想法**或者**发现错误**，欢迎：  
* 提issue给我  
* 在博客留言  
* 用任何你觉得我看得到的方法  
  
看到都会马上回复  
  
如果你想体验手机浏览效果，可以扫一下二维码：  
![xingoxu-qrcode](https://blog-xingoxu.duoshuo.com/api/qrcode/getImage.png?size=240&text=https://blog.xingoxu.com/)
[图看不到点这里！](https://blog-xingoxu.duoshuo.com/api/qrcode/getImage.png?size=240&text=https://blog.xingoxu.com/)

—————————————————————

## Update v0.9:  

> 2017.01.13 - {
  1. photoSwipe翻页有动画
  2. photoSwipe分享添加hover颜色，增加微信分享
}

> 2017.01.09 - {
  1. photoSwipe滚轮可翻页，通过hash链接可直接显示图片（暂时没有使用hashChange事件在本地做状态姬）
  2. 微信加快分享（动画改写）
  3. 微信二维码本地化（请多说500原地自杀）
}

> 2017.01.08 - {
  1. 替换fancybox为photoSwipe
  2. 新浪分享会带图
  3. 升级jQ与requirejs，改用staticfile.org
  4. 修改布局1600px以上比以前更漂亮
}

> 2016.12.18 - {
  1. 修正highlight的height
}

> 2016.10.28 - {
  1. 添加/修正微量动画
}

> 2016.03.13 - {
  1. 加入搜索框
  2. 移动端侧栏title可进行收缩
  3. 修复一大堆新功能问题，提升稳定性
}

> 2016.03.12 - 大量更新　{   
  1. IE11 导航问题解决,  
  2. 导航按钮与部分按钮添加ripple效果,  
  3. 加入首页文章点击动画与无限加载,  
  4. 右侧 动画/概要 添加,  
  5. 修改archives效果,   
  6. 多说样式调整,  
  7. 分享功能自造轮子（可带图，需要在文章前进行声明）,  
  8. 移动端侧栏内容样式调整，更丰富
}

> 2016.03.06 - 公布

—————————————————————

# 关于主题：  

1. 仍然坚持内容为主的设计   
2. 希望以内容为主时也不能放弃了便捷的操作，合适的地点提示合适的操作  
3. 时间仓储，样式表和文档中可能含有绝对地址，欢迎立刻报错！    


# 关于功能：  
1. 完全剔除了标签云（以后不会加入）  
2. 改善了多说识别小尾巴  
3. 添加了页面导航，改变了切换交互      



# 使用

## 安装

``` bash
$ git clone https://github.com/xingoxu/hexo-theme-paper-white.git themes/Paper-White
```

## 配置

修改hexo根目录下的 `_config.yml` ： `theme: Paper-White`
主题下的_config.yml也已经做过了注释，当然也可以参照我的config.yml
[hexo的_config.yml](https://github.com/xingoxu/xingoxu.github.io/blob/source/_config.yml)
[主题的_config.yml](https://github.com/xingoxu/xingoxu.github.io/blob/source/themes/_config.yml)

## 更新

``` bash
cd themes/Paper-White
git pull
```

## **注意事项**

1. 主题中的部分库使用了我个人的CDN，很贵的，希望大家高抬贵手，如果你能本地化的就本地化吧，不会或者不能的话，~~就给我打钱吧~~

### 如何本地化

主题文件夹全局搜索qnssl.com，将出现的链接的文件下载到本地，放到自己的bucket，或者放在主题文件夹的js文件夹，将链接改成通向这个文件的路径就可以了
（目前暂时只有多说使用了自己的bucket）


# 外观

## PC

![](https://dn-xingoxu.qbox.me/github/Paper-White/pc.png)

## Mobile

![](https://dn-xingoxu.qbox.me/github/Paper-White/mobile.png)

## Pad

![](https://dn-xingoxu.qbox.me/github/Paper-White/pad.png)

# 预告  

以下功能都会在~~有生之年~~开发

* 左侧导航栏改css 3
* 微信内分享提示友好化（点击右上角进行分享）
* 多语言支持
* 更换颜色
* 右侧栏bangumi update
* Category优化
* 侧栏导航加入图标
* 首页图片显示