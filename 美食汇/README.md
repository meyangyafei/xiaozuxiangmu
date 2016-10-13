## 项目地址
[gitpages 托管]( https://venecy.github.io/meishihui/)

[heroku 托管](https://meishihui.herokuapp.com/)

## 运行环境
nodejs 4.4.7
express 4.13.3


## git 协作流程

1、在本地[创建SSH Key](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001374385852170d9c7adf13c30429b9660d0eb689dd43a000)
```bash
$ ssh-keygen -t rsa -C "youremail@example.com"
```

2、将远程仓库[克隆](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375233990231ac8cf32ef1b24887a5209f83e01cb94b000)到本地
```bash
$ git clone git@github.com:venecy/meishihui.git
```

3、[创建](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840038939c291467cc7c747b1810aab2fb8863508000)开发分支 dev，[抓取](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013760174128707b935b0be6fc4fc6ace66c4f15618f8d000)更新
```bash
$ git checkout -b dev
$ git pull origin dev
```

4、[创建](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840038939c291467cc7c747b1810aab2fb8863508000)个人分支 yourbranch
```bash
$ git checkout -b yourbranch
>>>>>>> dev
```

5、个人分支完成后，[合并](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840038939c291467cc7c747b1810aab2fb8863508000)至 dev
```bash
$ git checkout dev
$ git merge --no-ff -m"提交信息" yourbranch
```

6、将dev[推送](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013752340242354807e192f02a44359908df8a5643103a000)至远程库
```bash
$ git push origin dev
```

如果推送失败，则可能是因为远程分支比你的本地更新，需要先用git pull试图合并
```bash
$ git pull origin dev
```

如果合并有冲突，则[解决冲突](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840202368c74be33fbd884e71b570f2cc3c0d1dcf000)，并在本地提交

没有冲突或者解决掉冲突后，再用git push推送就能成功！


参考：

[分支管理策略](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013758410364457b9e3d821f4244beb0fd69c61a185ae0000)

[多人协作](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013760174128707b935b0be6fc4fc6ace66c4f15618f8d000)

[创建与合并分支](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840038939c291467cc7c747b1810aab2fb8863508000)

[解决冲突](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840202368c74be33fbd884e71b570f2cc3c0d1dcf000)
