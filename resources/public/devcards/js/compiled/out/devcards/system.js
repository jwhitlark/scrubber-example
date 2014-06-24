// Compiled by ClojureScript 0.0-2202
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('jayq.core');
goog.require('clojure.set');
goog.require('frontier.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('crate.core');
goog.require('crate.core');
goog.require('jayq.core');
goog.require('frontier.core');
devcards.system.devcards_app_element_id = "devcards-main";
devcards.system.devcards_controls_element_id = "devcards-controls";
devcards.system.devcards_cards_element_id = "devcards-cards";
devcards.system.get_element_by_id = (function get_element_by_id(id){return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards_app_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.devcards_controls_node = (function devcards_controls_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_controls_element_id);
});
devcards.system.devcards_cards_node = (function devcards_cards_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_cards_element_id);
});
devcards.system.unique_card_id = (function unique_card_id(path){return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){return [cljs.core.str("["),cljs.core.str(x),cljs.core.str("]")].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",1006488231),path))));
});
devcards.system.unique_card_id__GT_path = (function unique_card_id__GT_path(card_id){return cljs.core.mapv.call(null,cljs.core.keyword,cljs.core.rest.call(null,clojure.string.split.call(null,cljs.core.subs.call(null,card_id,1,(cljs.core.count.call(null,card_id) - 1)),/\].\[/)));
});
devcards.system.current_page = (function current_page(data){var and__7857__auto__ = new cljs.core.Keyword(null,"current-path","current-path",2436513643).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__7857__auto__))
{var and__7857__auto____$1 = new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__7857__auto____$1))
{return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",2436513643).cljs$core$IFn$_invoke$arity$1(data));
} else
{return and__7857__auto____$1;
}
} else
{return and__7857__auto__;
}
});
devcards.system.IMount = (function (){var obj19527 = {};return obj19527;
})();
devcards.system.mount = (function mount(o,data){if((function (){var and__7857__auto__ = o;if(and__7857__auto__)
{return o.devcards$system$IMount$mount$arity$2;
} else
{return and__7857__auto__;
}
})())
{return o.devcards$system$IMount$mount$arity$2(o,data);
} else
{var x__8496__auto__ = (((o == null))?null:o);return (function (){var or__7869__auto__ = (devcards.system.mount[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (devcards.system.mount["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMount.mount",o);
}
}
})().call(null,o,data);
}
});
devcards.system.IUnMount = (function (){var obj19529 = {};return obj19529;
})();
devcards.system.unmount = (function unmount(o,data){if((function (){var and__7857__auto__ = o;if(and__7857__auto__)
{return o.devcards$system$IUnMount$unmount$arity$2;
} else
{return and__7857__auto__;
}
})())
{return o.devcards$system$IUnMount$unmount$arity$2(o,data);
} else
{var x__8496__auto__ = (((o == null))?null:o);return (function (){var or__7869__auto__ = (devcards.system.unmount[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (devcards.system.unmount["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnMount.unmount",o);
}
}
})().call(null,o,data);
}
});
devcards.system.IConfig = (function (){var obj19531 = {};return obj19531;
})();
devcards.system._options = (function _options(o){if((function (){var and__7857__auto__ = o;if(and__7857__auto__)
{return o.devcards$system$IConfig$_options$arity$1;
} else
{return and__7857__auto__;
}
})())
{return o.devcards$system$IConfig$_options$arity$1(o);
} else
{var x__8496__auto__ = (((o == null))?null:o);return (function (){var or__7869__auto__ = (devcards.system._options[goog.typeOf(x__8496__auto__)]);if(or__7869__auto__)
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = (devcards.system._options["_"]);if(or__7869__auto____$1)
{return or__7869__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConfig.-options",o);
}
}
})().call(null,o);
}
});
devcards.system.default_card_options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"heading","heading",1809215860),true,new cljs.core.Keyword(null,"padding","padding",4502531971),true,new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876),true,new cljs.core.Keyword(null,"hidden","hidden",4091384092),false], null);
devcards.system.get_options = (function get_options(card){return cljs.core.merge.call(null,devcards.system.default_card_options,(function (){var or__7869__auto__ = (function (){var and__7857__auto__ = (function (){var G__19539 = card;if(G__19539)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__19539.devcards$system$IConfig$;
}
})()))
{return true;
} else
{if((!G__19539.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IConfig,G__19539);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IConfig,G__19539);
}
})();if(and__7857__auto__)
{return devcards.system._options.call(null,card);
} else
{return and__7857__auto__;
}
})();if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});

