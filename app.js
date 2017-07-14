var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var schedule = require('node-schedule');
var session = require('express-session');
var RedisStore = require("connect-redis")(session);

var log= require("./utils/log");
var trackLog = require('./controllers/weblog');
var config = require("./config");
var urls = require('./urls');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//设置本地js变量
app.locals.comboCss = require("./utils/helper").comboCss[app.get('env')];
app.locals.oldUrl = config.oldUrl;
app.locals.umeditorPath = config.km.umeditorPath;
/*app.locals.common = require("./utils/common");
 app.locals.constant = require("./utils/constant");*/

/**	自动分析日志	**/
app.use(log.connectLogger());
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 6)];
rule.hour = 0;rule.minute = 0;
schedule.scheduleJob(rule, function(){
  console.log("执行log日期分割任务");
  app.use(log.connectLogger());
  trackLog.trackYesterday();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('km'));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/km-manager/ueditor_mini", express.static(path.join(__dirname, 'public/static/plugins/ueditor_mini')));
app.use("/pdf", express.static(path.join(__dirname, 'public/static/plugins/pdfJs')));

/**	正式环境引入redis来做session的支持,放到domain处理异常后面,保证捕获	**/
if (/(production|test|prepare|production_cy|develop_cy)/igm.test(app.get('env'))) {
  app.use(session({
    resave:false,
    saveUninitialized:false,
    secret: 'km',
    store: new RedisStore(config.km.redisStore),
    cookie:
    {
      maxAge: config.km.cookieMaxAge
    }
  }));
  /**	初始化一些设置	**/
  require("./utils/init");
}

/**路由规则**/
for(var url in urls){
  app.use(url, require(urls[url]));
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('error/404',{title: '404' });
});

/**	异常处理	**/
app.use(require("./middleware/errorHandler")());

module.exports = app;
