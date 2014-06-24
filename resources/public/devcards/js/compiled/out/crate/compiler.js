// Compiled by ClojureScript 0.0-2202
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",1014018518),"http://www.w3.org/2000/svg"], null);
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function as_content(parent,content){var seq__19981 = cljs.core.seq.call(null,content);var chunk__19982 = null;var count__19983 = 0;var i__19984 = 0;while(true){
if((i__19984 < count__19983))
{var c = cljs.core._nth.call(null,chunk__19982,i__19984);var child_19985 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_19985))
{goog.dom.appendChild(parent,child_19985);
} else
{}
{
var G__19986 = seq__19981;
var G__19987 = chunk__19982;
var G__19988 = count__19983;
var G__19989 = (i__19984 + 1);
seq__19981 = G__19986;
chunk__19982 = G__19987;
count__19983 = G__19988;
i__19984 = G__19989;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19981);if(temp__4126__auto__)
{var seq__19981__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19981__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__19981__$1);{
var G__19990 = cljs.core.chunk_rest.call(null,seq__19981__$1);
var G__19991 = c__8617__auto__;
var G__19992 = cljs.core.count.call(null,c__8617__auto__);
var G__19993 = 0;
seq__19981 = G__19990;
chunk__19982 = G__19991;
count__19983 = G__19992;
i__19984 = G__19993;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__19981__$1);var child_19994 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_19994))
{goog.dom.appendChild(parent,child_19994);
} else
{}
{
var G__19995 = cljs.core.next.call(null,seq__19981__$1);
var G__19996 = null;
var G__19997 = 0;
var G__19998 = 0;
seq__19981 = G__19995;
chunk__19982 = G__19996;
count__19983 = G__19997;
i__19984 = G__19998;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_binding = (function (){var method_table__8727__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8728__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8731__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dom-binding",((function (method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__,hierarchy__8731__auto__){
return (function (type,_,___$1){return type;
});})(method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__,hierarchy__8731__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8731__auto__,method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",1017460895),(function (_,b,elem){return crate.binding.on_change.call(null,b,(function (v){goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (_,p__19999,elem){var vec__20000 = p__19999;var k = cljs.core.nth.call(null,vec__20000,0,null);var b = cljs.core.nth.call(null,vec__20000,1,null);return crate.binding.on_change.call(null,b,((function (vec__20000,k,b){
return (function (v){return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__20000,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",1123684643),(function (_,p__20001,elem){var vec__20002 = p__20001;var k = cljs.core.nth.call(null,vec__20002,0,null);var b = cljs.core.nth.call(null,vec__20002,1,null);return crate.binding.on_change.call(null,b,((function (vec__20002,k,b){
return (function (v){if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__20002,k,b))
);
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",1014000659));if(cljs.core.truth_(temp__4124__auto__))
{var adder = temp__4124__auto__;return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",4374260726));if(cljs.core.truth_(temp__4124__auto__))
{var remover = temp__4124__auto__;return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1016963678),(function (_,bc,parent){return crate.binding.on_change.call(null,bc,(function (type,elem,v){var pred__20003 = cljs.core._EQ_;var expr__20004 = type;if(cljs.core.truth_(pred__20003.call(null,new cljs.core.Keyword(null,"add","add",1014000659),expr__20004)))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(cljs.core.truth_(pred__20003.call(null,new cljs.core.Keyword(null,"remove","remove",4374260726),expr__20004)))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20004)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){var seq__20012 = cljs.core.seq.call(null,bs);var chunk__20013 = null;var count__20014 = 0;var i__20015 = 0;while(true){
if((i__20015 < count__20014))
{var vec__20016 = cljs.core._nth.call(null,chunk__20013,i__20015);var type = cljs.core.nth.call(null,vec__20016,0,null);var b = cljs.core.nth.call(null,vec__20016,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__20018 = seq__20012;
var G__20019 = chunk__20013;
var G__20020 = count__20014;
var G__20021 = (i__20015 + 1);
seq__20012 = G__20018;
chunk__20013 = G__20019;
count__20014 = G__20020;
i__20015 = G__20021;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20012);if(temp__4126__auto__)
{var seq__20012__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20012__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__20012__$1);{
var G__20022 = cljs.core.chunk_rest.call(null,seq__20012__$1);
var G__20023 = c__8617__auto__;
var G__20024 = cljs.core.count.call(null,c__8617__auto__);
var G__20025 = 0;
seq__20012 = G__20022;
chunk__20013 = G__20023;
count__20014 = G__20024;
i__20015 = G__20025;
continue;
}
} else
{var vec__20017 = cljs.core.first.call(null,seq__20012__$1);var type = cljs.core.nth.call(null,vec__20017,0,null);var b = cljs.core.nth.call(null,vec__20017,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__20026 = cljs.core.next.call(null,seq__20012__$1);
var G__20027 = null;
var G__20028 = 0;
var G__20029 = 0;
seq__20012 = G__20026;
chunk__20013 = G__20027;
count__20014 = G__20028;
i__20015 = G__20029;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){if(typeof v === 'string')
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var seq__20036_20042 = cljs.core.seq.call(null,v);var chunk__20037_20043 = null;var count__20038_20044 = 0;var i__20039_20045 = 0;while(true){
if((i__20039_20045 < count__20038_20044))
{var vec__20040_20046 = cljs.core._nth.call(null,chunk__20037_20043,i__20039_20045);var k_20047 = cljs.core.nth.call(null,vec__20040_20046,0,null);var v_20048__$1 = cljs.core.nth.call(null,vec__20040_20046,1,null);dom_style.call(null,elem,k_20047,v_20048__$1);
{
var G__20049 = seq__20036_20042;
var G__20050 = chunk__20037_20043;
var G__20051 = count__20038_20044;
var G__20052 = (i__20039_20045 + 1);
seq__20036_20042 = G__20049;
chunk__20037_20043 = G__20050;
count__20038_20044 = G__20051;
i__20039_20045 = G__20052;
continue;
}
} else
{var temp__4126__auto___20053 = cljs.core.seq.call(null,seq__20036_20042);if(temp__4126__auto___20053)
{var seq__20036_20054__$1 = temp__4126__auto___20053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20036_20054__$1))
{var c__8617__auto___20055 = cljs.core.chunk_first.call(null,seq__20036_20054__$1);{
var G__20056 = cljs.core.chunk_rest.call(null,seq__20036_20054__$1);
var G__20057 = c__8617__auto___20055;
var G__20058 = cljs.core.count.call(null,c__8617__auto___20055);
var G__20059 = 0;
seq__20036_20042 = G__20056;
chunk__20037_20043 = G__20057;
count__20038_20044 = G__20058;
i__20039_20045 = G__20059;
continue;
}
} else
{var vec__20041_20060 = cljs.core.first.call(null,seq__20036_20054__$1);var k_20061 = cljs.core.nth.call(null,vec__20041_20060,0,null);var v_20062__$1 = cljs.core.nth.call(null,vec__20041_20060,1,null);dom_style.call(null,elem,k_20061,v_20062__$1);
{
var G__20063 = cljs.core.next.call(null,seq__20036_20054__$1);
var G__20064 = null;
var G__20065 = 0;
var G__20066 = 0;
seq__20036_20042 = G__20063;
chunk__20037_20043 = G__20064;
count__20038_20044 = G__20065;
i__20039_20045 = G__20066;
continue;
}
}
} else
{}
}
break;
}
} else
{if(crate.binding.binding_QMARK_.call(null,v))
{crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){var v__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var seq__20073_20079 = cljs.core.seq.call(null,attrs);var chunk__20074_20080 = null;var count__20075_20081 = 0;var i__20076_20082 = 0;while(true){
if((i__20076_20082 < count__20075_20081))
{var vec__20077_20083 = cljs.core._nth.call(null,chunk__20074_20080,i__20076_20082);var k_20084 = cljs.core.nth.call(null,vec__20077_20083,0,null);var v_20085 = cljs.core.nth.call(null,vec__20077_20083,1,null);dom_attr.call(null,elem,k_20084,v_20085);
{
var G__20086 = seq__20073_20079;
var G__20087 = chunk__20074_20080;
var G__20088 = count__20075_20081;
var G__20089 = (i__20076_20082 + 1);
seq__20073_20079 = G__20086;
chunk__20074_20080 = G__20087;
count__20075_20081 = G__20088;
i__20076_20082 = G__20089;
continue;
}
} else
{var temp__4126__auto___20090 = cljs.core.seq.call(null,seq__20073_20079);if(temp__4126__auto___20090)
{var seq__20073_20091__$1 = temp__4126__auto___20090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20073_20091__$1))
{var c__8617__auto___20092 = cljs.core.chunk_first.call(null,seq__20073_20091__$1);{
var G__20093 = cljs.core.chunk_rest.call(null,seq__20073_20091__$1);
var G__20094 = c__8617__auto___20092;
var G__20095 = cljs.core.count.call(null,c__8617__auto___20092);
var G__20096 = 0;
seq__20073_20079 = G__20093;
chunk__20074_20080 = G__20094;
count__20075_20081 = G__20095;
i__20076_20082 = G__20096;
continue;
}
} else
{var vec__20078_20097 = cljs.core.first.call(null,seq__20073_20091__$1);var k_20098 = cljs.core.nth.call(null,vec__20078_20097,0,null);var v_20099 = cljs.core.nth.call(null,vec__20078_20097,1,null);dom_attr.call(null,elem,k_20098,v_20099);
{
var G__20100 = cljs.core.next.call(null,seq__20073_20091__$1);
var G__20101 = null;
var G__20102 = 0;
var G__20103 = 0;
seq__20073_20079 = G__20100;
chunk__20074_20080 = G__20101;
count__20075_20081 = G__20102;
i__20076_20082 = G__20103;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643)))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v_20104__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);elem.setAttribute(cljs.core.name.call(null,k),v_20104__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20107){var vec__20108 = p__20107;var n = cljs.core.nth.call(null,vec__20108,0,null);var v = cljs.core.nth.call(null,vec__20108,1,null);if(v === true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__20110){var vec__20115 = p__20110;var tag = cljs.core.nth.call(null,vec__20115,0,null);var content = cljs.core.nthnext.call(null,vec__20115,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__20116 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));var _ = cljs.core.nth.call(null,vec__20116,0,null);var tag__$1 = cljs.core.nth.call(null,vec__20116,1,null);var id = cljs.core.nth.call(null,vec__20116,2,null);var class$ = cljs.core.nth.call(null,vec__20116,3,null);var vec__20117 = (function (){var vec__20118 = clojure.string.split.call(null,tag__$1,/:/);var nsp = cljs.core.nth.call(null,vec__20118,0,null);var t = cljs.core.nth.call(null,vec__20118,1,null);var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));if(cljs.core.truth_(t))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7869__auto__ = ns_xmlns;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return nsp;
}
})(),t], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();var nsp = cljs.core.nth.call(null,vec__20117,0,null);var tag__$2 = cljs.core.nth.call(null,vec__20117,1,null);var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__20116,_,tag__$1,id,class$,vec__20117,nsp,tag__$2,vec__20115,tag,content){
return (function (p1__20109_SHARP_){return !((cljs.core.second.call(null,p1__20109_SHARP_) == null));
});})(vec__20116,_,tag__$1,id,class$,vec__20117,nsp,tag__$2,vec__20115,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(function (){var or__7869__auto__ = id;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return null;
}
})(),new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){var attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){return document.createElementNS(nsp,tag);
}):(function (_,tag){return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){var bindings20121 = crate.compiler.bindings;try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__20122 = crate.compiler.normalize_element.call(null,tag_def);var nsp = cljs.core.nth.call(null,vec__20122,0,null);var tag = cljs.core.nth.call(null,vec__20122,1,null);var attrs = cljs.core.nth.call(null,vec__20122,2,null);var content = cljs.core.nth.call(null,vec__20122,3,null);var elem = crate.compiler.create_elem.call(null,nsp,tag);crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings20121;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){return (function() { 
var G__20125__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__20124 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__20124,0,null);var body = cljs.core.nthnext.call(null,vec__20124,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__20125 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20125__delegate.call(this,args);};
G__20125.cljs$lang$maxFixedArity = 0;
G__20125.cljs$lang$applyTo = (function (arglist__20126){
var args = cljs.core.seq(arglist__20126);
return G__20125__delegate(args);
});
G__20125.cljs$core$IFn$_invoke$arity$variadic = G__20125__delegate;
return G__20125;
})()
;
});

//# sourceMappingURL=compiler.js.map