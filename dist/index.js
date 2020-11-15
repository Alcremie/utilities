"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=String.fromCharCode(8203);function splitText(e,t,r=" "){const n=e.substring(0,t).lastIndexOf(r),o=-1===n?t:n;return e.substring(0,o)}function isObject(e){return!("object"!=typeof e||!e)&&e.constructor===Object}const t=["string","bigint","number","boolean"];function isPrimitive(e){return t.includes(typeof e)}function deepClone(e){if(null===e||isPrimitive(e))return e;if(Array.isArray(e)){const t=[];for(const r of e)t.push(deepClone(r));return t}if(isObject(e)){const t={};for(const[r,n]of Object.entries(e))t[r]=deepClone(n);return t}if(e instanceof Map){const t=new e.constructor;for(const[r,n]of e.entries())t.set(r,deepClone(n));return t}if(e instanceof Set){const t=new e.constructor;for(const r of e.values())t.add(deepClone(r));return t}return e}const r=String.fromCharCode(8203);function isFunction(e){return"function"==typeof e}function isNullOrUndefined(e){return null==e}const n=/[-/\\^$*+?.()|[\]{}]/g;const o=/[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g,s={textchannel:"TextChannel",voicechannel:"VoiceChannel",categorychannel:"CategoryChannel",guildmember:"GuildMember"};exports.arrayStrictEquals=function arrayStrictEquals(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r]||typeof e[r]!=typeof t[r])return!1;return!0},exports.chunk=function chunk(e,t){if(!Array.isArray(e))throw new TypeError("entries must be an array.");if(!Number.isInteger(t))throw new TypeError("chunkSize must be an integer.");if(t<1)throw new RangeError("chunkSize must be 1 or greater.");const r=e.slice(),n=[];for(;r.length;)n.push(r.splice(0,t));return n},exports.classExtends=function classExtends(e,t){let r=e;for(;null!==r;){if(r===t)return!0;r=Object.getPrototypeOf(r)}return!1},exports.codeBlock=function codeBlock(t,r){return"string"==typeof r?0===r.length?`\`\`\`${e}\`\`\``:`\`\`\`${t}\n${r.replace(/```/,`\`${e}\`\``).replace(/`$/g,"`"+e)}\`\`\``:`\`\`\`${t}\n${r||e}\`\`\``},exports.cutText=function cutText(e,t){if(e.length<t)return e;const r=splitText(e,t-3);return r.length<t-3?r+"...":r.slice(0,t-3)+"..."},exports.deepClone=deepClone,exports.inlineCodeBlock=function inlineCodeBlock(e){return`\`${e.replace(/ /g," ").replace(/`/g,"`"+r)}\``},exports.isClass=function isClass(e){return"function"==typeof e&&"object"==typeof e.prototype},exports.isFunction=isFunction,exports.isNullOrUndefined=isNullOrUndefined,exports.isNullish=isNullOrUndefined,exports.isNumber=function isNumber(e){return"number"==typeof e&&!isNaN(e)&&Number.isFinite(e)},exports.isObject=isObject,exports.isPrimitive=isPrimitive,exports.isThenable=function isThenable(e){return"object"==typeof e&&null!==e&&(e instanceof Promise||e!==Promise.prototype&&function hasThen(e){return Reflect.has(e,"then")&&isFunction(e.then)}(e)&&function hasCatch(e){return Reflect.has(e,"catch")&&isFunction(e.catch)}(e))},exports.makeObject=function makeObject(e,t,r={}){if(e.includes(".")){const n=e.split("."),o=n.pop();let s=r;for(const e of n)s[e]||(s[e]={}),s=s[e];s[o]=t}else r[e]=t;return r},exports.mergeDefault=function mergeDefault(e,t){if(!t)return deepClone(e);for(const[r,n]of Object.entries(e)){const e=Reflect.get(t,r);void 0===e?Reflect.set(t,r,deepClone(n)):isObject(e)&&Reflect.set(t,r,mergeDefault(null!=n?n:{},e))}return t},exports.mergeObjects=function mergeObjects(e,t){for(const[r,n]of Object.entries(t)){const t=Reflect.get(e,r);isObject(n)?Reflect.set(e,r,isObject(t)?mergeObjects(t,n):n):isObject(t)||Reflect.set(e,r,n)}return e},exports.noop=function noop(){},exports.objectToTuples=function objectToTuples(e,t=""){const r=[];for(const[n,o]of Object.entries(e))isObject(o)?r.push(...objectToTuples(o,`${t}${n}.`)):r.push([`${t}${n}`,o]);return r},exports.parseURL=function parseURL(e){try{return new URL(e)}catch{return null}},exports.range=function range(e,t,r){return new Array(Math.floor((t-e)/r)+1).fill(0).map(((t,n)=>e+n*r))},exports.regExpEsc=function regExpEsc(e){return e.replace(n,"\\$&")},exports.roundNumber=function roundNumber(e,t=0){if(!e.toString().includes("e"))return Number(`${Math.round(Number(`${e}e+${t}`))}e-${t}`);const r=(""+e).split("e");let n="";return Number(r[1])+t>0&&(n="+"),Number(`${Math.round(Number(`${Number(r[0])}e${n}${Number(r[1])+t}`))}e-${t}`)},exports.splitText=splitText,exports.toTitleCase=function toTitleCase(e){return e.replace(o,(e=>s[e]||e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()))},exports.tryParse=function tryParse(e){try{return JSON.parse(e)}catch(t){return e}};
//# sourceMappingURL=index.js.map
