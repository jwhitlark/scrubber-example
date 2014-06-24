// Compiled by ClojureScript 0.0-2202
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__20127 = cljs.core.seq.call(null,self__.watches);var chunk__20128 = null;var count__20129 = 0;var i__20130 = 0;while(true){
if((i__20130 < count__20129))
{var vec__20131 = cljs.core._nth.call(null,chunk__20128,i__20130);var key__$1 = cljs.core.nth.call(null,vec__20131,0,null);var f = cljs.core.nth.call(null,vec__20131,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__20133 = seq__20127;
var G__20134 = chunk__20128;
var G__20135 = count__20129;
var G__20136 = (i__20130 + 1);
seq__20127 = G__20133;
chunk__20128 = G__20134;
count__20129 = G__20135;
i__20130 = G__20136;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20127);if(temp__4126__auto__)
{var seq__20127__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20127__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__20127__$1);{
var G__20137 = cljs.core.chunk_rest.call(null,seq__20127__$1);
var G__20138 = c__8617__auto__;
var G__20139 = cljs.core.count.call(null,c__8617__auto__);
var G__20140 = 0;
seq__20127 = G__20137;
chunk__20128 = G__20138;
count__20129 = G__20139;
i__20130 = G__20140;
continue;
}
} else
{var vec__20132 = cljs.core.first.call(null,seq__20127__$1);var key__$1 = cljs.core.nth.call(null,vec__20132,0,null);var f = cljs.core.nth.call(null,vec__20132,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__20141 = cljs.core.next.call(null,seq__20127__$1);
var G__20142 = null;
var G__20143 = 0;
var G__20144 = 0;
seq__20127 = G__20141;
chunk__20128 = G__20142;
count__20129 = G__20143;
i__20130 = G__20144;
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
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__20146 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__20146,0,null);var path__$2 = cljs.core.nth.call(null,vec__20146,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__20146,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__20146,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__20147__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__20147 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__20147__delegate.call(this,sa,f,x,y,z,more);};
G__20147.cljs$lang$maxFixedArity = 5;
G__20147.cljs$lang$applyTo = (function (arglist__20148){
var sa = cljs.core.first(arglist__20148);
arglist__20148 = cljs.core.next(arglist__20148);
var f = cljs.core.first(arglist__20148);
arglist__20148 = cljs.core.next(arglist__20148);
var x = cljs.core.first(arglist__20148);
arglist__20148 = cljs.core.next(arglist__20148);
var y = cljs.core.first(arglist__20148);
arglist__20148 = cljs.core.next(arglist__20148);
var z = cljs.core.first(arglist__20148);
var more = cljs.core.rest(arglist__20148);
return G__20147__delegate(sa,f,x,y,z,more);
});
G__20147.cljs$core$IFn$_invoke$arity$variadic = G__20147__delegate;
return G__20147;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj20150 = {};return obj20150;
})();
crate.binding._compute = (function _compute(this$){if((function (){var and__7857__auto__ = this$;if(and__7857__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__7857__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__8496__auto__ = (((this$ == null))?null:this$);return (function (){var or__7869__auto__ = (crate.binding._compute[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (crate.binding._compute["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));
return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__20151 = cljs.core.seq.call(null,self__.watches);var chunk__20152 = null;var count__20153 = 0;var i__20154 = 0;while(true){
if((i__20154 < count__20153))
{var vec__20155 = cljs.core._nth.call(null,chunk__20152,i__20154);var key__$1 = cljs.core.nth.call(null,vec__20155,0,null);var f = cljs.core.nth.call(null,vec__20155,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__20157 = seq__20151;
var G__20158 = chunk__20152;
var G__20159 = count__20153;
var G__20160 = (i__20154 + 1);
seq__20151 = G__20157;
chunk__20152 = G__20158;
count__20153 = G__20159;
i__20154 = G__20160;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20151);if(temp__4126__auto__)
{var seq__20151__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20151__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__20151__$1);{
var G__20161 = cljs.core.chunk_rest.call(null,seq__20151__$1);
var G__20162 = c__8617__auto__;
var G__20163 = cljs.core.count.call(null,c__8617__auto__);
var G__20164 = 0;
seq__20151 = G__20161;
chunk__20152 = G__20162;
count__20153 = G__20163;
i__20154 = G__20164;
continue;
}
} else
{var vec__20156 = cljs.core.first.call(null,seq__20151__$1);var key__$1 = cljs.core.nth.call(null,vec__20156,0,null);var f = cljs.core.nth.call(null,vec__20156,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__20165 = cljs.core.next.call(null,seq__20151__$1);
var G__20166 = null;
var G__20167 = 0;
var G__20168 = 0;
seq__20151 = G__20165;
chunk__20152 = G__20166;
count__20153 = G__20167;
i__20154 = G__20168;
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
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key){return (new crate.binding.Computed(atms,value,func,watches,key));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(atms,null,func,null,k));crate.binding._compute.call(null,neue);
var seq__20173_20177 = cljs.core.seq.call(null,atms);var chunk__20174_20178 = null;var count__20175_20179 = 0;var i__20176_20180 = 0;while(true){
if((i__20176_20180 < count__20175_20179))
{var atm_20181 = cljs.core._nth.call(null,chunk__20174_20178,i__20176_20180);cljs.core.add_watch.call(null,atm_20181,k,((function (seq__20173_20177,chunk__20174_20178,count__20175_20179,i__20176_20180,atm_20181,k,neue){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__20173_20177,chunk__20174_20178,count__20175_20179,i__20176_20180,atm_20181,k,neue))
);
{
var G__20182 = seq__20173_20177;
var G__20183 = chunk__20174_20178;
var G__20184 = count__20175_20179;
var G__20185 = (i__20176_20180 + 1);
seq__20173_20177 = G__20182;
chunk__20174_20178 = G__20183;
count__20175_20179 = G__20184;
i__20176_20180 = G__20185;
continue;
}
} else
{var temp__4126__auto___20186 = cljs.core.seq.call(null,seq__20173_20177);if(temp__4126__auto___20186)
{var seq__20173_20187__$1 = temp__4126__auto___20186;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20173_20187__$1))
{var c__8617__auto___20188 = cljs.core.chunk_first.call(null,seq__20173_20187__$1);{
var G__20189 = cljs.core.chunk_rest.call(null,seq__20173_20187__$1);
var G__20190 = c__8617__auto___20188;
var G__20191 = cljs.core.count.call(null,c__8617__auto___20188);
var G__20192 = 0;
seq__20173_20177 = G__20189;
chunk__20174_20178 = G__20190;
count__20175_20179 = G__20191;
i__20176_20180 = G__20192;
continue;
}
} else
{var atm_20193 = cljs.core.first.call(null,seq__20173_20187__$1);cljs.core.add_watch.call(null,atm_20193,k,((function (seq__20173_20177,chunk__20174_20178,count__20175_20179,i__20176_20180,atm_20193,seq__20173_20187__$1,temp__4126__auto___20186,k,neue){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__20173_20177,chunk__20174_20178,count__20175_20179,i__20176_20180,atm_20193,seq__20173_20187__$1,temp__4126__auto___20186,k,neue))
);
{
var G__20194 = cljs.core.next.call(null,seq__20173_20187__$1);
var G__20195 = null;
var G__20196 = 0;
var G__20197 = 0;
seq__20173_20177 = G__20194;
chunk__20174_20178 = G__20195;
count__20175_20179 = G__20196;
i__20176_20180 = G__20197;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){return cljs.core.filter.call(null,(function (p1__20198_SHARP_){return (p1__20198_SHARP_ > 100);
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,1340);
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj20200 = {};return obj20200;
})();
crate.binding.bindable = (function (){var obj20202 = {};return obj20202;
})();
crate.binding._value = (function _value(this$){if((function (){var and__7857__auto__ = this$;if(and__7857__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__7857__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__8496__auto__ = (((this$ == null))?null:this$);return (function (){var or__7869__auto__ = (crate.binding._value[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (crate.binding._value["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__7857__auto__ = this$;if(and__7857__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__7857__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__8496__auto__ = (((this$ == null))?null:this$);return (function (){var or__7869__auto__ = (crate.binding._on_change[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (crate.binding._on_change["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__20203 = cljs.core.seq.call(null,self__.watches);var chunk__20204 = null;var count__20205 = 0;var i__20206 = 0;while(true){
if((i__20206 < count__20205))
{var vec__20207 = cljs.core._nth.call(null,chunk__20204,i__20206);var key = cljs.core.nth.call(null,vec__20207,0,null);var f = cljs.core.nth.call(null,vec__20207,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__20209 = seq__20203;
var G__20210 = chunk__20204;
var G__20211 = count__20205;
var G__20212 = (i__20206 + 1);
seq__20203 = G__20209;
chunk__20204 = G__20210;
count__20205 = G__20211;
i__20206 = G__20212;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20203);if(temp__4126__auto__)
{var seq__20203__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20203__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__20203__$1);{
var G__20213 = cljs.core.chunk_rest.call(null,seq__20203__$1);
var G__20214 = c__8617__auto__;
var G__20215 = cljs.core.count.call(null,c__8617__auto__);
var G__20216 = 0;
seq__20203 = G__20213;
chunk__20204 = G__20214;
count__20205 = G__20215;
i__20206 = G__20216;
continue;
}
} else
{var vec__20208 = cljs.core.first.call(null,seq__20203__$1);var key = cljs.core.nth.call(null,vec__20208,0,null);var f = cljs.core.nth.call(null,vec__20208,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__20217 = cljs.core.next.call(null,seq__20203__$1);
var G__20218 = null;
var G__20219 = 0;
var G__20220 = 0;
seq__20203 = G__20217;
chunk__20204 = G__20218;
count__20205 = G__20219;
i__20206 = G__20220;
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
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__20221){var vec__20222 = p__20221;var event = cljs.core.nth.call(null,vec__20222,0,null);var el = cljs.core.nth.call(null,vec__20222,1,null);var v = cljs.core.nth.call(null,vec__20222,2,null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__7869__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__20223){
var bc = cljs.core.first(arglist__20223);
var segs = cljs.core.rest(arglist__20223);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__20232_20240 = cljs.core.seq.call(null,added);var chunk__20233_20241 = null;var count__20234_20242 = 0;var i__20235_20243 = 0;while(true){
if((i__20235_20243 < count__20234_20242))
{var a_20244 = cljs.core._nth.call(null,chunk__20233_20241,i__20235_20243);crate.binding.bc_add.call(null,bc,a_20244,a_20244);
{
var G__20245 = seq__20232_20240;
var G__20246 = chunk__20233_20241;
var G__20247 = count__20234_20242;
var G__20248 = (i__20235_20243 + 1);
seq__20232_20240 = G__20245;
chunk__20233_20241 = G__20246;
count__20234_20242 = G__20247;
i__20235_20243 = G__20248;
continue;
}
} else
{var temp__4126__auto___20249 = cljs.core.seq.call(null,seq__20232_20240);if(temp__4126__auto___20249)
{var seq__20232_20250__$1 = temp__4126__auto___20249;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20232_20250__$1))
{var c__8617__auto___20251 = cljs.core.chunk_first.call(null,seq__20232_20250__$1);{
var G__20252 = cljs.core.chunk_rest.call(null,seq__20232_20250__$1);
var G__20253 = c__8617__auto___20251;
var G__20254 = cljs.core.count.call(null,c__8617__auto___20251);
var G__20255 = 0;
seq__20232_20240 = G__20252;
chunk__20233_20241 = G__20253;
count__20234_20242 = G__20254;
i__20235_20243 = G__20255;
continue;
}
} else
{var a_20256 = cljs.core.first.call(null,seq__20232_20250__$1);crate.binding.bc_add.call(null,bc,a_20256,a_20256);
{
var G__20257 = cljs.core.next.call(null,seq__20232_20250__$1);
var G__20258 = null;
var G__20259 = 0;
var G__20260 = 0;
seq__20232_20240 = G__20257;
chunk__20233_20241 = G__20258;
count__20234_20242 = G__20259;
i__20235_20243 = G__20260;
continue;
}
}
} else
{}
}
break;
}
var seq__20236 = cljs.core.seq.call(null,removed);var chunk__20237 = null;var count__20238 = 0;var i__20239 = 0;while(true){
if((i__20239 < count__20238))
{var r = cljs.core._nth.call(null,chunk__20237,i__20239);crate.binding.bc_remove.call(null,bc,r);
{
var G__20261 = seq__20236;
var G__20262 = chunk__20237;
var G__20263 = count__20238;
var G__20264 = (i__20239 + 1);
seq__20236 = G__20261;
chunk__20237 = G__20262;
count__20238 = G__20263;
i__20239 = G__20264;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20236);if(temp__4126__auto__)
{var seq__20236__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20236__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__20236__$1);{
var G__20265 = cljs.core.chunk_rest.call(null,seq__20236__$1);
var G__20266 = c__8617__auto__;
var G__20267 = cljs.core.count.call(null,c__8617__auto__);
var G__20268 = 0;
seq__20236 = G__20265;
chunk__20237 = G__20266;
count__20238 = G__20267;
i__20239 = G__20268;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__20236__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__20269 = cljs.core.next.call(null,seq__20236__$1);
var G__20270 = null;
var G__20271 = 0;
var G__20272 = 0;
seq__20236 = G__20269;
chunk__20237 = G__20270;
count__20238 = G__20271;
i__20239 = G__20272;
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
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__20273){var vec__20276 = p__20273;var path = cljs.core.nth.call(null,vec__20276,0,null);var opts = cljs.core.nth.call(null,vec__20276,1,null);var vec__20277 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__20277,0,null);var opts__$1 = cljs.core.nth.call(null,vec__20277,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__20277,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__20276,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__20277,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__20276,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__20273 = null;if (arguments.length > 1) {
  p__20273 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__20273);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__20278){
var atm = cljs.core.first(arglist__20278);
var p__20273 = cljs.core.rest(arglist__20278);
return bound_coll__delegate(atm,p__20273);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__20279){var vec__20281 = p__20279;var opts = cljs.core.nth.call(null,vec__20281,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__20281,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__20281,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__20279 = null;if (arguments.length > 2) {
  p__20279 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__20279);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__20282){
var as = cljs.core.first(arglist__20282);
arglist__20282 = cljs.core.next(arglist__20282);
var atm = cljs.core.first(arglist__20282);
var p__20279 = cljs.core.rest(arglist__20282);
return map_bound__delegate(as,atm,p__20279);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__20284 = b;if(G__20284)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__20284.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__20284.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__20284);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__20284);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__20286 = b;if(G__20286)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__20286.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__20286.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__20286);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__20286);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__20288 = atm;if(G__20288)
{var bit__8519__auto__ = (G__20288.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__8519__auto__) || (G__20288.cljs$core$IDeref$))
{return true;
} else
{if((!G__20288.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__20288);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__20288);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__20289){var vec__20291 = p__20289;var func = cljs.core.nth.call(null,vec__20291,0,null);var func__$1 = (function (){var or__7869__auto__ = func;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__20289 = null;if (arguments.length > 1) {
  p__20289 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__20289);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__20292){
var atm = cljs.core.first(arglist__20292);
var p__20289 = cljs.core.rest(arglist__20292);
return bound__delegate(atm,p__20289);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;

//# sourceMappingURL=binding.js.map