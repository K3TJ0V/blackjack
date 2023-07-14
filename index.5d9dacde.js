// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iNGHL":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ee62429a5d9dacde";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1Z4Rq":[function(require,module,exports) {
var _normalizeCss = require("normalize.css");
var _mainScss = require("../scss/main.scss");
var _imagesURLs = require("./imagesURLs");
const startButton = document.querySelector(".startButton-js");
const playerTable = document.querySelector(".playerSide--js");
const botTable = document.querySelector(".botSide--js");
const playerSide = document.querySelector(".playerCardsHolder");
const botSide = document.querySelector(".botCardsHolder");
const cardTemplate = document.querySelector("#cardTemplate");
const hitButton = document.querySelector(".hit-js");
const passButton = document.querySelector(".pass-js");
const cash = document.querySelector(".cash-js");
const betChosenAmount = document.querySelector(".main__bet--amount");
const clearingBet = document.querySelector(".betButton__0");
const maxBetButton = document.querySelector(".betButton__MAX");
const betButtonsContainer = document.querySelector(".main__bet");
const betApplyButton = document.querySelector(".main__bet--apply");
const loseScreen = document.querySelector(".loseScreen");
const winScreen = document.querySelector(".winScreen");
const tieScreen = document.querySelector(".tieScreen");
const blackjackScreen = document.querySelector(".blackjackEvent");
let balance = parseInt(cash.innerHTML.substring(1, cash.innerHTML.length));
let maxCardValue = 0;
let betButtons = [];
let betValue = 0;
let maxBet = balance;
// creating deck of cards
let deck = [];
let higherCardRanks = [
    "ace",
    "jack",
    "queen",
    "king"
];
// bot,player hands
let playerHand = [];
let botHand = [];
// board value containers
let botCardsValue = 0;
let playerCardsValue = 0;
// reverted bot card
let revertBotCard;
class Card {
    constructor(rank, value, color, imgURL){
        this.rank = rank;
        this.value = value;
        this.color = color;
        this.imgURL = imgURL;
    }
}
// shuffling function
function shuffleDeck(deck) {
    for(let i = deck.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [
            deck[j],
            deck[i]
        ];
    }
}
// function to create new deck
function deckCreation() {
    for(let i = 2; i < 16; i++){
        if (i < 11) {
            // creating lower ranked cards 1-10
            deck.push(new Card(i, i, "heart", "heart_" + i));
            deck.push(new Card(i, i, "clubs", "clubs_" + i));
            deck.push(new Card(i, i, "diamonds", "diamonds_" + i));
            deck.push(new Card(i, i, "spades", "spades_" + i));
        } else if (i > 11) {
            if (higherCardRanks[i - 12] != "ace") {
                // creating higher ranked cards without ace in this block
                deck.push(new Card(higherCardRanks[i - 12], 10, "heart", "heart_" + higherCardRanks[i - 12]));
                deck.push(new Card(higherCardRanks[i - 12], 10, "clubs", "clubs_" + higherCardRanks[i - 12]));
                deck.push(new Card(higherCardRanks[i - 12], 10, "diamonds", "diamonds_" + higherCardRanks[i - 12]));
                deck.push(new Card(higherCardRanks[i - 12], 10, "spades", "spades_" + higherCardRanks[i - 12]));
            } else {
                // adding aces with different value
                deck.push(new Card(higherCardRanks[i - 12], 11, "heart", "heart_" + higherCardRanks[i - 12]));
                deck.push(new Card(higherCardRanks[i - 12], 11, "clubs", "clubs_" + higherCardRanks[i - 12]));
                deck.push(new Card(higherCardRanks[i - 12], 11, "diamonds", "diamonds_" + higherCardRanks[i - 12]));
                deck.push(new Card(higherCardRanks[i - 12], 11, "spades", "spades_" + higherCardRanks[i - 12]));
            }
        }
    }
}
// standalone function to hit card so the code looks more elegant :)
function hitCard(side, cardsValue, hand) {
    let newHittedCard = deck.shift();
    hand.push(newHittedCard);
    let newCard = cardTemplate.content.cloneNode(true);
    let img = newCard.querySelector(".card");
    img.src = newHittedCard.imgURL;
    img.classList.add("cardPopIn");
    cardsValue += newHittedCard.value;
    side.appendChild(img);
    if (side.childElementCount > 3) side.classList.add("cardsFoldingClass");
    for(let i = 0; i < hand.length; i++)if (hand[i].value == 11) {
        hand[i].value = 1;
        cardsValue = cardsValue - 10;
    }
    return cardsValue;
}
// first function to start a round loop
function startOfTheGame() {
    hitButton.style.pointerEvents = "auto";
    passButton.style.pointerEvents = "auto";
    // first draw
    let startCards = [];
    let firstBotCard = deck.shift();
    botCardsValue += firstBotCard.value;
    let secondBotCard = deck.shift();
    botCardsValue += secondBotCard.value;
    // cloning card object to save its native imgURL
    revertBotCard = {
        ...secondBotCard
    };
    secondBotCard.imgURL = _imagesURLs.default["revert"];
    //
    let firstPlayerCard = deck.shift();
    playerCardsValue += firstPlayerCard.value;
    let secondPlayerCard = deck.shift();
    playerCardsValue += secondPlayerCard.value;
    startCards.push(firstBotCard, secondBotCard, firstPlayerCard, secondPlayerCard);
    botHand.push(firstBotCard, secondBotCard);
    playerHand.push(firstPlayerCard, secondPlayerCard);
    //appending first 2 cards each side
    for(let i = 0; i < 4; i++){
        let newCard = cardTemplate.content.cloneNode(true);
        let img = newCard.querySelector(".card");
        img.src = startCards[i].imgURL;
        img.classList.add("cardPopIn");
        if (i < 2) botSide.appendChild(img);
        else playerSide.appendChild(img);
    }
}
// reset game function
function resetGame() {
    playerSide.innerHTML = "";
    botSide.innerHTML = "";
    betValue = 0;
    playerCardsValue = 0;
    botCardsValue = 0;
    playerHand = [];
    botHand = [];
    deck = [];
    betButtonsContainer.style.transform = "scale(1)";
}
// declaring final result of the game functions
function blackjack() {
    blackjackScreen.style.transform = "scale(1)";
    if (playerCardsValue == 21) {
        balance = balance + 2 * betValue;
        cash.innerHTML = "$" + balance;
        setTimeout(()=>{
            // reseting game memory and going back to the beginning
            blackjackScreen.style.transform = "scale(0)";
            resetGame();
        }, 3000);
    }
    setTimeout(()=>{
        // reseting game memory and going back to the beginning
        loseScreen.style.transform = "scale(0)";
        resetGame();
    }, 3000);
}
function gameWin() {
    winScreen.style.transform = "scale(1)";
    balance = balance + 2 * betValue;
    cash.innerHTML = "$" + balance;
    setTimeout(()=>{
        // reseting game memory and going back to the beginning
        winScreen.style.transform = "scale(0)";
        resetGame();
    }, 3000);
}
function gameLose() {
    loseScreen.style.transform = "scale(1)";
    setTimeout(()=>{
        // reseting game memory and going back to the beginning
        loseScreen.style.transform = "scale(0)";
        resetGame();
    }, 3000);
}
function gameTie() {
    tieScreen.style.transform = "scale(1)";
    balance = balance + betValue;
    setTimeout(()=>{
        // reseting game memory and going back to the beginning
        tieScreen.style.transform = "scale(0)";
        resetGame();
    }, 3000);
}
/* counting how many cards could fit in botSide, 
   returning an array of all possibilities
*/ function correctCardsPicker(deckOfCards, highEnd) {
    let possibleCards = [];
    deckOfCards.forEach((card)=>{
        if (card.value <= highEnd) possibleCards.push(card);
    });
    return possibleCards;
}
// full bot turn
function botInteligence(highEnd) {
    let randomShot = Math.random();
    let possibleCards = correctCardsPicker(deck, highEnd);
    let probability = possibleCards.length / deck.length;
    // logical move. if bot is losing, it obviously hit card to try to win
    if (playerCardsValue > botCardsValue) {
        let hitting = setTimeout(()=>{
            hitCard(botSide, botCardsValue, botHand);
        }, 300);
        botCardsValue = hitting;
        if (botCardsValue > 21) return "end";
        return "repeat";
    } else if (botCardsValue > playerCardsValue) return "end";
    // bot hitting if its profitable to risk hitting a card
    if (probability >= randomShot) {
        let hitting = hitCard(botSide, botCardsValue, botHand);
        botCardsValue = hitting;
        if (botCardsValue > 21) {
            botHand.forEach((e)=>{
                if (e.value == 11) {
                    e.value;
                    botCardsValue = botCardsValue - 10;
                    return "repeat";
                }
            });
            return "end";
        }
        return "repeat";
    }
    return "end";
}
function botTurn() {
    // removing reverted card and appending its reflection with object saved before
    botSide.lastChild.remove();
    let newCard = cardTemplate.content.cloneNode(true);
    let img = newCard.querySelector(".card");
    img.classList.remove("cardPopIn");
    img.src = _imagesURLs.default[revertBotCard.color + "_" + revertBotCard.rank];
    botSide.appendChild(img);
    img.classList.add("rotated");
    if (botCardsValue == 21) {
        blackjack();
        return;
    }
    maxCardValue = 21 - botCardsValue;
    let startBotRound = botInteligence(maxCardValue);
    if (startBotRound == "repeat") botInteligence(maxCardValue);
    else if (startBotRound == "end") return;
}
startButton.addEventListener("click", ()=>{
    startButton.style.transform = "scale(0)";
    playerTable.classList.add("cardHoldersActivated");
    botTable.classList.add("cardHoldersActivated");
    // showing buttons and balance
    setTimeout(()=>{
        startButton.style.display = "none";
        hitButton.style.transform = "scale(1)";
    }, 500);
    setTimeout(()=>{
        cash.style.transform = "scale(1)";
    }, 1000);
    setTimeout(()=>{
        passButton.style.transform = "scale(1)";
    }, 1500);
    setTimeout(()=>{
        betButtonsContainer.style.transform = "scale(1)";
    }, 2000);
});
// donwloading all bet buttons
for(let i = 1; i < 1001; i = i * 10){
    let x = document.querySelector(".betButton__add" + i);
    betButtons.push(x);
    let y = document.querySelector(".betButton__less" + i);
    betButtons.push(y);
}
// setting bet buttons eventlisteners
betButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        // extracting button text and using only a number
        let innerString = e.target.innerHTML;
        let buttonValue = innerString.substring(1, 5);
        if (innerString.substring(1, -1) == "-") {
            // x is a parsed text from button for ex. 1, 10
            let x = parseInt(buttonValue);
            let newValue = betValue - x;
            // error handling (can't set negative value)
            if (newValue < 0) {
                newValue = 0;
                betValue = newValue;
                betChosenAmount.innerText = newValue;
                return newValue;
            }
            betChosenAmount.innerText = newValue;
            betValue = newValue;
        } else {
            // x is a parsed text from button for ex. 1, 10
            let x = parseInt(buttonValue);
            let newValue = betValue + x;
            // error handling (can't set value that's out of balance)
            if (newValue > maxBet) {
                newValue = maxBet;
                betValue = newValue;
                betChosenAmount.innerText = newValue;
                return newValue;
            }
            betChosenAmount.innerHTML = newValue;
            betValue = newValue;
        }
    });
});
// the rest buttons logic clearing bet and setting max value available 
maxBetButton.addEventListener("click", ()=>{
    betValue = maxBet;
    betChosenAmount.innerHTML = betValue;
});
clearingBet.addEventListener("click", ()=>{
    betValue = 0;
    betChosenAmount.innerHTML = betValue;
});
betApplyButton.addEventListener("click", ()=>{
    if (betValue == 0) return;
    betButtonsContainer.style.transform = "scale(0)";
    balance = balance - parseInt(betChosenAmount.innerHTML);
    cash.innerHTML = "$" + balance;
    maxBet = balance;
    betChosenAmount.innerHTML = 0;
    deckCreation();
    deck.forEach((card)=>{
        card.imgURL = _imagesURLs.default[card.imgURL];
    });
    shuffleDeck(deck);
    hitButton.style.opacity = 1;
    passButton.style.opacity = 1;
    startOfTheGame();
    if (playerCardsValue == 21) blackjack();
});
hitButton.addEventListener("click", ()=>{
    let hitting = hitCard(playerSide, playerCardsValue, playerHand);
    playerCardsValue = hitting;
    if (playerCardsValue > 21) {
        hitButton.style.opacity = 0.4;
        passButton.style.opacity = 0.4;
        hitButton.style.pointerEvents = "none";
        passButton.style.pointerEvents = "none";
        setTimeout(()=>{
            gameLose();
        }, 1000);
    }
});
function gameResultCheck() {
    setTimeout(()=>{
        if (botCardsValue > 21) gameWin();
        else if (botCardsValue > playerCardsValue) gameLose();
        else if (playerCardsValue > botCardsValue) gameWin();
        else gameTie();
    }, 2000);
}
passButton.addEventListener("click", ()=>{
    botSide.lastChild.classList.remove("cardPopIn");
    botSide.lastChild.classList.add("firstRotate");
    hitButton.style.opacity = 0.4;
    passButton.style.opacity = 0.4;
    hitButton.style.pointerEvents = "none";
    passButton.style.pointerEvents = "none";
    setTimeout(()=>{
        botTurn();
        gameResultCheck();
    }, 200);
});

},{"normalize.css":"eLmrl","../scss/main.scss":"enkJa","./imagesURLs":"bcSSk"}],"eLmrl":[function() {},{}],"enkJa":[function() {},{}],"bcSSk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const images = {
    "diamonds_2": new URL(require("227de084d9d655b9")),
    "diamonds_3": new URL(require("413a149841a0159c")),
    "diamonds_4": new URL(require("1ba24ecfbba8546b")),
    "diamonds_5": new URL(require("2fabf7e185e46f3")),
    "diamonds_6": new URL(require("85d9c9af97cafec5")),
    "diamonds_7": new URL(require("ae316c2b1f18fbcc")),
    "diamonds_8": new URL(require("9d3148e8a04dd4df")),
    "diamonds_9": new URL(require("800c96c41ead0849")),
    "diamonds_10": new URL(require("1d4369626c6dc8be")),
    "diamonds_jack": new URL(require("5acb0f5a6ea35cbd")),
    "diamonds_queen": new URL(require("204eaf2be68fb02f")),
    "diamonds_king": new URL(require("a68ebed66efd7627")),
    "diamonds_ace": new URL(require("771a4755d52e1c07")),
    "clubs_2": new URL(require("a52c58376fcbbafe")),
    "clubs_3": new URL(require("19cdcf75f2c4a252")),
    "clubs_4": new URL(require("a3a2d706b6317c9c")),
    "clubs_5": new URL(require("c2743b23a722b04f")),
    "clubs_6": new URL(require("b32de2c843bf57d4")),
    "clubs_7": new URL(require("c707b14b76bbbd90")),
    "clubs_8": new URL(require("d0dfd0c880a23b30")),
    "clubs_9": new URL(require("a145e46a4d739ff8")),
    "clubs_10": new URL(require("c88db4f013eeebc7")),
    "clubs_jack": new URL(require("e8e773490017374")),
    "clubs_queen": new URL(require("63e55c2968ae250b")),
    "clubs_king": new URL(require("db6ae8cffdb2ca54")),
    "clubs_ace": new URL(require("fe5986250324cc88")),
    "spades_2": new URL(require("a2ae581f52555f99")),
    "spades_3": new URL(require("944467f70fb08d27")),
    "spades_4": new URL(require("b3e5f7683d00a9c8")),
    "spades_5": new URL(require("792dd4a13d80b214")),
    "spades_6": new URL(require("ee53ae730d443ea8")),
    "spades_7": new URL(require("51421f5713d38cc7")),
    "spades_8": new URL(require("561d9354cb152334")),
    "spades_9": new URL(require("a6cfdb8fa6cf9cdf")),
    "spades_10": new URL(require("75ac47034a098d6f")),
    "spades_jack": new URL(require("27617b20250ede0e")),
    "spades_queen": new URL(require("90e199f6a12817a6")),
    "spades_king": new URL(require("6a2f7c969bc7e463")),
    "spades_ace": new URL(require("909750890d6f194c")),
    "heart_2": new URL(require("ab2b9408dbb9445a")),
    "heart_3": new URL(require("225c96a82cb28ea2")),
    "heart_4": new URL(require("f1c745fc93a11d8c")),
    "heart_5": new URL(require("8613f8ee6f9e80fa")),
    "heart_6": new URL(require("f88b7ffee4f28cad")),
    "heart_7": new URL(require("85359a1085d44de2")),
    "heart_8": new URL(require("6fb74edd60158b28")),
    "heart_9": new URL(require("3d294f95fc055a73")),
    "heart_10": new URL(require("2b3cd4d1cda81428")),
    "heart_jack": new URL(require("11ab3249e9f2afa0")),
    "heart_queen": new URL(require("cc5ae83c66cc9dfd")),
    "heart_king": new URL(require("7cc7b697c18e3c97")),
    "heart_ace": new URL(require("ba96d8bf8b4baf62")),
    "revert": new URL(require("891017837b0bd0af"))
};
exports.default = images;

},{"227de084d9d655b9":"iESWw","413a149841a0159c":"aoYRG","1ba24ecfbba8546b":"hi2o7","2fabf7e185e46f3":"eD5JI","85d9c9af97cafec5":"hkutn","ae316c2b1f18fbcc":"anG3t","9d3148e8a04dd4df":"9qpzB","800c96c41ead0849":"4XiLZ","1d4369626c6dc8be":"7UYts","5acb0f5a6ea35cbd":"dTPVc","204eaf2be68fb02f":"iNUjy","a68ebed66efd7627":"e8uts","771a4755d52e1c07":"hYU6A","a52c58376fcbbafe":"Jw3rZ","19cdcf75f2c4a252":"3gQbJ","a3a2d706b6317c9c":"4Pmqf","c2743b23a722b04f":"fDS1e","b32de2c843bf57d4":"ewK78","c707b14b76bbbd90":"dnukD","d0dfd0c880a23b30":"ki9VC","a145e46a4d739ff8":"97xoE","c88db4f013eeebc7":"lKc2N","e8e773490017374":"5mW5P","63e55c2968ae250b":"gCvgy","db6ae8cffdb2ca54":"6YjE8","fe5986250324cc88":"cxrzZ","a2ae581f52555f99":"5Ycyw","944467f70fb08d27":"fKPdq","b3e5f7683d00a9c8":"hjvmE","792dd4a13d80b214":"f9Ca1","ee53ae730d443ea8":"kw13e","51421f5713d38cc7":"dLpUF","561d9354cb152334":"hBjJT","a6cfdb8fa6cf9cdf":"3ycWz","75ac47034a098d6f":"jiM0E","27617b20250ede0e":"g6Fkr","90e199f6a12817a6":"jFDCT","6a2f7c969bc7e463":"cy2ky","909750890d6f194c":"2QPIX","ab2b9408dbb9445a":"ZQ9AA","225c96a82cb28ea2":"8W2Kq","f1c745fc93a11d8c":"3aoMJ","8613f8ee6f9e80fa":"8Visf","f88b7ffee4f28cad":"53zQp","85359a1085d44de2":"jtit1","6fb74edd60158b28":"aqOSF","3d294f95fc055a73":"gw8N4","2b3cd4d1cda81428":"1ITKJ","11ab3249e9f2afa0":"jW01j","cc5ae83c66cc9dfd":"aZZsl","7cc7b697c18e3c97":"ixN4w","ba96d8bf8b4baf62":"j9skN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","891017837b0bd0af":"251jr"}],"iESWw":[function(require,module,exports) {
module.exports = require("ea06effd345c968f").getBundleURL("ksUvU") + "diamonds_2.24c308b5.svg" + "?" + Date.now();

},{"ea06effd345c968f":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"aoYRG":[function(require,module,exports) {
module.exports = require("c712451450bbedc6").getBundleURL("ksUvU") + "diamonds_3.7d92b320.svg" + "?" + Date.now();

},{"c712451450bbedc6":"lgJ39"}],"hi2o7":[function(require,module,exports) {
module.exports = require("76e1234d698e8027").getBundleURL("ksUvU") + "diamonds_4.aafddb61.svg" + "?" + Date.now();

},{"76e1234d698e8027":"lgJ39"}],"eD5JI":[function(require,module,exports) {
module.exports = require("30a66fde449bc158").getBundleURL("ksUvU") + "diamonds_5.f33da9cf.svg" + "?" + Date.now();

},{"30a66fde449bc158":"lgJ39"}],"hkutn":[function(require,module,exports) {
module.exports = require("8b0d2d1437a43e6b").getBundleURL("ksUvU") + "diamonds_6.9a0a2898.svg" + "?" + Date.now();

},{"8b0d2d1437a43e6b":"lgJ39"}],"anG3t":[function(require,module,exports) {
module.exports = require("4cff6732c0e1f9ae").getBundleURL("ksUvU") + "diamonds_7.e62af2da.svg" + "?" + Date.now();

},{"4cff6732c0e1f9ae":"lgJ39"}],"9qpzB":[function(require,module,exports) {
module.exports = require("a7fe126bc2cee9a9").getBundleURL("ksUvU") + "diamonds_8.0d26971a.svg" + "?" + Date.now();

},{"a7fe126bc2cee9a9":"lgJ39"}],"4XiLZ":[function(require,module,exports) {
module.exports = require("eefcc230c529ff9a").getBundleURL("ksUvU") + "diamonds_9.cde58d98.svg" + "?" + Date.now();

},{"eefcc230c529ff9a":"lgJ39"}],"7UYts":[function(require,module,exports) {
module.exports = require("65bd46104435cde1").getBundleURL("ksUvU") + "diamonds_10.a9c98e9e.svg" + "?" + Date.now();

},{"65bd46104435cde1":"lgJ39"}],"dTPVc":[function(require,module,exports) {
module.exports = require("fe118fafffad6d12").getBundleURL("ksUvU") + "diamonds_jack.07ffdf2c.svg" + "?" + Date.now();

},{"fe118fafffad6d12":"lgJ39"}],"iNUjy":[function(require,module,exports) {
module.exports = require("d52dee503dd8b034").getBundleURL("ksUvU") + "diamonds_queen.adf45be7.svg" + "?" + Date.now();

},{"d52dee503dd8b034":"lgJ39"}],"e8uts":[function(require,module,exports) {
module.exports = require("b8964a24244b9faa").getBundleURL("ksUvU") + "diamonds_king.c9aab073.svg" + "?" + Date.now();

},{"b8964a24244b9faa":"lgJ39"}],"hYU6A":[function(require,module,exports) {
module.exports = require("d9e682d2a4448efc").getBundleURL("ksUvU") + "diamonds_ace.25c0cdaf.svg" + "?" + Date.now();

},{"d9e682d2a4448efc":"lgJ39"}],"Jw3rZ":[function(require,module,exports) {
module.exports = require("3f81e893191aa347").getBundleURL("ksUvU") + "clubs_2.2bbb1f7e.svg" + "?" + Date.now();

},{"3f81e893191aa347":"lgJ39"}],"3gQbJ":[function(require,module,exports) {
module.exports = require("98a9377d48120f93").getBundleURL("ksUvU") + "clubs_3.14bd3451.svg" + "?" + Date.now();

},{"98a9377d48120f93":"lgJ39"}],"4Pmqf":[function(require,module,exports) {
module.exports = require("a302c123baaee847").getBundleURL("ksUvU") + "clubs_4.060f0b57.svg" + "?" + Date.now();

},{"a302c123baaee847":"lgJ39"}],"fDS1e":[function(require,module,exports) {
module.exports = require("6f23b80ba9273bcd").getBundleURL("ksUvU") + "clubs_5.3ee7b235.svg" + "?" + Date.now();

},{"6f23b80ba9273bcd":"lgJ39"}],"ewK78":[function(require,module,exports) {
module.exports = require("66e361311bf335b2").getBundleURL("ksUvU") + "clubs_6.7f7b8d70.svg" + "?" + Date.now();

},{"66e361311bf335b2":"lgJ39"}],"dnukD":[function(require,module,exports) {
module.exports = require("b3bb5747283fdef4").getBundleURL("ksUvU") + "clubs_7.498e6164.svg" + "?" + Date.now();

},{"b3bb5747283fdef4":"lgJ39"}],"ki9VC":[function(require,module,exports) {
module.exports = require("d450f870d4d89626").getBundleURL("ksUvU") + "clubs_8.3bce94d8.svg" + "?" + Date.now();

},{"d450f870d4d89626":"lgJ39"}],"97xoE":[function(require,module,exports) {
module.exports = require("32aaed7290c588b9").getBundleURL("ksUvU") + "clubs_9.6f662304.svg" + "?" + Date.now();

},{"32aaed7290c588b9":"lgJ39"}],"lKc2N":[function(require,module,exports) {
module.exports = require("32d5179f987d231a").getBundleURL("ksUvU") + "clubs_10.956ef660.svg" + "?" + Date.now();

},{"32d5179f987d231a":"lgJ39"}],"5mW5P":[function(require,module,exports) {
module.exports = require("7971fd885d5d5ac9").getBundleURL("ksUvU") + "clubs_jack.be479481.svg" + "?" + Date.now();

},{"7971fd885d5d5ac9":"lgJ39"}],"gCvgy":[function(require,module,exports) {
module.exports = require("eace2004f7c0c4a7").getBundleURL("ksUvU") + "clubs_queen.49301954.svg" + "?" + Date.now();

},{"eace2004f7c0c4a7":"lgJ39"}],"6YjE8":[function(require,module,exports) {
module.exports = require("b4d2341d4a893ef6").getBundleURL("ksUvU") + "clubs_king.30392332.svg" + "?" + Date.now();

},{"b4d2341d4a893ef6":"lgJ39"}],"cxrzZ":[function(require,module,exports) {
module.exports = require("54d609d6aa24a80b").getBundleURL("ksUvU") + "clubs_ace.2a77c2e1.svg" + "?" + Date.now();

},{"54d609d6aa24a80b":"lgJ39"}],"5Ycyw":[function(require,module,exports) {
module.exports = require("c322ea71f9e826df").getBundleURL("ksUvU") + "spades_2.363c94ad.svg" + "?" + Date.now();

},{"c322ea71f9e826df":"lgJ39"}],"fKPdq":[function(require,module,exports) {
module.exports = require("41ad1d339ac3c1df").getBundleURL("ksUvU") + "spades_3.33e96877.svg" + "?" + Date.now();

},{"41ad1d339ac3c1df":"lgJ39"}],"hjvmE":[function(require,module,exports) {
module.exports = require("5dacb21686a97025").getBundleURL("ksUvU") + "spades_4.b9283591.svg" + "?" + Date.now();

},{"5dacb21686a97025":"lgJ39"}],"f9Ca1":[function(require,module,exports) {
module.exports = require("6c10985a2b4ea6ce").getBundleURL("ksUvU") + "spades_5.d27a2ca6.svg" + "?" + Date.now();

},{"6c10985a2b4ea6ce":"lgJ39"}],"kw13e":[function(require,module,exports) {
module.exports = require("6b5a15823f5d0da2").getBundleURL("ksUvU") + "spades_6.52b870ee.svg" + "?" + Date.now();

},{"6b5a15823f5d0da2":"lgJ39"}],"dLpUF":[function(require,module,exports) {
module.exports = require("3fb2b9a281115d2e").getBundleURL("ksUvU") + "spades_7.9cc7bb40.svg" + "?" + Date.now();

},{"3fb2b9a281115d2e":"lgJ39"}],"hBjJT":[function(require,module,exports) {
module.exports = require("e45d8c6792a4cb").getBundleURL("ksUvU") + "spades_8.4bf6c918.svg" + "?" + Date.now();

},{"e45d8c6792a4cb":"lgJ39"}],"3ycWz":[function(require,module,exports) {
module.exports = require("8a41dcabab77f960").getBundleURL("ksUvU") + "spades_9.007b0a25.svg" + "?" + Date.now();

},{"8a41dcabab77f960":"lgJ39"}],"jiM0E":[function(require,module,exports) {
module.exports = require("ba0361683907ab54").getBundleURL("ksUvU") + "spades_10.390322b9.svg" + "?" + Date.now();

},{"ba0361683907ab54":"lgJ39"}],"g6Fkr":[function(require,module,exports) {
module.exports = require("6366a87cb20e38ac").getBundleURL("ksUvU") + "spades_jack.4ad52732.svg" + "?" + Date.now();

},{"6366a87cb20e38ac":"lgJ39"}],"jFDCT":[function(require,module,exports) {
module.exports = require("5b9945bd5c67f636").getBundleURL("ksUvU") + "spades_queen.96b7dbba.svg" + "?" + Date.now();

},{"5b9945bd5c67f636":"lgJ39"}],"cy2ky":[function(require,module,exports) {
module.exports = require("d3653930485b52f7").getBundleURL("ksUvU") + "spades_king.c550af5d.svg" + "?" + Date.now();

},{"d3653930485b52f7":"lgJ39"}],"2QPIX":[function(require,module,exports) {
module.exports = require("1ca55ca0fadb0dad").getBundleURL("ksUvU") + "spades_ace.0b1982d5.svg" + "?" + Date.now();

},{"1ca55ca0fadb0dad":"lgJ39"}],"ZQ9AA":[function(require,module,exports) {
module.exports = require("593c343b9bfbbf55").getBundleURL("ksUvU") + "hearts_2.5f6e3f08.svg" + "?" + Date.now();

},{"593c343b9bfbbf55":"lgJ39"}],"8W2Kq":[function(require,module,exports) {
module.exports = require("d8c6ad6345d929a3").getBundleURL("ksUvU") + "hearts_3.0019143a.svg" + "?" + Date.now();

},{"d8c6ad6345d929a3":"lgJ39"}],"3aoMJ":[function(require,module,exports) {
module.exports = require("e25b719e36d768a9").getBundleURL("ksUvU") + "hearts_4.821d8607.svg" + "?" + Date.now();

},{"e25b719e36d768a9":"lgJ39"}],"8Visf":[function(require,module,exports) {
module.exports = require("baa831ca758ef8d0").getBundleURL("ksUvU") + "hearts_5.47153aa3.svg" + "?" + Date.now();

},{"baa831ca758ef8d0":"lgJ39"}],"53zQp":[function(require,module,exports) {
module.exports = require("c88e248f331eb3d6").getBundleURL("ksUvU") + "hearts_6.a7f87399.svg" + "?" + Date.now();

},{"c88e248f331eb3d6":"lgJ39"}],"jtit1":[function(require,module,exports) {
module.exports = require("72a1b62c96d2fdf4").getBundleURL("ksUvU") + "hearts_7.bdda6034.svg" + "?" + Date.now();

},{"72a1b62c96d2fdf4":"lgJ39"}],"aqOSF":[function(require,module,exports) {
module.exports = require("7cac819a95077d5f").getBundleURL("ksUvU") + "hearts_8.5c3cb8c9.svg" + "?" + Date.now();

},{"7cac819a95077d5f":"lgJ39"}],"gw8N4":[function(require,module,exports) {
module.exports = require("e93ceb93a9f51b86").getBundleURL("ksUvU") + "hearts_9.dff688d8.svg" + "?" + Date.now();

},{"e93ceb93a9f51b86":"lgJ39"}],"1ITKJ":[function(require,module,exports) {
module.exports = require("1a18cb81be52eb61").getBundleURL("ksUvU") + "hearts_10.c1a98f3d.svg" + "?" + Date.now();

},{"1a18cb81be52eb61":"lgJ39"}],"jW01j":[function(require,module,exports) {
module.exports = require("3ff91588e6fbe1d4").getBundleURL("ksUvU") + "hearts_jack.0bc4ee3a.svg" + "?" + Date.now();

},{"3ff91588e6fbe1d4":"lgJ39"}],"aZZsl":[function(require,module,exports) {
module.exports = require("c3782f31c0ac53b5").getBundleURL("ksUvU") + "hearts_queen.93b338c4.svg" + "?" + Date.now();

},{"c3782f31c0ac53b5":"lgJ39"}],"ixN4w":[function(require,module,exports) {
module.exports = require("cfed77515a60d794").getBundleURL("ksUvU") + "hearts_king.db9a212e.svg" + "?" + Date.now();

},{"cfed77515a60d794":"lgJ39"}],"j9skN":[function(require,module,exports) {
module.exports = require("a7d77a9cc694b036").getBundleURL("ksUvU") + "hearts_ace.f629d3c9.svg" + "?" + Date.now();

},{"a7d77a9cc694b036":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"251jr":[function(require,module,exports) {
module.exports = require("c2e12f3611039d68").getBundleURL("ksUvU") + "revert.a638fbed.svg" + "?" + Date.now();

},{"c2e12f3611039d68":"lgJ39"}]},["iNGHL","1Z4Rq"], "1Z4Rq", "parcelRequire4cb3")

//# sourceMappingURL=index.5d9dacde.js.map
