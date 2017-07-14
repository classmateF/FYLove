define(function(require, exports, module) {
    var $ = require('$');
    var cPaging = require('content-paging');

    $.ajax({
        url:"/groupNew/groupList",
        type:'get',
        success:function(result){
            $("#groupList").html(result);
        }
    });

    $(".km-group-body-left-top a").click(function(){
        if($(this).hasClass("cur")) return;
        $(".km-group-body-left-top .cur").removeClass("cur");
        $(this).addClass("cur");
    });
    $(".km-group-body-right-newANDhot li").click(function(){
        if($(this).hasClass("cur")) return;
        $(".km-group-body-right-newANDhot .cur").removeClass("cur");
        $(this).addClass("cur");
    })
});
