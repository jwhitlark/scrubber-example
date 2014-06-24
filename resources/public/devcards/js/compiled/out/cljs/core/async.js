// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16562 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16562 = (function (f,fn_handler,meta16563){
this.f = f;
this.fn_handler = fn_handler;
this.meta16563 = meta16563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16562.cljs$lang$type = true;
cljs.core.async.t16562.cljs$lang$ctorStr = "cljs.core.async/t16562";
cljs.core.async.t16562.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16562");
});
cljs.core.async.t16562.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16564){var self__ = this;
var _16564__$1 = this;return self__.meta16563;
});
cljs.core.async.t16562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16564,meta16563__$1){var self__ = this;
var _16564__$1 = this;return (new cljs.core.async.t16562(self__.f,self__.fn_handler,meta16563__$1));
});
cljs.core.async.__GT_t16562 = (function __GT_t16562(f__$1,fn_handler__$1,meta16563){return (new cljs.core.async.t16562(f__$1,fn_handler__$1,meta16563));
});
}
return (new cljs.core.async.t16562(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16566 = buff;if(G__16566)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__16566.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16566.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16566);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16566);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_16567 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16567);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16567,ret){
return (function (){return fn1.call(null,val_16567);
});})(val_16567,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8717__auto___16568 = n;var x_16569 = 0;while(true){
if((x_16569 < n__8717__auto___16568))
{(a[x_16569] = 0);
{
var G__16570 = (x_16569 + 1);
x_16569 = G__16570;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__16571 = (i + 1);
i = G__16571;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16575 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16575 = (function (flag,alt_flag,meta16576){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16576 = meta16576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16575.cljs$lang$type = true;
cljs.core.async.t16575.cljs$lang$ctorStr = "cljs.core.async/t16575";
cljs.core.async.t16575.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16575");
});})(flag))
;
cljs.core.async.t16575.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16577){var self__ = this;
var _16577__$1 = this;return self__.meta16576;
});})(flag))
;
cljs.core.async.t16575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16577,meta16576__$1){var self__ = this;
var _16577__$1 = this;return (new cljs.core.async.t16575(self__.flag,self__.alt_flag,meta16576__$1));
});})(flag))
;
cljs.core.async.__GT_t16575 = ((function (flag){
return (function __GT_t16575(flag__$1,alt_flag__$1,meta16576){return (new cljs.core.async.t16575(flag__$1,alt_flag__$1,meta16576));
});})(flag))
;
}
return (new cljs.core.async.t16575(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16581 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16581 = (function (cb,flag,alt_handler,meta16582){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16582 = meta16582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16581.cljs$lang$type = true;
cljs.core.async.t16581.cljs$lang$ctorStr = "cljs.core.async/t16581";
cljs.core.async.t16581.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16581");
});
cljs.core.async.t16581.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16583){var self__ = this;
var _16583__$1 = this;return self__.meta16582;
});
cljs.core.async.t16581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16583,meta16582__$1){var self__ = this;
var _16583__$1 = this;return (new cljs.core.async.t16581(self__.cb,self__.flag,self__.alt_handler,meta16582__$1));
});
cljs.core.async.__GT_t16581 = (function __GT_t16581(cb__$1,flag__$1,alt_handler__$1,meta16582){return (new cljs.core.async.t16581(cb__$1,flag__$1,alt_handler__$1,meta16582));
});
}
return (new cljs.core.async.t16581(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16584_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16584_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16585_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16585_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7869__auto__ = wport;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16586 = (i + 1);
i = G__16586;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7869__auto__ = ret;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7857__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7857__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7857__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__16587){var map__16589 = p__16587;var map__16589__$1 = ((cljs.core.seq_QMARK_.call(null,map__16589))?cljs.core.apply.call(null,cljs.core.hash_map,map__16589):map__16589);var opts = map__16589__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16587 = null;if (arguments.length > 1) {
  p__16587 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16587);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16590){
var ports = cljs.core.first(arglist__16590);
var p__16587 = cljs.core.rest(arglist__16590);
return alts_BANG___delegate(ports,p__16587);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16598 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16598 = (function (ch,f,map_LT_,meta16599){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16599 = meta16599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16598.cljs$lang$type = true;
cljs.core.async.t16598.cljs$lang$ctorStr = "cljs.core.async/t16598";
cljs.core.async.t16598.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16598");
});
cljs.core.async.t16598.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16598.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t16598.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16598.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16601 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16601 = (function (fn1,_,meta16599,ch,f,map_LT_,meta16602){
this.fn1 = fn1;
this._ = _;
this.meta16599 = meta16599;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16602 = meta16602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16601.cljs$lang$type = true;
cljs.core.async.t16601.cljs$lang$ctorStr = "cljs.core.async/t16601";
cljs.core.async.t16601.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16601");
});})(___$1))
;
cljs.core.async.t16601.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16601.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__16591_SHARP_){return f1.call(null,(((p1__16591_SHARP_ == null))?null:self__.f.call(null,p1__16591_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t16601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16603){var self__ = this;
var _16603__$1 = this;return self__.meta16602;
});})(___$1))
;
cljs.core.async.t16601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16603,meta16602__$1){var self__ = this;
var _16603__$1 = this;return (new cljs.core.async.t16601(self__.fn1,self__._,self__.meta16599,self__.ch,self__.f,self__.map_LT_,meta16602__$1));
});})(___$1))
;
cljs.core.async.__GT_t16601 = ((function (___$1){
return (function __GT_t16601(fn1__$1,___$2,meta16599__$1,ch__$2,f__$2,map_LT___$2,meta16602){return (new cljs.core.async.t16601(fn1__$1,___$2,meta16599__$1,ch__$2,f__$2,map_LT___$2,meta16602));
});})(___$1))
;
}
return (new cljs.core.async.t16601(fn1,___$1,self__.meta16599,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7857__auto__ = ret;if(cljs.core.truth_(and__7857__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7857__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t16598.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16598.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16598.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16600){var self__ = this;
var _16600__$1 = this;return self__.meta16599;
});
cljs.core.async.t16598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16600,meta16599__$1){var self__ = this;
var _16600__$1 = this;return (new cljs.core.async.t16598(self__.ch,self__.f,self__.map_LT_,meta16599__$1));
});
cljs.core.async.__GT_t16598 = (function __GT_t16598(ch__$1,f__$1,map_LT___$1,meta16599){return (new cljs.core.async.t16598(ch__$1,f__$1,map_LT___$1,meta16599));
});
}
return (new cljs.core.async.t16598(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16607 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16607 = (function (ch,f,map_GT_,meta16608){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16608 = meta16608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16607.cljs$lang$type = true;
cljs.core.async.t16607.cljs$lang$ctorStr = "cljs.core.async/t16607";
cljs.core.async.t16607.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16607");
});
cljs.core.async.t16607.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t16607.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16607.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16609){var self__ = this;
var _16609__$1 = this;return self__.meta16608;
});
cljs.core.async.t16607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16609,meta16608__$1){var self__ = this;
var _16609__$1 = this;return (new cljs.core.async.t16607(self__.ch,self__.f,self__.map_GT_,meta16608__$1));
});
cljs.core.async.__GT_t16607 = (function __GT_t16607(ch__$1,f__$1,map_GT___$1,meta16608){return (new cljs.core.async.t16607(ch__$1,f__$1,map_GT___$1,meta16608));
});
}
return (new cljs.core.async.t16607(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16613 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16613 = (function (ch,p,filter_GT_,meta16614){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16614 = meta16614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16613.cljs$lang$type = true;
cljs.core.async.t16613.cljs$lang$ctorStr = "cljs.core.async/t16613";
cljs.core.async.t16613.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t16613");
});
cljs.core.async.t16613.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16613.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t16613.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16613.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16613.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16613.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16613.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16615){var self__ = this;
var _16615__$1 = this;return self__.meta16614;
});
cljs.core.async.t16613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16615,meta16614__$1){var self__ = this;
var _16615__$1 = this;return (new cljs.core.async.t16613(self__.ch,self__.p,self__.filter_GT_,meta16614__$1));
});
cljs.core.async.__GT_t16613 = (function __GT_t16613(ch__$1,p__$1,filter_GT___$1,meta16614){return (new cljs.core.async.t16613(ch__$1,p__$1,filter_GT___$1,meta16614));
});
}
return (new cljs.core.async.t16613(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___16698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___16698,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___16698,out){
return (function (state_16677){var state_val_16678 = (state_16677[1]);if((state_val_16678 === 7))
{var inst_16673 = (state_16677[2]);var state_16677__$1 = state_16677;var statearr_16679_16699 = state_16677__$1;(statearr_16679_16699[2] = inst_16673);
(statearr_16679_16699[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16678 === 1))
{var state_16677__$1 = state_16677;var statearr_16680_16700 = state_16677__$1;(statearr_16680_16700[2] = null);
(statearr_16680_16700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16678 === 4))
{var inst_16659 = (state_16677[7]);var inst_16659__$1 = (state_16677[2]);var inst_16660 = (inst_16659__$1 == null);var state_16677__$1 = (function (){var statearr_16681 = state_16677;(statearr_16681[7] = inst_16659__$1);
return statearr_16681;
})();if(cljs.core.truth_(inst_16660))
{var statearr_16682_16701 = state_16677__$1;(statearr_16682_16701[1] = 5);
} else
{var statearr_16683_16702 = state_16677__$1;(statearr_16683_16702[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16678 === 6))
{var inst_16659 = (state_16677[7]);var inst_16664 = p.call(null,inst_16659);var state_16677__$1 = state_16677;if(cljs.core.truth_(inst_16664))
{var statearr_16684_16703 = state_16677__$1;(statearr_16684_16703[1] = 8);
} else
{var statearr_16685_16704 = state_16677__$1;(statearr_16685_16704[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16678 === 3))
{var inst_16675 = (state_16677[2]);var state_16677__$1 = state_16677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16677__$1,inst_16675);
} else
{if((state_val_16678 === 2))
{var state_16677__$1 = state_16677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16677__$1,4,ch);
} else
{if((state_val_16678 === 11))
{var inst_16667 = (state_16677[2]);var state_16677__$1 = state_16677;var statearr_16686_16705 = state_16677__$1;(statearr_16686_16705[2] = inst_16667);
(statearr_16686_16705[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16678 === 9))
{var state_16677__$1 = state_16677;var statearr_16687_16706 = state_16677__$1;(statearr_16687_16706[2] = null);
(statearr_16687_16706[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16678 === 5))
{var inst_16662 = cljs.core.async.close_BANG_.call(null,out);var state_16677__$1 = state_16677;var statearr_16688_16707 = state_16677__$1;(statearr_16688_16707[2] = inst_16662);
(statearr_16688_16707[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16678 === 10))
{var inst_16670 = (state_16677[2]);var state_16677__$1 = (function (){var statearr_16689 = state_16677;(statearr_16689[8] = inst_16670);
return statearr_16689;
})();var statearr_16690_16708 = state_16677__$1;(statearr_16690_16708[2] = null);
(statearr_16690_16708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16678 === 8))
{var inst_16659 = (state_16677[7]);var state_16677__$1 = state_16677;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16677__$1,11,out,inst_16659);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___16698,out))
;return ((function (switch__10434__auto__,c__10498__auto___16698,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_16694 = [null,null,null,null,null,null,null,null,null];(statearr_16694[0] = state_machine__10435__auto__);
(statearr_16694[1] = 1);
return statearr_16694;
});
var state_machine__10435__auto____1 = (function (state_16677){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_16677);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e16695){if((e16695 instanceof Object))
{var ex__10438__auto__ = e16695;var statearr_16696_16709 = state_16677;(statearr_16696_16709[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16677);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16710 = state_16677;
state_16677 = G__16710;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_16677){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_16677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___16698,out))
})();var state__10500__auto__ = (function (){var statearr_16697 = f__10499__auto__.call(null);(statearr_16697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___16698);
return statearr_16697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___16698,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__){
return (function (state_16876){var state_val_16877 = (state_16876[1]);if((state_val_16877 === 7))
{var inst_16872 = (state_16876[2]);var state_16876__$1 = state_16876;var statearr_16878_16919 = state_16876__$1;(statearr_16878_16919[2] = inst_16872);
(statearr_16878_16919[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 20))
{var inst_16842 = (state_16876[7]);var inst_16853 = (state_16876[2]);var inst_16854 = cljs.core.next.call(null,inst_16842);var inst_16828 = inst_16854;var inst_16829 = null;var inst_16830 = 0;var inst_16831 = 0;var state_16876__$1 = (function (){var statearr_16879 = state_16876;(statearr_16879[8] = inst_16829);
(statearr_16879[9] = inst_16828);
(statearr_16879[10] = inst_16830);
(statearr_16879[11] = inst_16853);
(statearr_16879[12] = inst_16831);
return statearr_16879;
})();var statearr_16880_16920 = state_16876__$1;(statearr_16880_16920[2] = null);
(statearr_16880_16920[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 1))
{var state_16876__$1 = state_16876;var statearr_16881_16921 = state_16876__$1;(statearr_16881_16921[2] = null);
(statearr_16881_16921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 4))
{var inst_16817 = (state_16876[13]);var inst_16817__$1 = (state_16876[2]);var inst_16818 = (inst_16817__$1 == null);var state_16876__$1 = (function (){var statearr_16882 = state_16876;(statearr_16882[13] = inst_16817__$1);
return statearr_16882;
})();if(cljs.core.truth_(inst_16818))
{var statearr_16883_16922 = state_16876__$1;(statearr_16883_16922[1] = 5);
} else
{var statearr_16884_16923 = state_16876__$1;(statearr_16884_16923[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 15))
{var state_16876__$1 = state_16876;var statearr_16888_16924 = state_16876__$1;(statearr_16888_16924[2] = null);
(statearr_16888_16924[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 21))
{var state_16876__$1 = state_16876;var statearr_16889_16925 = state_16876__$1;(statearr_16889_16925[2] = null);
(statearr_16889_16925[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 13))
{var inst_16829 = (state_16876[8]);var inst_16828 = (state_16876[9]);var inst_16830 = (state_16876[10]);var inst_16831 = (state_16876[12]);var inst_16838 = (state_16876[2]);var inst_16839 = (inst_16831 + 1);var tmp16885 = inst_16829;var tmp16886 = inst_16828;var tmp16887 = inst_16830;var inst_16828__$1 = tmp16886;var inst_16829__$1 = tmp16885;var inst_16830__$1 = tmp16887;var inst_16831__$1 = inst_16839;var state_16876__$1 = (function (){var statearr_16890 = state_16876;(statearr_16890[8] = inst_16829__$1);
(statearr_16890[9] = inst_16828__$1);
(statearr_16890[10] = inst_16830__$1);
(statearr_16890[12] = inst_16831__$1);
(statearr_16890[14] = inst_16838);
return statearr_16890;
})();var statearr_16891_16926 = state_16876__$1;(statearr_16891_16926[2] = null);
(statearr_16891_16926[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 22))
{var state_16876__$1 = state_16876;var statearr_16892_16927 = state_16876__$1;(statearr_16892_16927[2] = null);
(statearr_16892_16927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 6))
{var inst_16817 = (state_16876[13]);var inst_16826 = f.call(null,inst_16817);var inst_16827 = cljs.core.seq.call(null,inst_16826);var inst_16828 = inst_16827;var inst_16829 = null;var inst_16830 = 0;var inst_16831 = 0;var state_16876__$1 = (function (){var statearr_16893 = state_16876;(statearr_16893[8] = inst_16829);
(statearr_16893[9] = inst_16828);
(statearr_16893[10] = inst_16830);
(statearr_16893[12] = inst_16831);
return statearr_16893;
})();var statearr_16894_16928 = state_16876__$1;(statearr_16894_16928[2] = null);
(statearr_16894_16928[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 17))
{var inst_16842 = (state_16876[7]);var inst_16846 = cljs.core.chunk_first.call(null,inst_16842);var inst_16847 = cljs.core.chunk_rest.call(null,inst_16842);var inst_16848 = cljs.core.count.call(null,inst_16846);var inst_16828 = inst_16847;var inst_16829 = inst_16846;var inst_16830 = inst_16848;var inst_16831 = 0;var state_16876__$1 = (function (){var statearr_16895 = state_16876;(statearr_16895[8] = inst_16829);
(statearr_16895[9] = inst_16828);
(statearr_16895[10] = inst_16830);
(statearr_16895[12] = inst_16831);
return statearr_16895;
})();var statearr_16896_16929 = state_16876__$1;(statearr_16896_16929[2] = null);
(statearr_16896_16929[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 3))
{var inst_16874 = (state_16876[2]);var state_16876__$1 = state_16876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16876__$1,inst_16874);
} else
{if((state_val_16877 === 12))
{var inst_16862 = (state_16876[2]);var state_16876__$1 = state_16876;var statearr_16897_16930 = state_16876__$1;(statearr_16897_16930[2] = inst_16862);
(statearr_16897_16930[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 2))
{var state_16876__$1 = state_16876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16876__$1,4,in$);
} else
{if((state_val_16877 === 23))
{var inst_16870 = (state_16876[2]);var state_16876__$1 = state_16876;var statearr_16898_16931 = state_16876__$1;(statearr_16898_16931[2] = inst_16870);
(statearr_16898_16931[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 19))
{var inst_16857 = (state_16876[2]);var state_16876__$1 = state_16876;var statearr_16899_16932 = state_16876__$1;(statearr_16899_16932[2] = inst_16857);
(statearr_16899_16932[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 11))
{var inst_16842 = (state_16876[7]);var inst_16828 = (state_16876[9]);var inst_16842__$1 = cljs.core.seq.call(null,inst_16828);var state_16876__$1 = (function (){var statearr_16900 = state_16876;(statearr_16900[7] = inst_16842__$1);
return statearr_16900;
})();if(inst_16842__$1)
{var statearr_16901_16933 = state_16876__$1;(statearr_16901_16933[1] = 14);
} else
{var statearr_16902_16934 = state_16876__$1;(statearr_16902_16934[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 9))
{var inst_16864 = (state_16876[2]);var inst_16865 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_16876__$1 = (function (){var statearr_16903 = state_16876;(statearr_16903[15] = inst_16864);
return statearr_16903;
})();if(cljs.core.truth_(inst_16865))
{var statearr_16904_16935 = state_16876__$1;(statearr_16904_16935[1] = 21);
} else
{var statearr_16905_16936 = state_16876__$1;(statearr_16905_16936[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 5))
{var inst_16820 = cljs.core.async.close_BANG_.call(null,out);var state_16876__$1 = state_16876;var statearr_16906_16937 = state_16876__$1;(statearr_16906_16937[2] = inst_16820);
(statearr_16906_16937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 14))
{var inst_16842 = (state_16876[7]);var inst_16844 = cljs.core.chunked_seq_QMARK_.call(null,inst_16842);var state_16876__$1 = state_16876;if(inst_16844)
{var statearr_16907_16938 = state_16876__$1;(statearr_16907_16938[1] = 17);
} else
{var statearr_16908_16939 = state_16876__$1;(statearr_16908_16939[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 16))
{var inst_16860 = (state_16876[2]);var state_16876__$1 = state_16876;var statearr_16909_16940 = state_16876__$1;(statearr_16909_16940[2] = inst_16860);
(statearr_16909_16940[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16877 === 10))
{var inst_16829 = (state_16876[8]);var inst_16831 = (state_16876[12]);var inst_16836 = cljs.core._nth.call(null,inst_16829,inst_16831);var state_16876__$1 = state_16876;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16876__$1,13,out,inst_16836);
} else
{if((state_val_16877 === 18))
{var inst_16842 = (state_16876[7]);var inst_16851 = cljs.core.first.call(null,inst_16842);var state_16876__$1 = state_16876;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16876__$1,20,out,inst_16851);
} else
{if((state_val_16877 === 8))
{var inst_16830 = (state_16876[10]);var inst_16831 = (state_16876[12]);var inst_16833 = (inst_16831 < inst_16830);var inst_16834 = inst_16833;var state_16876__$1 = state_16876;if(cljs.core.truth_(inst_16834))
{var statearr_16910_16941 = state_16876__$1;(statearr_16910_16941[1] = 10);
} else
{var statearr_16911_16942 = state_16876__$1;(statearr_16911_16942[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto__))
;return ((function (switch__10434__auto__,c__10498__auto__){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_16915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16915[0] = state_machine__10435__auto__);
(statearr_16915[1] = 1);
return statearr_16915;
});
var state_machine__10435__auto____1 = (function (state_16876){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_16876);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e16916){if((e16916 instanceof Object))
{var ex__10438__auto__ = e16916;var statearr_16917_16943 = state_16876;(statearr_16917_16943[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16876);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16944 = state_16876;
state_16876 = G__16944;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_16876){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_16876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__))
})();var state__10500__auto__ = (function (){var statearr_16918 = f__10499__auto__.call(null);(statearr_16918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_16918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__))
);
return c__10498__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10498__auto___17039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___17039){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___17039){
return (function (state_17015){var state_val_17016 = (state_17015[1]);if((state_val_17016 === 7))
{var inst_17011 = (state_17015[2]);var state_17015__$1 = state_17015;var statearr_17017_17040 = state_17015__$1;(statearr_17017_17040[2] = inst_17011);
(statearr_17017_17040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17016 === 1))
{var state_17015__$1 = state_17015;var statearr_17018_17041 = state_17015__$1;(statearr_17018_17041[2] = null);
(statearr_17018_17041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17016 === 4))
{var inst_16994 = (state_17015[7]);var inst_16994__$1 = (state_17015[2]);var inst_16995 = (inst_16994__$1 == null);var state_17015__$1 = (function (){var statearr_17019 = state_17015;(statearr_17019[7] = inst_16994__$1);
return statearr_17019;
})();if(cljs.core.truth_(inst_16995))
{var statearr_17020_17042 = state_17015__$1;(statearr_17020_17042[1] = 5);
} else
{var statearr_17021_17043 = state_17015__$1;(statearr_17021_17043[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17016 === 13))
{var state_17015__$1 = state_17015;var statearr_17022_17044 = state_17015__$1;(statearr_17022_17044[2] = null);
(statearr_17022_17044[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17016 === 6))
{var inst_16994 = (state_17015[7]);var state_17015__$1 = state_17015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17015__$1,11,to,inst_16994);
} else
{if((state_val_17016 === 3))
{var inst_17013 = (state_17015[2]);var state_17015__$1 = state_17015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17015__$1,inst_17013);
} else
{if((state_val_17016 === 12))
{var state_17015__$1 = state_17015;var statearr_17023_17045 = state_17015__$1;(statearr_17023_17045[2] = null);
(statearr_17023_17045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17016 === 2))
{var state_17015__$1 = state_17015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17015__$1,4,from);
} else
{if((state_val_17016 === 11))
{var inst_17004 = (state_17015[2]);var state_17015__$1 = state_17015;if(cljs.core.truth_(inst_17004))
{var statearr_17024_17046 = state_17015__$1;(statearr_17024_17046[1] = 12);
} else
{var statearr_17025_17047 = state_17015__$1;(statearr_17025_17047[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17016 === 9))
{var state_17015__$1 = state_17015;var statearr_17026_17048 = state_17015__$1;(statearr_17026_17048[2] = null);
(statearr_17026_17048[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17016 === 5))
{var state_17015__$1 = state_17015;if(cljs.core.truth_(close_QMARK_))
{var statearr_17027_17049 = state_17015__$1;(statearr_17027_17049[1] = 8);
} else
{var statearr_17028_17050 = state_17015__$1;(statearr_17028_17050[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17016 === 14))
{var inst_17009 = (state_17015[2]);var state_17015__$1 = state_17015;var statearr_17029_17051 = state_17015__$1;(statearr_17029_17051[2] = inst_17009);
(statearr_17029_17051[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17016 === 10))
{var inst_17001 = (state_17015[2]);var state_17015__$1 = state_17015;var statearr_17030_17052 = state_17015__$1;(statearr_17030_17052[2] = inst_17001);
(statearr_17030_17052[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17016 === 8))
{var inst_16998 = cljs.core.async.close_BANG_.call(null,to);var state_17015__$1 = state_17015;var statearr_17031_17053 = state_17015__$1;(statearr_17031_17053[2] = inst_16998);
(statearr_17031_17053[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___17039))
;return ((function (switch__10434__auto__,c__10498__auto___17039){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_17035 = [null,null,null,null,null,null,null,null];(statearr_17035[0] = state_machine__10435__auto__);
(statearr_17035[1] = 1);
return statearr_17035;
});
var state_machine__10435__auto____1 = (function (state_17015){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_17015);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e17036){if((e17036 instanceof Object))
{var ex__10438__auto__ = e17036;var statearr_17037_17054 = state_17015;(statearr_17037_17054[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17055 = state_17015;
state_17015 = G__17055;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_17015){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_17015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___17039))
})();var state__10500__auto__ = (function (){var statearr_17038 = f__10499__auto__.call(null);(statearr_17038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___17039);
return statearr_17038;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___17039))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10498__auto___17156 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___17156,tc,fc){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___17156,tc,fc){
return (function (state_17131){var state_val_17132 = (state_17131[1]);if((state_val_17132 === 7))
{var inst_17127 = (state_17131[2]);var state_17131__$1 = state_17131;var statearr_17133_17157 = state_17131__$1;(statearr_17133_17157[2] = inst_17127);
(statearr_17133_17157[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17132 === 1))
{var state_17131__$1 = state_17131;var statearr_17134_17158 = state_17131__$1;(statearr_17134_17158[2] = null);
(statearr_17134_17158[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17132 === 4))
{var inst_17108 = (state_17131[7]);var inst_17108__$1 = (state_17131[2]);var inst_17109 = (inst_17108__$1 == null);var state_17131__$1 = (function (){var statearr_17135 = state_17131;(statearr_17135[7] = inst_17108__$1);
return statearr_17135;
})();if(cljs.core.truth_(inst_17109))
{var statearr_17136_17159 = state_17131__$1;(statearr_17136_17159[1] = 5);
} else
{var statearr_17137_17160 = state_17131__$1;(statearr_17137_17160[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17132 === 13))
{var state_17131__$1 = state_17131;var statearr_17138_17161 = state_17131__$1;(statearr_17138_17161[2] = null);
(statearr_17138_17161[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17132 === 6))
{var inst_17108 = (state_17131[7]);var inst_17114 = p.call(null,inst_17108);var state_17131__$1 = state_17131;if(cljs.core.truth_(inst_17114))
{var statearr_17139_17162 = state_17131__$1;(statearr_17139_17162[1] = 9);
} else
{var statearr_17140_17163 = state_17131__$1;(statearr_17140_17163[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17132 === 3))
{var inst_17129 = (state_17131[2]);var state_17131__$1 = state_17131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17131__$1,inst_17129);
} else
{if((state_val_17132 === 12))
{var state_17131__$1 = state_17131;var statearr_17141_17164 = state_17131__$1;(statearr_17141_17164[2] = null);
(statearr_17141_17164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17132 === 2))
{var state_17131__$1 = state_17131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17131__$1,4,ch);
} else
{if((state_val_17132 === 11))
{var inst_17108 = (state_17131[7]);var inst_17118 = (state_17131[2]);var state_17131__$1 = state_17131;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17131__$1,8,inst_17118,inst_17108);
} else
{if((state_val_17132 === 9))
{var state_17131__$1 = state_17131;var statearr_17142_17165 = state_17131__$1;(statearr_17142_17165[2] = tc);
(statearr_17142_17165[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17132 === 5))
{var inst_17111 = cljs.core.async.close_BANG_.call(null,tc);var inst_17112 = cljs.core.async.close_BANG_.call(null,fc);var state_17131__$1 = (function (){var statearr_17143 = state_17131;(statearr_17143[8] = inst_17111);
return statearr_17143;
})();var statearr_17144_17166 = state_17131__$1;(statearr_17144_17166[2] = inst_17112);
(statearr_17144_17166[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17132 === 14))
{var inst_17125 = (state_17131[2]);var state_17131__$1 = state_17131;var statearr_17145_17167 = state_17131__$1;(statearr_17145_17167[2] = inst_17125);
(statearr_17145_17167[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17132 === 10))
{var state_17131__$1 = state_17131;var statearr_17146_17168 = state_17131__$1;(statearr_17146_17168[2] = fc);
(statearr_17146_17168[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17132 === 8))
{var inst_17120 = (state_17131[2]);var state_17131__$1 = state_17131;if(cljs.core.truth_(inst_17120))
{var statearr_17147_17169 = state_17131__$1;(statearr_17147_17169[1] = 12);
} else
{var statearr_17148_17170 = state_17131__$1;(statearr_17148_17170[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___17156,tc,fc))
;return ((function (switch__10434__auto__,c__10498__auto___17156,tc,fc){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_17152 = [null,null,null,null,null,null,null,null,null];(statearr_17152[0] = state_machine__10435__auto__);
(statearr_17152[1] = 1);
return statearr_17152;
});
var state_machine__10435__auto____1 = (function (state_17131){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_17131);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e17153){if((e17153 instanceof Object))
{var ex__10438__auto__ = e17153;var statearr_17154_17171 = state_17131;(statearr_17154_17171[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17131);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17153;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17172 = state_17131;
state_17131 = G__17172;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_17131){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_17131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___17156,tc,fc))
})();var state__10500__auto__ = (function (){var statearr_17155 = f__10499__auto__.call(null);(statearr_17155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___17156);
return statearr_17155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___17156,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__){
return (function (state_17219){var state_val_17220 = (state_17219[1]);if((state_val_17220 === 7))
{var inst_17215 = (state_17219[2]);var state_17219__$1 = state_17219;var statearr_17221_17237 = state_17219__$1;(statearr_17221_17237[2] = inst_17215);
(statearr_17221_17237[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17220 === 6))
{var inst_17208 = (state_17219[7]);var inst_17205 = (state_17219[8]);var inst_17212 = f.call(null,inst_17205,inst_17208);var inst_17205__$1 = inst_17212;var state_17219__$1 = (function (){var statearr_17222 = state_17219;(statearr_17222[8] = inst_17205__$1);
return statearr_17222;
})();var statearr_17223_17238 = state_17219__$1;(statearr_17223_17238[2] = null);
(statearr_17223_17238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17220 === 5))
{var inst_17205 = (state_17219[8]);var state_17219__$1 = state_17219;var statearr_17224_17239 = state_17219__$1;(statearr_17224_17239[2] = inst_17205);
(statearr_17224_17239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17220 === 4))
{var inst_17208 = (state_17219[7]);var inst_17208__$1 = (state_17219[2]);var inst_17209 = (inst_17208__$1 == null);var state_17219__$1 = (function (){var statearr_17225 = state_17219;(statearr_17225[7] = inst_17208__$1);
return statearr_17225;
})();if(cljs.core.truth_(inst_17209))
{var statearr_17226_17240 = state_17219__$1;(statearr_17226_17240[1] = 5);
} else
{var statearr_17227_17241 = state_17219__$1;(statearr_17227_17241[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17220 === 3))
{var inst_17217 = (state_17219[2]);var state_17219__$1 = state_17219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17219__$1,inst_17217);
} else
{if((state_val_17220 === 2))
{var state_17219__$1 = state_17219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17219__$1,4,ch);
} else
{if((state_val_17220 === 1))
{var inst_17205 = init;var state_17219__$1 = (function (){var statearr_17228 = state_17219;(statearr_17228[8] = inst_17205);
return statearr_17228;
})();var statearr_17229_17242 = state_17219__$1;(statearr_17229_17242[2] = null);
(statearr_17229_17242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10498__auto__))
;return ((function (switch__10434__auto__,c__10498__auto__){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_17233 = [null,null,null,null,null,null,null,null,null];(statearr_17233[0] = state_machine__10435__auto__);
(statearr_17233[1] = 1);
return statearr_17233;
});
var state_machine__10435__auto____1 = (function (state_17219){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_17219);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e17234){if((e17234 instanceof Object))
{var ex__10438__auto__ = e17234;var statearr_17235_17243 = state_17219;(statearr_17235_17243[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17219);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17244 = state_17219;
state_17219 = G__17244;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_17219){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_17219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__))
})();var state__10500__auto__ = (function (){var statearr_17236 = f__10499__auto__.call(null);(statearr_17236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_17236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__))
);
return c__10498__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__){
return (function (state_17318){var state_val_17319 = (state_17318[1]);if((state_val_17319 === 7))
{var inst_17300 = (state_17318[2]);var state_17318__$1 = state_17318;var statearr_17320_17343 = state_17318__$1;(statearr_17320_17343[2] = inst_17300);
(statearr_17320_17343[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17319 === 1))
{var inst_17294 = cljs.core.seq.call(null,coll);var inst_17295 = inst_17294;var state_17318__$1 = (function (){var statearr_17321 = state_17318;(statearr_17321[7] = inst_17295);
return statearr_17321;
})();var statearr_17322_17344 = state_17318__$1;(statearr_17322_17344[2] = null);
(statearr_17322_17344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17319 === 4))
{var inst_17295 = (state_17318[7]);var inst_17298 = cljs.core.first.call(null,inst_17295);var state_17318__$1 = state_17318;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17318__$1,7,ch,inst_17298);
} else
{if((state_val_17319 === 13))
{var inst_17312 = (state_17318[2]);var state_17318__$1 = state_17318;var statearr_17323_17345 = state_17318__$1;(statearr_17323_17345[2] = inst_17312);
(statearr_17323_17345[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17319 === 6))
{var inst_17303 = (state_17318[2]);var state_17318__$1 = state_17318;if(cljs.core.truth_(inst_17303))
{var statearr_17324_17346 = state_17318__$1;(statearr_17324_17346[1] = 8);
} else
{var statearr_17325_17347 = state_17318__$1;(statearr_17325_17347[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17319 === 3))
{var inst_17316 = (state_17318[2]);var state_17318__$1 = state_17318;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17318__$1,inst_17316);
} else
{if((state_val_17319 === 12))
{var state_17318__$1 = state_17318;var statearr_17326_17348 = state_17318__$1;(statearr_17326_17348[2] = null);
(statearr_17326_17348[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17319 === 2))
{var inst_17295 = (state_17318[7]);var state_17318__$1 = state_17318;if(cljs.core.truth_(inst_17295))
{var statearr_17327_17349 = state_17318__$1;(statearr_17327_17349[1] = 4);
} else
{var statearr_17328_17350 = state_17318__$1;(statearr_17328_17350[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17319 === 11))
{var inst_17309 = cljs.core.async.close_BANG_.call(null,ch);var state_17318__$1 = state_17318;var statearr_17329_17351 = state_17318__$1;(statearr_17329_17351[2] = inst_17309);
(statearr_17329_17351[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17319 === 9))
{var state_17318__$1 = state_17318;if(cljs.core.truth_(close_QMARK_))
{var statearr_17330_17352 = state_17318__$1;(statearr_17330_17352[1] = 11);
} else
{var statearr_17331_17353 = state_17318__$1;(statearr_17331_17353[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17319 === 5))
{var inst_17295 = (state_17318[7]);var state_17318__$1 = state_17318;var statearr_17332_17354 = state_17318__$1;(statearr_17332_17354[2] = inst_17295);
(statearr_17332_17354[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17319 === 10))
{var inst_17314 = (state_17318[2]);var state_17318__$1 = state_17318;var statearr_17333_17355 = state_17318__$1;(statearr_17333_17355[2] = inst_17314);
(statearr_17333_17355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17319 === 8))
{var inst_17295 = (state_17318[7]);var inst_17305 = cljs.core.next.call(null,inst_17295);var inst_17295__$1 = inst_17305;var state_17318__$1 = (function (){var statearr_17334 = state_17318;(statearr_17334[7] = inst_17295__$1);
return statearr_17334;
})();var statearr_17335_17356 = state_17318__$1;(statearr_17335_17356[2] = null);
(statearr_17335_17356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto__))
;return ((function (switch__10434__auto__,c__10498__auto__){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_17339 = [null,null,null,null,null,null,null,null];(statearr_17339[0] = state_machine__10435__auto__);
(statearr_17339[1] = 1);
return statearr_17339;
});
var state_machine__10435__auto____1 = (function (state_17318){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_17318);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e17340){if((e17340 instanceof Object))
{var ex__10438__auto__ = e17340;var statearr_17341_17357 = state_17318;(statearr_17341_17357[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17318);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17358 = state_17318;
state_17318 = G__17358;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_17318){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_17318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__))
})();var state__10500__auto__ = (function (){var statearr_17342 = f__10499__auto__.call(null);(statearr_17342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_17342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__))
);
return c__10498__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj17360 = {};return obj17360;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7857__auto__ = _;if(and__7857__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8496__auto__ = (((_ == null))?null:_);return (function (){var or__7869__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17362 = {};return obj17362;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17584 = (function (cs,ch,mult,meta17585){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17585 = meta17585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17584.cljs$lang$type = true;
cljs.core.async.t17584.cljs$lang$ctorStr = "cljs.core.async/t17584";
cljs.core.async.t17584.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t17584");
});})(cs))
;
cljs.core.async.t17584.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17584.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17584.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17584.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17584.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17584.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17586){var self__ = this;
var _17586__$1 = this;return self__.meta17585;
});})(cs))
;
cljs.core.async.t17584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17586,meta17585__$1){var self__ = this;
var _17586__$1 = this;return (new cljs.core.async.t17584(self__.cs,self__.ch,self__.mult,meta17585__$1));
});})(cs))
;
cljs.core.async.__GT_t17584 = ((function (cs){
return (function __GT_t17584(cs__$1,ch__$1,mult__$1,meta17585){return (new cljs.core.async.t17584(cs__$1,ch__$1,mult__$1,meta17585));
});})(cs))
;
}
return (new cljs.core.async.t17584(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10498__auto___17805 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___17805,cs,m,dchan,dctr,done){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___17805,cs,m,dchan,dctr,done){
return (function (state_17717){var state_val_17718 = (state_17717[1]);if((state_val_17718 === 7))
{var inst_17713 = (state_17717[2]);var state_17717__$1 = state_17717;var statearr_17719_17806 = state_17717__$1;(statearr_17719_17806[2] = inst_17713);
(statearr_17719_17806[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 20))
{var inst_17618 = (state_17717[7]);var inst_17628 = cljs.core.first.call(null,inst_17618);var inst_17629 = cljs.core.nth.call(null,inst_17628,0,null);var inst_17630 = cljs.core.nth.call(null,inst_17628,1,null);var state_17717__$1 = (function (){var statearr_17720 = state_17717;(statearr_17720[8] = inst_17629);
return statearr_17720;
})();if(cljs.core.truth_(inst_17630))
{var statearr_17721_17807 = state_17717__$1;(statearr_17721_17807[1] = 22);
} else
{var statearr_17722_17808 = state_17717__$1;(statearr_17722_17808[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 27))
{var inst_17658 = (state_17717[9]);var inst_17589 = (state_17717[10]);var inst_17665 = (state_17717[11]);var inst_17660 = (state_17717[12]);var inst_17665__$1 = cljs.core._nth.call(null,inst_17658,inst_17660);var inst_17666 = cljs.core.async.put_BANG_.call(null,inst_17665__$1,inst_17589,done);var state_17717__$1 = (function (){var statearr_17723 = state_17717;(statearr_17723[11] = inst_17665__$1);
return statearr_17723;
})();if(cljs.core.truth_(inst_17666))
{var statearr_17724_17809 = state_17717__$1;(statearr_17724_17809[1] = 30);
} else
{var statearr_17725_17810 = state_17717__$1;(statearr_17725_17810[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 1))
{var state_17717__$1 = state_17717;var statearr_17726_17811 = state_17717__$1;(statearr_17726_17811[2] = null);
(statearr_17726_17811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 24))
{var inst_17618 = (state_17717[7]);var inst_17635 = (state_17717[2]);var inst_17636 = cljs.core.next.call(null,inst_17618);var inst_17598 = inst_17636;var inst_17599 = null;var inst_17600 = 0;var inst_17601 = 0;var state_17717__$1 = (function (){var statearr_17727 = state_17717;(statearr_17727[13] = inst_17600);
(statearr_17727[14] = inst_17598);
(statearr_17727[15] = inst_17601);
(statearr_17727[16] = inst_17599);
(statearr_17727[17] = inst_17635);
return statearr_17727;
})();var statearr_17728_17812 = state_17717__$1;(statearr_17728_17812[2] = null);
(statearr_17728_17812[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 39))
{var state_17717__$1 = state_17717;var statearr_17732_17813 = state_17717__$1;(statearr_17732_17813[2] = null);
(statearr_17732_17813[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 4))
{var inst_17589 = (state_17717[10]);var inst_17589__$1 = (state_17717[2]);var inst_17590 = (inst_17589__$1 == null);var state_17717__$1 = (function (){var statearr_17733 = state_17717;(statearr_17733[10] = inst_17589__$1);
return statearr_17733;
})();if(cljs.core.truth_(inst_17590))
{var statearr_17734_17814 = state_17717__$1;(statearr_17734_17814[1] = 5);
} else
{var statearr_17735_17815 = state_17717__$1;(statearr_17735_17815[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 15))
{var inst_17600 = (state_17717[13]);var inst_17598 = (state_17717[14]);var inst_17601 = (state_17717[15]);var inst_17599 = (state_17717[16]);var inst_17614 = (state_17717[2]);var inst_17615 = (inst_17601 + 1);var tmp17729 = inst_17600;var tmp17730 = inst_17598;var tmp17731 = inst_17599;var inst_17598__$1 = tmp17730;var inst_17599__$1 = tmp17731;var inst_17600__$1 = tmp17729;var inst_17601__$1 = inst_17615;var state_17717__$1 = (function (){var statearr_17736 = state_17717;(statearr_17736[13] = inst_17600__$1);
(statearr_17736[14] = inst_17598__$1);
(statearr_17736[15] = inst_17601__$1);
(statearr_17736[16] = inst_17599__$1);
(statearr_17736[18] = inst_17614);
return statearr_17736;
})();var statearr_17737_17816 = state_17717__$1;(statearr_17737_17816[2] = null);
(statearr_17737_17816[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 21))
{var inst_17639 = (state_17717[2]);var state_17717__$1 = state_17717;var statearr_17741_17817 = state_17717__$1;(statearr_17741_17817[2] = inst_17639);
(statearr_17741_17817[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 31))
{var inst_17665 = (state_17717[11]);var inst_17669 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17670 = cljs.core.async.untap_STAR_.call(null,m,inst_17665);var state_17717__$1 = (function (){var statearr_17742 = state_17717;(statearr_17742[19] = inst_17669);
return statearr_17742;
})();var statearr_17743_17818 = state_17717__$1;(statearr_17743_17818[2] = inst_17670);
(statearr_17743_17818[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 32))
{var inst_17659 = (state_17717[20]);var inst_17658 = (state_17717[9]);var inst_17657 = (state_17717[21]);var inst_17660 = (state_17717[12]);var inst_17672 = (state_17717[2]);var inst_17673 = (inst_17660 + 1);var tmp17738 = inst_17659;var tmp17739 = inst_17658;var tmp17740 = inst_17657;var inst_17657__$1 = tmp17740;var inst_17658__$1 = tmp17739;var inst_17659__$1 = tmp17738;var inst_17660__$1 = inst_17673;var state_17717__$1 = (function (){var statearr_17744 = state_17717;(statearr_17744[20] = inst_17659__$1);
(statearr_17744[9] = inst_17658__$1);
(statearr_17744[21] = inst_17657__$1);
(statearr_17744[12] = inst_17660__$1);
(statearr_17744[22] = inst_17672);
return statearr_17744;
})();var statearr_17745_17819 = state_17717__$1;(statearr_17745_17819[2] = null);
(statearr_17745_17819[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 40))
{var inst_17685 = (state_17717[23]);var inst_17689 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17690 = cljs.core.async.untap_STAR_.call(null,m,inst_17685);var state_17717__$1 = (function (){var statearr_17746 = state_17717;(statearr_17746[24] = inst_17689);
return statearr_17746;
})();var statearr_17747_17820 = state_17717__$1;(statearr_17747_17820[2] = inst_17690);
(statearr_17747_17820[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 33))
{var inst_17676 = (state_17717[25]);var inst_17678 = cljs.core.chunked_seq_QMARK_.call(null,inst_17676);var state_17717__$1 = state_17717;if(inst_17678)
{var statearr_17748_17821 = state_17717__$1;(statearr_17748_17821[1] = 36);
} else
{var statearr_17749_17822 = state_17717__$1;(statearr_17749_17822[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 13))
{var inst_17608 = (state_17717[26]);var inst_17611 = cljs.core.async.close_BANG_.call(null,inst_17608);var state_17717__$1 = state_17717;var statearr_17750_17823 = state_17717__$1;(statearr_17750_17823[2] = inst_17611);
(statearr_17750_17823[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 22))
{var inst_17629 = (state_17717[8]);var inst_17632 = cljs.core.async.close_BANG_.call(null,inst_17629);var state_17717__$1 = state_17717;var statearr_17751_17824 = state_17717__$1;(statearr_17751_17824[2] = inst_17632);
(statearr_17751_17824[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 36))
{var inst_17676 = (state_17717[25]);var inst_17680 = cljs.core.chunk_first.call(null,inst_17676);var inst_17681 = cljs.core.chunk_rest.call(null,inst_17676);var inst_17682 = cljs.core.count.call(null,inst_17680);var inst_17657 = inst_17681;var inst_17658 = inst_17680;var inst_17659 = inst_17682;var inst_17660 = 0;var state_17717__$1 = (function (){var statearr_17752 = state_17717;(statearr_17752[20] = inst_17659);
(statearr_17752[9] = inst_17658);
(statearr_17752[21] = inst_17657);
(statearr_17752[12] = inst_17660);
return statearr_17752;
})();var statearr_17753_17825 = state_17717__$1;(statearr_17753_17825[2] = null);
(statearr_17753_17825[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 41))
{var inst_17676 = (state_17717[25]);var inst_17692 = (state_17717[2]);var inst_17693 = cljs.core.next.call(null,inst_17676);var inst_17657 = inst_17693;var inst_17658 = null;var inst_17659 = 0;var inst_17660 = 0;var state_17717__$1 = (function (){var statearr_17754 = state_17717;(statearr_17754[20] = inst_17659);
(statearr_17754[9] = inst_17658);
(statearr_17754[27] = inst_17692);
(statearr_17754[21] = inst_17657);
(statearr_17754[12] = inst_17660);
return statearr_17754;
})();var statearr_17755_17826 = state_17717__$1;(statearr_17755_17826[2] = null);
(statearr_17755_17826[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 43))
{var state_17717__$1 = state_17717;var statearr_17756_17827 = state_17717__$1;(statearr_17756_17827[2] = null);
(statearr_17756_17827[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 29))
{var inst_17701 = (state_17717[2]);var state_17717__$1 = state_17717;var statearr_17757_17828 = state_17717__$1;(statearr_17757_17828[2] = inst_17701);
(statearr_17757_17828[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 44))
{var inst_17710 = (state_17717[2]);var state_17717__$1 = (function (){var statearr_17758 = state_17717;(statearr_17758[28] = inst_17710);
return statearr_17758;
})();var statearr_17759_17829 = state_17717__$1;(statearr_17759_17829[2] = null);
(statearr_17759_17829[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 6))
{var inst_17649 = (state_17717[29]);var inst_17648 = cljs.core.deref.call(null,cs);var inst_17649__$1 = cljs.core.keys.call(null,inst_17648);var inst_17650 = cljs.core.count.call(null,inst_17649__$1);var inst_17651 = cljs.core.reset_BANG_.call(null,dctr,inst_17650);var inst_17656 = cljs.core.seq.call(null,inst_17649__$1);var inst_17657 = inst_17656;var inst_17658 = null;var inst_17659 = 0;var inst_17660 = 0;var state_17717__$1 = (function (){var statearr_17760 = state_17717;(statearr_17760[20] = inst_17659);
(statearr_17760[9] = inst_17658);
(statearr_17760[30] = inst_17651);
(statearr_17760[21] = inst_17657);
(statearr_17760[12] = inst_17660);
(statearr_17760[29] = inst_17649__$1);
return statearr_17760;
})();var statearr_17761_17830 = state_17717__$1;(statearr_17761_17830[2] = null);
(statearr_17761_17830[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 28))
{var inst_17676 = (state_17717[25]);var inst_17657 = (state_17717[21]);var inst_17676__$1 = cljs.core.seq.call(null,inst_17657);var state_17717__$1 = (function (){var statearr_17762 = state_17717;(statearr_17762[25] = inst_17676__$1);
return statearr_17762;
})();if(inst_17676__$1)
{var statearr_17763_17831 = state_17717__$1;(statearr_17763_17831[1] = 33);
} else
{var statearr_17764_17832 = state_17717__$1;(statearr_17764_17832[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 25))
{var inst_17659 = (state_17717[20]);var inst_17660 = (state_17717[12]);var inst_17662 = (inst_17660 < inst_17659);var inst_17663 = inst_17662;var state_17717__$1 = state_17717;if(cljs.core.truth_(inst_17663))
{var statearr_17765_17833 = state_17717__$1;(statearr_17765_17833[1] = 27);
} else
{var statearr_17766_17834 = state_17717__$1;(statearr_17766_17834[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 34))
{var state_17717__$1 = state_17717;var statearr_17767_17835 = state_17717__$1;(statearr_17767_17835[2] = null);
(statearr_17767_17835[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 17))
{var state_17717__$1 = state_17717;var statearr_17768_17836 = state_17717__$1;(statearr_17768_17836[2] = null);
(statearr_17768_17836[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 3))
{var inst_17715 = (state_17717[2]);var state_17717__$1 = state_17717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17717__$1,inst_17715);
} else
{if((state_val_17718 === 12))
{var inst_17644 = (state_17717[2]);var state_17717__$1 = state_17717;var statearr_17769_17837 = state_17717__$1;(statearr_17769_17837[2] = inst_17644);
(statearr_17769_17837[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 2))
{var state_17717__$1 = state_17717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17717__$1,4,ch);
} else
{if((state_val_17718 === 23))
{var state_17717__$1 = state_17717;var statearr_17770_17838 = state_17717__$1;(statearr_17770_17838[2] = null);
(statearr_17770_17838[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 35))
{var inst_17699 = (state_17717[2]);var state_17717__$1 = state_17717;var statearr_17771_17839 = state_17717__$1;(statearr_17771_17839[2] = inst_17699);
(statearr_17771_17839[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 19))
{var inst_17618 = (state_17717[7]);var inst_17622 = cljs.core.chunk_first.call(null,inst_17618);var inst_17623 = cljs.core.chunk_rest.call(null,inst_17618);var inst_17624 = cljs.core.count.call(null,inst_17622);var inst_17598 = inst_17623;var inst_17599 = inst_17622;var inst_17600 = inst_17624;var inst_17601 = 0;var state_17717__$1 = (function (){var statearr_17772 = state_17717;(statearr_17772[13] = inst_17600);
(statearr_17772[14] = inst_17598);
(statearr_17772[15] = inst_17601);
(statearr_17772[16] = inst_17599);
return statearr_17772;
})();var statearr_17773_17840 = state_17717__$1;(statearr_17773_17840[2] = null);
(statearr_17773_17840[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 11))
{var inst_17598 = (state_17717[14]);var inst_17618 = (state_17717[7]);var inst_17618__$1 = cljs.core.seq.call(null,inst_17598);var state_17717__$1 = (function (){var statearr_17774 = state_17717;(statearr_17774[7] = inst_17618__$1);
return statearr_17774;
})();if(inst_17618__$1)
{var statearr_17775_17841 = state_17717__$1;(statearr_17775_17841[1] = 16);
} else
{var statearr_17776_17842 = state_17717__$1;(statearr_17776_17842[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 9))
{var inst_17646 = (state_17717[2]);var state_17717__$1 = state_17717;var statearr_17777_17843 = state_17717__$1;(statearr_17777_17843[2] = inst_17646);
(statearr_17777_17843[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 5))
{var inst_17596 = cljs.core.deref.call(null,cs);var inst_17597 = cljs.core.seq.call(null,inst_17596);var inst_17598 = inst_17597;var inst_17599 = null;var inst_17600 = 0;var inst_17601 = 0;var state_17717__$1 = (function (){var statearr_17778 = state_17717;(statearr_17778[13] = inst_17600);
(statearr_17778[14] = inst_17598);
(statearr_17778[15] = inst_17601);
(statearr_17778[16] = inst_17599);
return statearr_17778;
})();var statearr_17779_17844 = state_17717__$1;(statearr_17779_17844[2] = null);
(statearr_17779_17844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 14))
{var state_17717__$1 = state_17717;var statearr_17780_17845 = state_17717__$1;(statearr_17780_17845[2] = null);
(statearr_17780_17845[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 45))
{var inst_17707 = (state_17717[2]);var state_17717__$1 = state_17717;var statearr_17781_17846 = state_17717__$1;(statearr_17781_17846[2] = inst_17707);
(statearr_17781_17846[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 26))
{var inst_17649 = (state_17717[29]);var inst_17703 = (state_17717[2]);var inst_17704 = cljs.core.seq.call(null,inst_17649);var state_17717__$1 = (function (){var statearr_17782 = state_17717;(statearr_17782[31] = inst_17703);
return statearr_17782;
})();if(inst_17704)
{var statearr_17783_17847 = state_17717__$1;(statearr_17783_17847[1] = 42);
} else
{var statearr_17784_17848 = state_17717__$1;(statearr_17784_17848[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 16))
{var inst_17618 = (state_17717[7]);var inst_17620 = cljs.core.chunked_seq_QMARK_.call(null,inst_17618);var state_17717__$1 = state_17717;if(inst_17620)
{var statearr_17785_17849 = state_17717__$1;(statearr_17785_17849[1] = 19);
} else
{var statearr_17786_17850 = state_17717__$1;(statearr_17786_17850[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 38))
{var inst_17696 = (state_17717[2]);var state_17717__$1 = state_17717;var statearr_17787_17851 = state_17717__$1;(statearr_17787_17851[2] = inst_17696);
(statearr_17787_17851[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 30))
{var state_17717__$1 = state_17717;var statearr_17788_17852 = state_17717__$1;(statearr_17788_17852[2] = null);
(statearr_17788_17852[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 10))
{var inst_17601 = (state_17717[15]);var inst_17599 = (state_17717[16]);var inst_17607 = cljs.core._nth.call(null,inst_17599,inst_17601);var inst_17608 = cljs.core.nth.call(null,inst_17607,0,null);var inst_17609 = cljs.core.nth.call(null,inst_17607,1,null);var state_17717__$1 = (function (){var statearr_17789 = state_17717;(statearr_17789[26] = inst_17608);
return statearr_17789;
})();if(cljs.core.truth_(inst_17609))
{var statearr_17790_17853 = state_17717__$1;(statearr_17790_17853[1] = 13);
} else
{var statearr_17791_17854 = state_17717__$1;(statearr_17791_17854[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 18))
{var inst_17642 = (state_17717[2]);var state_17717__$1 = state_17717;var statearr_17792_17855 = state_17717__$1;(statearr_17792_17855[2] = inst_17642);
(statearr_17792_17855[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 42))
{var state_17717__$1 = state_17717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17717__$1,45,dchan);
} else
{if((state_val_17718 === 37))
{var inst_17685 = (state_17717[23]);var inst_17676 = (state_17717[25]);var inst_17589 = (state_17717[10]);var inst_17685__$1 = cljs.core.first.call(null,inst_17676);var inst_17686 = cljs.core.async.put_BANG_.call(null,inst_17685__$1,inst_17589,done);var state_17717__$1 = (function (){var statearr_17793 = state_17717;(statearr_17793[23] = inst_17685__$1);
return statearr_17793;
})();if(cljs.core.truth_(inst_17686))
{var statearr_17794_17856 = state_17717__$1;(statearr_17794_17856[1] = 39);
} else
{var statearr_17795_17857 = state_17717__$1;(statearr_17795_17857[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17718 === 8))
{var inst_17600 = (state_17717[13]);var inst_17601 = (state_17717[15]);var inst_17603 = (inst_17601 < inst_17600);var inst_17604 = inst_17603;var state_17717__$1 = state_17717;if(cljs.core.truth_(inst_17604))
{var statearr_17796_17858 = state_17717__$1;(statearr_17796_17858[1] = 10);
} else
{var statearr_17797_17859 = state_17717__$1;(statearr_17797_17859[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___17805,cs,m,dchan,dctr,done))
;return ((function (switch__10434__auto__,c__10498__auto___17805,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_17801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17801[0] = state_machine__10435__auto__);
(statearr_17801[1] = 1);
return statearr_17801;
});
var state_machine__10435__auto____1 = (function (state_17717){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_17717);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e17802){if((e17802 instanceof Object))
{var ex__10438__auto__ = e17802;var statearr_17803_17860 = state_17717;(statearr_17803_17860[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17717);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17861 = state_17717;
state_17717 = G__17861;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_17717){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_17717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___17805,cs,m,dchan,dctr,done))
})();var state__10500__auto__ = (function (){var statearr_17804 = f__10499__auto__.call(null);(statearr_17804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___17805);
return statearr_17804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___17805,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj17863 = {};return obj17863;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7857__auto__ = m;if(and__7857__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8496__auto__ = (((m == null))?null:m);return (function (){var or__7869__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t17983 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17983 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17984){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17984 = meta17984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17983.cljs$lang$type = true;
cljs.core.async.t17983.cljs$lang$ctorStr = "cljs.core.async/t17983";
cljs.core.async.t17983.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t17983");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17983.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17983.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17983.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17983.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17983.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17983.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17983.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17983.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17985){var self__ = this;
var _17985__$1 = this;return self__.meta17984;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17985,meta17984__$1){var self__ = this;
var _17985__$1 = this;return (new cljs.core.async.t17983(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17984__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17983 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17983(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17984){return (new cljs.core.async.t17983(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17984));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17983(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10498__auto___18102 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18055){var state_val_18056 = (state_18055[1]);if((state_val_18056 === 7))
{var inst_17999 = (state_18055[7]);var inst_18004 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17999);var state_18055__$1 = state_18055;var statearr_18057_18103 = state_18055__$1;(statearr_18057_18103[2] = inst_18004);
(statearr_18057_18103[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 20))
{var inst_18014 = (state_18055[8]);var state_18055__$1 = state_18055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18055__$1,23,out,inst_18014);
} else
{if((state_val_18056 === 1))
{var inst_17989 = (state_18055[9]);var inst_17989__$1 = calc_state.call(null);var inst_17990 = cljs.core.seq_QMARK_.call(null,inst_17989__$1);var state_18055__$1 = (function (){var statearr_18058 = state_18055;(statearr_18058[9] = inst_17989__$1);
return statearr_18058;
})();if(inst_17990)
{var statearr_18059_18104 = state_18055__$1;(statearr_18059_18104[1] = 2);
} else
{var statearr_18060_18105 = state_18055__$1;(statearr_18060_18105[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 24))
{var inst_18007 = (state_18055[10]);var inst_17999 = inst_18007;var state_18055__$1 = (function (){var statearr_18061 = state_18055;(statearr_18061[7] = inst_17999);
return statearr_18061;
})();var statearr_18062_18106 = state_18055__$1;(statearr_18062_18106[2] = null);
(statearr_18062_18106[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 4))
{var inst_17989 = (state_18055[9]);var inst_17995 = (state_18055[2]);var inst_17996 = cljs.core.get.call(null,inst_17995,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17997 = cljs.core.get.call(null,inst_17995,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17998 = cljs.core.get.call(null,inst_17995,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17999 = inst_17989;var state_18055__$1 = (function (){var statearr_18063 = state_18055;(statearr_18063[11] = inst_17997);
(statearr_18063[12] = inst_17996);
(statearr_18063[13] = inst_17998);
(statearr_18063[7] = inst_17999);
return statearr_18063;
})();var statearr_18064_18107 = state_18055__$1;(statearr_18064_18107[2] = null);
(statearr_18064_18107[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 15))
{var state_18055__$1 = state_18055;var statearr_18065_18108 = state_18055__$1;(statearr_18065_18108[2] = null);
(statearr_18065_18108[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 21))
{var inst_18007 = (state_18055[10]);var inst_17999 = inst_18007;var state_18055__$1 = (function (){var statearr_18066 = state_18055;(statearr_18066[7] = inst_17999);
return statearr_18066;
})();var statearr_18067_18109 = state_18055__$1;(statearr_18067_18109[2] = null);
(statearr_18067_18109[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 13))
{var inst_18051 = (state_18055[2]);var state_18055__$1 = state_18055;var statearr_18068_18110 = state_18055__$1;(statearr_18068_18110[2] = inst_18051);
(statearr_18068_18110[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 22))
{var inst_18049 = (state_18055[2]);var state_18055__$1 = state_18055;var statearr_18069_18111 = state_18055__$1;(statearr_18069_18111[2] = inst_18049);
(statearr_18069_18111[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 6))
{var inst_18053 = (state_18055[2]);var state_18055__$1 = state_18055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18055__$1,inst_18053);
} else
{if((state_val_18056 === 25))
{var state_18055__$1 = state_18055;var statearr_18070_18112 = state_18055__$1;(statearr_18070_18112[2] = null);
(statearr_18070_18112[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 17))
{var inst_18029 = (state_18055[14]);var state_18055__$1 = state_18055;var statearr_18071_18113 = state_18055__$1;(statearr_18071_18113[2] = inst_18029);
(statearr_18071_18113[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 3))
{var inst_17989 = (state_18055[9]);var state_18055__$1 = state_18055;var statearr_18072_18114 = state_18055__$1;(statearr_18072_18114[2] = inst_17989);
(statearr_18072_18114[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 12))
{var inst_18010 = (state_18055[15]);var inst_18015 = (state_18055[16]);var inst_18029 = (state_18055[14]);var inst_18029__$1 = inst_18010.call(null,inst_18015);var state_18055__$1 = (function (){var statearr_18073 = state_18055;(statearr_18073[14] = inst_18029__$1);
return statearr_18073;
})();if(cljs.core.truth_(inst_18029__$1))
{var statearr_18074_18115 = state_18055__$1;(statearr_18074_18115[1] = 17);
} else
{var statearr_18075_18116 = state_18055__$1;(statearr_18075_18116[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 2))
{var inst_17989 = (state_18055[9]);var inst_17992 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17989);var state_18055__$1 = state_18055;var statearr_18076_18117 = state_18055__$1;(statearr_18076_18117[2] = inst_17992);
(statearr_18076_18117[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 23))
{var inst_18040 = (state_18055[2]);var state_18055__$1 = state_18055;if(cljs.core.truth_(inst_18040))
{var statearr_18077_18118 = state_18055__$1;(statearr_18077_18118[1] = 24);
} else
{var statearr_18078_18119 = state_18055__$1;(statearr_18078_18119[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 19))
{var inst_18037 = (state_18055[2]);var state_18055__$1 = state_18055;if(cljs.core.truth_(inst_18037))
{var statearr_18079_18120 = state_18055__$1;(statearr_18079_18120[1] = 20);
} else
{var statearr_18080_18121 = state_18055__$1;(statearr_18080_18121[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 11))
{var inst_18014 = (state_18055[8]);var inst_18020 = (inst_18014 == null);var state_18055__$1 = state_18055;if(cljs.core.truth_(inst_18020))
{var statearr_18081_18122 = state_18055__$1;(statearr_18081_18122[1] = 14);
} else
{var statearr_18082_18123 = state_18055__$1;(statearr_18082_18123[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 9))
{var inst_18007 = (state_18055[10]);var inst_18007__$1 = (state_18055[2]);var inst_18008 = cljs.core.get.call(null,inst_18007__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_18009 = cljs.core.get.call(null,inst_18007__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_18010 = cljs.core.get.call(null,inst_18007__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_18055__$1 = (function (){var statearr_18083 = state_18055;(statearr_18083[15] = inst_18010);
(statearr_18083[17] = inst_18009);
(statearr_18083[10] = inst_18007__$1);
return statearr_18083;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18055__$1,10,inst_18008);
} else
{if((state_val_18056 === 5))
{var inst_17999 = (state_18055[7]);var inst_18002 = cljs.core.seq_QMARK_.call(null,inst_17999);var state_18055__$1 = state_18055;if(inst_18002)
{var statearr_18084_18124 = state_18055__$1;(statearr_18084_18124[1] = 7);
} else
{var statearr_18085_18125 = state_18055__$1;(statearr_18085_18125[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 14))
{var inst_18015 = (state_18055[16]);var inst_18022 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18015);var state_18055__$1 = state_18055;var statearr_18086_18126 = state_18055__$1;(statearr_18086_18126[2] = inst_18022);
(statearr_18086_18126[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 26))
{var inst_18045 = (state_18055[2]);var state_18055__$1 = state_18055;var statearr_18087_18127 = state_18055__$1;(statearr_18087_18127[2] = inst_18045);
(statearr_18087_18127[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 16))
{var inst_18025 = (state_18055[2]);var inst_18026 = calc_state.call(null);var inst_17999 = inst_18026;var state_18055__$1 = (function (){var statearr_18088 = state_18055;(statearr_18088[7] = inst_17999);
(statearr_18088[18] = inst_18025);
return statearr_18088;
})();var statearr_18089_18128 = state_18055__$1;(statearr_18089_18128[2] = null);
(statearr_18089_18128[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 10))
{var inst_18015 = (state_18055[16]);var inst_18014 = (state_18055[8]);var inst_18013 = (state_18055[2]);var inst_18014__$1 = cljs.core.nth.call(null,inst_18013,0,null);var inst_18015__$1 = cljs.core.nth.call(null,inst_18013,1,null);var inst_18016 = (inst_18014__$1 == null);var inst_18017 = cljs.core._EQ_.call(null,inst_18015__$1,change);var inst_18018 = (inst_18016) || (inst_18017);var state_18055__$1 = (function (){var statearr_18090 = state_18055;(statearr_18090[16] = inst_18015__$1);
(statearr_18090[8] = inst_18014__$1);
return statearr_18090;
})();if(cljs.core.truth_(inst_18018))
{var statearr_18091_18129 = state_18055__$1;(statearr_18091_18129[1] = 11);
} else
{var statearr_18092_18130 = state_18055__$1;(statearr_18092_18130[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 18))
{var inst_18010 = (state_18055[15]);var inst_18009 = (state_18055[17]);var inst_18015 = (state_18055[16]);var inst_18032 = cljs.core.empty_QMARK_.call(null,inst_18010);var inst_18033 = inst_18009.call(null,inst_18015);var inst_18034 = cljs.core.not.call(null,inst_18033);var inst_18035 = (inst_18032) && (inst_18034);var state_18055__$1 = state_18055;var statearr_18093_18131 = state_18055__$1;(statearr_18093_18131[2] = inst_18035);
(statearr_18093_18131[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 8))
{var inst_17999 = (state_18055[7]);var state_18055__$1 = state_18055;var statearr_18094_18132 = state_18055__$1;(statearr_18094_18132[2] = inst_17999);
(statearr_18094_18132[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___18102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10434__auto__,c__10498__auto___18102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18098[0] = state_machine__10435__auto__);
(statearr_18098[1] = 1);
return statearr_18098;
});
var state_machine__10435__auto____1 = (function (state_18055){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18055);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18099){if((e18099 instanceof Object))
{var ex__10438__auto__ = e18099;var statearr_18100_18133 = state_18055;(statearr_18100_18133[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18055);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18134 = state_18055;
state_18055 = G__18134;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18055){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10500__auto__ = (function (){var statearr_18101 = f__10499__auto__.call(null);(statearr_18101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18102);
return statearr_18101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj18136 = {};return obj18136;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7857__auto__ = p;if(and__7857__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7857__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8496__auto__ = (((p == null))?null:p);return (function (){var or__7869__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7869__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7869__auto__,mults){
return (function (p1__18137_SHARP_){if(cljs.core.truth_(p1__18137_SHARP_.call(null,topic)))
{return p1__18137_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18137_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7869__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18252 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18252 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18253){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18253 = meta18253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18252.cljs$lang$type = true;
cljs.core.async.t18252.cljs$lang$ctorStr = "cljs.core.async/t18252";
cljs.core.async.t18252.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"cljs.core.async/t18252");
});})(mults,ensure_mult))
;
cljs.core.async.t18252.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18252.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18252.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18252.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18252.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18252.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18254){var self__ = this;
var _18254__$1 = this;return self__.meta18253;
});})(mults,ensure_mult))
;
cljs.core.async.t18252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18254,meta18253__$1){var self__ = this;
var _18254__$1 = this;return (new cljs.core.async.t18252(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18253__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18252 = ((function (mults,ensure_mult){
return (function __GT_t18252(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18253){return (new cljs.core.async.t18252(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18253));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18252(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10498__auto___18366 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18366,mults,ensure_mult,p){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18366,mults,ensure_mult,p){
return (function (state_18322){var state_val_18323 = (state_18322[1]);if((state_val_18323 === 7))
{var inst_18318 = (state_18322[2]);var state_18322__$1 = state_18322;var statearr_18324_18367 = state_18322__$1;(statearr_18324_18367[2] = inst_18318);
(statearr_18324_18367[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 20))
{var state_18322__$1 = state_18322;var statearr_18325_18368 = state_18322__$1;(statearr_18325_18368[2] = null);
(statearr_18325_18368[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 1))
{var state_18322__$1 = state_18322;var statearr_18326_18369 = state_18322__$1;(statearr_18326_18369[2] = null);
(statearr_18326_18369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 4))
{var inst_18257 = (state_18322[7]);var inst_18257__$1 = (state_18322[2]);var inst_18258 = (inst_18257__$1 == null);var state_18322__$1 = (function (){var statearr_18327 = state_18322;(statearr_18327[7] = inst_18257__$1);
return statearr_18327;
})();if(cljs.core.truth_(inst_18258))
{var statearr_18328_18370 = state_18322__$1;(statearr_18328_18370[1] = 5);
} else
{var statearr_18329_18371 = state_18322__$1;(statearr_18329_18371[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 15))
{var inst_18299 = (state_18322[2]);var state_18322__$1 = state_18322;var statearr_18330_18372 = state_18322__$1;(statearr_18330_18372[2] = inst_18299);
(statearr_18330_18372[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 21))
{var inst_18305 = (state_18322[8]);var inst_18313 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18305);var state_18322__$1 = state_18322;var statearr_18331_18373 = state_18322__$1;(statearr_18331_18373[2] = inst_18313);
(statearr_18331_18373[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 13))
{var inst_18281 = (state_18322[9]);var inst_18283 = cljs.core.chunked_seq_QMARK_.call(null,inst_18281);var state_18322__$1 = state_18322;if(inst_18283)
{var statearr_18332_18374 = state_18322__$1;(statearr_18332_18374[1] = 16);
} else
{var statearr_18333_18375 = state_18322__$1;(statearr_18333_18375[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 22))
{var inst_18315 = (state_18322[2]);var state_18322__$1 = (function (){var statearr_18334 = state_18322;(statearr_18334[10] = inst_18315);
return statearr_18334;
})();var statearr_18335_18376 = state_18322__$1;(statearr_18335_18376[2] = null);
(statearr_18335_18376[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 6))
{var inst_18305 = (state_18322[8]);var inst_18257 = (state_18322[7]);var inst_18305__$1 = topic_fn.call(null,inst_18257);var inst_18306 = cljs.core.deref.call(null,mults);var inst_18307 = cljs.core.get.call(null,inst_18306,inst_18305__$1);var inst_18308 = cljs.core.async.muxch_STAR_.call(null,inst_18307);var state_18322__$1 = (function (){var statearr_18336 = state_18322;(statearr_18336[8] = inst_18305__$1);
return statearr_18336;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18322__$1,19,inst_18308,inst_18257);
} else
{if((state_val_18323 === 17))
{var inst_18281 = (state_18322[9]);var inst_18290 = cljs.core.first.call(null,inst_18281);var inst_18291 = cljs.core.async.muxch_STAR_.call(null,inst_18290);var inst_18292 = cljs.core.async.close_BANG_.call(null,inst_18291);var inst_18293 = cljs.core.next.call(null,inst_18281);var inst_18267 = inst_18293;var inst_18268 = null;var inst_18269 = 0;var inst_18270 = 0;var state_18322__$1 = (function (){var statearr_18337 = state_18322;(statearr_18337[11] = inst_18292);
(statearr_18337[12] = inst_18269);
(statearr_18337[13] = inst_18268);
(statearr_18337[14] = inst_18270);
(statearr_18337[15] = inst_18267);
return statearr_18337;
})();var statearr_18338_18377 = state_18322__$1;(statearr_18338_18377[2] = null);
(statearr_18338_18377[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 3))
{var inst_18320 = (state_18322[2]);var state_18322__$1 = state_18322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18322__$1,inst_18320);
} else
{if((state_val_18323 === 12))
{var inst_18301 = (state_18322[2]);var state_18322__$1 = state_18322;var statearr_18339_18378 = state_18322__$1;(statearr_18339_18378[2] = inst_18301);
(statearr_18339_18378[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 2))
{var state_18322__$1 = state_18322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18322__$1,4,ch);
} else
{if((state_val_18323 === 19))
{var inst_18310 = (state_18322[2]);var state_18322__$1 = state_18322;if(cljs.core.truth_(inst_18310))
{var statearr_18340_18379 = state_18322__$1;(statearr_18340_18379[1] = 20);
} else
{var statearr_18341_18380 = state_18322__$1;(statearr_18341_18380[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 11))
{var inst_18281 = (state_18322[9]);var inst_18267 = (state_18322[15]);var inst_18281__$1 = cljs.core.seq.call(null,inst_18267);var state_18322__$1 = (function (){var statearr_18342 = state_18322;(statearr_18342[9] = inst_18281__$1);
return statearr_18342;
})();if(inst_18281__$1)
{var statearr_18343_18381 = state_18322__$1;(statearr_18343_18381[1] = 13);
} else
{var statearr_18344_18382 = state_18322__$1;(statearr_18344_18382[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 9))
{var inst_18303 = (state_18322[2]);var state_18322__$1 = state_18322;var statearr_18345_18383 = state_18322__$1;(statearr_18345_18383[2] = inst_18303);
(statearr_18345_18383[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 5))
{var inst_18264 = cljs.core.deref.call(null,mults);var inst_18265 = cljs.core.vals.call(null,inst_18264);var inst_18266 = cljs.core.seq.call(null,inst_18265);var inst_18267 = inst_18266;var inst_18268 = null;var inst_18269 = 0;var inst_18270 = 0;var state_18322__$1 = (function (){var statearr_18346 = state_18322;(statearr_18346[12] = inst_18269);
(statearr_18346[13] = inst_18268);
(statearr_18346[14] = inst_18270);
(statearr_18346[15] = inst_18267);
return statearr_18346;
})();var statearr_18347_18384 = state_18322__$1;(statearr_18347_18384[2] = null);
(statearr_18347_18384[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 14))
{var state_18322__$1 = state_18322;var statearr_18351_18385 = state_18322__$1;(statearr_18351_18385[2] = null);
(statearr_18351_18385[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 16))
{var inst_18281 = (state_18322[9]);var inst_18285 = cljs.core.chunk_first.call(null,inst_18281);var inst_18286 = cljs.core.chunk_rest.call(null,inst_18281);var inst_18287 = cljs.core.count.call(null,inst_18285);var inst_18267 = inst_18286;var inst_18268 = inst_18285;var inst_18269 = inst_18287;var inst_18270 = 0;var state_18322__$1 = (function (){var statearr_18352 = state_18322;(statearr_18352[12] = inst_18269);
(statearr_18352[13] = inst_18268);
(statearr_18352[14] = inst_18270);
(statearr_18352[15] = inst_18267);
return statearr_18352;
})();var statearr_18353_18386 = state_18322__$1;(statearr_18353_18386[2] = null);
(statearr_18353_18386[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 10))
{var inst_18269 = (state_18322[12]);var inst_18268 = (state_18322[13]);var inst_18270 = (state_18322[14]);var inst_18267 = (state_18322[15]);var inst_18275 = cljs.core._nth.call(null,inst_18268,inst_18270);var inst_18276 = cljs.core.async.muxch_STAR_.call(null,inst_18275);var inst_18277 = cljs.core.async.close_BANG_.call(null,inst_18276);var inst_18278 = (inst_18270 + 1);var tmp18348 = inst_18269;var tmp18349 = inst_18268;var tmp18350 = inst_18267;var inst_18267__$1 = tmp18350;var inst_18268__$1 = tmp18349;var inst_18269__$1 = tmp18348;var inst_18270__$1 = inst_18278;var state_18322__$1 = (function (){var statearr_18354 = state_18322;(statearr_18354[12] = inst_18269__$1);
(statearr_18354[16] = inst_18277);
(statearr_18354[13] = inst_18268__$1);
(statearr_18354[14] = inst_18270__$1);
(statearr_18354[15] = inst_18267__$1);
return statearr_18354;
})();var statearr_18355_18387 = state_18322__$1;(statearr_18355_18387[2] = null);
(statearr_18355_18387[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 18))
{var inst_18296 = (state_18322[2]);var state_18322__$1 = state_18322;var statearr_18356_18388 = state_18322__$1;(statearr_18356_18388[2] = inst_18296);
(statearr_18356_18388[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18323 === 8))
{var inst_18269 = (state_18322[12]);var inst_18270 = (state_18322[14]);var inst_18272 = (inst_18270 < inst_18269);var inst_18273 = inst_18272;var state_18322__$1 = state_18322;if(cljs.core.truth_(inst_18273))
{var statearr_18357_18389 = state_18322__$1;(statearr_18357_18389[1] = 10);
} else
{var statearr_18358_18390 = state_18322__$1;(statearr_18358_18390[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___18366,mults,ensure_mult,p))
;return ((function (switch__10434__auto__,c__10498__auto___18366,mults,ensure_mult,p){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18362[0] = state_machine__10435__auto__);
(statearr_18362[1] = 1);
return statearr_18362;
});
var state_machine__10435__auto____1 = (function (state_18322){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18322);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18363){if((e18363 instanceof Object))
{var ex__10438__auto__ = e18363;var statearr_18364_18391 = state_18322;(statearr_18364_18391[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18392 = state_18322;
state_18322 = G__18392;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18322){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18366,mults,ensure_mult,p))
})();var state__10500__auto__ = (function (){var statearr_18365 = f__10499__auto__.call(null);(statearr_18365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18366);
return statearr_18365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18366,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10498__auto___18529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18499){var state_val_18500 = (state_18499[1]);if((state_val_18500 === 7))
{var state_18499__$1 = state_18499;var statearr_18501_18530 = state_18499__$1;(statearr_18501_18530[2] = null);
(statearr_18501_18530[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 1))
{var state_18499__$1 = state_18499;var statearr_18502_18531 = state_18499__$1;(statearr_18502_18531[2] = null);
(statearr_18502_18531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 4))
{var inst_18463 = (state_18499[7]);var inst_18465 = (inst_18463 < cnt);var state_18499__$1 = state_18499;if(cljs.core.truth_(inst_18465))
{var statearr_18503_18532 = state_18499__$1;(statearr_18503_18532[1] = 6);
} else
{var statearr_18504_18533 = state_18499__$1;(statearr_18504_18533[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 15))
{var inst_18495 = (state_18499[2]);var state_18499__$1 = state_18499;var statearr_18505_18534 = state_18499__$1;(statearr_18505_18534[2] = inst_18495);
(statearr_18505_18534[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 13))
{var inst_18488 = cljs.core.async.close_BANG_.call(null,out);var state_18499__$1 = state_18499;var statearr_18506_18535 = state_18499__$1;(statearr_18506_18535[2] = inst_18488);
(statearr_18506_18535[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 6))
{var state_18499__$1 = state_18499;var statearr_18507_18536 = state_18499__$1;(statearr_18507_18536[2] = null);
(statearr_18507_18536[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 3))
{var inst_18497 = (state_18499[2]);var state_18499__$1 = state_18499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18499__$1,inst_18497);
} else
{if((state_val_18500 === 12))
{var inst_18485 = (state_18499[8]);var inst_18485__$1 = (state_18499[2]);var inst_18486 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18485__$1);var state_18499__$1 = (function (){var statearr_18508 = state_18499;(statearr_18508[8] = inst_18485__$1);
return statearr_18508;
})();if(cljs.core.truth_(inst_18486))
{var statearr_18509_18537 = state_18499__$1;(statearr_18509_18537[1] = 13);
} else
{var statearr_18510_18538 = state_18499__$1;(statearr_18510_18538[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 2))
{var inst_18462 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18463 = 0;var state_18499__$1 = (function (){var statearr_18511 = state_18499;(statearr_18511[9] = inst_18462);
(statearr_18511[7] = inst_18463);
return statearr_18511;
})();var statearr_18512_18539 = state_18499__$1;(statearr_18512_18539[2] = null);
(statearr_18512_18539[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 11))
{var inst_18463 = (state_18499[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18499,10,Object,null,9);var inst_18472 = chs__$1.call(null,inst_18463);var inst_18473 = done.call(null,inst_18463);var inst_18474 = cljs.core.async.take_BANG_.call(null,inst_18472,inst_18473);var state_18499__$1 = state_18499;var statearr_18513_18540 = state_18499__$1;(statearr_18513_18540[2] = inst_18474);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18499__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 9))
{var inst_18463 = (state_18499[7]);var inst_18476 = (state_18499[2]);var inst_18477 = (inst_18463 + 1);var inst_18463__$1 = inst_18477;var state_18499__$1 = (function (){var statearr_18514 = state_18499;(statearr_18514[10] = inst_18476);
(statearr_18514[7] = inst_18463__$1);
return statearr_18514;
})();var statearr_18515_18541 = state_18499__$1;(statearr_18515_18541[2] = null);
(statearr_18515_18541[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 5))
{var inst_18483 = (state_18499[2]);var state_18499__$1 = (function (){var statearr_18516 = state_18499;(statearr_18516[11] = inst_18483);
return statearr_18516;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18499__$1,12,dchan);
} else
{if((state_val_18500 === 14))
{var inst_18485 = (state_18499[8]);var inst_18490 = cljs.core.apply.call(null,f,inst_18485);var state_18499__$1 = state_18499;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18499__$1,16,out,inst_18490);
} else
{if((state_val_18500 === 16))
{var inst_18492 = (state_18499[2]);var state_18499__$1 = (function (){var statearr_18517 = state_18499;(statearr_18517[12] = inst_18492);
return statearr_18517;
})();var statearr_18518_18542 = state_18499__$1;(statearr_18518_18542[2] = null);
(statearr_18518_18542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 10))
{var inst_18467 = (state_18499[2]);var inst_18468 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18499__$1 = (function (){var statearr_18519 = state_18499;(statearr_18519[13] = inst_18467);
return statearr_18519;
})();var statearr_18520_18543 = state_18499__$1;(statearr_18520_18543[2] = inst_18468);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18499__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18500 === 8))
{var inst_18481 = (state_18499[2]);var state_18499__$1 = state_18499;var statearr_18521_18544 = state_18499__$1;(statearr_18521_18544[2] = inst_18481);
(statearr_18521_18544[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___18529,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10434__auto__,c__10498__auto___18529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18525[0] = state_machine__10435__auto__);
(statearr_18525[1] = 1);
return statearr_18525;
});
var state_machine__10435__auto____1 = (function (state_18499){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18499);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18526){if((e18526 instanceof Object))
{var ex__10438__auto__ = e18526;var statearr_18527_18545 = state_18499;(statearr_18527_18545[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18499);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18546 = state_18499;
state_18499 = G__18546;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18499){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18529,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10500__auto__ = (function (){var statearr_18528 = f__10499__auto__.call(null);(statearr_18528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18529);
return statearr_18528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18529,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___18654 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18654,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18654,out){
return (function (state_18630){var state_val_18631 = (state_18630[1]);if((state_val_18631 === 7))
{var inst_18610 = (state_18630[7]);var inst_18609 = (state_18630[8]);var inst_18609__$1 = (state_18630[2]);var inst_18610__$1 = cljs.core.nth.call(null,inst_18609__$1,0,null);var inst_18611 = cljs.core.nth.call(null,inst_18609__$1,1,null);var inst_18612 = (inst_18610__$1 == null);var state_18630__$1 = (function (){var statearr_18632 = state_18630;(statearr_18632[7] = inst_18610__$1);
(statearr_18632[9] = inst_18611);
(statearr_18632[8] = inst_18609__$1);
return statearr_18632;
})();if(cljs.core.truth_(inst_18612))
{var statearr_18633_18655 = state_18630__$1;(statearr_18633_18655[1] = 8);
} else
{var statearr_18634_18656 = state_18630__$1;(statearr_18634_18656[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18631 === 1))
{var inst_18601 = cljs.core.vec.call(null,chs);var inst_18602 = inst_18601;var state_18630__$1 = (function (){var statearr_18635 = state_18630;(statearr_18635[10] = inst_18602);
return statearr_18635;
})();var statearr_18636_18657 = state_18630__$1;(statearr_18636_18657[2] = null);
(statearr_18636_18657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18631 === 4))
{var inst_18602 = (state_18630[10]);var state_18630__$1 = state_18630;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18630__$1,7,inst_18602);
} else
{if((state_val_18631 === 6))
{var inst_18626 = (state_18630[2]);var state_18630__$1 = state_18630;var statearr_18637_18658 = state_18630__$1;(statearr_18637_18658[2] = inst_18626);
(statearr_18637_18658[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18631 === 3))
{var inst_18628 = (state_18630[2]);var state_18630__$1 = state_18630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18630__$1,inst_18628);
} else
{if((state_val_18631 === 2))
{var inst_18602 = (state_18630[10]);var inst_18604 = cljs.core.count.call(null,inst_18602);var inst_18605 = (inst_18604 > 0);var state_18630__$1 = state_18630;if(cljs.core.truth_(inst_18605))
{var statearr_18639_18659 = state_18630__$1;(statearr_18639_18659[1] = 4);
} else
{var statearr_18640_18660 = state_18630__$1;(statearr_18640_18660[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18631 === 11))
{var inst_18602 = (state_18630[10]);var inst_18619 = (state_18630[2]);var tmp18638 = inst_18602;var inst_18602__$1 = tmp18638;var state_18630__$1 = (function (){var statearr_18641 = state_18630;(statearr_18641[10] = inst_18602__$1);
(statearr_18641[11] = inst_18619);
return statearr_18641;
})();var statearr_18642_18661 = state_18630__$1;(statearr_18642_18661[2] = null);
(statearr_18642_18661[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18631 === 9))
{var inst_18610 = (state_18630[7]);var state_18630__$1 = state_18630;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18630__$1,11,out,inst_18610);
} else
{if((state_val_18631 === 5))
{var inst_18624 = cljs.core.async.close_BANG_.call(null,out);var state_18630__$1 = state_18630;var statearr_18643_18662 = state_18630__$1;(statearr_18643_18662[2] = inst_18624);
(statearr_18643_18662[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18631 === 10))
{var inst_18622 = (state_18630[2]);var state_18630__$1 = state_18630;var statearr_18644_18663 = state_18630__$1;(statearr_18644_18663[2] = inst_18622);
(statearr_18644_18663[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18631 === 8))
{var inst_18610 = (state_18630[7]);var inst_18602 = (state_18630[10]);var inst_18611 = (state_18630[9]);var inst_18609 = (state_18630[8]);var inst_18614 = (function (){var c = inst_18611;var v = inst_18610;var vec__18607 = inst_18609;var cs = inst_18602;return ((function (c,v,vec__18607,cs,inst_18610,inst_18602,inst_18611,inst_18609,state_val_18631,c__10498__auto___18654,out){
return (function (p1__18547_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18547_SHARP_);
});
;})(c,v,vec__18607,cs,inst_18610,inst_18602,inst_18611,inst_18609,state_val_18631,c__10498__auto___18654,out))
})();var inst_18615 = cljs.core.filterv.call(null,inst_18614,inst_18602);var inst_18602__$1 = inst_18615;var state_18630__$1 = (function (){var statearr_18645 = state_18630;(statearr_18645[10] = inst_18602__$1);
return statearr_18645;
})();var statearr_18646_18664 = state_18630__$1;(statearr_18646_18664[2] = null);
(statearr_18646_18664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___18654,out))
;return ((function (switch__10434__auto__,c__10498__auto___18654,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18650 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18650[0] = state_machine__10435__auto__);
(statearr_18650[1] = 1);
return statearr_18650;
});
var state_machine__10435__auto____1 = (function (state_18630){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18630);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18651){if((e18651 instanceof Object))
{var ex__10438__auto__ = e18651;var statearr_18652_18665 = state_18630;(statearr_18652_18665[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18630);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18666 = state_18630;
state_18630 = G__18666;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18630){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18654,out))
})();var state__10500__auto__ = (function (){var statearr_18653 = f__10499__auto__.call(null);(statearr_18653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18654);
return statearr_18653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18654,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___18759 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18759,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18759,out){
return (function (state_18736){var state_val_18737 = (state_18736[1]);if((state_val_18737 === 7))
{var inst_18718 = (state_18736[7]);var inst_18718__$1 = (state_18736[2]);var inst_18719 = (inst_18718__$1 == null);var inst_18720 = cljs.core.not.call(null,inst_18719);var state_18736__$1 = (function (){var statearr_18738 = state_18736;(statearr_18738[7] = inst_18718__$1);
return statearr_18738;
})();if(inst_18720)
{var statearr_18739_18760 = state_18736__$1;(statearr_18739_18760[1] = 8);
} else
{var statearr_18740_18761 = state_18736__$1;(statearr_18740_18761[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18737 === 1))
{var inst_18713 = 0;var state_18736__$1 = (function (){var statearr_18741 = state_18736;(statearr_18741[8] = inst_18713);
return statearr_18741;
})();var statearr_18742_18762 = state_18736__$1;(statearr_18742_18762[2] = null);
(statearr_18742_18762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18737 === 4))
{var state_18736__$1 = state_18736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18736__$1,7,ch);
} else
{if((state_val_18737 === 6))
{var inst_18731 = (state_18736[2]);var state_18736__$1 = state_18736;var statearr_18743_18763 = state_18736__$1;(statearr_18743_18763[2] = inst_18731);
(statearr_18743_18763[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18737 === 3))
{var inst_18733 = (state_18736[2]);var inst_18734 = cljs.core.async.close_BANG_.call(null,out);var state_18736__$1 = (function (){var statearr_18744 = state_18736;(statearr_18744[9] = inst_18733);
return statearr_18744;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18736__$1,inst_18734);
} else
{if((state_val_18737 === 2))
{var inst_18713 = (state_18736[8]);var inst_18715 = (inst_18713 < n);var state_18736__$1 = state_18736;if(cljs.core.truth_(inst_18715))
{var statearr_18745_18764 = state_18736__$1;(statearr_18745_18764[1] = 4);
} else
{var statearr_18746_18765 = state_18736__$1;(statearr_18746_18765[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18737 === 11))
{var inst_18713 = (state_18736[8]);var inst_18723 = (state_18736[2]);var inst_18724 = (inst_18713 + 1);var inst_18713__$1 = inst_18724;var state_18736__$1 = (function (){var statearr_18747 = state_18736;(statearr_18747[8] = inst_18713__$1);
(statearr_18747[10] = inst_18723);
return statearr_18747;
})();var statearr_18748_18766 = state_18736__$1;(statearr_18748_18766[2] = null);
(statearr_18748_18766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18737 === 9))
{var state_18736__$1 = state_18736;var statearr_18749_18767 = state_18736__$1;(statearr_18749_18767[2] = null);
(statearr_18749_18767[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18737 === 5))
{var state_18736__$1 = state_18736;var statearr_18750_18768 = state_18736__$1;(statearr_18750_18768[2] = null);
(statearr_18750_18768[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18737 === 10))
{var inst_18728 = (state_18736[2]);var state_18736__$1 = state_18736;var statearr_18751_18769 = state_18736__$1;(statearr_18751_18769[2] = inst_18728);
(statearr_18751_18769[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18737 === 8))
{var inst_18718 = (state_18736[7]);var state_18736__$1 = state_18736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18736__$1,11,out,inst_18718);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___18759,out))
;return ((function (switch__10434__auto__,c__10498__auto___18759,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18755 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18755[0] = state_machine__10435__auto__);
(statearr_18755[1] = 1);
return statearr_18755;
});
var state_machine__10435__auto____1 = (function (state_18736){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18736);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18756){if((e18756 instanceof Object))
{var ex__10438__auto__ = e18756;var statearr_18757_18770 = state_18736;(statearr_18757_18770[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18736);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18771 = state_18736;
state_18736 = G__18771;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18736){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18759,out))
})();var state__10500__auto__ = (function (){var statearr_18758 = f__10499__auto__.call(null);(statearr_18758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18759);
return statearr_18758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18759,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___18868 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___18868,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___18868,out){
return (function (state_18843){var state_val_18844 = (state_18843[1]);if((state_val_18844 === 7))
{var inst_18838 = (state_18843[2]);var state_18843__$1 = state_18843;var statearr_18845_18869 = state_18843__$1;(statearr_18845_18869[2] = inst_18838);
(statearr_18845_18869[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18844 === 1))
{var inst_18820 = null;var state_18843__$1 = (function (){var statearr_18846 = state_18843;(statearr_18846[7] = inst_18820);
return statearr_18846;
})();var statearr_18847_18870 = state_18843__$1;(statearr_18847_18870[2] = null);
(statearr_18847_18870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18844 === 4))
{var inst_18823 = (state_18843[8]);var inst_18823__$1 = (state_18843[2]);var inst_18824 = (inst_18823__$1 == null);var inst_18825 = cljs.core.not.call(null,inst_18824);var state_18843__$1 = (function (){var statearr_18848 = state_18843;(statearr_18848[8] = inst_18823__$1);
return statearr_18848;
})();if(inst_18825)
{var statearr_18849_18871 = state_18843__$1;(statearr_18849_18871[1] = 5);
} else
{var statearr_18850_18872 = state_18843__$1;(statearr_18850_18872[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18844 === 6))
{var state_18843__$1 = state_18843;var statearr_18851_18873 = state_18843__$1;(statearr_18851_18873[2] = null);
(statearr_18851_18873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18844 === 3))
{var inst_18840 = (state_18843[2]);var inst_18841 = cljs.core.async.close_BANG_.call(null,out);var state_18843__$1 = (function (){var statearr_18852 = state_18843;(statearr_18852[9] = inst_18840);
return statearr_18852;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18843__$1,inst_18841);
} else
{if((state_val_18844 === 2))
{var state_18843__$1 = state_18843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18843__$1,4,ch);
} else
{if((state_val_18844 === 11))
{var inst_18823 = (state_18843[8]);var inst_18832 = (state_18843[2]);var inst_18820 = inst_18823;var state_18843__$1 = (function (){var statearr_18853 = state_18843;(statearr_18853[7] = inst_18820);
(statearr_18853[10] = inst_18832);
return statearr_18853;
})();var statearr_18854_18874 = state_18843__$1;(statearr_18854_18874[2] = null);
(statearr_18854_18874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18844 === 9))
{var inst_18823 = (state_18843[8]);var state_18843__$1 = state_18843;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18843__$1,11,out,inst_18823);
} else
{if((state_val_18844 === 5))
{var inst_18823 = (state_18843[8]);var inst_18820 = (state_18843[7]);var inst_18827 = cljs.core._EQ_.call(null,inst_18823,inst_18820);var state_18843__$1 = state_18843;if(inst_18827)
{var statearr_18856_18875 = state_18843__$1;(statearr_18856_18875[1] = 8);
} else
{var statearr_18857_18876 = state_18843__$1;(statearr_18857_18876[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18844 === 10))
{var inst_18835 = (state_18843[2]);var state_18843__$1 = state_18843;var statearr_18858_18877 = state_18843__$1;(statearr_18858_18877[2] = inst_18835);
(statearr_18858_18877[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18844 === 8))
{var inst_18820 = (state_18843[7]);var tmp18855 = inst_18820;var inst_18820__$1 = tmp18855;var state_18843__$1 = (function (){var statearr_18859 = state_18843;(statearr_18859[7] = inst_18820__$1);
return statearr_18859;
})();var statearr_18860_18878 = state_18843__$1;(statearr_18860_18878[2] = null);
(statearr_18860_18878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___18868,out))
;return ((function (switch__10434__auto__,c__10498__auto___18868,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_18864 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18864[0] = state_machine__10435__auto__);
(statearr_18864[1] = 1);
return statearr_18864;
});
var state_machine__10435__auto____1 = (function (state_18843){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18843);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e18865){if((e18865 instanceof Object))
{var ex__10438__auto__ = e18865;var statearr_18866_18879 = state_18843;(statearr_18866_18879[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18880 = state_18843;
state_18843 = G__18880;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18843){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___18868,out))
})();var state__10500__auto__ = (function (){var statearr_18867 = f__10499__auto__.call(null);(statearr_18867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___18868);
return statearr_18867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___18868,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___19015 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___19015,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___19015,out){
return (function (state_18985){var state_val_18986 = (state_18985[1]);if((state_val_18986 === 7))
{var inst_18981 = (state_18985[2]);var state_18985__$1 = state_18985;var statearr_18987_19016 = state_18985__$1;(statearr_18987_19016[2] = inst_18981);
(statearr_18987_19016[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18986 === 1))
{var inst_18948 = (new Array(n));var inst_18949 = inst_18948;var inst_18950 = 0;var state_18985__$1 = (function (){var statearr_18988 = state_18985;(statearr_18988[7] = inst_18950);
(statearr_18988[8] = inst_18949);
return statearr_18988;
})();var statearr_18989_19017 = state_18985__$1;(statearr_18989_19017[2] = null);
(statearr_18989_19017[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18986 === 4))
{var inst_18953 = (state_18985[9]);var inst_18953__$1 = (state_18985[2]);var inst_18954 = (inst_18953__$1 == null);var inst_18955 = cljs.core.not.call(null,inst_18954);var state_18985__$1 = (function (){var statearr_18990 = state_18985;(statearr_18990[9] = inst_18953__$1);
return statearr_18990;
})();if(inst_18955)
{var statearr_18991_19018 = state_18985__$1;(statearr_18991_19018[1] = 5);
} else
{var statearr_18992_19019 = state_18985__$1;(statearr_18992_19019[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18986 === 15))
{var inst_18975 = (state_18985[2]);var state_18985__$1 = state_18985;var statearr_18993_19020 = state_18985__$1;(statearr_18993_19020[2] = inst_18975);
(statearr_18993_19020[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18986 === 13))
{var state_18985__$1 = state_18985;var statearr_18994_19021 = state_18985__$1;(statearr_18994_19021[2] = null);
(statearr_18994_19021[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18986 === 6))
{var inst_18950 = (state_18985[7]);var inst_18971 = (inst_18950 > 0);var state_18985__$1 = state_18985;if(cljs.core.truth_(inst_18971))
{var statearr_18995_19022 = state_18985__$1;(statearr_18995_19022[1] = 12);
} else
{var statearr_18996_19023 = state_18985__$1;(statearr_18996_19023[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18986 === 3))
{var inst_18983 = (state_18985[2]);var state_18985__$1 = state_18985;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18985__$1,inst_18983);
} else
{if((state_val_18986 === 12))
{var inst_18949 = (state_18985[8]);var inst_18973 = cljs.core.vec.call(null,inst_18949);var state_18985__$1 = state_18985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18985__$1,15,out,inst_18973);
} else
{if((state_val_18986 === 2))
{var state_18985__$1 = state_18985;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18985__$1,4,ch);
} else
{if((state_val_18986 === 11))
{var inst_18965 = (state_18985[2]);var inst_18966 = (new Array(n));var inst_18949 = inst_18966;var inst_18950 = 0;var state_18985__$1 = (function (){var statearr_18997 = state_18985;(statearr_18997[7] = inst_18950);
(statearr_18997[10] = inst_18965);
(statearr_18997[8] = inst_18949);
return statearr_18997;
})();var statearr_18998_19024 = state_18985__$1;(statearr_18998_19024[2] = null);
(statearr_18998_19024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18986 === 9))
{var inst_18949 = (state_18985[8]);var inst_18963 = cljs.core.vec.call(null,inst_18949);var state_18985__$1 = state_18985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18985__$1,11,out,inst_18963);
} else
{if((state_val_18986 === 5))
{var inst_18958 = (state_18985[11]);var inst_18953 = (state_18985[9]);var inst_18950 = (state_18985[7]);var inst_18949 = (state_18985[8]);var inst_18957 = (inst_18949[inst_18950] = inst_18953);var inst_18958__$1 = (inst_18950 + 1);var inst_18959 = (inst_18958__$1 < n);var state_18985__$1 = (function (){var statearr_18999 = state_18985;(statearr_18999[11] = inst_18958__$1);
(statearr_18999[12] = inst_18957);
return statearr_18999;
})();if(cljs.core.truth_(inst_18959))
{var statearr_19000_19025 = state_18985__$1;(statearr_19000_19025[1] = 8);
} else
{var statearr_19001_19026 = state_18985__$1;(statearr_19001_19026[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18986 === 14))
{var inst_18978 = (state_18985[2]);var inst_18979 = cljs.core.async.close_BANG_.call(null,out);var state_18985__$1 = (function (){var statearr_19003 = state_18985;(statearr_19003[13] = inst_18978);
return statearr_19003;
})();var statearr_19004_19027 = state_18985__$1;(statearr_19004_19027[2] = inst_18979);
(statearr_19004_19027[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18986 === 10))
{var inst_18969 = (state_18985[2]);var state_18985__$1 = state_18985;var statearr_19005_19028 = state_18985__$1;(statearr_19005_19028[2] = inst_18969);
(statearr_19005_19028[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18986 === 8))
{var inst_18958 = (state_18985[11]);var inst_18949 = (state_18985[8]);var tmp19002 = inst_18949;var inst_18949__$1 = tmp19002;var inst_18950 = inst_18958;var state_18985__$1 = (function (){var statearr_19006 = state_18985;(statearr_19006[7] = inst_18950);
(statearr_19006[8] = inst_18949__$1);
return statearr_19006;
})();var statearr_19007_19029 = state_18985__$1;(statearr_19007_19029[2] = null);
(statearr_19007_19029[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___19015,out))
;return ((function (switch__10434__auto__,c__10498__auto___19015,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_19011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19011[0] = state_machine__10435__auto__);
(statearr_19011[1] = 1);
return statearr_19011;
});
var state_machine__10435__auto____1 = (function (state_18985){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_18985);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e19012){if((e19012 instanceof Object))
{var ex__10438__auto__ = e19012;var statearr_19013_19030 = state_18985;(statearr_19013_19030[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18985);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19031 = state_18985;
state_18985 = G__19031;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_18985){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_18985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___19015,out))
})();var state__10500__auto__ = (function (){var statearr_19014 = f__10499__auto__.call(null);(statearr_19014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___19015);
return statearr_19014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___19015,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10498__auto___19174 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___19174,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___19174,out){
return (function (state_19144){var state_val_19145 = (state_19144[1]);if((state_val_19145 === 7))
{var inst_19140 = (state_19144[2]);var state_19144__$1 = state_19144;var statearr_19146_19175 = state_19144__$1;(statearr_19146_19175[2] = inst_19140);
(statearr_19146_19175[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19145 === 1))
{var inst_19103 = [];var inst_19104 = inst_19103;var inst_19105 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_19144__$1 = (function (){var statearr_19147 = state_19144;(statearr_19147[7] = inst_19105);
(statearr_19147[8] = inst_19104);
return statearr_19147;
})();var statearr_19148_19176 = state_19144__$1;(statearr_19148_19176[2] = null);
(statearr_19148_19176[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19145 === 4))
{var inst_19108 = (state_19144[9]);var inst_19108__$1 = (state_19144[2]);var inst_19109 = (inst_19108__$1 == null);var inst_19110 = cljs.core.not.call(null,inst_19109);var state_19144__$1 = (function (){var statearr_19149 = state_19144;(statearr_19149[9] = inst_19108__$1);
return statearr_19149;
})();if(inst_19110)
{var statearr_19150_19177 = state_19144__$1;(statearr_19150_19177[1] = 5);
} else
{var statearr_19151_19178 = state_19144__$1;(statearr_19151_19178[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19145 === 15))
{var inst_19134 = (state_19144[2]);var state_19144__$1 = state_19144;var statearr_19152_19179 = state_19144__$1;(statearr_19152_19179[2] = inst_19134);
(statearr_19152_19179[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19145 === 13))
{var state_19144__$1 = state_19144;var statearr_19153_19180 = state_19144__$1;(statearr_19153_19180[2] = null);
(statearr_19153_19180[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19145 === 6))
{var inst_19104 = (state_19144[8]);var inst_19129 = inst_19104.length;var inst_19130 = (inst_19129 > 0);var state_19144__$1 = state_19144;if(cljs.core.truth_(inst_19130))
{var statearr_19154_19181 = state_19144__$1;(statearr_19154_19181[1] = 12);
} else
{var statearr_19155_19182 = state_19144__$1;(statearr_19155_19182[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19145 === 3))
{var inst_19142 = (state_19144[2]);var state_19144__$1 = state_19144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19144__$1,inst_19142);
} else
{if((state_val_19145 === 12))
{var inst_19104 = (state_19144[8]);var inst_19132 = cljs.core.vec.call(null,inst_19104);var state_19144__$1 = state_19144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19144__$1,15,out,inst_19132);
} else
{if((state_val_19145 === 2))
{var state_19144__$1 = state_19144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19144__$1,4,ch);
} else
{if((state_val_19145 === 11))
{var inst_19108 = (state_19144[9]);var inst_19112 = (state_19144[10]);var inst_19122 = (state_19144[2]);var inst_19123 = [];var inst_19124 = inst_19123.push(inst_19108);var inst_19104 = inst_19123;var inst_19105 = inst_19112;var state_19144__$1 = (function (){var statearr_19156 = state_19144;(statearr_19156[7] = inst_19105);
(statearr_19156[11] = inst_19124);
(statearr_19156[12] = inst_19122);
(statearr_19156[8] = inst_19104);
return statearr_19156;
})();var statearr_19157_19183 = state_19144__$1;(statearr_19157_19183[2] = null);
(statearr_19157_19183[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19145 === 9))
{var inst_19104 = (state_19144[8]);var inst_19120 = cljs.core.vec.call(null,inst_19104);var state_19144__$1 = state_19144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19144__$1,11,out,inst_19120);
} else
{if((state_val_19145 === 5))
{var inst_19105 = (state_19144[7]);var inst_19108 = (state_19144[9]);var inst_19112 = (state_19144[10]);var inst_19112__$1 = f.call(null,inst_19108);var inst_19113 = cljs.core._EQ_.call(null,inst_19112__$1,inst_19105);var inst_19114 = cljs.core.keyword_identical_QMARK_.call(null,inst_19105,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_19115 = (inst_19113) || (inst_19114);var state_19144__$1 = (function (){var statearr_19158 = state_19144;(statearr_19158[10] = inst_19112__$1);
return statearr_19158;
})();if(cljs.core.truth_(inst_19115))
{var statearr_19159_19184 = state_19144__$1;(statearr_19159_19184[1] = 8);
} else
{var statearr_19160_19185 = state_19144__$1;(statearr_19160_19185[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19145 === 14))
{var inst_19137 = (state_19144[2]);var inst_19138 = cljs.core.async.close_BANG_.call(null,out);var state_19144__$1 = (function (){var statearr_19162 = state_19144;(statearr_19162[13] = inst_19137);
return statearr_19162;
})();var statearr_19163_19186 = state_19144__$1;(statearr_19163_19186[2] = inst_19138);
(statearr_19163_19186[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19145 === 10))
{var inst_19127 = (state_19144[2]);var state_19144__$1 = state_19144;var statearr_19164_19187 = state_19144__$1;(statearr_19164_19187[2] = inst_19127);
(statearr_19164_19187[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19145 === 8))
{var inst_19108 = (state_19144[9]);var inst_19112 = (state_19144[10]);var inst_19104 = (state_19144[8]);var inst_19117 = inst_19104.push(inst_19108);var tmp19161 = inst_19104;var inst_19104__$1 = tmp19161;var inst_19105 = inst_19112;var state_19144__$1 = (function (){var statearr_19165 = state_19144;(statearr_19165[7] = inst_19105);
(statearr_19165[8] = inst_19104__$1);
(statearr_19165[14] = inst_19117);
return statearr_19165;
})();var statearr_19166_19188 = state_19144__$1;(statearr_19166_19188[2] = null);
(statearr_19166_19188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10498__auto___19174,out))
;return ((function (switch__10434__auto__,c__10498__auto___19174,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_19170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19170[0] = state_machine__10435__auto__);
(statearr_19170[1] = 1);
return statearr_19170;
});
var state_machine__10435__auto____1 = (function (state_19144){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_19144);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e19171){if((e19171 instanceof Object))
{var ex__10438__auto__ = e19171;var statearr_19172_19189 = state_19144;(statearr_19172_19189[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19144);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19190 = state_19144;
state_19144 = G__19190;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_19144){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_19144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___19174,out))
})();var state__10500__auto__ = (function (){var statearr_19173 = f__10499__auto__.call(null);(statearr_19173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___19174);
return statearr_19173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___19174,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map