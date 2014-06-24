(ns scrubber-examples-devcards.core
    (:require
     [devcards.core :as dc :include-macros true]
     [scrubber-examples.core :as scrubber-examples]
     [om.core :as om :include-macros true]
     [om.dom :as dom :include-macros true]
     [sablono.core :as sab :include-macros true]
     [goog.events :as events]
     [cljs.core.async :as async :refer [>! <! put! chan]])
    (:require-macros
     [devcards.core :refer [defcard is are= are-not=]]
     [cljs.core.async.macros :refer [go]])
    (:import [goog.events EventType]))

(enable-console-print!)

(devcards.core/start-devcard-ui!)
(devcards.core/start-figwheel-reloader!)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/devcards/index.html

(defcard devcard-intro
  (dc/markdown-card
   "# Devcards for scrubber-examples

    I can be found in `devcards_src/scrubber_examples_devcards/core.cljs`.

    If you add cards to this file, they will appear here on this page.

    You can add devcards to any file as long as you require
    `devcards.core` like so:

    ```
    (:require [devcards.core :as dc :include-macros true])
    ```

    As you add cards to other namspaces, those namspaces will
    be listed on the Devcards **home** page.

    <a href=\"https://github.com/bhauman/devcards/blob/master/example_src/devdemos/core.cljs\" target=\"_blank\">Here are some Devcard examples</a>"))

;; Clock example
(defn clock-view [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (js/setInterval
       (fn [] (om/transact! app :time (fn [_] (js/Date.))))
       100))
    om/IRender
    (render [_]
      (dom/div nil (. (:time app) toUTCString)))))

(defcard om-clock
  (dc/om-root-card clock-view {:time (js/Date.)}))

;; Helpers

(defn listen [el & types]
  (let [out (chan)]
    (doall (map (fn [type] (events/listen el type #(put! out %))) types))
    out))

(defn set-states! [owner desired]
  (doall (map #(om/set-state! owner (key %) (val %)) desired)))

;; first example

(defn scrubbing-int-state-view [app owner]
  (let [start-capturing #(do (om/set-state! owner :capturing true)
                             (om/set-state! owner :start-x (.-clientX %)))
        stop-capturing #(do (om/set-state! owner :capturing false)
                            (om/set-state! owner :start-x nil))]
    (reify
      om/IInitState
      (init-state [_]
        {:my-val 0
         :capturing false
         :start-x nil})
      om/IRenderState
      (render-state [_ state]
        (dom/div nil
                 (dom/span #js { :style #js {:cursor "col-resize"
                                             :-webkit-user-select "none"}
                                :onMouseDown start-capturing
                                :onMouseMove #(if (:capturing state) (let [x (.-clientX %)
                                                                           difference (- x (om/get-state owner :start-x))]
                                                                       (om/update-state! owner :my-val (partial + difference))
                                                                       (om/set-state! owner :start-x x)))
                                :onMouseUp stop-capturing
                                :onMouseOut stop-capturing
                                }
                           (str "Current value is: " (:my-val state))))))))

(defcard om-int-state-scrubber
  (dc/om-root-card scrubbing-int-state-view {}))



;; second example

(defn scrubbing-int-app-event-view-2 [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:capturing false
       :start-x nil})
    om/IWillMount
    (will-mount [_]
      (let [mouse-chan (async/map (fn [e] {:x (.-clientX e)
                                           :type (.-type e)})
                        [(listen js/window EventType.MOUSEMOVE EventType.MOUSEUP)])]
        (go (while true?
              (let [evt (<! mouse-chan)]
                (if (om/get-state owner :capturing)
                  (case (:type evt)
                    "mousemove" (let [difference (- (:x evt) (om/get-state owner :start-x))]
                                  (om/transact! app :my-val (partial + difference))
                                  (om/set-state! owner :start-x (:x evt)))
                    "mouseup" (set-states! owner {:capturing false :start-x nil}))))))))
    om/IRenderState
    (render-state [_ state]
      (dom/div nil
               (dom/span #js { :style #js {:color (if (:capturing state) "#00f" "#000")
                                           :border-bottom "1px dotted #00f"
                                           :cursor "col-resize"
                                           :-webkit-user-select "none"}
                              :onMouseDown #(set-states! owner {:capturing true :start-x (.-clientX %)})}
                         (str "Current state is: " state ", Current app val is: " (:my-val app)))))))

(defcard om-int-app-event-scrubber-2
  (dc/om-root-card scrubbing-int-app-event-view-2 {:my-val 0}))
