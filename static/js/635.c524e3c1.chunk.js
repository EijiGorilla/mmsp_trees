/*! For license information please see 635.c524e3c1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[635],{70635:(e,t,l)=>{l.r(t),l.d(t,{CalciteTableRow:()=>b,defineCustomElement:()=>p});var i=l(51554),o=l(92358),s=l(19579),n=l(13160),a=l(64044),c=l(57601),r=l(62216),d=l(34592);const h=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTableRowSelect=(0,i.yM)(this,"calciteTableRowSelect",6),this.calciteInternalTableRowFocusRequest=(0,i.yM)(this,"calciteInternalTableRowFocusRequest",6),this.rowCells=[],this.emitTableRowFocusRequest=(e,t,l,i)=>{this.calciteInternalTableRowFocusRequest.emit({cellPosition:e,rowPosition:t,destination:l,lastCell:i})},this.updateCells=()=>{var e,t,l;const i=null===(e=this.tableRowSlotEl)||void 0===e||null===(e=e.assignedElements({flatten:!0}))||void 0===e?void 0:e.filter((e=>e.matches("calcite-table-cell")||e.matches("calcite-table-header"))),o=null===(t=Array.from(null===(l=this.tableRowEl)||void 0===l?void 0:l.querySelectorAll("calcite-table-header, calcite-table-cell")))||void 0===t?void 0:t.filter((e=>e.numberCell||e.selectionCell)),s=o?o.concat(i):i;s.length>0&&(null===s||void 0===s||s.forEach(((e,t)=>{e.positionInRow=t+1,e.parentRowType=this.rowType,e.scale=this.scale,"CALCITE-TABLE-CELL"===e.nodeName&&(e.readCellContentsToAT=this.readCellContentsToAT,e.disabled=this.disabled,e.parentRowIsSelected=this.selected)}))),this.rowCells=s||[],this.cellCount=null===s||void 0===s?void 0:s.length},this.handleSelectionOfRow=()=>{this.calciteTableRowSelect.emit()},this.handleKeyboardSelection=e=>{(0,s.i)(e.key)&&(" "===e.key&&e.preventDefault(),this.handleSelectionOfRow())},this.disabled=!1,this.selected=!1,this.cellCount=void 0,this.rowType=void 0,this.numbered=!1,this.positionSection=void 0,this.positionSectionLocalized=void 0,this.positionAll=void 0,this.readCellContentsToAT=void 0,this.scale=void 0,this.selectionMode="none",this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.bodyRowCount=void 0,this.effectiveLocale=""}handleCellChanges(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}handleDelayedCellChanges(){this.tableRowEl&&this.rowCells.length>0&&requestAnimationFrame((()=>this.updateCells()))}componentDidLoad(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}connectedCallback(){(0,n.c)(this)}componentDidRender(){(0,n.u)(this)}disconnectedCallback(){(0,n.d)(this)}calciteInternalTableRowFocusChangeHandler(e){if(e.target.contains(this.el)){const l=e.detail.cellPosition,i=e.detail.rowPosition,o=e.detail.destination,s=e.detail.lastCell;if(i===this.positionAll){var t;if(this.disabled){const e="last"===o?"previous":"first"===o?"next":o;return void this.emitTableRowFocusRequest(l,this.positionAll,e)}const e=s?this.rowCells[this.rowCells.length-1]:null===(t=this.rowCells)||void 0===t?void 0:t.find(((e,t)=>t+1===l));e&&e.setFocus()}}}keyDownHandler(e){const t=e.target,l=e.key,i=e.ctrlKey,s=this.rowCells;if(t.matches("calcite-table-cell")||t.matches("calcite-table-header"))switch(l){case"ArrowUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"previous"),e.preventDefault();break;case"ArrowDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"next"),e.preventDefault();break;case"PageUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"first"),e.preventDefault();break;case"PageDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"last"),e.preventDefault();break;case"ArrowLeft":(0,o.i)(s,t,"previous",!1),e.preventDefault();break;case"ArrowRight":(0,o.i)(s,t,"next",!1),e.preventDefault();break;case"Home":i?(this.emitTableRowFocusRequest(1,this.positionAll,"first"),e.preventDefault()):((0,o.i)(s,t,"first",!1),e.preventDefault());break;case"End":var n;if(i)this.emitTableRowFocusRequest(null===(n=this.rowCells)||void 0===n?void 0:n.length,this.positionAll,"last",!0),e.preventDefault();else(0,o.i)(s,t,"last",!1),e.preventDefault()}}renderSelectionIcon(){const e="multiple"===this.selectionMode&&this.selected?"check-square-f":"multiple"===this.selectionMode?"square":this.selected?"circle-f":"circle";return(0,i.h)("calcite-icon",{icon:e,scale:(0,a.g)(this.scale)})}renderSelectableCell(){return"head"===this.rowType?(0,i.h)("calcite-table-header",{alignment:"center",bodyRowCount:this.bodyRowCount,key:"selection-head",onClick:"multiple"===this.selectionMode&&this.handleSelectionOfRow,onKeyDown:"multiple"===this.selectionMode&&this.handleKeyboardSelection,selectedRowCount:this.selectedRowCount,selectedRowCountLocalized:this.selectedRowCountLocalized,selectionCell:!0,selectionMode:this.selectionMode}):"body"===this.rowType?(0,i.h)("calcite-table-cell",{alignment:"center",key:"selection-body",onClick:this.handleSelectionOfRow,onKeyDown:this.handleKeyboardSelection,parentRowIsSelected:this.selected,parentRowPositionLocalized:this.positionSectionLocalized,selectionCell:!0},this.renderSelectionIcon()):(0,i.h)("calcite-table-cell",{alignment:"center",key:"selection-foot",selectionCell:!0})}renderNumberedCell(){return"head"===this.rowType?(0,i.h)("calcite-table-header",{alignment:"center",key:"numbered-head",numberCell:!0}):"body"===this.rowType?(0,i.h)("calcite-table-cell",{alignment:"center",key:"numbered-body",numberCell:!0},this.positionSectionLocalized):(0,i.h)("calcite-table-cell",{alignment:"center",key:"numbered-foot",numberCell:!0})}render(){return(0,i.h)(i.AA,null,(0,i.h)("tr",{"aria-disabled":this.disabled,"aria-rowindex":this.positionAll+1,"aria-selected":this.selected,onKeyDown:e=>this.keyDownHandler(e),ref:e=>this.tableRowEl=e},this.numbered&&this.renderNumberedCell(),"none"!==this.selectionMode&&this.renderSelectableCell(),(0,i.h)("slot",{onSlotchange:this.updateCells,ref:e=>this.tableRowSlotEl=e})))}get el(){return this}static get watchers(){return{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-row-background:var(--calcite-table-row-background, var(--calcite-ui-foreground-1));--calcite-internal-table-row-border-color:var(--calcite-table-row-border-color, transparent);display:contents}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) tr{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}tr{border-block-end:1px solid var(--calcite-internal-table-row-border-color);background-color:var(--calcite-internal-table-row-background)}"}},[1,"calcite-table-row",{disabled:[516],selected:[516],cellCount:[1026,"cell-count"],rowType:[1,"row-type"],numbered:[4],positionSection:[2,"position-section"],positionSectionLocalized:[1,"position-section-localized"],positionAll:[2,"position-all"],readCellContentsToAT:[4,"read-cell-contents-to-a-t"],scale:[1],selectionMode:[1,"selection-mode"],selectedRowCount:[2,"selected-row-count"],selectedRowCountLocalized:[1,"selected-row-count-localized"],bodyRowCount:[2,"body-row-count"],effectiveLocale:[32]},[[4,"calciteInternalTableRowFocusChange","calciteInternalTableRowFocusChangeHandler"]]]);function u(){if("undefined"===typeof customElements)return;["calcite-table-row","calcite-icon","calcite-table-cell","calcite-table-header"].forEach((e=>{switch(e){case"calcite-table-row":customElements.get(e)||customElements.define(e,h);break;case"calcite-icon":customElements.get(e)||(0,c.d)();break;case"calcite-table-cell":customElements.get(e)||(0,r.d)();break;case"calcite-table-header":customElements.get(e)||(0,d.d)()}}))}u();const b=h,p=u},62216:(e,t,l)=>{l.d(t,{T:()=>p,d:()=>v});var i=l(51554),o=l(47242),s=l(52655),n=l(13160),a=l(46895),c=l(92358);const r="number-cell",d="footer-cell",h="selection-cell",u="selected-cell",b="assistive-text",p=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.updateScreenReaderContentsText=()=>{this.contentsText=this.el.textContent},this.onContainerBlur=()=>{this.focused=!1},this.onContainerFocus=()=>{this.focused=!0},this.alignment="start",this.colSpan=void 0,this.rowSpan=void 0,this.disabled=void 0,this.numberCell=void 0,this.parentRowIsSelected=void 0,this.parentRowPositionLocalized=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.readCellContentsToAT=void 0,this.scale="m",this.selectionCell=void 0,this.messages=void 0,this.messageOverrides=void 0,this.contentsText="",this.defaultMessages=void 0,this.focused=!1,this.selectionText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderSelectionText()}onMessagesChange(){}effectiveLocaleChange(){(0,s.u)(this,this.effectiveLocale)}async componentWillLoad(){(0,o.a)(this),await(0,s.s)(this),this.updateScreenReaderContentsText(),this.updateScreenReaderSelectionText()}componentDidLoad(){(0,o.s)(this)}connectedCallback(){(0,a.c)(this),(0,s.c)(this),(0,n.c)(this)}componentDidRender(){(0,n.u)(this)}disconnectedCallback(){(0,a.d)(this),(0,s.d)(this),(0,n.d)(this)}async setFocus(){await(0,o.c)(this),this.containerEl.focus()}updateScreenReaderSelectionText(){var e,t,l,i,o,s;const n="".concat(null===(e=this.messages)||void 0===e?void 0:e.row," ").concat(this.parentRowPositionLocalized," ").concat(null===(t=this.messages)||void 0===t?void 0:t.selected," ").concat(null===(l=this.messages)||void 0===l?void 0:l.keyboardDeselect),a="".concat(null===(i=this.messages)||void 0===i?void 0:i.row," ").concat(this.parentRowPositionLocalized," ").concat(null===(o=this.messages)||void 0===o?void 0:o.unselected," ").concat(null===(s=this.messages)||void 0===s?void 0:s.keyboardSelect);this.selectionText=this.parentRowIsSelected?n:a}render(){const e=(0,c.b)(this.el);return(0,i.h)(i.AA,null,(0,i.h)("td",{"aria-disabled":this.disabled,class:{[d]:"foot"===this.parentRowType,[r]:this.numberCell,[h]:this.selectionCell,[u]:this.parentRowIsSelected,[c.C.rtl]:"rtl"===e},colSpan:this.colSpan,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,role:"gridcell",rowSpan:this.rowSpan,tabIndex:this.disabled?-1:0,ref:e=>this.containerEl=e},(this.selectionCell||this.readCellContentsToAT)&&this.focused&&(0,i.h)("span",{"aria-hidden":!0,"aria-live":"polite",class:b},this.selectionCell&&this.selectionText,this.readCellContentsToAT&&!this.selectionCell&&this.contentsText),(0,i.h)("slot",{onSlotchange:this.updateScreenReaderContentsText})))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{parentRowIsSelected:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-internal-table-cell-background-internal:var(--calcite-table-cell-background, transparent);--calcite-internal-table-cell-border-color-internal:var(--calcite-table-cell-border-color, transparent);display:contents}:host([alignment=center]) td{text-align:center}:host([alignment=end]) td{text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}td{white-space:normal;text-align:start;vertical-align:middle;color:var(--calcite-ui-text-1);outline-color:transparent;background:var(--calcite-internal-table-cell-background);border-inline-end:1px solid var(--calcite-ui-border-3);font-size:var(--calcite-internal-table-cell-font-size);padding:var(--calcite-internal-table-cell-padding)}td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.number-cell{background-color:var(--calcite-ui-foreground-2)}.footer-cell{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-start:1px solid var(--calcite-ui-border-3)}.number-cell,.selection-cell{border-inline-end:1px solid var(--calcite-ui-border-3);inline-size:2rem;min-inline-size:2rem}.selection-cell{cursor:pointer;color:var(--calcite-ui-text-3);inset-inline-start:2rem}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-table-cell-background:var(--calcite-ui-foreground-current);background:var(--calcite-ui-foreground-current)}.selection-cell.selected-cell{box-shadow:inset 0.25rem 0 0 0 var(--calcite-ui-brand);color:var(--calcite-ui-brand)}.selection-cell.selected-cell calcite-icon{color:var(--calcite-ui-brand)}.calcite--rtl.selection-cell.selected-cell{box-shadow:inset -0.25rem 0 0 0 var(--calcite-ui-brand)}.selection-cell{vertical-align:middle}.selection-cell ::slotted(calcite-icon){pointer-events:none;margin-block-start:0.25rem}"}},[1,"calcite-table-cell",{alignment:[513],colSpan:[514,"col-span"],rowSpan:[514,"row-span"],disabled:[4],numberCell:[4,"number-cell"],parentRowIsSelected:[4,"parent-row-is-selected"],parentRowPositionLocalized:[1,"parent-row-position-localized"],parentRowType:[1,"parent-row-type"],positionInRow:[2,"position-in-row"],readCellContentsToAT:[4,"read-cell-contents-to-a-t"],scale:[1],selectionCell:[4,"selection-cell"],messages:[1040],messageOverrides:[1040],contentsText:[32],defaultMessages:[32],focused:[32],selectionText:[32],effectiveLocale:[32],setFocus:[64]}]);function v(){if("undefined"===typeof customElements)return;["calcite-table-cell"].forEach((e=>{if("calcite-table-cell"===e)customElements.get(e)||customElements.define(e,p)}))}v()},34592:(e,t,l)=>{l.d(t,{T:()=>g,d:()=>C});var i=l(51554),o=l(47242),s=l(52655),n=l(46895),a=l(64044),c=l(57601);const r="number-cell",d="selection-cell",h="body-row",u="footer-row",b="heading",p="description",v="cell--multiple-selection",w="assistive-text",m="active",g=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.alignment="start",this.colSpan=void 0,this.description=void 0,this.heading=void 0,this.rowSpan=void 0,this.numberCell=!1,this.parentRowPosition=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.scale=void 0,this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.selectionCell=!1,this.selectionMode=void 0,this.bodyRowCount=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.screenReaderText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderText()}onMessagesChange(){}async componentWillLoad(){(0,o.a)(this),await(0,s.s)(this),this.updateScreenReaderText()}componentDidLoad(){(0,o.s)(this)}connectedCallback(){(0,n.c)(this),(0,s.c)(this)}disconnectedCallback(){(0,n.d)(this),(0,s.d)(this)}effectiveLocaleChange(){(0,s.u)(this,this.effectiveLocale)}async setFocus(){await(0,o.c)(this),this.containerEl.focus()}updateScreenReaderText(){var e;let t="";const l="".concat(this.selectedRowCountLocalized," ").concat(null===(e=this.messages)||void 0===e?void 0:e.selected);var i;if(this.numberCell)t=null===(i=this.messages)||void 0===i?void 0:i.rowNumber;else if("single"===this.selectionMode){var o;t="".concat(null===(o=this.messages)||void 0===o?void 0:o.selectionColumn,". ").concat(l)}else if(this.bodyRowCount===this.selectedRowCount){var s,n,a;t="".concat(null===(s=this.messages)||void 0===s?void 0:s.selectionColumn,". ").concat(null===(n=this.messages)||void 0===n?void 0:n.all," ").concat(l," ").concat(null===(a=this.messages)||void 0===a?void 0:a.keyboardDeselectAll)}else{var c,r;t="".concat(null===(c=this.messages)||void 0===c?void 0:c.selectionColumn,". ").concat(l," ").concat(null===(r=this.messages)||void 0===r?void 0:r.keyboardSelectAll)}this.screenReaderText=t}render(){const e=this.rowSpan?"rowgroup":this.colSpan?"colgroup":"body"===this.parentRowType?"row":"col",t=this.selectedRowCount===this.bodyRowCount,l=t?"check-square-f":"check-square";return(0,i.h)(i.AA,null,(0,i.h)("th",{"aria-colindex":"body"!==this.parentRowType?this.positionInRow:"",class:{[h]:"body"===this.parentRowType,[u]:"foot"===this.parentRowType,[r]:this.numberCell,[d]:this.selectionCell,[v]:"multiple"===this.selectionMode},colSpan:this.colSpan,role:"columnheader",rowSpan:this.rowSpan,scope:e,tabIndex:0,ref:e=>this.containerEl=e},this.heading&&(0,i.h)("div",{class:b},this.heading),this.description&&(0,i.h)("div",{class:p},this.description),this.selectionCell&&"multiple"===this.selectionMode&&(0,i.h)("calcite-icon",{class:{[m]:t},icon:l,scale:(0,a.g)(this.scale)}),(this.selectionCell||this.numberCell)&&(0,i.h)("span",{"aria-hidden":!0,"aria-live":"polite",class:w},this.screenReaderText)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{selectedRowCount:["onSelectedChange"],selectedRowCountLocalized:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-internal-table-header-background:var(--calcite-table-header-background, var(--calcite-ui-foreground-2));--calcite-internal-table-header-border-color:var(--calcite-table-border-color, var(--calcite-ui-border-3));display:contents}:host([alignment=center]) th{text-align:center}:host([alignment=end]) th{text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}th{white-space:normal;text-align:start;vertical-align:top;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);outline-color:transparent;font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-internal-table-header-border-color);border-block-end:1px solid var(--calcite-internal-table-header-border-color);padding-block:calc(var(--calcite-internal-table-cell-padding) * 1.5);padding-inline:var(--calcite-internal-table-cell-padding);background-color:var(--calcite-internal-table-header-background)}th:focus-within{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}th.body-row,th.footer-row{vertical-align:middle;border-block-end:0}th.footer-row{border-block-start:1px solid var(--calcite-internal-table-header-border-color)}.cell--multiple-selection{cursor:pointer;vertical-align:middle;color:var(--calcite-ui-text-3)}.number-cell,.selection-cell{color:var(--calcite-ui-text-2);inline-size:2rem;min-inline-size:2rem}.selection-cell calcite-icon.active{color:var(--calcite-ui-brand)}.number-cell calcite-icon,.selection-cell calcite-icon{margin-inline-start:auto;margin-inline-end:auto;vertical-align:middle}.heading{color:var(--calcite-ui-text-1)}.description{color:var(--calcite-ui-text-3);font-size:var(--calcite-internal-table-cell-font-size-secondary)}"}},[1,"calcite-table-header",{alignment:[513],colSpan:[514,"col-span"],description:[513],heading:[513],rowSpan:[514,"row-span"],numberCell:[4,"number-cell"],parentRowPosition:[2,"parent-row-position"],parentRowType:[1,"parent-row-type"],positionInRow:[2,"position-in-row"],scale:[1],selectedRowCount:[2,"selected-row-count"],selectedRowCountLocalized:[1,"selected-row-count-localized"],selectionCell:[4,"selection-cell"],selectionMode:[1,"selection-mode"],bodyRowCount:[2,"body-row-count"],messages:[1040],messageOverrides:[1040],defaultMessages:[32],screenReaderText:[32],effectiveLocale:[32],setFocus:[64]}]);function C(){if("undefined"===typeof customElements)return;["calcite-table-header","calcite-icon"].forEach((e=>{switch(e){case"calcite-table-header":customElements.get(e)||customElements.define(e,g);break;case"calcite-icon":customElements.get(e)||(0,c.d)()}}))}C()}}]);
//# sourceMappingURL=635.c524e3c1.chunk.js.map