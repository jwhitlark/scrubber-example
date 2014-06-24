// Compiled by ClojureScript 0.0-2202
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__16399__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16398 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16398,0,null);var body = cljs.core.nthnext.call(null,vec__16398,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16399 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16399__delegate.call(this,args);};
G__16399.cljs$lang$maxFixedArity = 0;
G__16399.cljs$lang$applyTo = (function (arglist__16400){
var args = cljs.core.seq(arglist__16400);
return G__16399__delegate(args);
});
G__16399.cljs$core$IFn$_invoke$arity$variadic = G__16399__delegate;
return G__16399;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8586__auto__ = (function iter__16405(s__16406){return (new cljs.core.LazySeq(null,(function (){var s__16406__$1 = s__16406;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16406__$1);if(temp__4126__auto__)
{var s__16406__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16406__$2))
{var c__8584__auto__ = cljs.core.chunk_first.call(null,s__16406__$2);var size__8585__auto__ = cljs.core.count.call(null,c__8584__auto__);var b__16408 = cljs.core.chunk_buffer.call(null,size__8585__auto__);if((function (){var i__16407 = 0;while(true){
if((i__16407 < size__8585__auto__))
{var args = cljs.core._nth.call(null,c__8584__auto__,i__16407);cljs.core.chunk_append.call(null,b__16408,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16409 = (i__16407 + 1);
i__16407 = G__16409;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16408),iter__16405.call(null,cljs.core.chunk_rest.call(null,s__16406__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16408),null);
}
} else
{var args = cljs.core.first.call(null,s__16406__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16405.call(null,cljs.core.rest.call(null,s__16406__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8586__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8586__auto__ = (function iter__16414(s__16415){return (new cljs.core.LazySeq(null,(function (){var s__16415__$1 = s__16415;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16415__$1);if(temp__4126__auto__)
{var s__16415__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16415__$2))
{var c__8584__auto__ = cljs.core.chunk_first.call(null,s__16415__$2);var size__8585__auto__ = cljs.core.count.call(null,c__8584__auto__);var b__16417 = cljs.core.chunk_buffer.call(null,size__8585__auto__);if((function (){var i__16416 = 0;while(true){
if((i__16416 < size__8585__auto__))
{var style = cljs.core._nth.call(null,c__8584__auto__,i__16416);cljs.core.chunk_append.call(null,b__16417,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16418 = (i__16416 + 1);
i__16416 = G__16418;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16417),iter__16414.call(null,cljs.core.chunk_rest.call(null,s__16415__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16417),null);
}
} else
{var style = cljs.core.first.call(null,s__16415__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16414.call(null,cljs.core.rest.call(null,s__16415__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8586__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__16419){
var styles = cljs.core.seq(arglist__16419);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to16420 = (function() { 
var link_to16420__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16420 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16420__delegate.call(this,url,content);};
link_to16420.cljs$lang$maxFixedArity = 1;
link_to16420.cljs$lang$applyTo = (function (arglist__16421){
var url = cljs.core.first(arglist__16421);
var content = cljs.core.rest(arglist__16421);
return link_to16420__delegate(url,content);
});
link_to16420.cljs$core$IFn$_invoke$arity$variadic = link_to16420__delegate;
return link_to16420;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16420);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16422 = (function() { 
var mail_to16422__delegate = function (e_mail,p__16423){var vec__16425 = p__16423;var content = cljs.core.nth.call(null,vec__16425,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7869__auto__ = content;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16422 = function (e_mail,var_args){
var p__16423 = null;if (arguments.length > 1) {
  p__16423 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16422__delegate.call(this,e_mail,p__16423);};
mail_to16422.cljs$lang$maxFixedArity = 1;
mail_to16422.cljs$lang$applyTo = (function (arglist__16426){
var e_mail = cljs.core.first(arglist__16426);
var p__16423 = cljs.core.rest(arglist__16426);
return mail_to16422__delegate(e_mail,p__16423);
});
mail_to16422.cljs$core$IFn$_invoke$arity$variadic = mail_to16422__delegate;
return mail_to16422;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16422);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16427 = (function unordered_list16427(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8586__auto__ = (function iter__16432(s__16433){return (new cljs.core.LazySeq(null,(function (){var s__16433__$1 = s__16433;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16433__$1);if(temp__4126__auto__)
{var s__16433__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16433__$2))
{var c__8584__auto__ = cljs.core.chunk_first.call(null,s__16433__$2);var size__8585__auto__ = cljs.core.count.call(null,c__8584__auto__);var b__16435 = cljs.core.chunk_buffer.call(null,size__8585__auto__);if((function (){var i__16434 = 0;while(true){
if((i__16434 < size__8585__auto__))
{var x = cljs.core._nth.call(null,c__8584__auto__,i__16434);cljs.core.chunk_append.call(null,b__16435,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16436 = (i__16434 + 1);
i__16434 = G__16436;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16435),iter__16432.call(null,cljs.core.chunk_rest.call(null,s__16433__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16435),null);
}
} else
{var x = cljs.core.first.call(null,s__16433__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16432.call(null,cljs.core.rest.call(null,s__16433__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8586__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16427);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16437 = (function ordered_list16437(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8586__auto__ = (function iter__16442(s__16443){return (new cljs.core.LazySeq(null,(function (){var s__16443__$1 = s__16443;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16443__$1);if(temp__4126__auto__)
{var s__16443__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16443__$2))
{var c__8584__auto__ = cljs.core.chunk_first.call(null,s__16443__$2);var size__8585__auto__ = cljs.core.count.call(null,c__8584__auto__);var b__16445 = cljs.core.chunk_buffer.call(null,size__8585__auto__);if((function (){var i__16444 = 0;while(true){
if((i__16444 < size__8585__auto__))
{var x = cljs.core._nth.call(null,c__8584__auto__,i__16444);cljs.core.chunk_append.call(null,b__16445,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16446 = (i__16444 + 1);
i__16444 = G__16446;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16445),iter__16442.call(null,cljs.core.chunk_rest.call(null,s__16443__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16445),null);
}
} else
{var x = cljs.core.first.call(null,s__16443__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16442.call(null,cljs.core.rest.call(null,s__16443__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8586__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16437);
/**
* Create an image element.
*/
sablono.core.image16447 = (function() {
var image16447 = null;
var image16447__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16447__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16447 = function(src,alt){
switch(arguments.length){
case 1:
return image16447__1.call(this,src);
case 2:
return image16447__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16447.cljs$core$IFn$_invoke$arity$1 = image16447__1;
image16447.cljs$core$IFn$_invoke$arity$2 = image16447__2;
return image16447;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16447);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16448_SHARP_,p2__16449_SHARP_){return [cljs.core.str(p1__16448_SHARP_),cljs.core.str("["),cljs.core.str(p2__16449_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__16450_SHARP_,p2__16451_SHARP_){return [cljs.core.str(p1__16450_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16451_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field16452 = (function() {
var color_field16452 = null;
var color_field16452__1 = (function (name__13492__auto__){return color_field16452.call(null,name__13492__auto__,null);
});
var color_field16452__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__13492__auto__,value__13493__auto__);
});
color_field16452 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return color_field16452__1.call(this,name__13492__auto__);
case 2:
return color_field16452__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field16452.cljs$core$IFn$_invoke$arity$1 = color_field16452__1;
color_field16452.cljs$core$IFn$_invoke$arity$2 = color_field16452__2;
return color_field16452;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field16452);
/**
* Creates a date input field.
*/
sablono.core.date_field16453 = (function() {
var date_field16453 = null;
var date_field16453__1 = (function (name__13492__auto__){return date_field16453.call(null,name__13492__auto__,null);
});
var date_field16453__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__13492__auto__,value__13493__auto__);
});
date_field16453 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return date_field16453__1.call(this,name__13492__auto__);
case 2:
return date_field16453__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field16453.cljs$core$IFn$_invoke$arity$1 = date_field16453__1;
date_field16453.cljs$core$IFn$_invoke$arity$2 = date_field16453__2;
return date_field16453;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field16453);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field16454 = (function() {
var datetime_field16454 = null;
var datetime_field16454__1 = (function (name__13492__auto__){return datetime_field16454.call(null,name__13492__auto__,null);
});
var datetime_field16454__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__13492__auto__,value__13493__auto__);
});
datetime_field16454 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return datetime_field16454__1.call(this,name__13492__auto__);
case 2:
return datetime_field16454__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field16454.cljs$core$IFn$_invoke$arity$1 = datetime_field16454__1;
datetime_field16454.cljs$core$IFn$_invoke$arity$2 = datetime_field16454__2;
return datetime_field16454;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field16454);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field16455 = (function() {
var datetime_local_field16455 = null;
var datetime_local_field16455__1 = (function (name__13492__auto__){return datetime_local_field16455.call(null,name__13492__auto__,null);
});
var datetime_local_field16455__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__13492__auto__,value__13493__auto__);
});
datetime_local_field16455 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return datetime_local_field16455__1.call(this,name__13492__auto__);
case 2:
return datetime_local_field16455__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field16455.cljs$core$IFn$_invoke$arity$1 = datetime_local_field16455__1;
datetime_local_field16455.cljs$core$IFn$_invoke$arity$2 = datetime_local_field16455__2;
return datetime_local_field16455;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field16455);
/**
* Creates a email input field.
*/
sablono.core.email_field16456 = (function() {
var email_field16456 = null;
var email_field16456__1 = (function (name__13492__auto__){return email_field16456.call(null,name__13492__auto__,null);
});
var email_field16456__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__13492__auto__,value__13493__auto__);
});
email_field16456 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return email_field16456__1.call(this,name__13492__auto__);
case 2:
return email_field16456__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16456.cljs$core$IFn$_invoke$arity$1 = email_field16456__1;
email_field16456.cljs$core$IFn$_invoke$arity$2 = email_field16456__2;
return email_field16456;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16456);
/**
* Creates a file input field.
*/
sablono.core.file_field16457 = (function() {
var file_field16457 = null;
var file_field16457__1 = (function (name__13492__auto__){return file_field16457.call(null,name__13492__auto__,null);
});
var file_field16457__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__13492__auto__,value__13493__auto__);
});
file_field16457 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return file_field16457__1.call(this,name__13492__auto__);
case 2:
return file_field16457__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field16457.cljs$core$IFn$_invoke$arity$1 = file_field16457__1;
file_field16457.cljs$core$IFn$_invoke$arity$2 = file_field16457__2;
return file_field16457;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field16457);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field16458 = (function() {
var hidden_field16458 = null;
var hidden_field16458__1 = (function (name__13492__auto__){return hidden_field16458.call(null,name__13492__auto__,null);
});
var hidden_field16458__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__13492__auto__,value__13493__auto__);
});
hidden_field16458 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return hidden_field16458__1.call(this,name__13492__auto__);
case 2:
return hidden_field16458__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16458.cljs$core$IFn$_invoke$arity$1 = hidden_field16458__1;
hidden_field16458.cljs$core$IFn$_invoke$arity$2 = hidden_field16458__2;
return hidden_field16458;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16458);
/**
* Creates a month input field.
*/
sablono.core.month_field16459 = (function() {
var month_field16459 = null;
var month_field16459__1 = (function (name__13492__auto__){return month_field16459.call(null,name__13492__auto__,null);
});
var month_field16459__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__13492__auto__,value__13493__auto__);
});
month_field16459 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return month_field16459__1.call(this,name__13492__auto__);
case 2:
return month_field16459__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field16459.cljs$core$IFn$_invoke$arity$1 = month_field16459__1;
month_field16459.cljs$core$IFn$_invoke$arity$2 = month_field16459__2;
return month_field16459;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field16459);
/**
* Creates a number input field.
*/
sablono.core.number_field16460 = (function() {
var number_field16460 = null;
var number_field16460__1 = (function (name__13492__auto__){return number_field16460.call(null,name__13492__auto__,null);
});
var number_field16460__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__13492__auto__,value__13493__auto__);
});
number_field16460 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return number_field16460__1.call(this,name__13492__auto__);
case 2:
return number_field16460__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field16460.cljs$core$IFn$_invoke$arity$1 = number_field16460__1;
number_field16460.cljs$core$IFn$_invoke$arity$2 = number_field16460__2;
return number_field16460;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field16460);
/**
* Creates a password input field.
*/
sablono.core.password_field16461 = (function() {
var password_field16461 = null;
var password_field16461__1 = (function (name__13492__auto__){return password_field16461.call(null,name__13492__auto__,null);
});
var password_field16461__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__13492__auto__,value__13493__auto__);
});
password_field16461 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return password_field16461__1.call(this,name__13492__auto__);
case 2:
return password_field16461__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16461.cljs$core$IFn$_invoke$arity$1 = password_field16461__1;
password_field16461.cljs$core$IFn$_invoke$arity$2 = password_field16461__2;
return password_field16461;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16461);
/**
* Creates a range input field.
*/
sablono.core.range_field16462 = (function() {
var range_field16462 = null;
var range_field16462__1 = (function (name__13492__auto__){return range_field16462.call(null,name__13492__auto__,null);
});
var range_field16462__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__13492__auto__,value__13493__auto__);
});
range_field16462 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return range_field16462__1.call(this,name__13492__auto__);
case 2:
return range_field16462__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field16462.cljs$core$IFn$_invoke$arity$1 = range_field16462__1;
range_field16462.cljs$core$IFn$_invoke$arity$2 = range_field16462__2;
return range_field16462;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field16462);
/**
* Creates a search input field.
*/
sablono.core.search_field16463 = (function() {
var search_field16463 = null;
var search_field16463__1 = (function (name__13492__auto__){return search_field16463.call(null,name__13492__auto__,null);
});
var search_field16463__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__13492__auto__,value__13493__auto__);
});
search_field16463 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return search_field16463__1.call(this,name__13492__auto__);
case 2:
return search_field16463__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field16463.cljs$core$IFn$_invoke$arity$1 = search_field16463__1;
search_field16463.cljs$core$IFn$_invoke$arity$2 = search_field16463__2;
return search_field16463;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field16463);
/**
* Creates a tel input field.
*/
sablono.core.tel_field16464 = (function() {
var tel_field16464 = null;
var tel_field16464__1 = (function (name__13492__auto__){return tel_field16464.call(null,name__13492__auto__,null);
});
var tel_field16464__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__13492__auto__,value__13493__auto__);
});
tel_field16464 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return tel_field16464__1.call(this,name__13492__auto__);
case 2:
return tel_field16464__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field16464.cljs$core$IFn$_invoke$arity$1 = tel_field16464__1;
tel_field16464.cljs$core$IFn$_invoke$arity$2 = tel_field16464__2;
return tel_field16464;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field16464);
/**
* Creates a text input field.
*/
sablono.core.text_field16465 = (function() {
var text_field16465 = null;
var text_field16465__1 = (function (name__13492__auto__){return text_field16465.call(null,name__13492__auto__,null);
});
var text_field16465__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__13492__auto__,value__13493__auto__);
});
text_field16465 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return text_field16465__1.call(this,name__13492__auto__);
case 2:
return text_field16465__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16465.cljs$core$IFn$_invoke$arity$1 = text_field16465__1;
text_field16465.cljs$core$IFn$_invoke$arity$2 = text_field16465__2;
return text_field16465;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16465);
/**
* Creates a time input field.
*/
sablono.core.time_field16466 = (function() {
var time_field16466 = null;
var time_field16466__1 = (function (name__13492__auto__){return time_field16466.call(null,name__13492__auto__,null);
});
var time_field16466__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__13492__auto__,value__13493__auto__);
});
time_field16466 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return time_field16466__1.call(this,name__13492__auto__);
case 2:
return time_field16466__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field16466.cljs$core$IFn$_invoke$arity$1 = time_field16466__1;
time_field16466.cljs$core$IFn$_invoke$arity$2 = time_field16466__2;
return time_field16466;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field16466);
/**
* Creates a url input field.
*/
sablono.core.url_field16467 = (function() {
var url_field16467 = null;
var url_field16467__1 = (function (name__13492__auto__){return url_field16467.call(null,name__13492__auto__,null);
});
var url_field16467__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__13492__auto__,value__13493__auto__);
});
url_field16467 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return url_field16467__1.call(this,name__13492__auto__);
case 2:
return url_field16467__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field16467.cljs$core$IFn$_invoke$arity$1 = url_field16467__1;
url_field16467.cljs$core$IFn$_invoke$arity$2 = url_field16467__2;
return url_field16467;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field16467);
/**
* Creates a week input field.
*/
sablono.core.week_field16468 = (function() {
var week_field16468 = null;
var week_field16468__1 = (function (name__13492__auto__){return week_field16468.call(null,name__13492__auto__,null);
});
var week_field16468__2 = (function (name__13492__auto__,value__13493__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__13492__auto__,value__13493__auto__);
});
week_field16468 = function(name__13492__auto__,value__13493__auto__){
switch(arguments.length){
case 1:
return week_field16468__1.call(this,name__13492__auto__);
case 2:
return week_field16468__2.call(this,name__13492__auto__,value__13493__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field16468.cljs$core$IFn$_invoke$arity$1 = week_field16468__1;
week_field16468.cljs$core$IFn$_invoke$arity$2 = week_field16468__2;
return week_field16468;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field16468);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box16469 = (function() {
var check_box16469 = null;
var check_box16469__1 = (function (name){return check_box16469.call(null,name,null);
});
var check_box16469__2 = (function (name,checked_QMARK_){return check_box16469.call(null,name,checked_QMARK_,"true");
});
var check_box16469__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box16469 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16469__1.call(this,name);
case 2:
return check_box16469__2.call(this,name,checked_QMARK_);
case 3:
return check_box16469__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16469.cljs$core$IFn$_invoke$arity$1 = check_box16469__1;
check_box16469.cljs$core$IFn$_invoke$arity$2 = check_box16469__2;
check_box16469.cljs$core$IFn$_invoke$arity$3 = check_box16469__3;
return check_box16469;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16469);
/**
* Creates a radio button.
*/
sablono.core.radio_button16470 = (function() {
var radio_button16470 = null;
var radio_button16470__1 = (function (group){return radio_button16470.call(null,group,null);
});
var radio_button16470__2 = (function (group,checked_QMARK_){return radio_button16470.call(null,group,checked_QMARK_,"true");
});
var radio_button16470__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button16470 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16470__1.call(this,group);
case 2:
return radio_button16470__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16470__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16470.cljs$core$IFn$_invoke$arity$1 = radio_button16470__1;
radio_button16470.cljs$core$IFn$_invoke$arity$2 = radio_button16470__2;
radio_button16470.cljs$core$IFn$_invoke$arity$3 = radio_button16470__3;
return radio_button16470;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16470);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16471 = (function() {
var select_options16471 = null;
var select_options16471__1 = (function (coll){return select_options16471.call(null,coll,null);
});
var select_options16471__2 = (function (coll,selected){var iter__8586__auto__ = (function iter__16480(s__16481){return (new cljs.core.LazySeq(null,(function (){var s__16481__$1 = s__16481;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16481__$1);if(temp__4126__auto__)
{var s__16481__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16481__$2))
{var c__8584__auto__ = cljs.core.chunk_first.call(null,s__16481__$2);var size__8585__auto__ = cljs.core.count.call(null,c__8584__auto__);var b__16483 = cljs.core.chunk_buffer.call(null,size__8585__auto__);if((function (){var i__16482 = 0;while(true){
if((i__16482 < size__8585__auto__))
{var x = cljs.core._nth.call(null,c__8584__auto__,i__16482);cljs.core.chunk_append.call(null,b__16483,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16486 = x;var text = cljs.core.nth.call(null,vec__16486,0,null);var val = cljs.core.nth.call(null,vec__16486,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__16486,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16471.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__16488 = (i__16482 + 1);
i__16482 = G__16488;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16483),iter__16480.call(null,cljs.core.chunk_rest.call(null,s__16481__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16483),null);
}
} else
{var x = cljs.core.first.call(null,s__16481__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16487 = x;var text = cljs.core.nth.call(null,vec__16487,0,null);var val = cljs.core.nth.call(null,vec__16487,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__16487,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16471.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16480.call(null,cljs.core.rest.call(null,s__16481__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8586__auto__.call(null,coll);
});
select_options16471 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16471__1.call(this,coll);
case 2:
return select_options16471__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16471.cljs$core$IFn$_invoke$arity$1 = select_options16471__1;
select_options16471.cljs$core$IFn$_invoke$arity$2 = select_options16471__2;
return select_options16471;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16471);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16489 = (function() {
var drop_down16489 = null;
var drop_down16489__2 = (function (name,options){return drop_down16489.call(null,name,options,null);
});
var drop_down16489__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16489 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16489__2.call(this,name,options);
case 3:
return drop_down16489__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16489.cljs$core$IFn$_invoke$arity$2 = drop_down16489__2;
drop_down16489.cljs$core$IFn$_invoke$arity$3 = drop_down16489__3;
return drop_down16489;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16489);
/**
* Creates a text area element.
*/
sablono.core.text_area16490 = (function() {
var text_area16490 = null;
var text_area16490__1 = (function (name){return text_area16490.call(null,name,null);
});
var text_area16490__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area16490 = function(name,value){
switch(arguments.length){
case 1:
return text_area16490__1.call(this,name);
case 2:
return text_area16490__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16490.cljs$core$IFn$_invoke$arity$1 = text_area16490__1;
text_area16490.cljs$core$IFn$_invoke$arity$2 = text_area16490__2;
return text_area16490;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16490);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16491 = (function label16491(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16491);
/**
* Creates a submit button.
*/
sablono.core.submit_button16492 = (function submit_button16492(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16492);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16493 = (function reset_button16493(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16493);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16494 = (function() { 
var form_to16494__delegate = function (p__16495,body){var vec__16497 = p__16495;var method = cljs.core.nth.call(null,vec__16497,0,null);var action = cljs.core.nth.call(null,vec__16497,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16494 = function (p__16495,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16494__delegate.call(this,p__16495,body);};
form_to16494.cljs$lang$maxFixedArity = 1;
form_to16494.cljs$lang$applyTo = (function (arglist__16498){
var p__16495 = cljs.core.first(arglist__16498);
var body = cljs.core.rest(arglist__16498);
return form_to16494__delegate(p__16495,body);
});
form_to16494.cljs$core$IFn$_invoke$arity$variadic = form_to16494__delegate;
return form_to16494;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16494);

//# sourceMappingURL=core.js.map