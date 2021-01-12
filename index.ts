// ①傻瓜写法
// interface代表的是类型 指定实现类
interface IIndexService {
    log(str: string): void;
}
// 数据提供方 model
class IndexService implements IIndexService {
    log(str: string) {
        console.log("小熊", str);
    }
}

// 路由 constroller
class IndexController {
    private indexService: IndexService;
    constructor() {
        this.indexService = new IndexService();
    }
    info() {
        this.indexService.log("一点毛病没有")
    }
}
const indexController = new IndexController();
indexController.info();