/**
* @constructor
* @param {*} path
* @param {*} options
* @param {*} func
* @param {*} position
* @param {*} data_atom
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.DevCard = (function (path,options,func,position,data_atom,__meta,__extmap){
this.path = path;
this.options = options;
this.func = func;
this.position = position;
this.data_atom = data_atom;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.DevCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8455__auto__,k__8456__auto__){var self__ = this;
var this__8455__auto____$1 = this;return cljs.core._lookup.call(null,this__8455__auto____$1,k__8456__auto__,null);
});
devcards.system.DevCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8457__auto__,k19541,else__8458__auto__){var self__ = this;
var this__8457__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k19541,new cljs.core.Keyword(null,"path","path",1017337751)))
{return self__.path;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19541,new cljs.core.Keyword(null,"options","options",4059396624)))
{return self__.options;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19541,new cljs.core.Keyword(null,"func","func",1017058870)))
{return self__.func;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19541,new cljs.core.Keyword(null,"position","position",1761709211)))
{return self__.position;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19541,new cljs.core.Keyword(null,"data-atom","data-atom",603797766)))
{return self__.data_atom;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k19541,else__8458__auto__);
} else
{return null;
}
}
}
}
}
}
});
devcards.system.DevCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8469__auto__,writer__8470__auto__,opts__8471__auto__){var self__ = this;
var this__8469__auto____$1 = this;var pr_pair__8472__auto__ = ((function (this__8469__auto____$1){
return (function (keyval__8473__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,cljs.core.pr_writer,""," ","",opts__8471__auto__,keyval__8473__auto__);
});})(this__8469__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,pr_pair__8472__auto__,"#devcards.system.DevCard{",", ","}",opts__8471__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",1017337751),self__.path],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",1017058870),self__.func],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"position","position",1761709211),self__.position],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-atom","data-atom",603797766),self__.data_atom],null))], null),self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8453__auto__){var self__ = this;
var this__8453__auto____$1 = this;return self__.__meta;
});
devcards.system.DevCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8449__auto__){var self__ = this;
var this__8449__auto____$1 = this;return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.DevCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8459__auto__){var self__ = this;
var this__8459__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8450__auto__){var self__ = this;
var this__8450__auto____$1 = this;var h__8280__auto__ = self__.__hash;if(!((h__8280__auto__ == null)))
{return h__8280__auto__;
} else
{var h__8280__auto____$1 = cljs.core.hash_imap.call(null,this__8450__auto____$1);self__.__hash = h__8280__auto____$1;
return h__8280__auto____$1;
}
});
devcards.system.DevCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8451__auto__,other__8452__auto__){var self__ = this;
var this__8451__auto____$1 = this;if(cljs.core.truth_((function (){var and__7857__auto__ = other__8452__auto__;if(cljs.core.truth_(and__7857__auto__))
{return ((this__8451__auto____$1.constructor === other__8452__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8451__auto____$1,other__8452__auto__));
} else
{return and__7857__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.system.DevCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8464__auto__,k__8465__auto__){var self__ = this;
var this__8464__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",1017337751),null,new cljs.core.Keyword(null,"func","func",1017058870),null,new cljs.core.Keyword(null,"position","position",1761709211),null,new cljs.core.Keyword(null,"options","options",4059396624),null,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),null], null), null),k__8465__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8464__auto____$1),self__.__meta),k__8465__auto__);
} else
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8465__auto__)),null));
}
});
devcards.system.DevCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8462__auto__,k__8463__auto__,G__19540){var self__ = this;
var this__8462__auto____$1 = this;var pred__19543 = cljs.core.keyword_identical_QMARK_;var expr__19544 = k__8463__auto__;if(cljs.core.truth_(pred__19543.call(null,new cljs.core.Keyword(null,"path","path",1017337751),expr__19544)))
{return (new devcards.system.DevCard(G__19540,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19543.call(null,new cljs.core.Keyword(null,"options","options",4059396624),expr__19544)))
{return (new devcards.system.DevCard(self__.path,G__19540,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19543.call(null,new cljs.core.Keyword(null,"func","func",1017058870),expr__19544)))
{return (new devcards.system.DevCard(self__.path,self__.options,G__19540,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19543.call(null,new cljs.core.Keyword(null,"position","position",1761709211),expr__19544)))
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,G__19540,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19543.call(null,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),expr__19544)))
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,G__19540,self__.__meta,self__.__extmap,null));
} else
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8463__auto__,G__19540),null));
}
}
}
}
}
});
devcards.system.DevCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8467__auto__){var self__ = this;
var this__8467__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",1017337751),self__.path],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",1017058870),self__.func],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"position","position",1761709211),self__.position],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-atom","data-atom",603797766),self__.data_atom],null))], null),self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8454__auto__,G__19540){var self__ = this;
var this__8454__auto____$1 = this;return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,G__19540,self__.__extmap,self__.__hash));
});
devcards.system.DevCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8460__auto__,entry__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8461__auto__))
{return cljs.core._assoc.call(null,this__8460__auto____$1,cljs.core._nth.call(null,entry__8461__auto__,0),cljs.core._nth.call(null,entry__8461__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8460__auto____$1,entry__8461__auto__);
}
});
devcards.system.DevCard.cljs$lang$type = true;
devcards.system.DevCard.cljs$lang$ctorPrSeq = (function (this__8489__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/DevCard");
});
devcards.system.DevCard.cljs$lang$ctorPrWriter = (function (this__8489__auto__,writer__8490__auto__){return cljs.core._write.call(null,writer__8490__auto__,"devcards.system/DevCard");
});
devcards.system.__GT_DevCard = (function __GT_DevCard(path,options,func,position,data_atom){return (new devcards.system.DevCard(path,options,func,position,data_atom));
});
devcards.system.map__GT_DevCard = (function map__GT_DevCard(G__19542){return (new devcards.system.DevCard(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(G__19542),new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(G__19542),new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(G__19542),new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(G__19542),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(G__19542),null,cljs.core.dissoc.call(null,G__19542,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"func","func",1017058870),new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.Keyword(null,"data-atom","data-atom",603797766))));
});
devcards.system.devcard_QMARK_ = (function devcard_QMARK_(d){var and__7857__auto__ = cljs.core.map_QMARK_.call(null,d);if(and__7857__auto__)
{var and__7857__auto____$1 = new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7857__auto____$1))
{var and__7857__auto____$2 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7857__auto____$2))
{var and__7857__auto____$3 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7857__auto____$3))
{var and__7857__auto____$4 = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7857__auto____$4))
{return d;
} else
{return and__7857__auto____$4;
}
} else
{return and__7857__auto____$3;
}
} else
{return and__7857__auto____$2;
}
} else
{return and__7857__auto____$1;
}
} else
{return and__7857__auto__;
}
});
devcards.system.ifilter = (function (){var method_table__8727__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8728__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8731__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("ifilter",cljs.core.first,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8731__auto__,method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__));
})();
cljs.core._add_method.call(null,devcards.system.ifilter,new cljs.core.Keyword(null,"default","default",2558708147),(function (msg,state){return msg;
}));
cljs.core._add_method.call(null,devcards.system.ifilter,new cljs.core.Keyword(null,"set-current-path","set-current-path",2665043702),(function (p__19546,state){var vec__19547 = p__19546;var _ = cljs.core.nth.call(null,vec__19547,0,null);var map__19548 = cljs.core.nth.call(null,vec__19547,1,null);var map__19548__$1 = ((cljs.core.seq_QMARK_.call(null,map__19548))?cljs.core.apply.call(null,cljs.core.hash_map,map__19548):map__19548);var path = cljs.core.get.call(null,map__19548__$1,new cljs.core.Keyword(null,"path","path",1017337751));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,path,":::")))], null)], null);
}));
devcards.system.dev_trans = (function (){var method_table__8727__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8728__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8731__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dev-trans",cljs.core.first,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8731__auto__,method_table__8727__auto__,prefer_table__8728__auto__,method_cache__8729__auto__,cached_hierarchy__8730__auto__));
})();
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",2558708147),(function (msg,state){return state;
}));
devcards.system.map_vals = (function map_vals(f,h_map){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19551){var vec__19552 = p__19551;var k = cljs.core.nth.call(null,vec__19552,0,null);var v = cljs.core.nth.call(null,vec__19552,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
}),h_map));
});
devcards.system.map_all_cards_in_ns = (function map_all_cards_in_ns(f,state,ns){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",1108335317),ns], null),(function (p1__19553_SHARP_){return devcards.system.map_vals.call(null,f,p1__19553_SHARP_);
}));
});
devcards.system.mark_card = (function mark_card(card){return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093),true);
});
devcards.system.remove_mark_from_card = (function remove_mark_from_card(card){return cljs.core.dissoc.call(null,card,new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093));
});
devcards.system.set_card_to_be_deleted = (function set_card_to_be_deleted(card){if(cljs.core.truth_(new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093).cljs$core$IFn$_invoke$arity$1(card)))
{return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012),true);
} else
{return card;
}
});
devcards.system.set_deleted_and_remove_marks_in_ns = (function set_deleted_and_remove_marks_in_ns(state,ns){return devcards.system.map_all_cards_in_ns.call(null,cljs.core.comp.call(null,devcards.system.remove_mark_from_card,devcards.system.set_card_to_be_deleted),state,ns);
});
devcards.system.card_namespaces_being_reloaded = (function card_namespaces_being_reloaded(state,files){return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,new cljs.core.Keyword(null,"namespace","namespace",2266122445)),files)),cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(state))));
});
devcards.system.mark_all_cards = (function mark_all_cards(state,files){return cljs.core.reduce.call(null,cljs.core.partial.call(null,devcards.system.map_all_cards_in_ns,devcards.system.mark_card),state,devcards.system.card_namespaces_being_reloaded.call(null,state,files));
});
devcards.system.remove_deleted_cards = (function remove_deleted_cards(card_map){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__19556){var vec__19557 = p__19556;var k = cljs.core.nth.call(null,vec__19557,0,null);var v = cljs.core.nth.call(null,vec__19557,1,null);return cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(v));
}),card_map));
});
devcards.system.remove_deleted_cards_in_ns = (function remove_deleted_cards_in_ns(state,ns){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",1108335317),ns], null),devcards.system.remove_deleted_cards);
});
devcards.system.sweep_ns = (function sweep_ns(state,ns){return devcards.system.set_deleted_and_remove_marks_in_ns.call(null,devcards.system.remove_deleted_cards_in_ns.call(null,state,ns),ns);
});
devcards.system.sweep = (function sweep(state,files){return cljs.core.reduce.call(null,devcards.system.sweep_ns,state,cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(state))));
});
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),(function (p__19558,state){var vec__19559 = p__19558;var _ = cljs.core.nth.call(null,vec__19559,0,null);var files = cljs.core.nth.call(null,vec__19559,1,null);return devcards.system.mark_all_cards.call(null,state,files);
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"jsreload","jsreload",3412240276),(function (p__19560,state){var vec__19561 = p__19560;var _ = cljs.core.nth.call(null,vec__19561,0,null);var files = cljs.core.nth.call(null,vec__19561,1,null);return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,devcards.system.sweep.call(null,state,files),new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271),new cljs.core.Keyword(null,"js","js",1013907643)),new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"cssload","cssload",2084339931),(function (msg,state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271),new cljs.core.Keyword(null,"css","css",1014003061));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"remove-code-loaded-effect","remove-code-loaded-effect",3939124180),(function (msg,state){return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"compile-fail","compile-fail",1107360234),(function (msg,state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),cljs.core.last.call(null,msg));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",3872264044),(function (p__19562,state){var vec__19563 = p__19562;var _ = cljs.core.nth.call(null,vec__19563,0,null);var map__19564 = cljs.core.nth.call(null,vec__19563,1,null);var map__19564__$1 = ((cljs.core.seq_QMARK_.call(null,map__19564))?cljs.core.apply.call(null,cljs.core.hash_map,map__19564):map__19564);var func = cljs.core.get.call(null,map__19564__$1,new cljs.core.Keyword(null,"func","func",1017058870));var options = cljs.core.get.call(null,map__19564__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__19564__$1,new cljs.core.Keyword(null,"path","path",1017337751));var position = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(state);return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),path),((function (position,vec__19563,_,map__19564,map__19564__$1,func,options,path){
return (function (dc){if(cljs.core.truth_(dc))
{return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,dc,new cljs.core.Keyword(null,"options","options",4059396624),cljs.core.merge.call(null,devcards.system.default_card_options,options),new cljs.core.Keyword(null,"position","position",1761709211),position,new cljs.core.Keyword(null,"func","func",1017058870),func),new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093)),new cljs.core.Keyword(null,"delete-card","delete-card",4140359012));
} else
{return (new devcards.system.DevCard(path,cljs.core.merge.call(null,devcards.system.default_card_options,options),func,position,cljs.core.atom.call(null,(function (){var or__7869__auto__ = new cljs.core.Keyword(null,"initial-state","initial-state",4067401786).cljs$core$IFn$_invoke$arity$1(options);if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})())));
}
});})(position,vec__19563,_,map__19564,map__19564__$1,func,options,path))
);
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"add-to-current-path","add-to-current-path",4368567377),(function (p__19565,state){var vec__19566 = p__19565;var _ = cljs.core.nth.call(null,vec__19566,0,null);var map__19567 = cljs.core.nth.call(null,vec__19566,1,null);var map__19567__$1 = ((cljs.core.seq_QMARK_.call(null,map__19567))?cljs.core.apply.call(null,cljs.core.hash_map,map__19567):map__19567);var path = cljs.core.get.call(null,map__19567__$1,new cljs.core.Keyword(null,"path","path",1017337751));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",2436513643)], null),((function (vec__19566,_,map__19567,map__19567__$1,path){
return (function (x){return cljs.core.conj.call(null,x,cljs.core.keyword.call(null,path));
});})(vec__19566,_,map__19567,map__19567__$1,path))
);
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"current-path","current-path",2436513643),(function (p__19568,state){var vec__19569 = p__19568;var _ = cljs.core.nth.call(null,vec__19569,0,null);var map__19570 = cljs.core.nth.call(null,vec__19569,1,null);var map__19570__$1 = ((cljs.core.seq_QMARK_.call(null,map__19570))?cljs.core.apply.call(null,cljs.core.hash_map,map__19570):map__19570);var path = cljs.core.get.call(null,map__19570__$1,new cljs.core.Keyword(null,"path","path",1017337751));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",2436513643),cljs.core.vec.call(null,path));
}));
devcards.system.visible_cards = (function visible_cards(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721),devcards.system.visible_card_nodes.call(null,state));
});
devcards.system.display_current_cards = (function display_current_cards(state){var cur = devcards.system.current_page.call(null,state);if(cljs.core.truth_(devcards.system.devcard_QMARK_.call(null,cur)))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988),cur);
} else
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"display-dir-paths","display-dir-paths",3029188565),cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur)),new cljs.core.Keyword(null,"display-cards","display-cards",2395336202),cljs.core.filter.call(null,cljs.core.comp.call(null,((function (cur){
return (function (p1__19571_SHARP_){var and__7857__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(p1__19571_SHARP_));if(and__7857__auto__)
{return devcards.system.devcard_QMARK_.call(null,p1__19571_SHARP_);
} else
{return and__7857__auto__;
}
});})(cur))
,cljs.core.second),cur));
}
});
devcards.system.render_cards_QMARK_ = (function render_cards_QMARK_(state){var visible_cards = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.first),new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(state)));var intended_cards = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(state)], null),cljs.core.vals.call(null,new cljs.core.Keyword(null,"display-cards","display-cards",2395336202).cljs$core$IFn$_invoke$arity$1(state)))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"render-cards","render-cards",651634654),cljs.core.not_EQ_.call(null,visible_cards,intended_cards));
});
devcards.system.breadcrumbs = (function breadcrumbs(p__19572){var map__19574 = p__19572;var map__19574__$1 = ((cljs.core.seq_QMARK_.call(null,map__19574))?cljs.core.apply.call(null,cljs.core.hash_map,map__19574):map__19574);var state = map__19574__$1;var current_path = cljs.core.get.call(null,map__19574__$1,new cljs.core.Keyword(null,"current-path","current-path",2436513643));var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"home","home",1017112657),current_path));var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,((function (cpath,map__19574,map__19574__$1,state,current_path){
return (function (i,v){return cljs.core.subvec.call(null,v,0,i);
});})(cpath,map__19574,map__19574__$1,state,current_path))
,cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + 1),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"breadcrumbs","breadcrumbs",962446402),crumbs);
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.DevCards = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.DevCards.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8455__auto__,k__8456__auto__){var self__ = this;
var this__8455__auto____$1 = this;return cljs.core._lookup.call(null,this__8455__auto____$1,k__8456__auto__,null);
});
devcards.system.DevCards.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8457__auto__,k19576,else__8458__auto__){var self__ = this;
var this__8457__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k19576,else__8458__auto__);
} else
{return null;
}
});
devcards.system.DevCards.prototype.frontier$core$IInputFilter$ = true;
devcards.system.DevCards.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = (function (o,msg,state){var self__ = this;
var o__$1 = this;return devcards.system.ifilter.call(null,msg,state);
});
devcards.system.DevCards.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8469__auto__,writer__8470__auto__,opts__8471__auto__){var self__ = this;
var this__8469__auto____$1 = this;var pr_pair__8472__auto__ = ((function (this__8469__auto____$1){
return (function (keyval__8473__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,cljs.core.pr_writer,""," ","",opts__8471__auto__,keyval__8473__auto__);
});})(this__8469__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,pr_pair__8472__auto__,"#devcards.system.DevCards{",", ","}",opts__8471__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.DevCards.prototype.frontier$core$IDerive$ = true;
devcards.system.DevCards.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){var self__ = this;
var o__$1 = this;return devcards.system.breadcrumbs.call(null,devcards.system.render_cards_QMARK_.call(null,devcards.system.display_current_cards.call(null,devcards.system.visible_cards.call(null,state))));
});
devcards.system.DevCards.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8453__auto__){var self__ = this;
var this__8453__auto____$1 = this;return self__.__meta;
});
devcards.system.DevCards.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8449__auto__){var self__ = this;
var this__8449__auto____$1 = this;return (new devcards.system.DevCards(self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.DevCards.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8459__auto__){var self__ = this;
var this__8459__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.DevCards.prototype.frontier$core$ITransform$ = true;
devcards.system.DevCards.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,msg,state){var self__ = this;
var o__$1 = this;return devcards.system.dev_trans.call(null,msg,state);
});
devcards.system.DevCards.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8450__auto__){var self__ = this;
var this__8450__auto____$1 = this;var h__8280__auto__ = self__.__hash;if(!((h__8280__auto__ == null)))
{return h__8280__auto__;
} else
{var h__8280__auto____$1 = cljs.core.hash_imap.call(null,this__8450__auto____$1);self__.__hash = h__8280__auto____$1;
return h__8280__auto____$1;
}
});
devcards.system.DevCards.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8451__auto__,other__8452__auto__){var self__ = this;
var this__8451__auto____$1 = this;if(cljs.core.truth_((function (){var and__7857__auto__ = other__8452__auto__;if(cljs.core.truth_(and__7857__auto__))
{return ((this__8451__auto____$1.constructor === other__8452__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8451__auto____$1,other__8452__auto__));
} else
{return and__7857__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.system.DevCards.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8464__auto__,k__8465__auto__){var self__ = this;
var this__8464__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__8465__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8464__auto____$1),self__.__meta),k__8465__auto__);
} else
{return (new devcards.system.DevCards(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8465__auto__)),null));
}
});
devcards.system.DevCards.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8462__auto__,k__8463__auto__,G__19575){var self__ = this;
var this__8462__auto____$1 = this;var pred__19578 = cljs.core.keyword_identical_QMARK_;var expr__19579 = k__8463__auto__;return (new devcards.system.DevCards(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8463__auto__,G__19575),null));
});
devcards.system.DevCards.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8467__auto__){var self__ = this;
var this__8467__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.DevCards.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8454__auto__,G__19575){var self__ = this;
var this__8454__auto____$1 = this;return (new devcards.system.DevCards(G__19575,self__.__extmap,self__.__hash));
});
devcards.system.DevCards.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8460__auto__,entry__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8461__auto__))
{return cljs.core._assoc.call(null,this__8460__auto____$1,cljs.core._nth.call(null,entry__8461__auto__,0),cljs.core._nth.call(null,entry__8461__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8460__auto____$1,entry__8461__auto__);
}
});
devcards.system.DevCards.cljs$lang$type = true;
devcards.system.DevCards.cljs$lang$ctorPrSeq = (function (this__8489__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/DevCards");
});
devcards.system.DevCards.cljs$lang$ctorPrWriter = (function (this__8489__auto__,writer__8490__auto__){return cljs.core._write.call(null,writer__8490__auto__,"devcards.system/DevCards");
});
devcards.system.__GT_DevCards = (function __GT_DevCards(){return (new devcards.system.DevCards());
});
devcards.system.map__GT_DevCards = (function map__GT_DevCards(G__19577){return (new devcards.system.DevCards(null,cljs.core.dissoc.call(null,G__19577)));
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.CurrentPathSessionStorage = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8455__auto__,k__8456__auto__){var self__ = this;
var this__8455__auto____$1 = this;return cljs.core._lookup.call(null,this__8455__auto____$1,k__8456__auto__,null);
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8457__auto__,k19582,else__8458__auto__){var self__ = this;
var this__8457__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k19582,else__8458__auto__);
} else
{return null;
}
});
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IInit$ = true;
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IInit$_initialize$arity$3 = (function (_,state,event_chan){var self__ = this;
var ___$1 = this;var temp__4126__auto__ = sessionStorage.getItem("__devcards__current-path");if(cljs.core.truth_(temp__4126__auto__))
{var current_path = temp__4126__auto__;var temp__4126__auto____$1 = (function (){try{return cljs.reader.read_string.call(null,current_path);
}catch (e19584){if((e19584 instanceof Error))
{var e = e19584;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19584;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4126__auto____$1))
{var path = temp__4126__auto____$1;return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
} else
{return null;
}
} else
{return null;
}
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8469__auto__,writer__8470__auto__,opts__8471__auto__){var self__ = this;
var this__8469__auto____$1 = this;var pr_pair__8472__auto__ = ((function (this__8469__auto____$1){
return (function (keyval__8473__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,cljs.core.pr_writer,""," ","",opts__8471__auto__,keyval__8473__auto__);
});})(this__8469__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8470__auto__,pr_pair__8472__auto__,"#devcards.system.CurrentPathSessionStorage{",", ","}",opts__8471__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IDerive$ = true;
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){var self__ = this;
var o__$1 = this;sessionStorage.setItem("__devcards__current-path",cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"current-path","current-path",2436513643).cljs$core$IFn$_invoke$arity$1(state)));
return state;
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8453__auto__){var self__ = this;
var this__8453__auto____$1 = this;return self__.__meta;
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8449__auto__){var self__ = this;
var this__8449__auto____$1 = this;return (new devcards.system.CurrentPathSessionStorage(self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8459__auto__){var self__ = this;
var this__8459__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8450__auto__){var self__ = this;
var this__8450__auto____$1 = this;var h__8280__auto__ = self__.__hash;if(!((h__8280__auto__ == null)))
{return h__8280__auto__;
} else
{var h__8280__auto____$1 = cljs.core.hash_imap.call(null,this__8450__auto____$1);self__.__hash = h__8280__auto____$1;
return h__8280__auto____$1;
}
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8451__auto__,other__8452__auto__){var self__ = this;
var this__8451__auto____$1 = this;if(cljs.core.truth_((function (){var and__7857__auto__ = other__8452__auto__;if(cljs.core.truth_(and__7857__auto__))
{return ((this__8451__auto____$1.constructor === other__8452__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8451__auto____$1,other__8452__auto__));
} else
{return and__7857__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8464__auto__,k__8465__auto__){var self__ = this;
var this__8464__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__8465__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8464__auto____$1),self__.__meta),k__8465__auto__);
} else
{return (new devcards.system.CurrentPathSessionStorage(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8465__auto__)),null));
}
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8462__auto__,k__8463__auto__,G__19581){var self__ = this;
var this__8462__auto____$1 = this;var pred__19585 = cljs.core.keyword_identical_QMARK_;var expr__19586 = k__8463__auto__;return (new devcards.system.CurrentPathSessionStorage(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8463__auto__,G__19581),null));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8467__auto__){var self__ = this;
var this__8467__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8454__auto__,G__19581){var self__ = this;
var this__8454__auto____$1 = this;return (new devcards.system.CurrentPathSessionStorage(G__19581,self__.__extmap,self__.__hash));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8460__auto__,entry__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8461__auto__))
{return cljs.core._assoc.call(null,this__8460__auto____$1,cljs.core._nth.call(null,entry__8461__auto__,0),cljs.core._nth.call(null,entry__8461__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8460__auto____$1,entry__8461__auto__);
}
});
devcards.system.CurrentPathSessionStorage.cljs$lang$type = true;
devcards.system.CurrentPathSessionStorage.cljs$lang$ctorPrSeq = (function (this__8489__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/CurrentPathSessionStorage");
});
devcards.system.CurrentPathSessionStorage.cljs$lang$ctorPrWriter = (function (this__8489__auto__,writer__8490__auto__){return cljs.core._write.call(null,writer__8490__auto__,"devcards.system/CurrentPathSessionStorage");
});
devcards.system.__GT_CurrentPathSessionStorage = (function __GT_CurrentPathSessionStorage(){return (new devcards.system.CurrentPathSessionStorage());
});
devcards.system.map__GT_CurrentPathSessionStorage = (function map__GT_CurrentPathSessionStorage(G__19583){return (new devcards.system.CurrentPathSessionStorage(null,cljs.core.dissoc.call(null,G__19583)));
});
devcards.system.naked_card = (function naked_card(p__19588){var map__19590 = p__19588;var map__19590__$1 = ((cljs.core.seq_QMARK_.call(null,map__19590))?cljs.core.apply.call(null,cljs.core.hash_map,map__19590):map__19590);var options = cljs.core.get.call(null,map__19590__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__19590__$1,new cljs.core.Keyword(null,"path","path",1017337751));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.unique_card_id.call(null,path),new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("devcard-rendered-card"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"padding","padding",4502531971).cljs$core$IFn$_invoke$arity$1(options))?" devcard-padding":""))].join('')], null)], null);
});
devcards.system.card_template = (function card_template(p__19591){var map__19593 = p__19591;var map__19593__$1 = ((cljs.core.seq_QMARK_.call(null,map__19593))?cljs.core.apply.call(null,cljs.core.hash_map,map__19593):map__19593);var card = map__19593__$1;var options = cljs.core.get.call(null,map__19593__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__19593__$1,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092).cljs$core$IFn$_invoke$arity$1(options)))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"heading","heading",1809215860).cljs$core$IFn$_invoke$arity$1(options)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default.devcard-panel","div.panel.panel-default.devcard-panel",1439351633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading.devcards-set-current-path","div.panel-heading.devcards-set-current-path",3498842019),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-path","data-path",604226522),clojure.string.join.call(null,":::",cljs.core.map.call(null,cljs.core.name,path))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-title","span.panel-title",1574285341),cljs.core.name.call(null,cljs.core.last.call(null,path))," "], null)], null),devcards.system.naked_card.call(null,card)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default.devcard-panel","div.panel.panel-default.devcard-panel",1439351633),devcards.system.naked_card.call(null,card)], null);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956)], null);
}
});
devcards.system.display_cards = (function display_cards(cards){return cljs.core.map.call(null,cljs.core.comp.call(null,devcards.system.card_template,cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",1761709211),cljs.core.second),cards));
});
devcards.system.dir_links = (function dir_links(dirs){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group","div.list-group",1811678591),cljs.core.map.call(null,(function (p__19596){var vec__19597 = p__19596;var key = cljs.core.nth.call(null,vec__19597,0,null);var child_tree = cljs.core.nth.call(null,vec__19597,1,null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.devcards-add-to-current-path","a.list-group-item.devcards-add-to-current-path",2958249949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-path","data-path",604226522),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-folder-close","span.glyphicon.glyphicon-folder-close",1033290496)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",1118720881),cljs.core.count.call(null,child_tree)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956)," ",cljs.core.name.call(null,key)], null)], null);
}),cljs.core.reverse.call(null,dirs))], null);
});
devcards.system.breadcrumbs_templ = (function breadcrumbs_templ(crumbs){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.breadcrumb.devcards-breadcrumb","ol.breadcrumb.devcards-breadcrumb",4620418554),cljs.core.map.call(null,(function (p__19600){var vec__19601 = p__19600;var n = cljs.core.nth.call(null,vec__19601,0,null);var path = cljs.core.nth.call(null,vec__19601,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.devcards-set-current-path","a.devcards-set-current-path",2980456232),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"data-path","data-path",604226522),clojure.string.join.call(null,":::",path)], null),n], null)], null);
}),crumbs)], null);
});
devcards.system.main_template = (function main_template(data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-default.navbar-static-top.devards-main-navbar","div.navbar.navbar-default.navbar-static-top.devards-main-navbar",580178330),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",1151360959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",4283020137),"(:devcards ClojureScript)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",1688702431),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"breadcrumbs","breadcrumbs",962446402).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var crumbs = temp__4126__auto__;return devcards.system.breadcrumbs_templ.call(null,crumbs);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-dir-paths","display-dir-paths",3029188565).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var dir_paths = temp__4126__auto__;return devcards.system.dir_links.call(null,dir_paths);
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1688702425)], null)], null)], null)], null);
});
devcards.system.cards_templates = (function cards_templates(data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",1688702431),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-cards","display-cards",2395336202).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var cards = temp__4126__auto__;return devcards.system.display_cards.call(null,cards);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var card = temp__4126__auto__;return devcards.system.naked_card.call(null,card);
} else
{return null;
}
})()], null)], null)], null);
});
devcards.system.to_node = (function to_node(jq){return (jq.get()[0]);
});
devcards.system.sel_nodes = (function sel_nodes(sel){return cljs.core.mapv.call(null,devcards.system.to_node,jayq.core.$.call(null,sel));
});
devcards.system.visible_card_paths = (function visible_card_paths(){var card_nodes = devcards.system.sel_nodes.call(null,".devcard-rendered-card");return cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,((function (card_nodes){
return (function (p1__19602_SHARP_){return devcards.system.unique_card_id__GT_path.call(null,p1__19602_SHARP_.id);
});})(card_nodes))
,card_nodes));
});
devcards.system.visible_card_nodes = (function visible_card_nodes(data){var card_nodes = devcards.system.sel_nodes.call(null,".devcard-rendered-card");return cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.juxt.call(null,((function (card_nodes){
return (function (p1__19603_SHARP_){return cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,p1__19603_SHARP_.id)));
});})(card_nodes))
,cljs.core.identity),card_nodes));
});
devcards.system.toggle_background_to_white = (function toggle_background_to_white(data){if(cljs.core.truth_(new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(data)))
{return $("body").addClass("devcards-white-background");
} else
{return $("body").removeClass("devcards-white-background");
}
});
devcards.system.compile_failure = (function compile_failure(state){if(cljs.core.truth_(new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569).cljs$core$IFn$_invoke$arity$1(state)))
{return $(devcards.system.devcards_app_node.call(null)).addClass("devcards-compile-failed");
} else
{return $(devcards.system.devcards_app_node.call(null)).removeClass("devcards-compile-failed");
}
});
devcards.system.code_loaded_class = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js","js",1013907643),"devcards-load-highlight",new cljs.core.Keyword(null,"css","css",1014003061),"devcards-cssload-highlight"], null);
devcards.system.code_loaded = (function code_loaded(state,event_chan){var temp__4126__auto__ = devcards.system.code_loaded_class.call(null,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271).cljs$core$IFn$_invoke$arity$1(state));if(cljs.core.truth_(temp__4126__auto__))
{var class$ = temp__4126__auto__;$(devcards.system.devcards_app_node.call(null)).addClass(class$);
var c__10498__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto__,class$,temp__4126__auto__){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto__,class$,temp__4126__auto__){
return (function (state_19634){var state_val_19635 = (state_19634[1]);if((state_val_19635 === 2))
{var inst_19626 = (state_19634[2]);var inst_19627 = devcards.system.devcards_app_node.call(null);var inst_19628 = $(inst_19627);var inst_19629 = inst_19628.removeClass(class$);var inst_19630 = [new cljs.core.Keyword(null,"remove-code-loaded-effect","remove-code-loaded-effect",3939124180)];var inst_19631 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19630,null));var inst_19632 = cljs.core.async.put_BANG_.call(null,event_chan,inst_19631);var state_19634__$1 = (function (){var statearr_19636 = state_19634;(statearr_19636[7] = inst_19626);
(statearr_19636[8] = inst_19629);
return statearr_19636;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19634__$1,inst_19632);
} else
{if((state_val_19635 === 1))
{var inst_19624 = cljs.core.async.timeout.call(null,1400);var state_19634__$1 = state_19634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19634__$1,2,inst_19624);
} else
{return null;
}
}
});})(c__10498__auto__,class$,temp__4126__auto__))
;return ((function (switch__10434__auto__,c__10498__auto__,class$,temp__4126__auto__){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_19640 = [null,null,null,null,null,null,null,null,null];(statearr_19640[0] = state_machine__10435__auto__);
(statearr_19640[1] = 1);
return statearr_19640;
});
var state_machine__10435__auto____1 = (function (state_19634){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_19634);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e19641){if((e19641 instanceof Object))
{var ex__10438__auto__ = e19641;var statearr_19642_19644 = state_19634;(statearr_19642_19644[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19645 = state_19634;
state_19634 = G__19645;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_19634){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_19634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto__,class$,temp__4126__auto__))
})();var state__10500__auto__ = (function (){var statearr_19643 = f__10499__auto__.call(null);(statearr_19643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto__);
return statearr_19643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto__,class$,temp__4126__auto__))
);
return c__10498__auto__;
} else
{return null;
}
});
devcards.system.create_needed_card_nodes = (function create_needed_card_nodes(data){if(cljs.core.truth_(new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data)))
{return jayq.core.$.call(null,devcards.system.devcards_cards_node.call(null)).html(crate.core.html.call(null,devcards.system.cards_templates.call(null,data)));
} else
{return null;
}
});
devcards.system.unmount_card_nodes = (function unmount_card_nodes(data){var seq__19656 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(data));var chunk__19657 = null;var count__19658 = 0;var i__19659 = 0;while(true){
if((i__19659 < count__19658))
{var vec__19660 = cljs.core._nth.call(null,chunk__19657,i__19659);var card = cljs.core.nth.call(null,vec__19660,0,null);var node = cljs.core.nth.call(null,vec__19660,1,null);var temp__4126__auto___19666 = cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,node.id)));if(cljs.core.truth_(temp__4126__auto___19666))
{var card_19667__$1 = temp__4126__auto___19666;var functionality_19668 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card_19667__$1).call(null);if(cljs.core.truth_((function (){var and__7857__auto__ = (function (){var G__19662 = functionality_19668;if(G__19662)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__19662.devcards$system$IUnMount$;
}
})()))
{return true;
} else
{if((!G__19662.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__19662);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__19662);
}
})();if(and__7857__auto__)
{var or__7869__auto__ = new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(card_19667__$1));if(cljs.core.truth_(or__7869__auto____$1))
{return or__7869__auto____$1;
} else
{return new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card_19667__$1);
}
}
} else
{return and__7857__auto__;
}
})()))
{devcards.system.unmount.call(null,functionality_19668,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card_19667__$1)], null));
} else
{}
} else
{}
{
var G__19669 = seq__19656;
var G__19670 = chunk__19657;
var G__19671 = count__19658;
var G__19672 = (i__19659 + 1);
seq__19656 = G__19669;
chunk__19657 = G__19670;
count__19658 = G__19671;
i__19659 = G__19672;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19656);if(temp__4126__auto__)
{var seq__19656__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19656__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__19656__$1);{
var G__19673 = cljs.core.chunk_rest.call(null,seq__19656__$1);
var G__19674 = c__8617__auto__;
var G__19675 = cljs.core.count.call(null,c__8617__auto__);
var G__19676 = 0;
seq__19656 = G__19673;
chunk__19657 = G__19674;
count__19658 = G__19675;
i__19659 = G__19676;
continue;
}
} else
{var vec__19663 = cljs.core.first.call(null,seq__19656__$1);var card = cljs.core.nth.call(null,vec__19663,0,null);var node = cljs.core.nth.call(null,vec__19663,1,null);var temp__4126__auto___19677__$1 = cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,node.id)));if(cljs.core.truth_(temp__4126__auto___19677__$1))
{var card_19678__$1 = temp__4126__auto___19677__$1;var functionality_19679 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card_19678__$1).call(null);if(cljs.core.truth_((function (){var and__7857__auto__ = (function (){var G__19665 = functionality_19679;if(G__19665)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__19665.devcards$system$IUnMount$;
}
})()))
{return true;
} else
{if((!G__19665.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__19665);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__19665);
}
})();if(and__7857__auto__)
{var or__7869__auto__ = new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{var or__7869__auto____$1 = new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(card_19678__$1));if(cljs.core.truth_(or__7869__auto____$1))
{return or__7869__auto____$1;
} else
{return new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card_19678__$1);
}
}
} else
{return and__7857__auto__;
}
})()))
{devcards.system.unmount.call(null,functionality_19679,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card_19678__$1)], null));
} else
{}
} else
{}
{
var G__19680 = cljs.core.next.call(null,seq__19656__$1);
var G__19681 = null;
var G__19682 = 0;
var G__19683 = 0;
seq__19656 = G__19680;
chunk__19657 = G__19681;
count__19658 = G__19682;
i__19659 = G__19683;
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
devcards.system.mount_card_nodes = (function mount_card_nodes(data){var seq__19692 = cljs.core.seq.call(null,devcards.system.visible_card_nodes.call(null,data));var chunk__19693 = null;var count__19694 = 0;var i__19695 = 0;while(true){
if((i__19695 < count__19694))
{var vec__19696 = cljs.core._nth.call(null,chunk__19693,i__19695);var card = cljs.core.nth.call(null,vec__19696,0,null);var node = cljs.core.nth.call(null,vec__19696,1,null);var functionality_19700 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card).call(null);var arg_19701 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{} else
{if((function (){var G__19697 = functionality_19700;if(G__19697)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__19697.devcards$system$IMount$;
}
})()))
{return true;
} else
{if((!G__19697.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__19697);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__19697);
}
})())
{devcards.system.mount.call(null,functionality_19700,arg_19701);
} else
{cljs.core.apply.call(null,functionality_19700,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_19701], null));
}
}
{
var G__19702 = seq__19692;
var G__19703 = chunk__19693;
var G__19704 = count__19694;
var G__19705 = (i__19695 + 1);
seq__19692 = G__19702;
chunk__19693 = G__19703;
count__19694 = G__19704;
i__19695 = G__19705;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19692);if(temp__4126__auto__)
{var seq__19692__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19692__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__19692__$1);{
var G__19706 = cljs.core.chunk_rest.call(null,seq__19692__$1);
var G__19707 = c__8617__auto__;
var G__19708 = cljs.core.count.call(null,c__8617__auto__);
var G__19709 = 0;
seq__19692 = G__19706;
chunk__19693 = G__19707;
count__19694 = G__19708;
i__19695 = G__19709;
continue;
}
} else
{var vec__19698 = cljs.core.first.call(null,seq__19692__$1);var card = cljs.core.nth.call(null,vec__19698,0,null);var node = cljs.core.nth.call(null,vec__19698,1,null);var functionality_19710 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card).call(null);var arg_19711 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{} else
{if((function (){var G__19699 = functionality_19710;if(G__19699)
{var bit__8519__auto__ = null;if(cljs.core.truth_((function (){var or__7869__auto__ = bit__8519__auto__;if(cljs.core.truth_(or__7869__auto__))
{return or__7869__auto__;
} else
{return G__19699.devcards$system$IMount$;
}
})()))
{return true;
} else
{if((!G__19699.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__19699);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__19699);
}
})())
{devcards.system.mount.call(null,functionality_19710,arg_19711);
} else
{cljs.core.apply.call(null,functionality_19710,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_19711], null));
}
}
{
var G__19712 = cljs.core.next.call(null,seq__19692__$1);
var G__19713 = null;
var G__19714 = 0;
var G__19715 = 0;
seq__19692 = G__19712;
chunk__19693 = G__19713;
count__19694 = G__19714;
i__19695 = G__19715;
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
devcards.system.remove_node = (function remove_node(node){if(cljs.core.truth_(node))
{return node.parentNode.removeChild(node);
} else
{return null;
}
});
devcards.system.remove_card = (function remove_card(card){var temp__4126__auto__ = document.getElementById(devcards.system.unique_card_id.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(card)));if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return devcards.system.remove_node.call(null,node.parentNode);
} else
{return null;
}
});
devcards.system.delete_deleted_card_nodes = (function delete_deleted_card_nodes(data){var seq__19722 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(data));var chunk__19723 = null;var count__19724 = 0;var i__19725 = 0;while(true){
if((i__19725 < count__19724))
{var vec__19726 = cljs.core._nth.call(null,chunk__19723,i__19725);var card = cljs.core.nth.call(null,vec__19726,0,null);var node = cljs.core.nth.call(null,vec__19726,1,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{devcards.system.remove_card.call(null,card);
} else
{}
{
var G__19728 = seq__19722;
var G__19729 = chunk__19723;
var G__19730 = count__19724;
var G__19731 = (i__19725 + 1);
seq__19722 = G__19728;
chunk__19723 = G__19729;
count__19724 = G__19730;
i__19725 = G__19731;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19722);if(temp__4126__auto__)
{var seq__19722__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19722__$1))
{var c__8617__auto__ = cljs.core.chunk_first.call(null,seq__19722__$1);{
var G__19732 = cljs.core.chunk_rest.call(null,seq__19722__$1);
var G__19733 = c__8617__auto__;
var G__19734 = cljs.core.count.call(null,c__8617__auto__);
var G__19735 = 0;
seq__19722 = G__19732;
chunk__19723 = G__19733;
count__19724 = G__19734;
i__19725 = G__19735;
continue;
}
} else
{var vec__19727 = cljs.core.first.call(null,seq__19722__$1);var card = cljs.core.nth.call(null,vec__19727,0,null);var node = cljs.core.nth.call(null,vec__19727,1,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{devcards.system.remove_card.call(null,card);
} else
{}
{
var G__19736 = cljs.core.next.call(null,seq__19722__$1);
var G__19737 = null;
var G__19738 = 0;
var G__19739 = 0;
seq__19722 = G__19736;
chunk__19723 = G__19737;
count__19724 = G__19738;
i__19725 = G__19739;
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
devcards.system.render_base_if_necessary_BANG_ = (function render_base_if_necessary_BANG_(){var temp__4124__auto__ = devcards.system.devcards_app_node.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var devcards_node = temp__4124__auto__;if(cljs.core.truth_(devcards.system.devcards_controls_node.call(null)))
{} else
{devcards_node.appendChild(crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.devcards_controls_element_id], null)], null)));
}
if(cljs.core.truth_(devcards.system.devcards_cards_node.call(null)))
{return null;
} else
{return devcards_node.appendChild(crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.devcards_cards_element_id], null)], null)));
}
} else
{throw (new Error([cljs.core.str("The devcards interface needs an element with an id of \""),cljs.core.str(devcards.system.devcards_app_element_id),cljs.core.str("\"")].join('')));
}
});
devcards.system.devcard_renderer = (function devcard_renderer(p__19740){var map__19742 = p__19740;var map__19742__$1 = ((cljs.core.seq_QMARK_.call(null,map__19742))?cljs.core.apply.call(null,cljs.core.hash_map,map__19742):map__19742);var event_chan = cljs.core.get.call(null,map__19742__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var state = cljs.core.get.call(null,map__19742__$1,new cljs.core.Keyword(null,"state","state",1123661827));devcards.system.unmount_card_nodes.call(null,state);
devcards.system.delete_deleted_card_nodes.call(null,state);
jayq.core.$.call(null,devcards.system.devcards_controls_node.call(null)).html(crate.core.html.call(null,devcards.system.main_template.call(null,state)));
devcards.system.create_needed_card_nodes.call(null,state);
devcards.system.toggle_background_to_white.call(null,state);
devcards.system.compile_failure.call(null,state);
devcards.system.code_loaded.call(null,state,event_chan);
return devcards.system.mount_card_nodes.call(null,state);
});
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",1761709211),0,new cljs.core.Keyword(null,"cards","cards",1108335317),cljs.core.PersistentArrayMap.EMPTY], null);
devcards.system.devcard_comp = frontier.core.compose.call(null,(new devcards.system.DevCards()),(new devcards.system.CurrentPathSessionStorage()));
devcards.system.data_to_message = (function data_to_message(msg_name,event_chan){return (function (e){var t = e.currentTarget;var temp__4126__auto__ = jayq.core.$.call(null,t).data();if(cljs.core.truth_(temp__4126__auto__))
{var data = temp__4126__auto__;return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_name,cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)], null));
} else
{return null;
}
});
});
devcards.system.register_listeners = (function register_listeners(event_chan){jayq.core.$.call(null,devcards.system.devcards_app_node.call(null)).on("click","a.devcards-add-to-current-path",devcards.system.data_to_message.call(null,new cljs.core.Keyword(null,"add-to-current-path","add-to-current-path",4368567377),event_chan));
return jayq.core.$.call(null,devcards.system.devcards_app_node.call(null)).on("click",".devcards-set-current-path",devcards.system.data_to_message.call(null,new cljs.core.Keyword(null,"set-current-path","set-current-path",2665043702),event_chan));
});
devcards.system.devcard_system_start = (function devcard_system_start(event_chan,render_callback){return frontier.core.runner_start.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,frontier.core.make_runnable.call(null,devcards.system.devcard_comp,devcards.system.devcard_initial_data),new cljs.core.Keyword(null,"state-callback","state-callback",2401068403),render_callback),new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),event_chan));
});
devcards.system.throttle_chan = (function throttle_chan(in$,ms){var out = cljs.core.async.chan.call(null);var c__10498__auto___19837 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___19837,out){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___19837,out){
return (function (state_19816){var state_val_19817 = (state_19816[1]);if((state_val_19817 === 7))
{var inst_19793 = (state_19816[7]);var inst_19800 = (state_19816[2]);var inst_19801 = cljs.core.nth.call(null,inst_19800,0,null);var inst_19802 = cljs.core.nth.call(null,inst_19800,1,null);var inst_19803 = cljs.core._EQ_.call(null,inst_19802,inst_19793);var state_19816__$1 = (function (){var statearr_19818 = state_19816;(statearr_19818[8] = inst_19801);
return statearr_19818;
})();if(inst_19803)
{var statearr_19819_19838 = state_19816__$1;(statearr_19819_19838[1] = 8);
} else
{var statearr_19820_19839 = state_19816__$1;(statearr_19820_19839[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19817 === 1))
{var state_19816__$1 = state_19816;var statearr_19821_19840 = state_19816__$1;(statearr_19821_19840[2] = null);
(statearr_19821_19840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19817 === 4))
{var inst_19792 = (state_19816[2]);var inst_19793 = cljs.core.async.timeout.call(null,ms);var inst_19794 = inst_19792;var state_19816__$1 = (function (){var statearr_19822 = state_19816;(statearr_19822[7] = inst_19793);
(statearr_19822[9] = inst_19794);
return statearr_19822;
})();var statearr_19823_19841 = state_19816__$1;(statearr_19823_19841[2] = null);
(statearr_19823_19841[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19817 === 6))
{var inst_19810 = (state_19816[2]);var inst_19811 = cljs.core.async.put_BANG_.call(null,out,inst_19810);var state_19816__$1 = (function (){var statearr_19824 = state_19816;(statearr_19824[10] = inst_19811);
return statearr_19824;
})();var statearr_19825_19842 = state_19816__$1;(statearr_19825_19842[2] = null);
(statearr_19825_19842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19817 === 3))
{var inst_19814 = (state_19816[2]);var state_19816__$1 = state_19816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19816__$1,inst_19814);
} else
{if((state_val_19817 === 2))
{var state_19816__$1 = state_19816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19816__$1,4,in$);
} else
{if((state_val_19817 === 9))
{var inst_19801 = (state_19816[8]);var inst_19794 = inst_19801;var state_19816__$1 = (function (){var statearr_19826 = state_19816;(statearr_19826[9] = inst_19794);
return statearr_19826;
})();var statearr_19827_19843 = state_19816__$1;(statearr_19827_19843[2] = null);
(statearr_19827_19843[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19817 === 5))
{var inst_19793 = (state_19816[7]);var inst_19797 = [in$,inst_19793];var inst_19798 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19797,null));var state_19816__$1 = state_19816;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19816__$1,7,inst_19798);
} else
{if((state_val_19817 === 10))
{var inst_19808 = (state_19816[2]);var state_19816__$1 = state_19816;var statearr_19828_19844 = state_19816__$1;(statearr_19828_19844[2] = inst_19808);
(statearr_19828_19844[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19817 === 8))
{var inst_19794 = (state_19816[9]);var state_19816__$1 = state_19816;var statearr_19829_19845 = state_19816__$1;(statearr_19829_19845[2] = inst_19794);
(statearr_19829_19845[1] = 10);
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
});})(c__10498__auto___19837,out))
;return ((function (switch__10434__auto__,c__10498__auto___19837,out){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_19833 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19833[0] = state_machine__10435__auto__);
(statearr_19833[1] = 1);
return statearr_19833;
});
var state_machine__10435__auto____1 = (function (state_19816){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_19816);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e19834){if((e19834 instanceof Object))
{var ex__10438__auto__ = e19834;var statearr_19835_19846 = state_19816;(statearr_19835_19846[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19816);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19834;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19847 = state_19816;
state_19816 = G__19847;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_19816){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_19816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___19837,out))
})();var state__10500__auto__ = (function (){var statearr_19836 = f__10499__auto__.call(null);(statearr_19836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___19837);
return statearr_19836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___19837,out))
);
return out;
});
devcards.system.throttle_function = (function throttle_function(f,ms){var q = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var tq = devcards.system.throttle_chan.call(null,q,ms);var c__10498__auto___19906 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10498__auto___19906,q,tq){
return (function (){var f__10499__auto__ = (function (){var switch__10434__auto__ = ((function (c__10498__auto___19906,q,tq){
return (function (state_19889){var state_val_19890 = (state_19889[1]);if((state_val_19890 === 7))
{var inst_19885 = (state_19889[2]);var state_19889__$1 = state_19889;var statearr_19891_19907 = state_19889__$1;(statearr_19891_19907[2] = inst_19885);
(statearr_19891_19907[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19890 === 6))
{var state_19889__$1 = state_19889;var statearr_19892_19908 = state_19889__$1;(statearr_19892_19908[2] = null);
(statearr_19892_19908[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19890 === 5))
{var inst_19879 = (state_19889[7]);var inst_19881 = f.call(null,inst_19879);var state_19889__$1 = (function (){var statearr_19893 = state_19889;(statearr_19893[8] = inst_19881);
return statearr_19893;
})();var statearr_19894_19909 = state_19889__$1;(statearr_19894_19909[2] = null);
(statearr_19894_19909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19890 === 4))
{var inst_19879 = (state_19889[7]);var inst_19879__$1 = (state_19889[2]);var state_19889__$1 = (function (){var statearr_19895 = state_19889;(statearr_19895[7] = inst_19879__$1);
return statearr_19895;
})();if(cljs.core.truth_(inst_19879__$1))
{var statearr_19896_19910 = state_19889__$1;(statearr_19896_19910[1] = 5);
} else
{var statearr_19897_19911 = state_19889__$1;(statearr_19897_19911[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19890 === 3))
{var inst_19887 = (state_19889[2]);var state_19889__$1 = state_19889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19889__$1,inst_19887);
} else
{if((state_val_19890 === 2))
{var state_19889__$1 = state_19889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19889__$1,4,tq);
} else
{if((state_val_19890 === 1))
{var state_19889__$1 = state_19889;var statearr_19898_19912 = state_19889__$1;(statearr_19898_19912[2] = null);
(statearr_19898_19912[1] = 2);
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
});})(c__10498__auto___19906,q,tq))
;return ((function (switch__10434__auto__,c__10498__auto___19906,q,tq){
return (function() {
var state_machine__10435__auto__ = null;
var state_machine__10435__auto____0 = (function (){var statearr_19902 = [null,null,null,null,null,null,null,null,null];(statearr_19902[0] = state_machine__10435__auto__);
(statearr_19902[1] = 1);
return statearr_19902;
});
var state_machine__10435__auto____1 = (function (state_19889){while(true){
var ret_value__10436__auto__ = (function (){try{while(true){
var result__10437__auto__ = switch__10434__auto__.call(null,state_19889);if(cljs.core.keyword_identical_QMARK_.call(null,result__10437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10437__auto__;
}
break;
}
}catch (e19903){if((e19903 instanceof Object))
{var ex__10438__auto__ = e19903;var statearr_19904_19913 = state_19889;(statearr_19904_19913[5] = ex__10438__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19889);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10436__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19914 = state_19889;
state_19889 = G__19914;
continue;
}
} else
{return ret_value__10436__auto__;
}
break;
}
});
state_machine__10435__auto__ = function(state_19889){
switch(arguments.length){
case 0:
return state_machine__10435__auto____0.call(this);
case 1:
return state_machine__10435__auto____1.call(this,state_19889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10435__auto____0;
state_machine__10435__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10435__auto____1;
return state_machine__10435__auto__;
})()
;})(switch__10434__auto__,c__10498__auto___19906,q,tq))
})();var state__10500__auto__ = (function (){var statearr_19905 = f__10499__auto__.call(null);(statearr_19905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10498__auto___19906);
return statearr_19905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10500__auto__);
});})(c__10498__auto___19906,q,tq))
);
return ((function (q,tq){
return (function (x){return cljs.core.async.put_BANG_.call(null,q,x);
});
;})(q,tq))
});

//# sourceMappingURL=system.js.map