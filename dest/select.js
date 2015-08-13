!function(t,e){"function"==typeof define&&define.amd?define("select",["$"],e):"object"==typeof exports?module.exports=e():t.Select=e(window.Zepto||window.jQuery||$)}(this,function(t){function e(){var t=Math.random().toString().replace(".","");this.id="sel_"+(+new Date).toString().substr(-8)+t}return t.fn.Select=function(i){var s=[];return t(this).each(function(){var a=t.extend({target:this,maxHeight:200,maxWidth:null,disabled:!1},i),h=new e;h.init(a),s.push(h)}),t(s)},e.prototype={init:function(e){this.settings=t.extend({target:null,selected:null,model:null,multi:!1,disabled:!1},e),this.target=t(this.settings.target),this.model=t.extend([],this.settings.model),this.create(),this.bindEvent()},create:function(){this.w=this.settings.width||this.target.outerWidth(),this.h=this.settings.height||this.target.outerHeight(),this.trigger=t('<div class="ui-select-trigger"><span></span><i></i></div>'),this.trigger.width(this.w),this.trigger.height(this.h).css("lineHeight",this.h+"px"),(this.settings.disabled||this.target.hasClass("disabled")||"disabled"==this.target.attr("disabled"))&&(this.trigger.addClass("ui-select-disabled"),this.disabled=!0),this.target.after(this.trigger);var e=this.trigger.find("i");e.css({top:(this.h-e.outerHeight()/2)/2}),this.select=t('<div id="'+this.id+'" class="ui-select"><ul class="ui-select-content"></ul></div>'),t("body").append(this.select),this.selectContent=this.select.children("ul"),this.format(),this.target.hide()},setData:function(t){this.model=t,this.format()},render:function(){this.format()},format:function(){var e=this;if(this.settings.model||0!=this.model.length){for(var i="",s=0,a=e.model.length;a>s;s++){var h=e.model[s],l=h.disabled?' disabled="true" ':"";i+="<option "+l+' value="'+e.escape(h.value)+'">'+e.escape(h.text)+"</option>"}"SELECT"==this.target.get(0).nodeName&&this.target.html(i)}else this.model=[],this.target.find("option").each(function(){var i={value:t(this).attr("value"),text:t(this).html(),disabled:t(this).attr("disabled")};e.model.push(i)});for(var n="",s=0,a=e.model.length;a>s;s++){var h=e.model[s],r="";h.disabled&&(r+=" ui-select-item-disabled"),n+='<li class="'+r+'" data-text="'+e.escape(h.text)+'" data-value="'+e.escape(h.value)+'" title="'+e.escape(h.text)+'">'+h.text+"</li>"}e.selectContent.html(n),e.selectContent.children("li").height(e.h).css("lineHeight",e.h+"px");var d=this.target.val();"undefined"==typeof this.target[0].value&&(d=this.target.data("value")),e.value=d,this.setValue(d)},escape:function(t){return t.toString().replace(/\'/gim,"&apos;").replace(/\"/gim,"&quot;")},setValue:function(e,i){var s=this;this.selectContent.find("li").each(function(){if(t(this).data("value")==e){var i=i||t(this).data("text");return s.trigger.children("span").attr("title",i).html(i),s.trigger.attr("data-value",e),s.target.val(e),s.target.attr("data-value",e),s.target.attr("data-text",i),t(this).addClass("ui-select-item-selected").siblings().removeClass("ui-select-item-selected"),s.value!=e&&(s.settings.selected&&s.settings.selected.call(s,e,i),s.target.trigger("change",e)),void(s.value=e)}})},bindEvent:function(){var e=this;e.status=!1,this.trigger.on("click",function(){return e.disabled||(t(".ui-select").not("#"+e.id).trigger("hide"),e.status?e.hide():e.show()),!1}),this.select.on("click","li",function(){if(!t(this).hasClass("ui-select-item-disabled")){var i=t(this).data("value"),s=t(this).data("text");e.setValue(i,s),e.hide()}return!1}),this.select.on("hide",function(){e.hide()}),t(document).click(function(){e.hide()})},show:function(){this.settings.beforeShow&&this.settings.beforeShow.call(this,this.trigger,this.target),this.trigger.addClass("active");var t=this.trigger.offset();this.select.css({left:t.left,top:t.top+this.h}).css({maxHeight:this.settings.maxHeight,maxWidth:this.settings.maxWidth||this.w,minWidth:this.w}).show(),this.status=!0},hide:function(){this.trigger.removeClass("active"),this.status=!1,this.select.hide(),this.target.trigger("blur")}},e});