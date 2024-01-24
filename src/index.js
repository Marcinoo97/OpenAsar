const {join}=require('path');global.log=(area,...args)=>console.log(`[\x1b[38;2;88;101;242mOpenAsar\x1b[0m > ${area}]`,...args);global.oaVersion='nightly-4f264d8';log('Init','OpenAsar',oaVersion);if(process.resourcesPath.startsWith('/usr/lib/electron'))global.systemElectron=true;process.resourcesPath=join(__dirname,'..');const paths=require('./paths');paths.init();global.settings=require('./appSettings').getSettings();global.oaConfig=settings.get('openasar',{});require('./cmdSwitches')();const M=require('module');const b=join(paths.getExeDir(),'modules');if(process.platform==='win32')try{for(const m of require('fs').readdirSync(b))M.globalPaths.unshift(join(b,m));}catch{log('Init','Failed to QS globalPaths')}const rlp=M._resolveLookupPaths;M._resolveLookupPaths=(request,parent)=>{if(parent?.paths?.length>0)parent.paths=parent.paths.concat(M.globalPaths);return rlp(request,parent);};if(process.argv.includes('--overlay-host')){require('discord_overlay2/standalone_host.js');}else {require('./bootstrap')();}(()=>{"use strict";var e={876:(e,s,n)=>{n.d(s,{E2:()=>o,ML:()=>p,Nb:()=>g,O8:()=>u,RK:()=>i,V7:()=>d,WH:()=>c,Xc:()=>h,Z6:()=>t,dO:()=>v,fx:()=>f,nb:()=>w,qp:()=>r,r9:()=>a,ru:()=>l});const t="bd-relaunch-app",r="bd-get-path",o="bd-run-script",i="bd-did-navigate-in-page",a="bd-open-devtools",c="bd-close-devtools",l="bd-toggle-devtools",d="bd-open-window",p="bd-inspect-element",u="bd-minimum-size",h="bd-window-size",g="bd-remove-devtools-message",w="bd-open-dialog",v="bd-register-preload",f="bd-get-accent-color"},822:(e,s,n)=>{n.d(s,{Z:()=>BetterDiscord});var t=n(618),r=n.n(t),o=n(410),i=n.n(o),a=n(827),c=n.n(a);const l="fmkadmapgofadopljbjfkapdkoienihi",d=e=>{const s=r().readdirSync(e);return i().resolve(e,s[s.length-1])},p=e=>{const s=i().resolve(e,"extensions",l);if(r().existsSync(s))return r().existsSync(i().resolve(s,"manifest.json"))?s:d(s);let n="";if(n="win32"===process.platform?i().resolve(process.env.LOCALAPPDATA,"Google/Chrome/User Data"):"linux"===process.platform?i().resolve(process.env.HOME,".config/google-chrome"):"darwin"===process.platform?i().resolve(process.env.HOME,"Library/Application Support/Google/Chrome"):i().resolve(process.env.HOME,".config/chromium"),r().existsSync(n+"/Default"))n+=`/Default/Extensions/${l}`;else{const e=r().readdirSync(n).filter((e=>e.startsWith("Profile")&&!e.endsWith("store")));let s=!1;for(const t of e){const e=`${n}/${t}/Extensions/${l}`;if(r().existsSync(e)){n=e,s=!0;break}}if(!s)return""}r().existsSync(n)&&(n=d(n));return r().existsSync(n)?n:""};var u=n(876);const h=c().app.getAppPath(),g=i().resolve(h,"..","build_info.json");let w="";w="win32"===process.platform||"darwin"===process.platform?i().join(c().app.getPath("userData"),".."):process.env.XDG_CONFIG_HOME?process.env.XDG_CONFIG_HOME:i().join(process.env.HOME,".config"),w=i().join(w,"BetterDiscord")+"/";let v=!1;class BetterDiscord{static getWindowPrefs(){if(!r().existsSync(g))return{};const e=require(g),s=i().resolve(w,"data",e.releaseChannel,"windowprefs.json");return r().existsSync(s)?require(s):{}}static getSetting(e,s){if(this._settings)return this._settings[e]?.[s];try{const n=require(g),t=i().resolve(w,"data",n.releaseChannel,"settings.json");return this._settings=require(t)??{},this._settings[e]?.[s]}catch(n){return this._settings={},this._settings[e]?.[s]}}static ensureDirectories(){r().existsSync(w)||r().mkdirSync(w),r().existsSync(i().join(w,"plugins"))||r().mkdirSync(i().join(w,"plugins")),r().existsSync(i().join(w,"themes"))||r().mkdirSync(i().join(w,"themes"))}static async injectRenderer(e){const s=i().join(__dirname,"renderer.js");if(!r().existsSync(s))return;const n=r().readFileSync(s).toString();await e.webContents.executeJavaScript(`\n            (() => {\n                try {\n                    ${n}\n                    return true;\n                } catch(error) {\n                    console.error(error);\n                    return false;\n                }\n            })();\n            //# sourceURL=betterdiscord/renderer.js\n        `)}static setup(e){try{process.env.DISCORD_RELEASE_CHANNEL=require(g).releaseChannel}catch(e){process.env.DISCORD_RELEASE_CHANNEL="stable"}process.env.DISCORD_PRELOAD=e.__originalPreload,process.env.DISCORD_APP_PATH=h,process.env.DISCORD_USER_DATA=c().app.getPath("userData"),process.env.BETTERDISCORD_DATA_PATH=w,e.webContents.on("dom-ready",(()=>{if(!v)return this.injectRenderer(e);c().dialog.showMessageBox({title:"Discord Crashed",type:"warning",message:"Something crashed your Discord Client",detail:"BetterDiscord has automatically disabled itself just in case. To enable it again, restart Discord or click the button below.\n\nThis may have been caused by a plugin. Try moving all of your plugins outside the plugin folder and see if Discord still crashed.",buttons:["Try Again","Open Plugins Folder","Cancel"]}).then((e=>{0===e.response&&(c().app.relaunch(),c().app.exit()),1===e.response&&c().shell.openPath(i().join(w,"plugins"))})),v=!1})),e.webContents.on("did-navigate-in-page",(()=>{e.webContents.send(u.RK)})),e.webContents.on("render-process-gone",(()=>{v=!0}))}static disableMediaKeys(){if(!BetterDiscord.getSetting("general","mediaKeys"))return;const e=c().app.commandLine.getSwitchValue("disable-features")||"";c().app.commandLine.appendSwitch("disable-features",(e?",":"")+"HardwareMediaKeyHandling,MediaSessionService")}}BetterDiscord.getSetting("developer","reactDevTools")&&c().app.whenReady().then((async()=>{await class ReactDevTools{static async install(e){const s=p(e);if(s)try{if(!await a.session.defaultSession.loadExtension(s))return}catch(e){}}static async remove(e){const s=p(e);if(s)try{await a.session.defaultSession.removeExtension(s)}catch(e){}}}.install(w)}))},827:e=>{e.exports=require("electron")},618:e=>{e.exports=require("fs")},410:e=>{e.exports=require("path")}},s={};function n(t){var r=s[t];if(void 0!==r)return r.exports;var o=s[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return n.d(s,{a:s}),s},n.d=(e,s)=>{for(var t in s)n.o(s,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})},n.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e=n(827),s=n.n(e),t=n(410),r=n.n(t),o=n(618),i=n.n(o),a=n(876);const c=(s,n)=>{let t;switch(n){case"appPath":t=e.app.getAppPath();break;case"appData":case"userData":case"home":case"cache":case"temp":case"exe":case"module":case"desktop":case"documents":case"downloads":case"music":case"pictures":case"videos":case"recent":case"logs":t=e.app.getPath(n);break;default:t=""}s.returnValue=t},l=()=>{e.app.quit(),e.app.relaunch()},d=async(e,s)=>{try{await e.sender.executeJavaScript(`(() => {try {${s}} catch {}})();`)}catch(e){}},p=e=>e.sender.openDevTools(),u=e=>e.sender.closeDevTools(),h=e=>{e.sender.isDevToolsOpened()?u(e):p(e)},g=(s,n,{windowOptions:t,closeOnUrl:r}={})=>new Promise((s=>{const o=new e.BrowserWindow(t);o.webContents.on("did-navigate",((e,n)=>{n==r&&(o.close(),s())})),o.loadURL(n)})),w=async e=>{if(!e.sender.isDevToolsOpened())for(e.sender.openDevTools();!e.sender.isDevToolsOpened();)await new Promise((e=>setTimeout(e,100)));e.sender.devToolsWebContents.executeJavaScript("DevToolsAPI.enterInspectElementMode();")},v=(s,n,t)=>{e.BrowserWindow.fromWebContents(s.sender).setMinimumSize(n,t)},f=(s,n,t)=>{e.BrowserWindow.fromWebContents(s.sender).setSize(n,t)},m=()=>e.systemPreferences.getAccentColor()||"",y=e=>e.sender.removeAllListeners("devtools-opened"),b=(s,n={})=>{const{mode:t="open",openDirectory:r=!1,openFile:o=!0,multiSelections:i=!1,filters:a,promptToCreate:c=!1,defaultPath:l,title:d,showOverwriteConfirmation:p,message:u,showHiddenFiles:h,modal:g=!1}=n,w={open:e.dialog.showOpenDialog,save:e.dialog.showSaveDialog}[t];return w?w.apply(e.dialog,[g&&e.BrowserWindow.fromWebContents(s.sender),{defaultPath:l,filters:a,title:d,message:u,createDirectory:!0,properties:[h&&"showHiddenFiles",r&&"openDirectory",c&&"promptToCreate",r&&"openDirectory",o&&"openFile",i&&"multiSelections",p&&"showOverwriteConfirmation"].filter((e=>e))}].filter((e=>e))):Promise.resolve({error:"Unkown Mode: "+t})},S=(s,n)=>{e.app.commandLine.appendSwitch("preload",n)};var D=n(822);class BrowserWindow extends s().BrowserWindow{constructor(e){if(!(e&&e.webPreferences&&e.webPreferences.preload&&e.title))return super(e);const s=e.webPreferences.preload;e.webPreferences.preload=r().join(__dirname,"preload.js");const n=D.Z.getSetting("window","transparency");"boolean"==typeof n&&n&&(e.transparent=!0,e.backgroundColor="#00000000"),super(e),this.__originalPreload=s,D.Z.setup(this)}}Object.assign(BrowserWindow,s().BrowserWindow);const O=e.app.getAppPath(),_=r().resolve(O,"..","app");if(i().existsSync(_)&&(i().rmdirSync(_,{recursive:!0}),e.app.quit(),e.app.relaunch()),!process.argv.includes("--vanilla")){process.env.NODE_OPTIONS="--no-force-async-hooks-checks",e.app.commandLine.appendSwitch("no-force-async-hooks-checks"),class{static patchBrowserWindow(){const e=require.resolve("electron");delete require.cache[e].exports,require.cache[e].exports={...s(),BrowserWindow}}}.patchBrowserWindow(),class IPCMain{static registerEvents(){try{e.ipcMain.on(a.qp,c),e.ipcMain.on(a.Z6,l),e.ipcMain.on(a.r9,p),e.ipcMain.on(a.WH,u),e.ipcMain.on(a.ru,h),e.ipcMain.on(a.ML,w),e.ipcMain.on(a.O8,v),e.ipcMain.on(a.Xc,f),e.ipcMain.on(a.Nb,y),e.ipcMain.on(a.dO,S),e.ipcMain.handle(a.fx,m),e.ipcMain.handle(a.E2,d),e.ipcMain.handle(a.nb,b),e.ipcMain.handle(a.V7,g)}catch(e){console.error(e)}}}.registerEvents();try{(class{static remove(){s().session.defaultSession.webRequest.onHeadersReceived((function(e,s){const n=Object.keys(e.responseHeaders);for(let s=0;s<n.length;s++){const t=n[s];0===t.toLowerCase().indexOf("content-security-policy")&&delete e.responseHeaders[t]}s({cancel:!1,responseHeaders:e.responseHeaders})}))}}).remove()}catch(e){}}try{let e;Object.defineProperty(global,"appSettings",{get:()=>e,set(s){s.hasOwnProperty("settings")||(s.settings={}),s.settings.DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING=!0,e=s}})}catch(e){}if(!process.argv.includes("--vanilla")){n(822).Z.disableMediaKeys()}})()})();