//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map
/*
Copyright (c) Armand Halbert, 2013
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

function BayesNet(vars) {
    this.variables = {};
    this.numVars = Object.keys(this.variables).length;
    for (v in vars) {
        this.variables[v] = new BayesNode(vars[v]);
        this.variables[v].CPTorder = this.generateDomainRows(this.variables[v].parents);
    }
    this.variables[v].blocks = false;
}

BayesNet.prototype.addVar = function (name, parents, children, obs, cpt) {
    if (typeof cpt == 'undefined')
        cpt = [];
    if (typeof obs == 'undefined')
        obs = 'none';
    if (typeof children == 'undefined')
        children = [];
    if (typeof parents == 'undefined')
        parents = [];
    this.variables[name] = {children : children, parents : parents, observation : obs, blocks : false , CPT : cpt};
    this.numVars++;
};

BayesNet.prototype.rmVar = function (name) {
    for (var v in this.variables) {
        var parentIndex = this.variables[v].parents.indexOf(name);
        var childIndex = this.variables[v].children.indexOf(name);
        if (parentIndex !== -1)
            this.variables[v].parents.splice(parentIndex, 1);
        if (childIndex !== -1)
            this.variables[v].children.splice(childIndex, 1);
    }
    delete this.variables[name];
    this.numVars--;
};

BayesNet.prototype.addRelationship = function (parent, child) {
    this.variables[parent].children.push(child);
    this.variables[child].parents.push(parent);
};

BayesNet.prototype.rmRelationship = function (parent, child) {
    var childIndex = this.variables[child].parents.indexOf(parent);
    this.variables[child].parents.splice(childIndex, 1);
    var parentIndex = this.variables[parent].children.indexOf(child);
    this.variables[parent].children.splice(parentIndex, 1);
};

BayesNet.prototype.getObservedVariables = function () {
    var observedVars = {};
    for (v in this.variables) {
        if (this.variables[v].observation != "none") {
                observedVars[v] = this.variables[v].observation;
        } 
    }
    return observedVars;
};

BayesNet.prototype.getUnobservedVariables = function () {
    var unobservedVars = {};
    for (v in this.variables) {
            if (this.variables[v].observation == "none") {
                unobservedVars[v] = this.variables[v];
        } 
    }
    return unobservedVars;
};

BayesNet.prototype.getCPTDomainRows = function (target, vars) {
    return rows;
};

BayesNet.prototype.generateDomainRows = function (vars) {
    if (vars.length == 0)
        return [""];
    var v = vars.pop();
    v = this.variables[v];
    var rows = [];
    var ret = this.generateDomainRows(vars);
    var domainValue = v.domain[0];
    for (var i = 0; i < v.domain.length; i++) {
        rows.push([]);
        for (var j = 0; j < ret.length; j++) 
            rows[i].push(domainValue + ret[j]);
        domainValue = v.toggleDomainValue(domainValue);
    }
    return _.flatten(rows);
};

//general utility functions
function sumArray(a) {
    return a.reduce(function(prev,value) {return prev + value;});
}

function normalize(vector) {
    var sum = 0.0;
    for (var i = 0; i < vector.length; i++) {
        sum += vector[i];
    }
    for (i = 0; i < vector.length; i++) {
        vector[i] = vector[i] / sum;
    }
    return vector;
}

function isConsistent(evidence, sample) {
    for (var v in evidence) {
        if (evidence[v] != sample[v])
            return false;
    }
    return true;
}
function BayesNode(variable) {
        this.parents = variable.parents;
        this.children = variable.children;
        if (typeof variable.domain == 'undefined')
            this.domain = ['T','F'];
        else
            this.domain = variable.domain;
        this.observation = variable.observation;
        this.CPT = variable.CPT;
        this.sampleDistribution = [];
        for (var i = 0; i < this.CPT.length; i++) {
            var s = [];
            if(this.CPT[i].length == this.domain.length - 1)
                this.CPT[i].push(1 - sumArray(this.CPT[i]));
            s.push(this.CPT[i][0]);
            for (var j = 1; j < this.domain.length - 1; j++) {
               s.push(this.CPT[i][j]+s[j-1]);
            }
            s.push(1.0);
            this.sampleDistribution.push(s);

        }
        //TODO: Check if CPT is valid
}

BayesNode.prototype.sample = function (evidence) {
    var e = "";
    for (var i = 0; i < this.parents.length; i++) {
         e += evidence[this.parents[i]];
    }
    for (var i = 0; i < this.cptOrder.length; i++) {
        if (e == this.cptOrder[i]) {
            var randomVariable = Math.random();
            for (var j = 0; j < this.domain.length; j++) {
                if (randomVariable < this.sampleDistribution[i][j])
                    return this.domain[j]
            }
        }
    }
    return null;
}

BayesNode.prototype.P = function (evidence, value) {
    var valueIndex = this.domain.indexOf(value)
    var e = "";
    for (var i = 0; i < this.parents.length; i++) {
         e += evidence[this.parents[i]];
    }
    for (var i = 0; i < this.cptOrder.length; i++) {
        if (e == this.cptOrder[i]) 
            return this.CPT[i][valueIndex];
    }
    return Number.NaN;
};


BayesNode.prototype.toggleDomainValue = function (value) {
    var index = this.domain.indexOf(value);
    index++;
    if (index == this.domain.length)
        index = 0;
    return this.domain[index];
};
BayesNet.prototype.isdseperated = function (start, target)   {
    isSeperated = true;
    for (v in this.variables) {
        v.blocks = false;
    }
    var paths = this.searchForAllPaths(start, target, [], []);
    for(var i = 0; i < paths.length; i++ ) {
        var blockednodes = this.isPathBlocked(paths[i]);
        if (blockednodes.length === 0)
            isSeperated =  false;
        for (var j = 0; j < blockednodes.length; j++) {
            this.variables[blockednodes[j]].blocks = true;
        }
    }
    return isSeperated;
};

BayesNet.prototype.isDescendentObserved = function (state) {
    var descendents = this.getDescendents(state, []);
    for (var i = 0; i < descendents.length; i++) {
        if (this.variables[descendents[i]].observation != "none")
            return true;
    }
    return false;
};

BayesNet.prototype.isPathBlocked = function (path) {
    var blocks = [];
    for(var j = 1; j < path.length - 1; j++) {
        if ( this.isCollider(path[j-1], path[j], path[j+1])) {
            if (this.variables[path[j]].observation == "none" && !this.isDescendentObserved(path[j])) {
                blocks.push(path[j]);
            }
        }
        else {
            if (this.variables[path[j]].observation != "none") {
                blocks.push(path[j]);
            }
        }
    }
    return blocks;
};

// Finds all paths from a destination to a target. Operates recursively, using visited to
// avoid infinite loops. Current path is the path so far to start.
BayesNet.prototype.searchForAllPaths = function (start, end, currentPath, visited) {
    var newCurrentPath = currentPath.slice(0); //Javascript passes arrays by reference, so I need to copy.
    newCurrentPath.push(start); 
    var newVisited = visited.slice(0);
    newVisited.push(start);

    if (start == end)  
        return [newCurrentPath];

    var links = this.getPathsFrom(start);
    links = links.concat(this.getPathsTo(start));
    var paths = [];
    for (var i = 0; i < links.length; i++) {
        if (visited.indexOf(links[i]) === -1) {
            var ret = this.searchForAllPaths(links[i], end, newCurrentPath, newVisited);
            for (var j = 0; j < ret.length; j++) {
                paths.push(ret[j]);
            }
        }
    }
    return paths;
};

BayesNet.prototype.isCollider = function (start,mid,target) {
    if (this.variables[mid].parents.indexOf(start) !== -1) {
        if (this.variables[mid].parents.indexOf(target) !== -1)
            return true;
    }
    return false;
};

BayesNet.prototype.getDescendents = function (state, descendents) {
    var links = this.getPathsFrom(state);
    for (var i = 0; i < links.length; i++) {
        if (descendents.indexOf(links[i]) === -1 ) 
            descendents.push(links[i]);
        this.getDescendents(links[i], descendents);
    }
    return descendents;
};

BayesNet.prototype.getPathsFrom = function (state) {
    return this.variables[state].children;
};

BayesNet.prototype.getPathsTo = function (state) {
    return this.variables[state].parents;
};
BayesNet.prototype.topologicalSort = function () {
    L  = [];
    S = [];
    edgesLeft = {};
    for (key in this.variables) {
        if (this.variables[key].parents.length === 0)
            S.push(key);
        edgesLeft[key] = this.variables[key].parents.length;
    }
    while (S.length > 0) {
        var node_s = S.pop();
        L.push(node_s);
        for (var i = 0; i < this.variables[node_s].children.length; i++) {
            var child = this.variables[node_s].children[i]
            edgesLeft[child] = edgesLeft[child] - 1;
            if(edgesLeft[child] === 0){
                S.push(child); 
            }
        }
    } //TODO:If cycle, return error;
    return L;
};

BayesNet.prototype.enumerationInference = function (query)  {
    var hidden = this.getUnobservedVariables();
    var evidence = this.getObservedVariables();
    var distribution = [];
    for (var i = 0; i < this.variables[query].domain.length; i++) {
        evidence[query] = this.variables[query].domain[i];
        distribution.push(this.enumerateAll(query, this.topologicalSort().reverse(), evidence));
    }
    return normalize(distribution);
};

BayesNet.prototype.enumerateAll = function (query, vars, evidence) {
    if (vars.length == 0)
        return 1.0;
    var newvars = _.extend([], vars);
    var y = newvars.pop();
    if (typeof evidence[y] !== 'undefined') {
            var newevidence = _.extend({}, evidence);
            return this.variables[y].P(evidence, evidence[y]) * this.enumerateAll(query, newvars, newevidence);
    }
    else {
        var sum = [];
        for (var i = 0; i <this.variables[y].domain.length; i++) {
            var newevidence = _.extend({}, evidence);
            newevidence[y] = this.variables[y].domain[i];
            sum.push(this.variables[y].P(evidence, this.variables[y].domain[i]) * this.enumerateAll(query, newvars, newevidence));
        }
    }
        return sumArray(sum);
}; 

BayesNet.prototype.rejectionSampling = function (query, N) {
    var values = [] ;
    var evidence = this.getObservedVariables();
    for (var i = 0; i < this.variables[query].domain.length; i++) {
        values.push(0);
    }
    for (i = 0; i < N; i++) {
        var sample = this.priorSample();
        var s = sample[query];
        if (isConsistent(evidence, sample))
            values[this.variables[query].domain.indexOf(s)]++;
    }
    return normalize(values);
};


BayesNet.prototype.priorSample = function () {
    var vars = this.topologicalSort();
    var sample = {};
    for (var i = 0; i < vars.length; i++) {
        var node = vars[i];
        sample[node] = this.variables[node].sample(sample);
    }
    return sample;
};

BayesNet.prototype.liklihoodWeighting = function (query, N) {
    var W = [];
    for (var i = 0; i < this.variables[query].domain.length; i++) {
        W.push(0);
    }
    for (var i = 0; i < N; i++) {
       var w = this.weightedSample();
       var s  = this.variables[query].domain.indexOf(w['sample'][query]);
       W[s] = W[s] + w['weight'];
    }
    return normalize(W);
};

BayesNet.prototype.weightedSample = function () {
    var w = 1;
    var events = this.getObservedVariables();
    var vars = this.topologicalSort();
    for (var i = 0; i < vars.length; i++) {
        var node  = vars[i];
        if (typeof events[node] !== 'undefined') {
            w = w*this.variables[node].P(events);
        }
        else {
            events[node] = this.variables[node].sample(events);
        }
    }
    return {weight:w, sample:events};
};

BayesNet.prototype.gibbsSampling = function (query, N) {
    var distribution = [];
    for (var i = 0; i < this.variables[query].domain.length; i++) {
        W.push(0);
    }
    for (var i = 0; i < N; i++) {
        for (var i = 0; i < this.variables.length; i++) {
            var v = this.variables[i];
            v.observation = v.sample();
            distribution[this.variables[query].domain.indexOf(query.observation)]++;
        }
    }
    normalize(distribution);
};

