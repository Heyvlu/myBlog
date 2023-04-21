# .trim()函数和.trim修饰符

可以过滤内容两边的空格

# 自己定义的方法，暴露到全局：

1.在main.js中导入这个方法![image-20220223225043421](C:\Users\30599\AppData\Roaming\Typora\typora-user-images\image-20220223225043421.png)

2.在vue的全局原型上加上这个属性![image-20220223225146015](C:\Users\30599\AppData\Roaming\Typora\typora-user-images\image-20220223225146015.png)

3.这样就能在任何地方通过this.$goBack()使用这个方法![image-20220223225505215](C:\Users\30599\AppData\Roaming\Typora\typora-user-images\image-20220223225505215.png)



# Vue中this.$router.push参数传递和获取的方法（含小坑）

## 1.Params

### 由于动态路由也是传递params的，所以在 this.$router.push() 方法中path不能和params一起使用，否则params将无效。需要用name来指定页面。

![image-20220309004846251](C:\Users\30599\AppData\Roaming\Typora\typora-user-images\image-20220309004846251.png)

![image-20220309004923022](C:\Users\30599\AppData\Roaming\Typora\typora-user-images\image-20220309004923022.png)

## 2.Query

### 页面通过path和query传递参数

![image-20220309005032371](C:\Users\30599\AppData\Roaming\Typora\typora-user-images\image-20220309005032371.png)

# vue中this.$confirm

confirm确认框写法（与this.$router相似）

![image-20220309012056259](C:\Users\30599\AppData\Roaming\Typora\typora-user-images\image-20220309012056259.png)

![image-20220309012117434](C:\Users\30599\AppData\Roaming\Typora\typora-user-images\image-20220309012117434.png)



# html中绑定三元运算符

![image-20220313125050407](C:\Users\30599\AppData\Roaming\Typora\typora-user-images\image-20220313125050407.png)

# vue里监听事件时事件要带上括号
