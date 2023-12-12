/*! For license information please see 5660.20328188.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[5660],{85660:(e,t,i)=>{i.r(t),i.d(t,{CalciteComboboxItemGroup:()=>b,defineCustomElement:()=>u});var o=i(51554),c=i(14387),n=i(96681);const l="list",a="label",s="title",r=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.guid=(0,c.g)(),this.afterEmptyGroup=!1,this.ancestors=void 0,this.label=void 0,this.scale="m"}connectedCallback(){this.ancestors=(0,n.g)(this.el)}render(){const{el:e,scale:t}=this,i=(0,n.a)(e);return(0,o.h)("ul",{"aria-labelledby":this.guid,class:{[l]:!0,["scale--".concat(t)]:!0},role:"group"},(0,o.h)("li",{class:{[a]:!0},id:this.guid,role:"presentation",style:{"--calcite-combobox-item-spacing-indent-multiplier":"".concat(i)}},(0,o.h)("span",{class:s},this.label)),(0,o.h)("slot",null))}get el(){return this}static get style(){return".scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}:host,.list{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),.list:focus{outline:2px solid transparent;outline-offset:2px}.label{box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:0px;max-inline-size:100%;color:var(--calcite-ui-text-3)}.title{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  );border:0 solid;display:block;flex:1 1 0%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2);word-wrap:break-word;word-break:break-word;border-block-end-color:var(--calcite-ui-border-3);padding-block:var(--calcite-combobox-item-spacing-unit-l);padding-inline:var(--calcite-combobox-item-spacing-unit-s);margin-inline-start:var(--calcite-combobox-item-indent-value)}::slotted(calcite-combobox-item-group:not([after-empty-group])){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-combobox-item-group",{afterEmptyGroup:[516,"after-empty-group"],ancestors:[1040],label:[1],scale:[1]}]);function m(){if("undefined"===typeof customElements)return;["calcite-combobox-item-group"].forEach((e=>{if("calcite-combobox-item-group"===e)customElements.get(e)||customElements.define(e,r)}))}m();const b=r,u=m},96681:(e,t,i)=>{i.d(t,{C:()=>s,a:()=>d,b:()=>a,c:()=>m,d:()=>b,e:()=>n,f:()=>l,g:()=>r,h:()=>u,i:()=>p});var o=i(92358),c=i(51554);const n="CALCITE-COMBOBOX-ITEM",l="CALCITE-COMBOBOX-ITEM-GROUP",a="".concat(n,", ").concat(l),s={chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container"};function r(e){var t,i;const o=null===(t=e.parentElement)||void 0===t?void 0:t.closest(a);return[o,null===o||void 0===o||null===(i=o.parentElement)||void 0===i?void 0:i.closest(a)].filter((e=>e))}function m(e){var t;return(null===(t=e.ancestors)||void 0===t?void 0:t.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName)))||[]}function b(e){return(0,o.o)(e.querySelectorAll("calcite-combobox-item"))}function u(e){return(0,o.o)(e.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function d(e){if(!c.Z5.isBrowser)return 0;return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}function p(e){return e.includes("single")}}}]);
//# sourceMappingURL=5660.20328188.chunk.js.map