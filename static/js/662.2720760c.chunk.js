"use strict";(self.webpackChunkmmsp_trees=self.webpackChunkmmsp_trees||[]).push([[662],{39672:(n,t,r)=>{r.r(t),r.d(t,{l:()=>f});var e=r(84397);var i,o,a,u={exports:{}};i=u,o="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(o=o||__filename),a=function(n){var t,r,e=void 0!==(n=n||{})?n:{};e.ready=new Promise((function(n,e){t=n,r=e}));var i,a,u,c=Object.assign({},e),f="./this.program",s="object"==typeof window,l="function"==typeof importScripts,p="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,d="";if(p){var h=require("fs"),m=require("path");d=l?m.dirname(d)+"/":__dirname+"/",i=(n,t)=>(n=G(n)?new URL(n):m.normalize(n),h.readFileSync(n,t?void 0:"utf8")),u=n=>{var t=i(n,!0);return t.buffer||(t=new Uint8Array(t)),t},a=(n,t,r)=>{n=G(n)?new URL(n):m.normalize(n),h.readFile(n,(function(n,e){n?r(n):t(e.buffer)}))},process.argv.length>1&&(f=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",(function(n){if(!(n instanceof J))throw n})),process.on("unhandledRejection",(function(n){throw n})),e.inspect=function(){return"[Emscripten Module object]"}}else(s||l)&&(l?d=self.location.href:"undefined"!=typeof document&&document.currentScript&&(d=document.currentScript.src),o&&(d=o),d=0!==d.indexOf("blob:")?d.substr(0,d.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i=n=>{var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},l&&(u=n=>{var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),a=(n,t,r)=>{var e=new XMLHttpRequest;e.open("GET",n,!0),e.responseType="arraybuffer",e.onload=()=>{200==e.status||0==e.status&&e.response?t(e.response):r()},e.onerror=r,e.send(null)});e.print||console.log.bind(console);var y,v,g=e.printErr||console.warn.bind(console);Object.assign(e,c),c=null,e.arguments&&e.arguments,e.thisProgram&&(f=e.thisProgram),e.quit&&e.quit,e.wasmBinary&&(y=e.wasmBinary),e.noExitRuntime,"object"!=typeof WebAssembly&&V("no native wasm support detected");var _,w,b,A,T,C,E,F,P,S,W=!1,M="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function j(n,t){return n?function(n,t,r){for(var e=t+r,i=t;n[i]&&!(i>=e);)++i;if(i-t>16&&n.buffer&&M)return M.decode(n.subarray(t,i));for(var o="";t<i;){var a=n[t++];if(128&a){var u=63&n[t++];if(192!=(224&a)){var c=63&n[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&n[t++])<65536)o+=String.fromCharCode(a);else{var f=a-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}(b,n,t):""}function O(n,t,r,e){if(!(e>0))return 0;for(var i=r,o=r+e-1,a=0;a<n.length;++a){var u=n.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++a)),u<=127){if(r>=o)break;t[r++]=u}else if(u<=2047){if(r+1>=o)break;t[r++]=192|u>>6,t[r++]=128|63&u}else if(u<=65535){if(r+2>=o)break;t[r++]=224|u>>12,t[r++]=128|u>>6&63,t[r++]=128|63&u}else{if(r+3>=o)break;t[r++]=240|u>>18,t[r++]=128|u>>12&63,t[r++]=128|u>>6&63,t[r++]=128|63&u}}return t[r]=0,r-i}function R(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e<=127?t++:e<=2047?t+=2:e>=55296&&e<=57343?(t+=4,++r):t+=3}return t}function k(n){_=n,e.HEAP8=w=new Int8Array(n),e.HEAP16=A=new Int16Array(n),e.HEAP32=C=new Int32Array(n),e.HEAPU8=b=new Uint8Array(n),e.HEAPU16=T=new Uint16Array(n),e.HEAPU32=E=new Uint32Array(n),e.HEAPF32=F=new Float32Array(n),e.HEAPF64=P=new Float64Array(n)}e.INITIAL_MEMORY;var D=[],x=[],U=[];function I(n){D.unshift(n)}function H(n){U.unshift(n)}var Y=0,z=null;function V(n){e.onAbort&&e.onAbort(n),g(n="Aborted("+n+")"),W=!0,n+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(n);throw r(t),t}var B,q="data:application/octet-stream;base64,";function L(n){return n.startsWith(q)}function G(n){return n.startsWith("file://")}function N(n){try{if(n==B&&y)return new Uint8Array(y);if(u)return u(n);throw"both async and sync fetching of the wasm failed"}catch(g){V(g)}}function X(){if(!y&&(s||l)){if("function"==typeof fetch&&!G(B))return fetch(B,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+B+"'";return n.arrayBuffer()})).catch((function(){return N(B)}));if(a)return new Promise((function(n,t){a(B,(function(t){n(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return N(B)}))}function J(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function Z(n){for(;n.length>0;)n.shift()(e)}function $(n){this.excPtr=n,this.ptr=n-24,this.set_type=function(n){E[this.ptr+4>>2]=n},this.get_type=function(){return E[this.ptr+4>>2]},this.set_destructor=function(n){E[this.ptr+8>>2]=n},this.get_destructor=function(){return E[this.ptr+8>>2]},this.set_refcount=function(n){C[this.ptr>>2]=n},this.set_caught=function(n){n=n?1:0,w[this.ptr+12>>0]=n},this.get_caught=function(){return 0!=w[this.ptr+12>>0]},this.set_rethrown=function(n){n=n?1:0,w[this.ptr+13>>0]=n},this.get_rethrown=function(){return 0!=w[this.ptr+13>>0]},this.init=function(n,t){this.set_adjusted_ptr(0),this.set_type(n),this.set_destructor(t),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=C[this.ptr>>2];C[this.ptr>>2]=n+1},this.release_ref=function(){var n=C[this.ptr>>2];return C[this.ptr>>2]=n-1,1===n},this.set_adjusted_ptr=function(n){E[this.ptr+16>>2]=n},this.get_adjusted_ptr=function(){return E[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Kn(this.get_type()))return E[this.excPtr>>2];var n=this.get_adjusted_ptr();return 0!==n?n:this.excPtr}}function K(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}L(B="lclayout.wasm")||(B=function(n){return e.locateFile?e.locateFile(n,d):d+n}(B));var Q=void 0;function nn(n){for(var t="",r=n;b[r];)t+=Q[b[r++]];return t}var tn={},rn={},en={},on=48,an=57;function un(n,t){return n=function(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=on&&t<=an?"_"+n:n}(n),function(){return t.apply(this,arguments)}}function cn(n,t){var r=un(t,(function(n){this.name=t,this.message=n;var r=new Error(n).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var fn=void 0;function sn(n){throw new fn(n)}var ln=void 0;function pn(n){throw new ln(n)}function dn(n,t,r){function e(t){var e=r(t);e.length!==n.length&&pn("Mismatched type converter count");for(var i=0;i<n.length;++i)hn(n[i],e[i])}n.forEach((function(n){en[n]=t}));var i=new Array(t.length),o=[],a=0;t.forEach(((n,t)=>{rn.hasOwnProperty(n)?i[t]=rn[n]:(o.push(n),tn.hasOwnProperty(n)||(tn[n]=[]),tn[n].push((()=>{i[t]=rn[n],++a===o.length&&e(i)})))})),0===o.length&&e(i)}function hn(n,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=t.name;if(n||sn('type "'+e+'" must have a positive integer typeid pointer'),rn.hasOwnProperty(n)){if(r.ignoreDuplicateRegistrations)return;sn("Cannot register type '"+e+"' twice")}if(rn[n]=t,delete en[n],tn.hasOwnProperty(n)){var i=tn[n];delete tn[n],i.forEach((n=>n()))}}var mn=[],yn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function vn(){for(var n=0,t=5;t<yn.length;++t)void 0!==yn[t]&&++n;return n}function gn(){for(var n=5;n<yn.length;++n)if(void 0!==yn[n])return yn[n];return null}var _n=n=>(n||sn("Cannot use deleted val. handle = "+n),yn[n].value),wn=n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=mn.length?mn.pop():yn.length;return yn[t]={refcount:1,value:n},t}};function bn(n){return this.fromWireType(C[n>>2])}function An(n,t){switch(t){case 2:return function(n){return this.fromWireType(F[n>>2])};case 3:return function(n){return this.fromWireType(P[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Tn(n,t,r){e.hasOwnProperty(n)?((void 0===r||void 0!==e[n].overloadTable&&void 0!==e[n].overloadTable[r])&&sn("Cannot register public name '"+n+"' twice"),function(n,t,r){if(void 0===n[t].overloadTable){var e=n[t];n[t]=function(){return n[t].overloadTable.hasOwnProperty(arguments.length)||sn("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].overloadTable+")!"),n[t].overloadTable[arguments.length].apply(this,arguments)},n[t].overloadTable=[],n[t].overloadTable[e.argCount]=e}}(e,n,n),e.hasOwnProperty(r)&&sn("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),e[n].overloadTable[r]=t):(e[n]=t,void 0!==r&&(e[n].numArguments=r))}function Cn(n,t,r){e.hasOwnProperty(n)||pn("Replacing nonexistant public symbol"),void 0!==e[n].overloadTable&&void 0!==r?e[n].overloadTable[r]=t:(e[n]=t,e[n].argCount=r)}var En=[];function Fn(n){var t=En[n];return t||(n>=En.length&&(En.length=n+1),En[n]=t=S.get(n)),t}function Pn(n,t,r){return n.includes("j")?function(n,t,r){var i=e["dynCall_"+n];return r&&r.length?i.apply(null,[t].concat(r)):i.call(null,t)}(n,t,r):Fn(t).apply(null,r)}function Sn(n,t){var r=(n=nn(n)).includes("j")?function(n,t){var r=[];return function(){return r.length=0,Object.assign(r,arguments),Pn(n,t,r)}}(n,t):Fn(t);return"function"!=typeof r&&sn("unknown function pointer with signature "+n+": "+t),r}var Wn=void 0;function Mn(n){var t=Xn(n),r=nn(t);return $n(t),r}function jn(n,t,r){switch(t){case 0:return r?function(n){return w[n]}:function(n){return b[n]};case 1:return r?function(n){return A[n>>1]}:function(n){return T[n>>1]};case 2:return r?function(n){return C[n>>2]}:function(n){return E[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var On="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Rn(n,t){for(var r=n,e=r>>1,i=e+t/2;!(e>=i)&&T[e];)++e;if((r=e<<1)-n>32&&On)return On.decode(b.subarray(n,r));for(var o="",a=0;!(a>=t/2);++a){var u=A[n+2*a>>1];if(0==u)break;o+=String.fromCharCode(u)}return o}function kn(n,t,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var e=t,i=(r-=2)<2*n.length?r/2:n.length,o=0;o<i;++o){var a=n.charCodeAt(o);A[t>>1]=a,t+=2}return A[t>>1]=0,t-e}function Dn(n){return 2*n.length}function xn(n,t){for(var r=0,e="";!(r>=t/4);){var i=C[n+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;e+=String.fromCharCode(55296|o>>10,56320|1023&o)}else e+=String.fromCharCode(i)}return e}function Un(n,t,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var e=t,i=e+r-4,o=0;o<n.length;++o){var a=n.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),C[t>>2]=a,(t+=4)+4>i)break}return C[t>>2]=0,t-e}function In(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&++r,t+=4}return t}var Hn;function Yn(n){try{return v.grow(n-_.byteLength+65535>>>16),k(v.buffer),1}catch(t){}}Hn=p?()=>{var n=process.hrtime();return 1e3*n[0]+n[1]/1e6}:()=>performance.now();var zn={};function Vn(){if(!Vn.strings){var n={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:f||"./this.program"};for(var t in zn)void 0===zn[t]?delete n[t]:n[t]=zn[t];var r=[];for(var t in n)r.push(t+"="+n[t]);Vn.strings=r}return Vn.strings}function Bn(n){return n%4==0&&(n%100!=0||n%400==0)}var qn=[31,29,31,30,31,30,31,31,30,31,30,31],Ln=[31,28,31,30,31,30,31,31,30,31,30,31];function Gn(n,t,r,e){var i=C[e+40>>2],o={tm_sec:C[e>>2],tm_min:C[e+4>>2],tm_hour:C[e+8>>2],tm_mday:C[e+12>>2],tm_mon:C[e+16>>2],tm_year:C[e+20>>2],tm_wday:C[e+24>>2],tm_yday:C[e+28>>2],tm_isdst:C[e+32>>2],tm_gmtoff:C[e+36>>2],tm_zone:i?j(i):""},a=j(r),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var c in u)a=a.replace(new RegExp(c,"g"),u[c]);var f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=["January","February","March","April","May","June","July","August","September","October","November","December"];function l(n,t,r){for(var e="number"==typeof n?n.toString():n||"";e.length<t;)e=r[0]+e;return e}function p(n,t){return l(n,t,"0")}function d(n,t){function r(n){return n<0?-1:n>0?1:0}var e;return 0===(e=r(n.getFullYear()-t.getFullYear()))&&0===(e=r(n.getMonth()-t.getMonth()))&&(e=r(n.getDate()-t.getDate())),e}function h(n){switch(n.getDay()){case 0:return new Date(n.getFullYear()-1,11,29);case 1:return n;case 2:return new Date(n.getFullYear(),0,3);case 3:return new Date(n.getFullYear(),0,2);case 4:return new Date(n.getFullYear(),0,1);case 5:return new Date(n.getFullYear()-1,11,31);case 6:return new Date(n.getFullYear()-1,11,30)}}function m(n){var t=function(n,t){for(var r=new Date(n.getTime());t>0;){var e=Bn(r.getFullYear()),i=r.getMonth(),o=(e?qn:Ln)[i];if(!(t>o-r.getDate()))return r.setDate(r.getDate()+t),r;t-=o-r.getDate()+1,r.setDate(1),i<11?r.setMonth(i+1):(r.setMonth(0),r.setFullYear(r.getFullYear()+1))}return r}(new Date(n.tm_year+1900,0,1),n.tm_yday),r=new Date(t.getFullYear(),0,4),e=new Date(t.getFullYear()+1,0,4),i=h(r),o=h(e);return d(i,t)<=0?d(o,t)<=0?t.getFullYear()+1:t.getFullYear():t.getFullYear()-1}var y={"%a":function(n){return f[n.tm_wday].substring(0,3)},"%A":function(n){return f[n.tm_wday]},"%b":function(n){return s[n.tm_mon].substring(0,3)},"%B":function(n){return s[n.tm_mon]},"%C":function(n){return p((n.tm_year+1900)/100|0,2)},"%d":function(n){return p(n.tm_mday,2)},"%e":function(n){return l(n.tm_mday,2," ")},"%g":function(n){return m(n).toString().substring(2)},"%G":function(n){return m(n)},"%H":function(n){return p(n.tm_hour,2)},"%I":function(n){var t=n.tm_hour;return 0==t?t=12:t>12&&(t-=12),p(t,2)},"%j":function(n){return p(n.tm_mday+function(n,t){for(var r=0,e=0;e<=t;r+=n[e++]);return r}(Bn(n.tm_year+1900)?qn:Ln,n.tm_mon-1),3)},"%m":function(n){return p(n.tm_mon+1,2)},"%M":function(n){return p(n.tm_min,2)},"%n":function(){return"\n"},"%p":function(n){return n.tm_hour>=0&&n.tm_hour<12?"AM":"PM"},"%S":function(n){return p(n.tm_sec,2)},"%t":function(){return"\t"},"%u":function(n){return n.tm_wday||7},"%U":function(n){var t=n.tm_yday+7-n.tm_wday;return p(Math.floor(t/7),2)},"%V":function(n){var t=Math.floor((n.tm_yday+7-(n.tm_wday+6)%7)/7);if((n.tm_wday+371-n.tm_yday-2)%7<=2&&t++,t){if(53==t){var r=(n.tm_wday+371-n.tm_yday)%7;4==r||3==r&&Bn(n.tm_year)||(t=1)}}else{t=52;var e=(n.tm_wday+7-n.tm_yday-1)%7;(4==e||5==e&&Bn(n.tm_year%400-1))&&t++}return p(t,2)},"%w":function(n){return n.tm_wday},"%W":function(n){var t=n.tm_yday+7-(n.tm_wday+6)%7;return p(Math.floor(t/7),2)},"%y":function(n){return(n.tm_year+1900).toString().substring(2)},"%Y":function(n){return n.tm_year+1900},"%z":function(n){var t=n.tm_gmtoff,r=t>=0;return t=(t=Math.abs(t)/60)/60*100+t%60,(r?"+":"-")+String("0000"+t).slice(-4)},"%Z":function(n){return n.tm_zone},"%%":function(){return"%"}};for(var c in a=a.replace(/%%/g,"\0\0"),y)a.includes(c)&&(a=a.replace(new RegExp(c,"g"),y[c](o)));var v=function(n,t,r){var e=r>0?r:R(n)+1,i=new Array(e),o=O(n,i,0,i.length);return t&&(i.length=o),i}(a=a.replace(/\0\0/g,"%"),!1);return v.length>t?0:(function(n,t){w.set(n,t)}(v,n),v.length-1)}(function(){for(var n=new Array(256),t=0;t<256;++t)n[t]=String.fromCharCode(t);Q=n})(),fn=e.BindingError=cn(Error,"BindingError"),ln=e.InternalError=cn(Error,"InternalError"),e.count_emval_handles=vn,e.get_first_emval=gn,Wn=e.UnboundTypeError=cn(Error,"UnboundTypeError");var Nn={a:function(n,t,r){throw new $(n).init(t,r),n},m:function(n,t,r,e,i){},k:function(n,t,r,e,i){var o=K(r);hn(n,{name:t=nn(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?e:i},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===r)e=w;else if(2===r)e=A;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+t);e=C}return this.fromWireType(e[n>>o])},destructorFunction:null})},i:function(n,t,r){n=nn(n),dn([],[t],(function(t){return t=t[0],e[n]=t.fromWireType(r),[]}))},j:function(n,t){hn(n,{name:t=nn(t),fromWireType:function(n){var t=_n(n);return function(n){n>4&&0==--yn[n].refcount&&(yn[n]=void 0,mn.push(n))}(n),t},toWireType:function(n,t){return wn(t)},argPackAdvance:8,readValueFromPointer:bn,destructorFunction:null})},h:function(n,t,r){var e=K(r);hn(n,{name:t=nn(t),fromWireType:function(n){return n},toWireType:function(n,t){return t},argPackAdvance:8,readValueFromPointer:An(t,e),destructorFunction:null})},c:function(n,t,r,e,i,o){var a=function(n,t){for(var r=[],e=0;e<n;e++)r.push(E[t+4*e>>2]);return r}(t,r);n=nn(n),i=Sn(e,i),Tn(n,(function(){!function(n,t){var r=[],e={};throw t.forEach((function n(t){e[t]||rn[t]||(en[t]?en[t].forEach(n):(r.push(t),e[t]=!0))})),new Wn(n+": "+r.map(Mn).join([", "]))}("Cannot call "+n+" due to unbound types",a)}),t-1),dn([],a,(function(r){var e=[r[0],null].concat(r.slice(1));return Cn(n,function(n,t,r,e,i){var o=t.length;o<2&&sn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==t[1]&&null!==r,u=!1,c=1;c<t.length;++c)if(null!==t[c]&&void 0===t[c].destructorFunction){u=!0;break}var f="void"!==t[0].name,s=o-2,l=new Array(s),p=[],d=[];return function(){var r;arguments.length!==s&&sn("function "+n+" called with "+arguments.length+" arguments, expected "+s+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(r=t[1].toWireType(d,this),p[1]=r);for(var o=0;o<s;++o)l[o]=t[o+2].toWireType(d,arguments[o]),p.push(l[o]);return function(n){if(u)!function(n){for(;n.length;){var t=n.pop();n.pop()(t)}}(d);else for(var e=a?1:2;e<t.length;e++){var i=1===e?r:l[e-2];null!==t[e].destructorFunction&&t[e].destructorFunction(i)}if(f)return t[0].fromWireType(n)}(e.apply(null,p))}}(n,e,null,i,o),t-1),[]}))},d:function(n,t,r,e,i){t=nn(t);var o=K(r),a=n=>n;if(0===e){var u=32-8*r;a=n=>n<<u>>>u}var c=t.includes("unsigned");hn(n,{name:t,fromWireType:a,toWireType:c?function(n,t){return this.name,t>>>0}:function(n,t){return this.name,t},argPackAdvance:8,readValueFromPointer:jn(t,o,0!==e),destructorFunction:null})},b:function(n,t,r){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function i(n){var t=E,r=t[n>>=2],i=t[n+1];return new e(_,i,r)}hn(n,{name:r=nn(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},g:function(n,t){var r="std::string"===(t=nn(t));hn(n,{name:t,fromWireType:function(n){var t,e=E[n>>2],i=n+4;if(r)for(var o=i,a=0;a<=e;++a){var u=i+a;if(a==e||0==b[u]){var c=j(o,u-o);void 0===t?t=c:(t+=String.fromCharCode(0),t+=c),o=u+1}}else{var f=new Array(e);for(a=0;a<e;++a)f[a]=String.fromCharCode(b[i+a]);t=f.join("")}return $n(n),t},toWireType:function(n,t){var e;t instanceof ArrayBuffer&&(t=new Uint8Array(t));var i="string"==typeof t;i||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||sn("Cannot pass non-string to std::string"),e=r&&i?R(t):t.length;var o=Zn(4+e+1),a=o+4;if(E[o>>2]=e,r&&i)!function(n,t,r){O(n,b,t,r)}(t,a,e+1);else if(i)for(var u=0;u<e;++u){var c=t.charCodeAt(u);c>255&&($n(a),sn("String has UTF-16 code units that do not fit in 8 bits")),b[a+u]=c}else for(u=0;u<e;++u)b[a+u]=t[u];return null!==n&&n.push($n,o),o},argPackAdvance:8,readValueFromPointer:bn,destructorFunction:function(n){$n(n)}})},e:function(n,t,r){var e,i,o,a,u;r=nn(r),2===t?(e=Rn,i=kn,a=Dn,o=()=>T,u=1):4===t&&(e=xn,i=Un,a=In,o=()=>E,u=2),hn(n,{name:r,fromWireType:function(n){for(var r,i=E[n>>2],a=o(),c=n+4,f=0;f<=i;++f){var s=n+4+f*t;if(f==i||0==a[s>>u]){var l=e(c,s-c);void 0===r?r=l:(r+=String.fromCharCode(0),r+=l),c=s+t}}return $n(n),r},toWireType:function(n,e){"string"!=typeof e&&sn("Cannot pass non-string to C++ string type "+r);var o=a(e),c=Zn(4+o+t);return E[c>>2]=o>>u,i(e,c+4,o+t),null!==n&&n.push($n,c),c},argPackAdvance:8,readValueFromPointer:bn,destructorFunction:function(n){$n(n)}})},l:function(n,t){hn(n,{isVoid:!0,name:t=nn(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,t){}})},r:function(){return true},f:function(){V("")},s:function(){return Date.now()},n:function(){return 2147483648},u:Hn,v:function(n,t,r){b.copyWithin(n,t,t+r)},t:function(n){var t=b.length,r=2147483648;if((n>>>=0)>r)return!1;let e=(n,t)=>n+(t-n%t)%t;for(var i=1;i<=4;i*=2){var o=t*(1+.2/i);if(o=Math.min(o,n+100663296),Yn(Math.min(r,e(Math.max(n,o),65536))))return!0}return!1},p:function(n,t){var r=0;return Vn().forEach((function(e,i){var o=t+r;E[n+4*i>>2]=o,function(n,t,r){for(var e=0;e<n.length;++e)w[t++>>0]=n.charCodeAt(e);r||(w[t>>0]=0)}(e,o),r+=e.length+1})),0},q:function(n,t){var r=Vn();E[n>>2]=r.length;var e=0;return r.forEach((function(n){e+=n.length+1})),E[t>>2]=e,0},o:function(n,t,r,e,i){return Gn(n,t,r,e)}};(function(){var n={a:Nn};function t(n,t){var r=n.exports;e.asm=r,k((v=e.asm.w).buffer),S=e.asm.y,function(n){x.unshift(n)}(e.asm.x),function(n){if(Y--,e.monitorRunDependencies&&e.monitorRunDependencies(Y),0==Y&&z){var t=z;z=null,t()}}()}function i(n){t(n.instance)}function o(t){return X().then((function(t){return WebAssembly.instantiate(t,n)})).then((function(n){return n})).then(t,(function(n){g("failed to asynchronously prepare wasm: "+n),V(n)}))}if(Y++,e.monitorRunDependencies&&e.monitorRunDependencies(Y),e.instantiateWasm)try{return e.instantiateWasm(n,t)}catch(u){g("Module.instantiateWasm callback failed with error: "+u),r(u)}(y||"function"!=typeof WebAssembly.instantiateStreaming||L(B)||G(B)||p||"function"!=typeof fetch?o(i):fetch(B,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(i,(function(n){return g("wasm streaming compile failed: "+n),g("falling back to ArrayBuffer instantiation"),o(i)}))}))).catch(r)})(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.x).apply(null,arguments)};var Xn=e.___getTypeName=function(){return(Xn=e.___getTypeName=e.asm.z).apply(null,arguments)};e.__embind_initialize_bindings=function(){return(e.__embind_initialize_bindings=e.asm.A).apply(null,arguments)};var Jn,Zn=e._malloc=function(){return(Zn=e._malloc=e.asm.B).apply(null,arguments)},$n=e._free=function(){return($n=e._free=e.asm.C).apply(null,arguments)},Kn=e.___cxa_is_pointer_type=function(){return(Kn=e.___cxa_is_pointer_type=e.asm.D).apply(null,arguments)};function Qn(n){function r(){Jn||(Jn=!0,e.calledRun=!0,W||(Z(x),t(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),function(){if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)H(e.postRun.shift());Z(U)}()))}Y>0||(function(){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)I(e.preRun.shift());Z(D)}(),Y>0||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),r()}),1)):r()))}if(e.dynCall_viijii=function(){return(e.dynCall_viijii=e.asm.E).apply(null,arguments)},e.dynCall_iiiiij=function(){return(e.dynCall_iiiiij=e.asm.F).apply(null,arguments)},e.dynCall_iiiiijj=function(){return(e.dynCall_iiiiijj=e.asm.G).apply(null,arguments)},e.dynCall_iiiiiijj=function(){return(e.dynCall_iiiiiijj=e.asm.H).apply(null,arguments)},z=function n(){Jn||Qn(),Jn||(z=n)},e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return Qn(),n.ready},i.exports=a;var c=u.exports;const f=function(n,t){for(var r=0;r<t.length;r++){const e=t[r];if("string"!=typeof e&&!Array.isArray(e))for(const t in e)if("default"!==t&&!(t in n)){const r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:(0,e.g)(c)},[c])}}]);
//# sourceMappingURL=662.2720760c.chunk.js.map