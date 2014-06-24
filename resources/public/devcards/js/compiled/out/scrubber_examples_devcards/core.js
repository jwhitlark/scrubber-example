// Compiled by ClojureScript 0.0-2202
goog.provide('scrubber_examples_devcards.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('devcards.core');
goog.require('cljs.core.async');
goog.require('scrubber_examples.core');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('scrubber_examples.core');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.start_devcard_ui_BANG_.call(null);
devcards.core.start_figwheel_reloader_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scrubber_examples_devcards.core","scrubber_examples_devcards.core",2611876410),new cljs.core.Keyword(null,"devcard-intro","devcard-intro",4151151286)], null),devcards.system.get_options.call(null,devcards.core.markdown_card.call(null,"# Devcards for scrubber-examples\n\n    I can be found in `devcards_src/scrubber_examples_devcards/core.cljs`.\n\n    If you add cards to this file, they will appear here on this page.\n\n    You can add devcards to any file as long as you require\n    `devcards.core` like so:\n\n    ```\n    (:require [devcards.core :as dc :include-macros true])\n    ```\n\n    As you add cards to other namspaces, those namspaces will\n    be listed on the Devcards **home** page.\n\n    <a href=\"https://github.com/bhauman/devcards/blob/master/example_src/devdemos/core.cljs\" target=\"_blank\">Here are some Devcard examples</a>")),(function (){return devcards.core.markdown_card.call(null,"# Devcards for scrubber-examples\n\n    I can be found in `devcards_src/scrubber_examples_devcards/core.cljs`.\n\n    If you add cards to this file, they will appear here on this page.\n\n    You can add devcards to any file as long as you require\n    `devcards.core` like so:\n\n    ```\n    (:require [devcards.core :as dc :include-macros true])\n    ```\n\n    As you add cards to other namspaces, those namspaces will\n    be listed on the Devcards **home** page.\n\n    <a href=\"https://github.com/bhauman/devcards/blob/master/example_src/devdemos/core.cljs\" target=\"_blank\">Here are some Devcard examples</a>");
}));
scrubber_examples_devcards.core.clock_view = (function clock_view(app,owner){if(typeof scrubber_examples_devcards.core.t21853 !== 'undefined')
{} else
{
/**
* @constructor
*/
scrubber_examples_devcards.core.t21853 = (function (owner,app,clock_view,meta21854){
this.owner = owner;
this.app = app;
this.clock_view = clock_view;
this.meta21854 = meta21854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
scrubber_examples_devcards.core.t21853.cljs$lang$type = true;
scrubber_examples_devcards.core.t21853.cljs$lang$ctorStr = "scrubber-examples-devcards.core/t21853";
scrubber_examples_devcards.core.t21853.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"scrubber-examples-devcards.core/t21853");
});
scrubber_examples_devcards.core.t21853.prototype.om$core$IRender$ = true;
scrubber_examples_devcards.core.t21853.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(self__.app).toUTCString());
});
scrubber_examples_devcards.core.t21853.prototype.om$core$IWillMount$ = true;
scrubber_examples_devcards.core.t21853.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return setInterval(((function (___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"time","time",1017464383),((function (___$1){
return (function (___$2){return (new Date());
});})(___$1))
);
});})(___$1))
,100);
});
scrubber_examples_devcards.core.t21853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21855){var self__ = this;
var _21855__$1 = this;return self__.meta21854;
});
scrubber_examples_devcards.core.t21853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21855,meta21854__$1){var self__ = this;
var _21855__$1 = this;return (new scrubber_examples_devcards.core.t21853(self__.owner,self__.app,self__.clock_view,meta21854__$1));
});
scrubber_examples_devcards.core.__GT_t21853 = (function __GT_t21853(owner__$1,app__$1,clock_view__$1,meta21854){return (new scrubber_examples_devcards.core.t21853(owner__$1,app__$1,clock_view__$1,meta21854));
});
}
return (new scrubber_examples_devcards.core.t21853(owner,app,clock_view,null));
});
devcards.core.register_card.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scrubber_examples_devcards.core","scrubber_examples_devcards.core",2611876410),new cljs.core.Keyword(null,"om-clock","om-clock",529044177)], null),devcards.system.get_options.call(null,devcards.core.om_root_card.call(null,scrubber_examples_devcards.core.clock_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1017464383),(new Date())], null))),(function (){return devcards.core.om_root_card.call(null,scrubber_examples_devcards.core.clock_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1017464383),(new Date())], null));
}));
/**
* @param {...*} var_args
*/
scrubber_examples_devcards.core.listen = (function() { 
var listen__delegate = function (el,types){var out = cljs.core.async.chan.call(null);cljs.core.doall.call(null,cljs.core.map.call(null,((function (out){
return (function (type){return goog.events.listen(el,type,((function (out){
return (function (p1__21856_SHARP_){return cljs.core.async.put_BANG_.call(null,out,p1__21856_SHARP_);
});})(out))
);
});})(out))
,types));
return out;
};
var listen = function (el,var_args){
var types = null;if (arguments.length > 1) {
  types = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen__delegate.call(this,el,types);};
listen.cljs$lang$maxFixedArity = 1;
listen.cljs$lang$applyTo = (function (arglist__21857){
var el = cljs.core.first(arglist__21857);
var types = cljs.core.rest(arglist__21857);
return listen__delegate(el,types);
});
listen.cljs$core$IFn$_invoke$arity$variadic = listen__delegate;
return listen;
})()
;
scrubber_examples_devcards.core.set_states_BANG_ = (function set_states_BANG_(owner,desired){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__21858_SHARP_){return om.core.set_state_BANG_.call(null,owner,cljs.core.key.call(null,p1__21858_SHARP_),cljs.core.val.call(null,p1__21858_SHARP_));
}),desired));
});
scrubber_examples_devcards.core.scrubbing_int_state_view = (function scrubbing_int_state_view(app,owner){var start_capturing = (function (p1__21859_SHARP_){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"capturing","capturing",3767148021),true);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"start-x","start-x",3411684671),p1__21859_SHARP_.clientX);
});var stop_capturing = ((function (start_capturing){
return (function (){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"capturing","capturing",3767148021),false);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"start-x","start-x",3411684671),null);
});})(start_capturing))
;if(typeof scrubber_examples_devcards.core.t21864 !== 'undefined')
{} else
{
/**
* @constructor
*/
scrubber_examples_devcards.core.t21864 = (function (stop_capturing,start_capturing,owner,app,scrubbing_int_state_view,meta21865){
this.stop_capturing = stop_capturing;
this.start_capturing = start_capturing;
this.owner = owner;
this.app = app;
this.scrubbing_int_state_view = scrubbing_int_state_view;
this.meta21865 = meta21865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
scrubber_examples_devcards.core.t21864.cljs$lang$type = true;
scrubber_examples_devcards.core.t21864.cljs$lang$ctorStr = "scrubber-examples-devcards.core/t21864";
scrubber_examples_devcards.core.t21864.cljs$lang$ctorPrWriter = ((function (start_capturing,stop_capturing){
return (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"scrubber-examples-devcards.core/t21864");
});})(start_capturing,stop_capturing))
;
scrubber_examples_devcards.core.t21864.prototype.om$core$IRenderState$ = true;
scrubber_examples_devcards.core.t21864.prototype.om$core$IRenderState$render_state$arity$2 = ((function (start_capturing,stop_capturing){
return (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.span({"onMouseOut": self__.stop_capturing, "onMouseUp": self__.stop_capturing, "onMouseMove": ((function (___$1,start_capturing,stop_capturing){
return (function (p1__21860_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"capturing","capturing",3767148021).cljs$core$IFn$_invoke$arity$1(state)))
{var x = p1__21860_SHARP_.clientX;var difference = (x - om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"start-x","start-x",3411684671)));om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"my-val","my-val",4247684850),cljs.core.partial.call(null,cljs.core._PLUS_,difference));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"start-x","start-x",3411684671),x);
} else
{return null;
}
});})(___$1,start_capturing,stop_capturing))
, "onMouseDown": self__.start_capturing, "style": {"-webkit-user-select": "none", "cursor": "col-resize"}},[cljs.core.str("Current value is: "),cljs.core.str(new cljs.core.Keyword(null,"my-val","my-val",4247684850).cljs$core$IFn$_invoke$arity$1(state))].join('')));
});})(start_capturing,stop_capturing))
;
scrubber_examples_devcards.core.t21864.prototype.om$core$IInitState$ = true;
scrubber_examples_devcards.core.t21864.prototype.om$core$IInitState$init_state$arity$1 = ((function (start_capturing,stop_capturing){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"my-val","my-val",4247684850),0,new cljs.core.Keyword(null,"capturing","capturing",3767148021),false,new cljs.core.Keyword(null,"start-x","start-x",3411684671),null], null);
});})(start_capturing,stop_capturing))
;
scrubber_examples_devcards.core.t21864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (start_capturing,stop_capturing){
return (function (_21866){var self__ = this;
var _21866__$1 = this;return self__.meta21865;
});})(start_capturing,stop_capturing))
;
scrubber_examples_devcards.core.t21864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (start_capturing,stop_capturing){
return (function (_21866,meta21865__$1){var self__ = this;
var _21866__$1 = this;return (new scrubber_examples_devcards.core.t21864(self__.stop_capturing,self__.start_capturing,self__.owner,self__.app,self__.scrubbing_int_state_view,meta21865__$1));
});})(start_capturing,stop_capturing))
;
scrubber_examples_devcards.core.__GT_t21864 = ((function (start_capturing,stop_capturing){
return (function __GT_t21864(stop_capturing__$1,start_capturing__$1,owner__$1,app__$1,scrubbing_int_state_view__$1,meta21865){return (new scrubber_examples_devcards.core.t21864(stop_capturing__$1,start_capturing__$1,owner__$1,app__$1,scrubbing_int_state_view__$1,meta21865));
});})(start_capturing,stop_capturing))
;
}
return (new scrubber_examples_devcards.core.t21864(stop_capturing,start_capturing,owner,app,scrubbing_int_state_view,null));
});
devcards.core.register_card.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scrubber_examples_devcards.core","scrubber_examples_devcards.core",2611876410),new cljs.core.Keyword(null,"om-int-state-scrubber","om-int-state-scrubber",4452505371)], null),devcards.system.get_options.call(null,devcards.core.om_root_card.call(null,scrubber_examples_devcards.core.scrubbing_int_state_view,cljs.core.PersistentArrayMap.EMPTY)),(function (){return devcards.core.om_root_card.call(null,scrubber_examples_devcards.core.scrubbing_int_state_view,cljs.core.PersistentArrayMap.EMPTY);
}));
scrubber_examples_devcards.core.scrubbing_int_app_event_view_2 = (function scrubbing_int_app_event_view_2(app,owner){if(typeof scrubber_examples_devcards.core.t21930 !== 'undefined')
{} else
{
/**
* @constructor
*/
scrubber_examples_devcards.core.t21930 = (function (owner,app,scrubbing_int_app_event_view_2,meta21931){
this.owner = owner;
this.app = app;
this.scrubbing_int_app_event_view_2 = scrubbing_int_app_event_view_2;
this.meta21931 = meta21931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
scrubber_examples_devcards.core.t21930.cljs$lang$type = true;
scrubber_examples_devcards.core.t21930.cljs$lang$ctorStr = "scrubber-examples-devcards.core/t21930";
scrubber_examples_devcards.core.t21930.cljs$lang$ctorPrWriter = (function (this__8436__auto__,writer__8437__auto__,opt__8438__auto__){return cljs.core._write.call(null,writer__8437__auto__,"scrubber-examples-devcards.core/t21930");
});
scrubber_examples_devcards.core.t21930.prototype.om$core$IRenderState$ = true;
scrubber_examples_devcards.core.t21930.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.span({"onMouseDown": ((function (___$1){
return (function (p1__21867_SHARP_){return scrubber_examples_devcards.core.set_states_BANG_.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"capturing","capturing",3767148021),true,new cljs.core.Keyword(null,"start-x","start-x",3411684671),p1__21867_SHARP_.clientX], null));
});})(___$1))
, "style": {"-webkit-user-select": "none", "cursor": "col-resize", "border-bottom": "1px dotted #00f", "color": (cljs.core.truth_(new cljs.core.Keyword(null,"capturing","capturing",3767148021).cljs$core$IFn$_invoke$arity$1(state))?"#00f":"#000")}},[cljs.core.str("Current state is: "),cljs.core.str(state),cljs.core.str(", Current app val is: "),cljs.core.str(new cljs.core.Keyword(null,"my-val","my-val",4247684850).cljs$core$IFn$_invoke$arity$1(self__.app))].join('')));
});
scrubber_examples_devcards.core.t21930.prototype.om$core$IWillMount$ = true;
scrubber_examples_devcards.core.t21930.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_chan = cljs.core.async.map.call(null,((function (___$1){
return (function (e){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),e.clientX,new cljs.core.Keyword(null,"type","type",1017479852),e.type], null);
});})(___$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrubber_examples_devcards.core.listen.call(null,window,goog.events.EventType.MOUSEMOVE,goog.events.EventType.MOUSEUP)], null));var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__,mouse_chan,___$1){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__,mouse_chan,___$1){
return (function (state_21965){var state_val_21966 = (state_21965[1]);if((state_val_21966 === 7))
{var inst_21936 = (state_21965[2]);var inst_21937 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"capturing","capturing",3767148021));var state_21965__$1 = (function (){var statearr_21967 = state_21965;(statearr_21967[7] = inst_21936);
return statearr_21967;
})();if(cljs.core.truth_(inst_21937))
{var statearr_21968_21992 = state_21965__$1;(statearr_21968_21992[1] = 8);
} else
{var statearr_21969_21993 = state_21965__$1;(statearr_21969_21993[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21966 === 1))
{var state_21965__$1 = state_21965;var statearr_21970_21994 = state_21965__$1;(statearr_21970_21994[2] = null);
(statearr_21970_21994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21966 === 4))
{var state_21965__$1 = state_21965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21965__$1,7,mouse_chan);
} else
{if((state_val_21966 === 13))
{var inst_21947 = [new cljs.core.Keyword(null,"capturing","capturing",3767148021),new cljs.core.Keyword(null,"start-x","start-x",3411684671)];var inst_21948 = [false,null];var inst_21949 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21947,inst_21948);var inst_21950 = scrubber_examples_devcards.core.set_states_BANG_.call(null,self__.owner,inst_21949);var state_21965__$1 = state_21965;var statearr_21971_21995 = state_21965__$1;(statearr_21971_21995[2] = inst_21950);
(statearr_21971_21995[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21966 === 6))
{var inst_21961 = (state_21965[2]);var state_21965__$1 = state_21965;var statearr_21972_21996 = state_21965__$1;(statearr_21972_21996[2] = inst_21961);
(statearr_21972_21996[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21966 === 3))
{var inst_21963 = (state_21965[2]);var state_21965__$1 = state_21965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21965__$1,inst_21963);
} else
{if((state_val_21966 === 12))
{var inst_21936 = (state_21965[7]);var inst_21939 = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(inst_21936);var inst_21940 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"start-x","start-x",3411684671));var inst_21941 = (inst_21939 - inst_21940);var inst_21942 = cljs.core.partial.call(null,cljs.core._PLUS_,inst_21941);var inst_21943 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"my-val","my-val",4247684850),inst_21942);var inst_21944 = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(inst_21936);var inst_21945 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"start-x","start-x",3411684671),inst_21944);var state_21965__$1 = (function (){var statearr_21973 = state_21965;(statearr_21973[8] = inst_21943);
return statearr_21973;
})();var statearr_21974_21997 = state_21965__$1;(statearr_21974_21997[2] = inst_21945);
(statearr_21974_21997[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21966 === 2))
{var state_21965__$1 = state_21965;if(cljs.core.true_QMARK_)
{var statearr_21975_21998 = state_21965__$1;(statearr_21975_21998[1] = 4);
} else
{var statearr_21976_21999 = state_21965__$1;(statearr_21976_21999[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21966 === 11))
{var inst_21954 = (state_21965[2]);var state_21965__$1 = state_21965;var statearr_21977_22000 = state_21965__$1;(statearr_21977_22000[2] = inst_21954);
(statearr_21977_22000[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21966 === 9))
{var state_21965__$1 = state_21965;var statearr_21978_22001 = state_21965__$1;(statearr_21978_22001[2] = null);
(statearr_21978_22001[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21966 === 5))
{var state_21965__$1 = state_21965;var statearr_21979_22002 = state_21965__$1;(statearr_21979_22002[2] = null);
(statearr_21979_22002[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21966 === 10))
{var inst_21957 = (state_21965[2]);var state_21965__$1 = (function (){var statearr_21980 = state_21965;(statearr_21980[9] = inst_21957);
return statearr_21980;
})();var statearr_21981_22003 = state_21965__$1;(statearr_21981_22003[2] = null);
(statearr_21981_22003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21966 === 8))
{var inst_21936 = (state_21965[7]);var inst_21952 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(inst_21936);var state_21965__$1 = state_21965;var G__21982_22004 = inst_21952;if(cljs.core._EQ_.call(null,"mouseup",G__21982_22004))
{var statearr_21983_22005 = state_21965__$1;(statearr_21983_22005[1] = 13);
} else
{if(cljs.core._EQ_.call(null,"mousemove",G__21982_22004))
{var statearr_21984_22006 = state_21965__$1;(statearr_21984_22006[1] = 12);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_21952)].join('')));
} else
{}
}
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
});})(c__10498__auto__,mouse_chan,___$1))
;return ((function (switch__10434__auto__,c__10498__auto__,mouse_chan,___$1){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_21988 = [null,null,null,null,null,null,null,null,null,null];(statearr_21988[0] = state_machine__10435__auto__);
(statearr_21988[1] = 1);
return statearr_21988;
});
var state_machine__10435__auto____1 = (function (state_21965){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_21965);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e21989){if((e21989 instanceof Object))
{var ex__10438__auto__ = e21989;var statearr_21990_22007 = state_21965;(statearr_21990_22007[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21965);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22008 = state_21965;
state_21965 = G__22008;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_21965){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_21965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__,mouse_chan,___$1))
})();var state__10500__auto__ = (function (){var statearr_21991 = f__10499__auto__.call(null);(statearr_21991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_21991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__,mouse_chan,___$1))
);
return c__10498__auto__;
});
scrubber_examples_devcards.core.t21930.prototype.om$core$IInitState$ = true;
scrubber_examples_devcards.core.t21930.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"capturing","capturing",3767148021),false,new cljs.core.Keyword(null,"start-x","start-x",3411684671),null], null);
});
scrubber_examples_devcards.core.t21930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21932){var self__ = this;
var _21932__$1 = this;return self__.meta21931;
});
scrubber_examples_devcards.core.t21930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21932,meta21931__$1){var self__ = this;
var _21932__$1 = this;return (new scrubber_examples_devcards.core.t21930(self__.owner,self__.app,self__.scrubbing_int_app_event_view_2,meta21931__$1));
});
scrubber_examples_devcards.core.__GT_t21930 = (function __GT_t21930(owner__$1,app__$1,scrubbing_int_app_event_view_2__$1,meta21931){return (new scrubber_examples_devcards.core.t21930(owner__$1,app__$1,scrubbing_int_app_event_view_2__$1,meta21931));
});
}
return (new scrubber_examples_devcards.core.t21930(owner,app,scrubbing_int_app_event_view_2,null));
});
devcards.core.register_card.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scrubber_examples_devcards.core","scrubber_examples_devcards.core",2611876410),new cljs.core.Keyword(null,"om-int-app-event-scrubber-2","om-int-app-event-scrubber-2",1300810883)], null),devcards.system.get_options.call(null,devcards.core.om_root_card.call(null,scrubber_examples_devcards.core.scrubbing_int_app_event_view_2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my-val","my-val",4247684850),0], null))),(function (){return devcards.core.om_root_card.call(null,scrubber_examples_devcards.core.scrubbing_int_app_event_view_2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my-val","my-val",4247684850),0], null));
}));

//# sourceMappingURL=core.js.map