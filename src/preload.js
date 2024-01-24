(()=>{"use strict";var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{createDirectory:()=>g,createWriteStream:()=>O,deleteDirectory:()=>y,exists:()=>m,getRealPath:()=>b,getStats:()=>L,readDirectory:()=>h,readFile:()=>f,rename:()=>w,renameSync:()=>R,rm:()=>S,rmSync:()=>E,unlinkSync:()=>D,watch:()=>v,writeFile:()=>p});var t={};e.r(t),e.d(t,{ipcRenderer:()=>F,shell:()=>i.shell});var n={};e.r(n),e.d(n,{createHash:()=>j,randomBytes:()=>x});var o={};e.r(o),e.d(o,{compileFunction:()=>U});var c={};e.r(c),e.d(c,{crypto:()=>n,electron:()=>t,filesystem:()=>r,https:()=>A,nativeFetch:()=>I,net:()=>G,os:()=>W,path:()=>$,vm:()=>o});const i=require("electron");function s(e){const r=[];for(const t in e)r.push(t);return r}function a(e,r={},t){return Array.isArray(t)||(t=s(e)),t.reduce(((r,t)=>("object"!=typeof e[t]||Array.isArray(e[t])||null===e[t]?"function"==typeof e[t]?r[t]=e[t].bind(e):r[t]=e[t]:r[t]=a(e[t],{}),r)),r)}const d=a(process,{},s(process).filter((e=>"config"!==e))),u=require("fs"),l={err:"error",error:"error",dbg:"debug",debug:"debug",log:"log",warn:"warn",info:"info"};class Logger{static stacktrace(e,r,t){console.error(`%c[${e}]%c ${r}\n\n%c`,"color: #3a71c1; font-weight: 700;","color: red; font-weight: 700;","color: red;",t)}static err(e,...r){Logger._log(e,r,"error")}static error(e,...r){Logger._log(e,r,"error")}static warn(e,...r){Logger._log(e,r,"warn")}static info(e,...r){Logger._log(e,r,"info")}static debug(e,...r){Logger._log(e,r,"debug")}static log(e,...r){Logger._log(e,r)}static _log(e,r,t="log"){t=Logger.parseType(t),Array.isArray(r)||(r=[r]),console[t](`%c[BetterDiscord]%c [${e}]%c`,"color: #3E82E5; font-weight: 700;","color: #3a71c1;","",...r)}static parseType(e){return l[e]||"log"}}function f(e,r="utf8"){return u.readFileSync(e,r)}function p(e,r,t){r instanceof Uint8Array&&(r=Buffer.from(r));return(t?.originalFs?require("original-fs").writeFileSync:u.writeFileSync)(e,r,t)}function h(e,r){return u.readdirSync(e,r)}function g(e,r){return u.mkdirSync(e,r)}function y(e,r){u.rmdirSync(e,r)}function m(e){return u.existsSync(e)}function b(e,r){return u.realpathSync(e,r)}function w(e,r){return u.renameSync(e,r)}function R(e,r){return u.renameSync(e,r)}function S(e){return u.rmSync(e)}function E(e){return u.rmSync(e)}function D(e){return u.unlinkSync(e)}function O(e,r){return a(u.createWriteStream(e,r))}function v(e,r,t){const n=u.watch(e,r,((e,r)=>{try{t(e,r)}catch(e){Logger.stacktrace("filesystem","Failed to watch path",e)}}));return{close:()=>{n.close()}}}function L(e,r){const t=u.statSync(e,r);return{...t,isFile:t.isFile.bind(t),isDirectory:t.isDirectory.bind(t),isSymbolicLink:t.isSymbolicLink.bind(t)}}const T=require("https"),q=new Set([301,302,307,308]),k=["statusCode","statusMessage","url","headers","method","aborted","complete","rawHeaders","end"],B=(e,r,t,n)=>{const o=T.request(e,Object.assign({method:"GET"},r),(c=>{if(q.has(c.statusCode)&&c.headers.location){const o=new URL(c.headers.location);for(const[r,t]of new URL(e).searchParams.entries())o.searchParams.set(r,t);return B(o.toString(),r,t,n)}const i=[];let s=null;n(c,o),c.addListener("error",(e=>{s=e})),c.addListener("data",(e=>{i.push(e)})),c.addListener("end",(()=>{const e=Object.fromEntries(k.map((e=>[e,c[e]])));t(s,e,Buffer.concat(i)),o.end()}))}));if(r.formData)try{o.write(r.formData)}finally{o.end()}else o.end()},P=function(e,r,t){let n=null,o=null,c=null;return B(e,r,t,((e,r)=>{o=e,n=r,c&&r.pipe(c)})),{end(){o?.end()},pipe(e){n?n.pipe(e):c=e}}},A=Object.assign({request:P},Object.fromEntries(["get","put","post","delete","head"].map((e=>[e,function(){return arguments[1]??={},arguments[1].method??=e.toUpperCase(),Reflect.apply(P,this,arguments)}])))),F={send:i.ipcRenderer.send.bind(i.ipcRenderer),sendToHost:i.ipcRenderer.sendToHost.bind(i.ipcRenderer),sendTo:i.ipcRenderer.sendTo.bind(i.ipcRenderer),sendSync:i.ipcRenderer.sendSync.bind(i.ipcRenderer),invoke:i.ipcRenderer.invoke.bind(i.ipcRenderer),on:i.ipcRenderer.on.bind(i.ipcRenderer),off:i.ipcRenderer.off.bind(i.ipcRenderer)},_=(()=>{let e=null;return()=>e||(e=require("crypto"))})();function j(e){const r=_().createHash(e),t={update:e=>(r.update(e),t),digest:e=>r.digest(e)};return t}function x(e){return _().randomBytes(e)}const C=require("vm");var M=e.n(C);function U(e,r=[],t={}){try{return M().compileFunction(e,r,t)}catch(e){return{name:e.name,message:e.message,stack:e.stack}}}const N=require("http"),H=new Set([301,302,307,308]);function I(e,r){let t="PENDING";const n={content:[],headers:null,statusCode:null,url:e,statusText:"",redirected:!1},o=new Set,c=new Set,i=(e,r,s=0)=>{const a=("http:"===e.protocol?N:T).request(e.href,{headers:r.headers??{},method:r.method??"GET",timeout:r.timeout??3e3},(a=>{if(H.has(a.statusCode)&&a.headers.location&&"manual"!==r.redirect){if(++s>=(r.maxRedirects??20)){t="ABORTED";const e=new Error(`Maximum amount of redirects reached (${r.maxRedirects??20})`);return void c.forEach((r=>r(e)))}let n;try{n=new URL(a.headers.location)}catch(e){return t="ABORTED",void c.forEach((r=>r(e)))}for(const[r,t]of new URL(e).searchParams.entries())n.searchParams.set(r,t);return i(n,r,s)}a.on("data",(e=>n.content.push(e))),a.on("end",(()=>{n.content=Buffer.concat(n.content),n.headers=a.headers,n.statusCode=a.statusCode,n.url=e.toString(),n.statusText=a.statusMessage,n.redirected=s>0,t="DONE",o.forEach((e=>e()))})),a.on("error",(e=>{t="ABORTED",c.forEach((r=>r(e)))}))}));if(a.on("timeout",(()=>{const e=new Error("Request timed out");a.destroy(e)})),a.on("error",(e=>{t="ABORTED",c.forEach((r=>r(e)))})),r.body)try{a.write(r.body)}catch(e){t="ABORTED",c.forEach((r=>r(e)))}finally{a.end()}else a.end();r.signal&&r.signal.addEventListener("abort",(()=>{a.end(),t="ABORTED"}))},s=new URL(e);if("http:"!==s.protocol&&"https:"!==s.protocol)throw new Error(`Unsupported protocol: ${s.protocol}`);return i(s,r),{onComplete(e){o.add(e)},onError(e){c.add(e)},readData(){switch(t){case"PENDING":throw new Error("Cannot read data before request is done!");case"ABORTED":throw new Error("Request was aborted.");case"DONE":return n}}}}const $=require("path"),G=require("net"),W=require("os");i.webFrame.top.executeJavaScript("("+function(){const e="webpackChunkdiscord_app";Reflect.has(window,e)||function(e,r,t){const n=e[r];Object.defineProperty(e,r,{get:()=>n,set(n){Object.defineProperty(e,r,{value:n,configurable:!0,enumerable:!0,writable:!0});try{t(n)}catch(e){console.error(e)}return n},configurable:!0})}(window,e,(e=>{e.push([[Symbol()],{},e=>{e.d=(e,r)=>{for(const t in r)if(Reflect.has(r,t))try{Object.defineProperty(e,t,{get:()=>r[t](),set:e=>{r[t]=()=>e},enumerable:!0,configurable:!0})}catch(e){console.error(e)}}}])}))}+")()");let J=!1;i.contextBridge.exposeInMainWorld("process",d),i.contextBridge.exposeInMainWorld("BetterDiscordPreload",(()=>J?null:(J=!0,c))),function(){const e=process.env.DISCORD_PRELOAD;if(e){i.ipcRenderer.send("bd-register-preload",e);try{const r=process.kill;process.kill=function(){},require(e),process.kill=r}catch(e){}}}()})();