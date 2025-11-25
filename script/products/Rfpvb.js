(function(c,d,e){var a=c.headerStyle08||(c.headerStyle08={});
d.extend(a,{init:function(){var g=this;
d(c).on("resize",function(){g.calcuMenuHeight()
});
d(c).on("orientationchange",function(){g.calcuMenuHeight()
});
g.calcuMenuHeight();
d(".nav-title1 .nav-btn","#backstage-headArea-mobile .header-style08").each(function(){var i=d(this);
var h=d(this).parents(".header-style08").find(".others-nav");
i.off("click").on("click",function(){g.resetMenuHeight();
if(!(i.hasClass("on"))){if(d("#backstage-headArea-mobile .header-style08 .shop-all-icon").hasClass("active")){d("#backstage-headArea-mobile .header-style08 .shop-all-icon").trigger("click")
}}i.toggleClass("on");
if(!i.hasClass("on")){d(".nav-btn-open08").animate({opacity:"1"});
d(".nav-btn-close08").animate({opacity:"0"})
}else{d(".nav-btn-open08").animate({opacity:"0"});
d(".nav-btn-close08").animate({opacity:"1"})
}h.slideToggle();
d("html,body").toggleClass("overflowHidden")
})
});
d(".nav-title2","#backstage-headArea-mobile .header-style08").each(function(){var i=d(this);
var h=d(this).next(".nav-list2");
g.bindNavEvent(i,h)
});
d(".nav-title3","#backstage-headArea-mobile .header-style08").each(function(){var i=d(this);
var h=d(this).next(".nav-list3");
g.bindNavEvent(i,h)
});
d(".lang-show-word,.lang-slide-btn","#backstage-headArea-mobile .header-style08").off("click").on("click",function(){if(!(d("#backstage-headArea-mobile .header-style08 ul.lang-list").is(":visible"))){if(d("#backstage-headArea-mobile .header-style08 .shop-all-icon").hasClass("active")){d("#backstage-headArea-mobile .header-style08 .shop-all-icon").trigger("click")
}if(d("#backstage-headArea-mobile .header-style08 .nav-title1 .nav-btn").hasClass("on")){d("#backstage-headArea-mobile .header-style08 .nav-title1 .nav-btn").trigger("click")
}}d(this).nextAll(".lang-list").slideToggle()
});
d(".lang-item",".header-style08").off("click").on("click",function(){d(this).parent(".lang-list").slideUp()
});
d(document).on("click",function(h){if(!d(h.target).hasClass("lang-box")&&!d(h.target).parents(".lang-box").length){d("#backstage-headArea-mobile .header-style08 .lang-list").slideUp()
}});
if(d("#backstage-headArea-mobile .header-style08").find(".nav-box").length>1){d("#backstage-headArea-mobile .header-style08").find(".nav-box").hide().eq(0).show()
}d("#backstage-headArea-mobile .header-style08 .shop-all-icon").click(function(){g.resetMenuHeight();
if(!d(this).hasClass("active")){if(d("#backstage-headArea-mobile .header-style08 .nav-title1 .nav-btn").hasClass("on")){d("#backstage-headArea-mobile .header-style08 .nav-title1 .nav-btn").trigger("click")
}d(this).addClass("active");
d("#backstage-headArea-mobile .header-style08 .shop-all-content").slideDown();
d("#backstage-headArea-mobile .header-style08 .shop-all-content .coin-content-cur").unbind("click").bind("click",function(){if(!d(this).hasClass("active")){d(this).addClass("active");
d("#backstage-headArea-mobile .header-style08 .shop-all-content .coin-content-list").slideDown()
}else{d(this).removeClass("active");
d("#backstage-headArea-mobile .header-style08 .shop-all-content .coin-content-list").slideUp()
}})
}else{d(this).removeClass("active");
d("#backstage-headArea-mobile .header-style08 .shop-all-content").slideUp()
}d("html,body").toggleClass("overflowHidden")
});
d("#backstage-headArea-mobile .header-style08 .item-btn").each(function(){var h=d(this).parent().next("ul");
if(h.find("li").not(".hide").length==0){d(this).hide()
}});
if(!d(".nav-box").hasClass("others-ele")){var f=".nav-search-box div:eq(0),.nav-logo-box div:eq(0),.nav-logo-mix-box div:eq(0)";
d(f).before(d(".nav-box .nav-title1"));
d(".nav-box").hide();
d(".nav-btn").unbind("click").click(function(){d(this).toggleClass("on");
var h=d("#backstage-headArea-mobile").height();
d(".nav-box").css({top:h,position:"fixed",left:0,width:"100%","z-index":"99"}).toggle();
d(".header-style02 .nav-logo-box .nav-box").css("background-color","rgba(51, 51, 51, 0.95)");
d(".header-style05 .nav-box .nav-item1").css("padding-left","20px");
d(".header-style06 .nav-logo-box .nav-box").css("background-color","rgba(51, 51, 51, 0.95)");
d(".header-style06 .nav-logo-box .nav-item1").css("padding-left","20px");
d(".header-style07 .nav-logo-box .nav-box").css("background-color","#fff");
if(!d(this).hasClass("on")){d(".nav-box").hide()
}})
}d("#backstage-headArea-mobile .nav-box a").click(function(){if(d(this).attr("href").indexOf("#")!==-1&&d(this).attr("href")[0]==="#"){d(".nav-btn.on").trigger("click");
var h=d(this).attr("href");
var j=d(h).offset();
var i=d("#backstage-headArea-mobile").height();
setTimeout(function(){d("html,body").animate({scrollTop:j.top-i},200)
},200)
}});
d(".nav-list1 .nav-item1").each(function(){if(d(this).find(".nav-title2").length>0){d(this).addClass("hide_after")
}});
d(".nav-list2 .nav-item2").each(function(){if(d(this).find(".nav-title3").length>0){d(this).addClass("hide_after")
}})
},calcuMenuHeight:function(){setTimeout(function(){d("#backstage-headArea-mobile .header-style08 .others-nav").height(Math.floor(d(c).height()-d("#backstage-headArea-mobile .topTools").height()-d("#backstage-headArea-mobile .header-style08").height()));
d("#backstage-headArea-mobile .header-style08 .shop-all-content").height(Math.floor(d(c).height()-d("#backstage-headArea-mobile .topTools").height()-d("#backstage-headArea-mobile .header-style08").height()))
},1000)
},resetMenuHeight:function(){d("#backstage-headArea-mobile .header-style08 .others-nav").height(Math.floor(d(c).height()-d("#backstage-headArea-mobile .topTools").height()-d("#backstage-headArea-mobile .header-style08").height()));
d("#backstage-headArea-mobile .header-style08 .shop-all-content").height(Math.floor(d(c).height()-d("#backstage-headArea-mobile .topTools").height()-d("#backstage-headArea-mobile .header-style08").height()))
},bindNavEvent:function(g,f){g.off("click").on("click",function(){g.toggleClass("on");
f.slideToggle()
})
}});
function b(){a.init();
if(d(".header-style08").length){if(c.innerWidth<=989&&d("#backstage-headArea-mobile").length){d("#backstage-headArea").hide();
var f=d('script[type="text/x-delay-ids"]').attr("data-delayids");
if(!(c.datalazyloadDefaultOptions&&c.datalazyloadDefaultOptions.isMobileViewer&&c.datalazyloadDefaultOptions.version=="2.0.1"&&f)){d("body").css({"padding-top":d("#backstage-headArea-mobile .header-item").height()+"px"});
d("#backstage-headArea-mobile").css({position:"fixed"})
}}else{d("#backstage-headArea").show();
d("body").css({"padding-top":0})
}d(c).on("resize",function(){if(c.innerWidth<=989&&d("#backstage-headArea-mobile").length){d("#backstage-headArea").hide();
d("body").css({"padding-top":d(".header-item").height()+"px"})
}else{d("#backstage-headArea").show();
d("body").css({"padding-top":0})
}})
}}d(function(){var g=c.$_phoenix==e,f=null;
if(g){var h=c.datalazyloadDefaultOptions;
if(typeof h!="undefined"&&(h.isMobileViewer==="true")){if((h.version==="2.0.1"&&d('script[type="text/x-delay-ids"]').attr("data-delayids"))||(h.version==="3.0.0"&&d('script[type="text/x-delay-ids"]').attr("data-delayids"))){b()
}else{f=setInterval(function(){var i=d.makeArray(document.getElementsByTagName("script")).some(function(l){return l.type==="text/x-delay-ids"&&l.dataset.delayids
});
if(i){var k=d.makeArray(document.styleSheets);
var j=k.some(function(l){return l.href&&l.href.indexOf("navigation")>-1
});
if(j){if(!!!d("#backstage-headArea-mobile .PDataLazyLoad_HeadModule").length){clearInterval(f);
b()
}}}else{if(!!!d("#backstage-headArea-mobile .PDataLazyLoad_HeadModule").length){clearInterval(f);
b()
}}},100)
}}else{b()
}}})
})(window,jQuery);