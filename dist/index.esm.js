var e,t;!function(e){e.NONE="none",e.READY="ready",e.ACTIVE="active"}(e||(e={}));class s{get status(){return this._status}set status(e){this.status!=e&&(this._status=e)}constructor(t){this.parent=t,this._status=e.NONE,console.assert(null!=t,"The given parent must be not null.")}registerPointerEvent(t){switch(this.status){case e.NONE:return this.startedPointerEvent=null,this.currentPointerEvent=null;case e.READY:return this.startedPointerEvent=t;case e.ACTIVE:return this.currentPointerEvent=t}}}!function(e){e.NONE="none",e.REORDERING="reordering",e.REORDERED="reordered"}(t||(t={}));class n extends HTMLElement{constructor(){super(...arguments),this._listeners=[],this._statusListeners=[],this._status=t.NONE,this._state=null}get status(){return this._status}set status(e){this._status!=e&&this.notifyStatusListeners(this._status=e)}get state(){return this._state}set state(e){this.onUpdateState(this._state=e)}set onChange(e){null!=e&&this.addListener(e)}addListener(e){console.assert(!this._listeners.includes(e),"Already exists a given callback."),this._listeners.push(e)}removeListener(e){console.assert(this._listeners.includes(e),"Already not exists a given callback."),this._listeners.push(e)}addStatusListener(e){console.assert(!this._statusListeners.includes(e),"Already exists a given callback."),this._statusListeners.push(e)}removeStatusListener(e){console.assert(this._statusListeners.includes(e),"Already not exists a given callback."),this._statusListeners.push(e)}notifyListeners(e,t,s){this._listeners.forEach((n=>n(e,t,s)))}notifyStatusListeners(e){this._statusListeners.forEach((t=>t(e)))}static ancestorOf(e){let t=e.parentElement;for(;t;){if(t instanceof n)return t;t=t.parentElement}}createState(e){return{items:e.map((e=>new s(e)))}}onInit(){}onInitState(t){for(const s of t.items){const t=s.parent.element;t.addEventListener("pointerdown",(t=>{s.status=e.READY,s.registerPointerEvent(t)})),t.addEventListener("pointermove",(t=>{s.status!=e.READY&&s.status!=e.ACTIVE||(s.status=e.ACTIVE,s.registerPointerEvent(t))})),t.addEventListener("pointerup",(()=>s.status=e.NONE)),t.addEventListener("pointercancel",(()=>s.status=e.NONE))}}connectedCallback(){var e;const t=[];for(let s=0;s<this.children.length;s++){const n=this.children.item(s),r=null!==(e=n.getAttribute("key"))&&void 0!==e?e:n.getAttribute("reorderable-key");if(!r)throw new Error("Should be defining key attributes missing from reorderable element items so that items can be identified.");t.push({key:r,element:n})}this.onInit(),this.onInitState(this.state=this.createState(t))}}class r extends HTMLElement{constructor(){super(...arguments),this.connectedElements=[]}static ancestorOf(e){let t=e.parentElement;for(;t;){if(t instanceof r)return t;t=t.parentElement}}attach(e){console.assert(!this.connectedElements.includes(e),"Already a given element connected."),this.connectedElements.push(e)}detach(e){console.assert(!this.connectedElements.includes(e),"Already a given element not connected."),this.connectedElements.push(e)}connectedCallback(){queueMicrotask((()=>{if(0==this.connectedElements.length)throw new Error("Current the reorderable elements are not connected, so they are unnecessary in the element-tree.")}))}}customElements.define("reorderable-connection",r);class i extends n{onInit(){var e;console.log("on init"),null===(e=r.ancestorOf(this))||void 0===e||e.attach(this)}onUpdateState(e){console.log("on update state",e)}onUpdateContext(e){console.log(e)}}customElements.define("reorderable-list",i);class a{}class o extends HTMLElement{connectedCallback(){this.onInit(),this.onInitEvent()}onInit(){if(!n.ancestorOf(this))throw new Error("<reorderable-drag> must have a reorderable ancestor element.")}onInitEvent(){}}customElements.define("reorderable-drag",o);const l=new CSSStyleSheet;l.insertRule("\n    reorderable-list {\n        display: flex;\n        flex-direction: column;\n    }\n"),l.insertRule("\n    reorderable-grid {}\n"),document.adoptedStyleSheets=[l];export{r as ReorderableConnectionElement,o as ReorderableDragElement,n as ReorderableElement,a as ReorderableGridElement,s as ReorderableItemState,e as ReorderableItemStatus,i as ReorderableListElement};
//# sourceMappingURL=index.esm.js.map
