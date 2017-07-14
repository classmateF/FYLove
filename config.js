var config, env = process.env.NODE_ENV || "production";
/**production_cy*/  /**production_cyou*/  /**production*/
/**development*/  /**develop_cy*/  /**test*/    /**prepare*/

var onlineMongoDB = "mongodb://10.1.8.226:27017";//正式环境
var testMongoDB = "mongodb://localhost:27017";//本地环境
//var testMongoDB = onlineMongoDB;
config = {
    production: {
        port:3000,
        oldUrl:"http://localhost:3001",
        auth: {
            rootPath: "http://10.1.8.226:8082",
            cyouPath: "http://ldapproxy.cyou-inc.com/oauth/auth?client_id=781f677fc7&response_type=code&redirect_uri=http://10.1.8.227:8080/km/oauth/2/back"
        },
        km: {
            isBuilding: false,
            vipIDs: '1962',//进入维护时间时，vipID可自由登录
            /**  正式环境   **/
            rootPath: "http://10.1.8.227:8080/km",
            /**  联调环境   **/
            //rootPath: "http://10.12.28.102:8888/km",
            rtxPath :'http://rtx.7road.com:8012',
            umeditorPath: "/km-manager/ueditor_mini/",//app中配置
            feedbackPath: "/group/topic/add?groupid=4",  //反馈地址
            introDbPath: onlineMongoDB+"/intro", //引导数据存放地址
            emailDbPath: onlineMongoDB+"/email",//邮件周刊数据存放地址
            logsDbPath: onlineMongoDB+"/logs",   //分析日志数据存放地址
            //当前项目可查看组织结构ID
            groupId: 29,//创新群组ID
            groupArtId:90,//美术部群组ID
            groupPmId:43,//产品经理联盟群组ID
            groupPmUid:173,//产品经理联盟群组最高权限用户ID
            groupPurId:74,//采购部群组ID
            groupPurUid:1550,//采购部群组最高权限用户ID
            organizationID: "282",
            fileMaxSize: 80 * 1024 * 1024,
            redisStore: {
                host: "10.1.8.229",
                port: 6379,
                pass: "love7road_km",
                db: 8 //索引为8
            },
            cookieMaxAge:3 * 24 * 60 * 60 * 1000,
            tempFilesPath: "public/static/temp",
            log4js2Mongodb:{
                "appenders": [
                    {
                        "type": "console"
                    },
                    {
                        "type": "log4js-node-mongodb",
                        "connectionString": onlineMongoDB+"/logs",
                        "collectionName": "kmlog",
                        "category": "km"
                    }
                ],
                "replaceConsole": true
            },
            company: 2
        }
    } ,
    production_cy: {
        port:80,
        oldUrl:"http://km.cyou-inc.com",
        auth: {
            rootPath: "http://10.1.8.226:8082",
            cyouPath: "http://ldapproxy.cyou-inc.com/oauth/auth?client_id=781f677fc7&response_type=code&redirect_uri=http://10.1.8.227:8080/km/oauth/2/back"
        },
        km: {
            isBuilding: false,
            vipIDs: '1962',//进入维护时间时，vipID可自由登录
            /**  正式环境   **/
            rootPath: "http://10.1.8.227:8080/km",
            /**  联调环境   **/
            //rootPath: "http://10.12.28.102:8888/km",
            rtxPath :'http://rtx.7road.com:8012',
            umeditorPath: "/km-manager/ueditor_mini/",//app中配置
            feedbackPath: "/group/topic/add?groupid=4",  //反馈地址
            introDbPath: onlineMongoDB+"/intro", //引导数据存放地址
            emailDbPath: onlineMongoDB+"/email",//邮件周刊数据存放地址
            logsDbPath: onlineMongoDB+"/logs",   //分析日志数据存放地址
            //当前项目可查看组织结构ID
            groupId: 29,//创新群组ID
            groupArtId:90,//美术部群组ID
            groupPmId:43,//产品经理联盟群组ID
            groupPmUid:173,//产品经理联盟群组最高权限用户ID
            groupPurId:74,//采购部群组ID
            groupPurUid:1550,//采购部群组最高权限用户ID
            organizationID: "282",
            fileMaxSize: 80 * 1024 * 1024,
            redisStore: {
                host: "10.1.8.229",
                port: 6379,
                pass: "love7road_km",
                db: 8 //索引为8
            },
            cookieMaxAge:3 * 24 * 60 * 60 * 1000,
            tempFilesPath: "public/static/temp",
            log4js2Mongodb:{
                "appenders": [
                    {
                        "type": "console"
                    },
                    {
                        "type": "log4js-node-mongodb",
                        "connectionString": onlineMongoDB+"/logs",
                        "collectionName": "kmlog",
                        "category": "km"
                    }
                ],
                "replaceConsole": true
            },
            company: 2
        }
    },
    production_cyou: {
        port:80,
        auth: {
            rootPath: "http://10.1.8.226:8082",
            cyouPath: "http://ldapproxy.cyou-inc.com/oauth/auth?client_id=781f677fc7&response_type=code&redirect_uri=http://10.1.8.227:8080/km/oauth/2/back"
        },
        km: {
            isBuilding: false,
            vipIDs: '1962',//进入维护时间时，vipID可自由登录
            /**  正式环境   **/
            rootPath: "http://10.1.8.227:8080/km",
            /**  联调环境   **/
            //rootPath: "http://10.12.28.102:8888/km",
            //rootPath: "http://localhost:8000",
            rtxPath :'http://rtx.7road.com:8012',
            umeditorPath: "/km-manager/ueditor_mini/",//app中配置
            feedbackPath: "/group/topic/add?groupid=4",  //反馈地址
            introDbPath: "mongodb://10.12.28.102:27017/intro", //引导数据存放地址
            emailDbPath: "mongodb://10.12.28.102:27017/email",//邮件周刊数据存放地址
            logsDbPath: "mongodb://10.12.28.102:27017/logs",   //分析日志数据存放地址
            //当前项目可查看组织结构ID
            groupId: 29,//创新群组ID
            groupArtId:90,//美术部群组ID
            groupPmId:43,//产品经理联盟群组ID
            groupPmUid:173,//产品经理联盟群组最高权限用户ID
            groupPurId:74,//采购部群组ID
            groupPurUid:1550,//采购部群组最高权限用户ID
            organizationID: "282",
            fileMaxSize: 80 * 1024 * 1024,
            redisStore: {
                host: "10.1.8.229",
                port: 6379,
                pass: "love7road_km",
                db: 8 //索引为8
            },
            cookieMaxAge:3 * 24 * 60 * 60 * 1000,
            tempFilesPath: "public/static/temp",
            log4js2Mongodb:{
                "appenders": [
                    {
                        "type": "console"
                    },
                    {
                        "type": "log4js-node-mongodb",
                        "connectionString": "10.12.28.102:27017/logs",
                        "collectionName": "kmlog",
                        "category": "km"
                    }
                ],
                "replaceConsole": true
            },
            company: 2
        }
    },


//    ==================================================================================================================
    development  : {
        port:80,
        auth: {
            rootPath: "http://10.10.3.98:8081"
        },
        km: {
            rootPath :'http://10.12.5.91:8090/index',
            nginxPath :'http://10.10.3.98:8888/km',
            rtxPath :'http://10.10.4.50:8012',
            umeditorPath: "/km-manager/ueditor_mini/",//app中配置
            feedbackPath: "/group/1328",  //反馈地址
            introDbPath: "mongodb://10.10.3.98:10001/intro",//引导数据存放地址
            logsDbPath: "mongodb://10.10.3.98:10001/logs",//分析日志数据存放地址
            groupId:233,//创新群组ID
            //当前项目可查看组织结构ID
            organizationID: "1",
            fileMaxSize: 80 * 1024 * 1024,
            tempFilesPath: "public/static/temp",
            log4js2Mongodb:{
                "appenders": [
                    {
                        "type": "console"
                    },
                    {
                        "type": "log4js-node-mongodb",
                        "connectionString": "localhost:10001/logs",
                        "collectionName": "kmlog",
                        "category": "km"
                    }
                ],
                "replaceConsole": true
            },
            company: 1

        }

    },
    develop_cy: {
        port:8989,
        auth: {
            rootPath: "http://10.127.1.238:8081",
            cyouPath: "http://ldapproxy.cyou-inc.com/oauth/auth?client_id=781f677fc7&response_type=code&redirect_uri=http://10.1.8.227:8080/km/oauth/2/back"
            //cyouPath: "http://114.251.5.94:8000/oauth/auth?client_id=781f677fc7&response_type=code&redirect_uri=http://10.1.8.227:8080/km/oauth/2/back"
        },
        km: {
            isBuilding: false,
            vipIDs: '',//进入维护时间时，vipID可自由登录
            rootPath: "http://10.127.1.238:8888/km",
            rtxPath :'http://rtx.7road.com:8012',
            umeditorPath: "/km-manager/ueditor_mini/",//app中配置
            feedbackPath: "/group/topic/add?groupid=4",  //反馈地址
            introDbPath: "mongodb://10.127.1.238:27017/intro", //引导数据存放地址
            emailDbPath: "mongodb://10.127.1.238:27017/email",//邮件周刊数据存放地址
            logsDbPath: "mongodb://10.127.1.238:27017/logs",   //分析日志数据存放地址
            //当前项目可查看组织结构ID
            groupId: null,//创新群组ID
            groupArtId:1,//美术部群组ID
            groupPmId:1,//产品经理联盟群组ID
            groupPmUid:1,//产品经理联盟群组最高权限用户ID
            organizationID: "290",
            fileMaxSize: 80 * 1024 * 1024,
            redisStore: {
                host: "10.127.1.238",
                port: 6379,
                pass: "changyou.com",
                db: 8 //索引为8
            },
            cookieMaxAge:3 * 24 * 60 * 60 * 1000,
            tempFilesPath: "public/static/temp",
            log4js2Mongodb:{
                "appenders": [
                    {
                        "type": "console"
                    },
                    {
                        "type": "log4js-node-mongodb",
                        "connectionString": "10.127.1.238:27017/logs",
                        "collectionName": "kmlog",
                        "category": "km"
                    }
                ],
                "replaceConsole": true
            },
            company: 1
        }
    },
    test:{
        port:80,
        auth: {
            rootPath: "http://10.10.3.99:8081"
        },
        km: {
            rootPath: "http://10.10.3.99:8888/km",
            nginxPath: "http://10.10.3.99:8888/km",
            rtxPath :'http://10.10.4.50:8012',
            umeditorPath: "/km-manager/ueditor_mini/",//app中配置
            feedbackPath: "/group/135",  //反馈地址
            introDbPath: "mongodb://10.10.3.98:10001/intro",//引导数据存放地址
            emailDbPath: "mongodb://10.10.3.98:10001/email",//邮件周刊数据存放地址
            logsDbPath: "mongodb://10.10.3.98:10001/logs",//分析日志数据存放地址
            groupId:1065,//创新群组ID
            competitioin2014:321,//创新大赛2014
            //当前项目可查看组织结构ID
            organizationID: "1",
            fileMaxSize: 80 * 1024 * 1024,
            redisStore: {
                host: "10.10.3.99",
                port: 6379,
                pass: "love7road_km",
                db: 8 //索引为8
            },
            cookieMaxAge:3 * 24 * 60 * 60 * 1000,
            tempFilesPath: "public/static/temp",
            log4js2Mongodb:{
                "appenders": [
                    {
                        "type": "console"
                    },
                    {
                        "type": "log4js-node-mongodb",
                        "connectionString": "10.10.3.99:10001/logs",
                        "collectionName": "kmlog",
                        "category": "km"
                    }
                ],
                "replaceConsole": true
            },
            company: 1
        }
    },
    prepare: {
        port:3000,
        auth: {
            rootPath: "http://192.168.1.43:8081"
        },
        km: {
            rootPath: "http://192.168.1.44:8888/km",
            nginxPath: "http://192.168.1.44:8888/km",
            rtxPath :'http://rtx.7road.com:8012',
            umeditorPath: "/km-manager/ueditor_mini/",//app中配置
            feedbackPath: "/group/topic/add?groupid=20",  //反馈地址
            introDbPath: "mongodb://192.168.1.74:27017/intro",//引导数据存放地址
            emailDbPath: "mongodb://192.168.1.74:27017/email",//邮件周刊数据存放地址
            logsDbPath: "mongodb://192.168.1.74:27017/logs",//分析日志数据存放地址
            groupId:215,//创新群组ID
            competitioin2014:182,//创新大赛2014
            //当前项目可查看组织结构ID
            organizationID: "1",
            fileMaxSize: 80 * 1024 * 1024,
            redisStore: {
                host: "192.168.1.74",
                port: 6379,
                pass: "love7road_km",
                db: 8 //索引为8
            },
            cookieMaxAge:3 * 24 * 60 * 60 * 1000,
            tempFilesPath: "public/static/temp",
            log4js2Mongodb:{
                "appenders": [
                    {
                        "type": "console"
                    },
                    {
                        "type": "log4js-node-mongodb",
                        "connectionString": "localhost:10001/logs-prepare",
                        "collectionName": "kmlog",
                        "category": "km"
                    }
                ],
                "replaceConsole": true
            },
            company: 1
        }
    }

};

module.exports = config[env];
