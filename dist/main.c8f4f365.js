// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
getCSS.onclick = function () {
    var request = new XMLHttpRequest();
    request.open("GET", '/style.css');
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var style = document.createElement('style');
            style.innerHTML = request.response;
            document.head.appendChild(style);
        }
    };
    request.send();
};
getJS.onclick = function () {
    var request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var script = document.createElement('script');
            script.innerHTML = request.response;
            document.body.appendChild(script);
        }
    };
    request.send();
};
getHTML.onclick = function () {
    var request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var div = document.createElement('div');
            div.innerHTML = request.response;
            document.body.appendChild(div);
        }
    };
    request.send();
};
getXMl.onclick = function () {
    var request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var dom = request.responseXML;
            var text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};
getJSON.onclick = function () {
    var request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var object = JSON.parse(request.response);
            myName.textContent = object.name;
            console.log(object);
        }
    };
    request.send();
};
function X(n) {
    if (n < 2) {
        getPage.style.display = "block";
    } else if (n > 2) {
        getPage.style.display = "none";
    }
}
var n = 1;
getPage.onclick = function () {
    n++;
    var request = new XMLHttpRequest();
    if (n <= 3) {
        console.log(n);
        request.open('GET', '/page' + n);
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                var array = JSON.parse(request.response);
                array.forEach(function (item) {
                    var li = document.createElement('li');
                    li.textContent = item.id;
                    xxx.appendChild(li);
                });
            }
        };
        request.send();
        if (n === 3) {
            getPage.style.display = "none";
        }
    }
};
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.c8f4f365.map