// generatedy by JSX compiler 0.9.89 (2014-05-20 06:01:03 +0900; 8e8c6105f36f3dfe440ea026a3c93a3444977102)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

var $__jsx_imul = Math.imul;
if (typeof $__jsx_imul === "undefined") {
	$__jsx_imul = function (a, b) {
		var ah  = (a >>> 16) & 0xffff;
		var al = a & 0xffff;
		var bh  = (b >>> 16) & 0xffff;
		var bl = b & 0xffff;
		return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
	};
}

/**
 * fused int-ops with side-effects
 */
function $__jsx_ipadd(o, p, r) {
	return o[p] = (o[p] + r) | 0;
}
function $__jsx_ipsub(o, p, r) {
	return o[p] = (o[p] - r) | 0;
}
function $__jsx_ipmul(o, p, r) {
	return o[p] = $__jsx_imul(o[p], r);
}
function $__jsx_ipdiv(o, p, r) {
	return o[p] = (o[p] / r) | 0;
}
function $__jsx_ipmod(o, p, r) {
	return o[p] = (o[p] % r) | 0;
}
function $__jsx_ippostinc(o, p) {
	var v = o[p];
	o[p] = (v + 1) | 0;
	return v;
}
function $__jsx_ippostdec(o, p) {
	var v = o[p];
	o[p] = (v - 1) | 0;
	return v;
}

/**
 * non-inlined version of Array#each
 */
function $__jsx_forEach(o, f) {
	var l = o.length;
	for (var i = 0; i < l; ++i)
		f(o[i]);
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = true;
var GeneratorFunction$0 = 
(function () {
  try {
    return Function('import {GeneratorFunction} from "std:iteration"; return GeneratorFunction')();
  } catch (e) {
    return function GeneratorFunction () {};
  }
})();
var __jsx_generator_object$0 = 
(function () {
  function __jsx_generator_object() {
  	this.__next = 0;
  	this.__loop = null;
	this.__seed = null;
  	this.__value = undefined;
  	this.__status = 0;	// SUSPENDED: 0, ACTIVE: 1, DEAD: 2
  }

  __jsx_generator_object.prototype.next = function (seed) {
  	switch (this.__status) {
  	case 0:
  		this.__status = 1;
  		this.__seed = seed;

  		// go next!
  		this.__loop(this.__next);

  		var done = false;
  		if (this.__next != -1) {
  			this.__status = 0;
  		} else {
  			this.__status = 2;
  			done = true;
  		}
  		return { value: this.__value, done: done };
  	case 1:
  		throw new Error("Generator is already running");
  	case 2:
  		throw new Error("Generator is already finished");
  	default:
  		throw new Error("Unexpected generator internal state");
  	}
  };

  return __jsx_generator_object;
}());
function Pen(canvas) {
	this.x = [  ];
	this.y = [  ];
	this.ctx = (function ($v) {
		if (! ($v == null || $v instanceof CanvasRenderingContext2D)) {
			debugger;
			throw new Error("[pen3.jsx:13:43] detected invalid cast, value is not an instance of the designated type or null\n        this.ctx = canvas.getContext(\"2d\") as CanvasRenderingContext2D;\n                                           ^^\n");
		}
		return $v;
	}(canvas.getContext("2d")));
	this.canvas = canvas;
	this.mouse = false;
};

$__jsx_extend([Pen], Object);
Pen.prototype.start$ = function () {
	var $this = this;
	var color;
	var nl;
	var co;
	var pen_down;
	var pen_up;
	var draw;
	color = [ 0, 0, 0 ];
	nl = new nylon();
	co = new coe('ws://localhost:8000/chat');
	nl.on$SF$HXV$("color", (function (dummy) {
		color = (function ($v) {
			if (! ($v == null || $v instanceof Array)) {
				debugger;
				throw new Error("[pen3.jsx:24:33] detected invalid cast, value is not an Array or null\n            color = dummy[\"rgb\"] as number[];\n                                 ^^\n");
			}
			return $v;
		}(dummy.rgb));
	}));
	nl.on$SF$HXV$("draw", (function (data) {
		var x;
		var y;
		var col;
		var i;
		x = (function ($v) {
			if (! ($v == null || $v instanceof Array)) {
				debugger;
				throw new Error("[pen3.jsx:28:30] detected invalid cast, value is not an Array or null\n            var x = data[\"x\"] as number[];\n                              ^^\n");
			}
			return $v;
		}(data.x));
		y = (function ($v) {
			if (! ($v == null || $v instanceof Array)) {
				debugger;
				throw new Error("[pen3.jsx:29:30] detected invalid cast, value is not an Array or null\n            var y = data[\"y\"] as number[];\n                              ^^\n");
			}
			return $v;
		}(data.y));
		col = (function ($v) {
			if (! ($v == null || $v instanceof Array)) {
				debugger;
				throw new Error("[pen3.jsx:30:36] detected invalid cast, value is not an Array or null\n            var col = data[\"color\"] as number[];\n                                    ^^\n");
			}
			return $v;
		}(data.color));
		for (i = 0; i < x.length; i++) {
			$this.ctx.beginPath();
			$this.ctx.fillStyle = "rgb(" + ((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[pen3.jsx:33:47] null access\n                this.ctx.fillStyle = \"rgb(\"+col[0]+\",\"+col[1]+\",\"+col[2]+\")\";\n                                               ^\n");
				}
				return v;
			}(col[0])) + "") + "," + ((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[pen3.jsx:33:58] null access\n                this.ctx.fillStyle = \"rgb(\"+col[0]+\",\"+col[1]+\",\"+col[2]+\")\";\n                                                          ^\n");
				}
				return v;
			}(col[1])) + "") + "," + ((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[pen3.jsx:33:69] null access\n                this.ctx.fillStyle = \"rgb(\"+col[0]+\",\"+col[1]+\",\"+col[2]+\")\";\n                                                                     ^\n");
				}
				return v;
			}(col[2])) + "") + ")";
			$this.ctx.arc((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[pen3.jsx:34:31] null access\n                this.ctx.arc( x[i], y[i], 5, 0, Math.PI*2.0, false );\n                               ^\n");
				}
				return v;
			}(x[i])), (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[pen3.jsx:34:37] null access\n                this.ctx.arc( x[i], y[i], 5, 0, Math.PI*2.0, false );\n                                     ^\n");
				}
				return v;
			}(y[i])), 5, 0, Math.PI * 2.0, false);
			$this.ctx.fill();
		}
	}));
	pen_down = (function (e) {
		$this.mouse = true;
		$this.x = [  ];
		$this.y = [  ];
	});
	pen_up = (function (e) {
		$this.mouse = false;
		nl.emit$SHX("broadcast|draw", ({ x: $this.x, y: $this.y, color: color }));
	});
	draw = (function (e) {
		var es;
		var ee;
		var rect;
		var x;
		var y;
		if ($this.mouse) {
			es = (function ($v) {
				if (! ($v == null || $v instanceof MouseEvent)) {
					debugger;
					throw new Error("[pen3.jsx:49:27] detected invalid cast, value is not an instance of the designated type or null\n                var es = e as MouseEvent;\n                           ^^\n");
				}
				return $v;
			}(e));
			ee = (function ($v) {
				if (! ($v == null || $v instanceof Element)) {
					debugger;
					throw new Error("[pen3.jsx:50:35] detected invalid cast, value is not an instance of the designated type or null\n                var ee = es.target as Element;\n                                   ^^\n");
				}
				return $v;
			}(es.target));
			rect = ee.getBoundingClientRect();
			x = es.clientX - rect.left;
			y = es.clientY - rect.top;
			$this.x.push(x);
			$this.y.push(y);
			$this.ctx.beginPath();
			$this.ctx.fillStyle = "rgb(" + ((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[pen3.jsx:57:49] null access\n                this.ctx.fillStyle = \"rgb(\"+color[0]+\",\"+color[1]+\",\"+color[2]+\")\";\n                                                 ^\n");
				}
				return v;
			}(color[0])) + "") + "," + ((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[pen3.jsx:57:62] null access\n                this.ctx.fillStyle = \"rgb(\"+color[0]+\",\"+color[1]+\",\"+color[2]+\")\";\n                                                              ^\n");
				}
				return v;
			}(color[1])) + "") + "," + ((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[pen3.jsx:57:75] null access\n                this.ctx.fillStyle = \"rgb(\"+color[0]+\",\"+color[1]+\",\"+color[2]+\")\";\n                                                                           ^\n");
				}
				return v;
			}(color[2])) + "") + ")";
			$this.ctx.arc(x, y, 5, 0, Math.PI * 2.0, false);
			$this.ctx.fill();
		}
	});
	this.canvas.addEventListener("mousedown", pen_down);
	this.canvas.addEventListener("mouseup", pen_up);
	this.canvas.addEventListener("mousemove", draw);
};


function Palett(canvas) {
	var i;
	this.color = [ 0, 0, 0 ];
	this.nl = null;
	this.ctx = (function ($v) {
		if (! ($v == null || $v instanceof CanvasRenderingContext2D)) {
			debugger;
			throw new Error("[pen3.jsx:76:43] detected invalid cast, value is not an instance of the designated type or null\n        this.ctx = canvas.getContext(\"2d\") as CanvasRenderingContext2D;\n                                           ^^\n");
		}
		return $v;
	}(canvas.getContext("2d")));
	this.canvas = canvas;
	this.mouse = false;
	if (this.color[0] == null) {
		for (i = 0; i < 3; i++) {
			this.color[i] = 0;
		}
	}
	this.palett_Draw$();
};

$__jsx_extend([Palett], Object);
Palett.prototype.palett_Draw$ = function () {
	var j;
	var i;
	for (j = 0; j < 3; j++) {
		for (i = 0; i < 255; i++) {
			this.ctx.beginPath();
			switch (j) {
			case 0:
				this.ctx.strokeStyle = "rgb(" + (i + "") + ",0,0)";
				break;
			case 1:
				this.ctx.strokeStyle = "rgb(0," + (i + "") + ",0)";
				break;
			case 2:
				this.ctx.strokeStyle = "rgb(0,0," + (i + "") + ")";
				break;
			}
			this.ctx.moveTo(i, j * 50);
			this.ctx.lineTo(i, j * 50 + 50);
			this.ctx.stroke();
		}
		this.ctx.beginPath();
		this.ctx.strokeStyle = "rgb(255,255,255)";
		this.ctx.moveTo((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[pen3.jsx:103:38] null access\n            this.ctx.moveTo(this.color[j],j*50);\n                                      ^\n");
			}
			return v;
		}(this.color[j])), j * 50);
		this.ctx.lineTo((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[pen3.jsx:104:38] null access\n            this.ctx.lineTo(this.color[j],j*50+50);\n                                      ^\n");
			}
			return v;
		}(this.color[j])), j * 50 + 50);
		this.ctx.stroke();
		this.ctx.beginPath();
		this.ctx.fillStyle = "rgb(" + ((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[pen3.jsx:108:50] null access\n            this.ctx.fillStyle = \"rgb(\"+this.color[0]+\",\"+this.color[1]+\",\"+this.color[2]+\")\";\n                                                  ^\n");
			}
			return v;
		}(this.color[0])) + "") + "," + ((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[pen3.jsx:108:68] null access\n            this.ctx.fillStyle = \"rgb(\"+this.color[0]+\",\"+this.color[1]+\",\"+this.color[2]+\")\";\n                                                                    ^\n");
			}
			return v;
		}(this.color[1])) + "") + "," + ((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[pen3.jsx:108:86] null access\n            this.ctx.fillStyle = \"rgb(\"+this.color[0]+\",\"+this.color[1]+\",\"+this.color[2]+\")\";\n                                                                                      ^\n");
			}
			return v;
		}(this.color[2])) + "") + ")";
		this.ctx.fillRect(0, 150, 255, 200);
	}
	console.log("OK");
};


Palett.prototype.start$ = function () {
	var $this = this;
	var palett_down;
	var palett_up;
	this.nl = new nylon();
	palett_down = (function (e) {
		var es;
		var ee;
		var rect;
		var x;
		var y;
		var msg;
		if ($this.mouse === false) {
			$this.mouse = true;
			es = (function ($v) {
				if (! ($v == null || $v instanceof MouseEvent)) {
					debugger;
					throw new Error("[pen3.jsx:119:27] detected invalid cast, value is not an instance of the designated type or null\n                var es = e as MouseEvent;\n                           ^^\n");
				}
				return $v;
			}(e));
			ee = (function ($v) {
				if (! ($v == null || $v instanceof Element)) {
					debugger;
					throw new Error("[pen3.jsx:120:35] detected invalid cast, value is not an instance of the designated type or null\n                var ee = es.target as Element;\n                                   ^^\n");
				}
				return $v;
			}(es.target));
			rect = ee.getBoundingClientRect();
			x = es.clientX - rect.left;
			y = es.clientY - rect.top;
			console.log("check0 " + ((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[pen3.jsx:124:40] null access\n                log(\"check0 \"+this.color[0]);\n                                        ^\n");
				}
				return v;
			}($this.color[0])) + ""));
			if (x < 256) {
				if (y < 50) {
					$this.color[0] = x;
				} else if (y < 100) {
					$this.color[1] = x;
				} else if (y < 150) {
					$this.color[2] = x;
				}
			}
			msg = ({ "rgb": $this.color });
			$this.nl.emit$SHX("color", msg);
			$this.palett_Draw$();
		}
	});
	palett_up = (function (e) {
		$this.mouse = false;
	});
	this.canvas.addEventListener("mousedown", palett_down);
	this.canvas.addEventListener("mouseup", palett_up);
	this.nl.on$SF$HXV$("color", (function (data) {
		var color;
		color = (function ($v) {
			if (! ($v == null || $v instanceof Array)) {
				debugger;
				throw new Error("[pen3.jsx:148:36] detected invalid cast, value is not an Array or null\n            var color = data[\"rgb\"] as number[];\n                                    ^^\n");
			}
			return $v;
		}(data.rgb));
		$this.ctx.beginPath();
		$this.ctx.fillStyle = "rgb(" + ((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[pen3.jsx:150:45] null access\n            this.ctx.fillStyle = \"rgb(\"+color[0]+\",\"+color[1]+\",\"+color[2]+\")\";\n                                             ^\n");
			}
			return v;
		}(color[0])) + "") + "," + ((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[pen3.jsx:150:58] null access\n            this.ctx.fillStyle = \"rgb(\"+color[0]+\",\"+color[1]+\",\"+color[2]+\")\";\n                                                          ^\n");
			}
			return v;
		}(color[1])) + "") + "," + ((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[pen3.jsx:150:71] null access\n            this.ctx.fillStyle = \"rgb(\"+color[0]+\",\"+color[1]+\",\"+color[2]+\")\";\n                                                                       ^\n");
			}
			return v;
		}(color[2])) + "") + ")";
		$this.ctx.fillRect(0, 150, 255, 200);
	}));
};


function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	var canvas2;
	var palett;
	var canvas1;
	var pen;
	canvas2 = (function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[pen3.jsx:158:39] detected invalid cast, value is not an instance of the designated type or null\n        var canvas2 = dom.id(\"palett\") as HTMLCanvasElement;\n                                       ^^\n");
		}
		return $v;
	}(dom$id$S("palett")));
	palett = new Palett(canvas2);
	canvas1 = (function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[pen3.jsx:161:42] detected invalid cast, value is not an instance of the designated type or null\n        var canvas1 =  dom.id(\"myCanvas\") as HTMLCanvasElement;\n                                          ^^\n");
		}
		return $v;
	}(dom$id$S("myCanvas")));
	pen = new Pen(canvas1);
	palett.start$();
	pen.start$();
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function nylonfunc(func, object) {
	this.fn = func;
	this.obj = object;
};

$__jsx_extend([nylonfunc], Object);
function nylon() {
	if (js$0.global.map == null) {
		js$0.global.map = ({  });
	}
};

$__jsx_extend([nylon], Object);
nylon.prototype.on$SF$HXV$ = function (keyword, fn) {
	if (nylon.map[keyword] == null) {
		console.log("map - keyword is null");
		nylon.map[keyword] = [ new nylonfunc(fn, this) ];
	} else {
		nylon.map[keyword].push(new nylonfunc(fn, this));
	}
};


nylon.prototype.emit$SHX = function (keyword, params) {
	var keys;
	console.log(nylon.map[keyword]);
	keys = keyword.split("|");
	this.emit$ASHX(keys, params);
};


nylon.prototype.emit$ASHX = function (keys, params) {
	var $this = this;
	if (nylon.map.keywords == null) {
		params.keywords = keys;
	}
	keys.forEach((function (key) {
		if (nylon.map[key] == null) {
			console.log("Invarid keyword!");
		} else {
			nylon.map[key].forEach((function (element) {
				if (element.obj != $this) {
					element.fn(params);
				}
			}));
		}
	}));
};


nylon.prototype.off$SF$HXV$ = function (keyword, fn) {
	var arr;
	var i;
	if (nylon.map[keyword] == null) {
		console.log("map - keyword is null");
	} else {
		arr = nylon.map[keyword];
		for (i = arr.length - 1; i >= 0; i--) {
			console.log(i);
			if (arr[i].obj == this && arr[i].fn == fn) {
				arr.splice(i, 1);
			}
		}
		if (nylon.map[keyword].length === 0) {
			nylon.map[keyword] = null;
		}
	}
};


function _Main$0() {
};

$__jsx_extend([_Main$0], Object);
function _Main$0$main$AS(arts) {
	var f;
	var g;
	var a;
	var b;
	f = (function (x) {
		console.log("f was executed");
	});
	g = (function (x) {
		console.log("g was executed");
	});
	a = new nylon();
	console.log("check A");
	a.on$SF$HXV$("test", f);
	a.on$SF$HXV$("test2", f);
	console.log(nylon.map);
	console.log("check B");
	a.on$SF$HXV$("test", g);
	console.log(nylon.map);
	a.emit$SHX("test", ({  }));
	b = new nylon();
	console.log("check C");
	b.emit$SHX("test", null);
	b.emit$SHX("test2", null);
	a.off$SF$HXV$("test", f);
	console.log("check D");
	console.log(nylon.map);
	console.log("check E");
	b.emit$SHX("test|test2", null);
	console.log(nylon.map);
};

_Main$0.main = _Main$0$main$AS;
_Main$0.main$AS = _Main$0$main$AS;

function dom() {}
$__jsx_extend([dom], Object);
function dom$id$S(id) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/sudalab_mac01/jsx/pen3/node_modules/grunt-jsx/node_modules/jsx/lib/js/js/web.jsx:29:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.getElementById(id) as HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.getElementById(id)));
};

dom.id$S = dom$id$S;

function dom$getElementById$S(id) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/sudalab_mac01/jsx/pen3/node_modules/grunt-jsx/node_modules/jsx/lib/js/js/web.jsx:37:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.getElementById(id) as HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.getElementById(id)));
};

dom.getElementById$S = dom$getElementById$S;

function dom$createElement$S(tag) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/sudalab_mac01/jsx/pen3/node_modules/grunt-jsx/node_modules/jsx/lib/js/js/web.jsx:45:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.createElement(tag) as __noconvert__ HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.createElement(tag)));
};

dom.createElement$S = dom$createElement$S;

function EventInit() {
	this.bubbles = false;
	this.cancelable = false;
};

$__jsx_extend([EventInit], Object);
function CustomEventInit() {
	EventInit.call(this);
	this.detail = null;
};

$__jsx_extend([CustomEventInit], EventInit);
function MutationObserverInit() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

$__jsx_extend([MutationObserverInit], Object);
function UIEventInit() {
	EventInit.call(this);
	this.view = null;
	this.detail = 0;
};

$__jsx_extend([UIEventInit], EventInit);
function FocusEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

$__jsx_extend([FocusEventInit], Object);
function MouseEventInit() {
	UIEventInit.call(this);
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.region = null;
};

$__jsx_extend([MouseEventInit], UIEventInit);
function WheelEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.deltaX = 0;
	this.deltaY = 0;
	this.deltaZ = 0;
	this.deltaMode = 0;
};

$__jsx_extend([WheelEventInit], Object);
function KeyboardEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.charCode = 0;
	this.keyCode = 0;
	this.which = 0;
};

$__jsx_extend([KeyboardEventInit], Object);
function CompositionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
};

$__jsx_extend([CompositionEventInit], Object);
function ProgressEventInit() {
	EventInit.call(this);
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

$__jsx_extend([ProgressEventInit], EventInit);
function XMLHttpRequestOptions() {
	this.anon = false;
};

$__jsx_extend([XMLHttpRequestOptions], Object);
function ScrollOptions() {
	this.behavior = "";
};

$__jsx_extend([ScrollOptions], Object);
function ScrollOptionsHorizontal() {
	ScrollOptions.call(this);
	this.x = 0;
};

$__jsx_extend([ScrollOptionsHorizontal], ScrollOptions);
function ScrollOptionsVertical() {
	ScrollOptions.call(this);
	this.y = 0;
};

$__jsx_extend([ScrollOptionsVertical], ScrollOptions);
function BoxQuadOptions() {
	this.box = "";
	this.relativeTo = null;
};

$__jsx_extend([BoxQuadOptions], Object);
function ConvertCoordinateOptions() {
	this.fromBox = "";
	this.toBox = "";
};

$__jsx_extend([ConvertCoordinateOptions], Object);
function TrackEventInit() {
	EventInit.call(this);
	this.track = null;
};

$__jsx_extend([TrackEventInit], EventInit);
function PopStateEventInit() {
	EventInit.call(this);
	this.state = null;
};

$__jsx_extend([PopStateEventInit], EventInit);
function HashChangeEventInit() {
	EventInit.call(this);
	this.oldURL = "";
	this.newURL = "";
};

$__jsx_extend([HashChangeEventInit], EventInit);
function PageTransitionEventInit() {
	EventInit.call(this);
	this.persisted = false;
};

$__jsx_extend([PageTransitionEventInit], EventInit);
function ErrorEventInit() {
	EventInit.call(this);
	this.message = "";
	this.filename = "";
	this.lineno = 0;
	this.column = 0;
};

$__jsx_extend([ErrorEventInit], EventInit);
function DragEventInit() {
	MouseEventInit.call(this);
	this.dataTransfer = null;
};

$__jsx_extend([DragEventInit], MouseEventInit);
function CloseEventInit() {
	EventInit.call(this);
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

$__jsx_extend([CloseEventInit], EventInit);
function StorageEventInit() {
	EventInit.call(this);
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

$__jsx_extend([StorageEventInit], EventInit);
function MessageEventInit() {
	EventInit.call(this);
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

$__jsx_extend([MessageEventInit], EventInit);
function EventSourceInit() {
	this.withCredentials = false;
};

$__jsx_extend([EventSourceInit], Object);
function IDBObjectStoreParameters() {
	this.keyPath = null;
	this.autoIncrement = false;
};

$__jsx_extend([IDBObjectStoreParameters], Object);
function IDBIndexParameters() {
	this.unique = false;
	this.multiEntry = false;
};

$__jsx_extend([IDBIndexParameters], Object);
function IDBVersionChangeEventInit() {
	EventInit.call(this);
	this.oldVersion = 0;
	this.newVersion = null;
};

$__jsx_extend([IDBVersionChangeEventInit], EventInit);
function NotificationOptions() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

$__jsx_extend([NotificationOptions], Object);
function DOMPointInit() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
};

$__jsx_extend([DOMPointInit], Object);
function SourceInfo() {
	this.sourceId = "";
	this.kind = "";
	this.label = "";
};

$__jsx_extend([SourceInfo], Object);
function MediaStreamTrackEventInit() {
	EventInit.call(this);
	this.track = null;
};

$__jsx_extend([MediaStreamTrackEventInit], EventInit);
function MediaSourceStates() {
	this.sourceType = "";
	this.sourceId = "";
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.aspectRatio = null;
	this.facingMode = null;
	this.volume = null;
};

$__jsx_extend([MediaSourceStates], Object);
function CapabilityRange() {
	this.max = null;
	this.min = null;
	this.supported = false;
};

$__jsx_extend([CapabilityRange], Object);
function AllVideoCapabilities() {
	this.sourceType = null;
	this.sourceId = null;
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.aspectRatio = null;
	this.facingMode = null;
};

$__jsx_extend([AllVideoCapabilities], Object);
function AllAudioCapabilities() {
	this.volume = null;
};

$__jsx_extend([AllAudioCapabilities], Object);
function MediaStreamConstraints() {
	this.video = null;
	this.audio = null;
};

$__jsx_extend([MediaStreamConstraints], Object);
function MediaTrackConstraints() {
	this.mandatory = null;
	this._optional = null;
};

$__jsx_extend([MediaTrackConstraints], Object);
function MinMaxConstraint() {
	this.max = null;
	this.min = null;
};

$__jsx_extend([MinMaxConstraint], Object);
function HitRegionOptions() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

$__jsx_extend([HitRegionOptions], Object);
function WebGLContextAttributes() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

$__jsx_extend([WebGLContextAttributes], Object);
function WebGLContextEventInit() {
	EventInit.call(this);
	this.statusMessage = "";
};

$__jsx_extend([WebGLContextEventInit], EventInit);
function DeviceOrientationEventInit() {
	EventInit.call(this);
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

$__jsx_extend([DeviceOrientationEventInit], EventInit);
function DeviceMotionEventInit() {
	EventInit.call(this);
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

$__jsx_extend([DeviceMotionEventInit], EventInit);
function coe(url) {
	var $this = this;
	var emitfunc;
	this.ws = new WebSocket(url);
	this.nl = new nylon();
	this.ws.onmessage = (function (e) {
		var me;
		var data;
		var keys;
		var index;
		me = (function ($v) {
			if (! ($v == null || $v instanceof MessageEvent)) {
				debugger;
				throw new Error("[nylon.coe.jsx:14:17] detected invalid cast, value is not an instance of the designated type or null\n      var me = e as MessageEvent;\n                 ^^\n");
			}
			return $v;
		}(e));
		data = (function ($v) {
			if (! ($v == null || typeof $v === "object" || typeof $v === "function")) {
				debugger;
				throw new Error("[nylon.coe.jsx:15:49] detected invalid cast, value is not a Map or null\n      var data = JSON.parse( me.data as string ) as Map.<variant>;\n                                                 ^^\n");
			}
			return $v;
		}(JSON.parse(me.data + "")));
		keys = (function ($v) {
			if (! ($v == null || $v instanceof Array)) {
				debugger;
				throw new Error("[nylon.coe.jsx:16:34] detected invalid cast, value is not an Array or null\n      var keys = data[\"keywords\"] as Array.<string>;\n                                  ^^\n");
			}
			return $v;
		}(data.keywords));
		index = keys.indexOf('broadcast');
		if (index !== - 1) {
			keys.splice(index, 1);
		}
		$this.nl.emit$ASHX(keys, data);
	});
	emitfunc = (function (params) {
		var jsondata;
		jsondata = JSON.stringify(params);
		$this.ws.send(jsondata);
	});
	this.nl.on$SF$HXV$("broadcast", emitfunc);
	this.nl.on$SF$HXV$("server", emitfunc);
};

$__jsx_extend([coe], Object);
coe.prototype.onconnect$F$LEvent$V$ = function (fn) {
	if (this.ws != null) {
		this.ws.onopen = fn;
	}
};


coe.prototype.onclose$F$LEvent$V$ = function (fn) {
	this.ws.onclose = fn;
};


coe.prototype.close$ = function () {
	this.ws.close();
};


var js$0 = (function () {
	var global = Function("return this")();
	return {
		global: global,
		eval: global.eval,
		invoke: function(invocant, methodName, args) {
			return invocant[methodName].apply(invocant, args);
		},
		newFunction: Function
	};
}());
$__jsx_lazy_init(nylon, "map", function () {
	return (function ($v) {
		if (! ($v == null || typeof $v === "object" || typeof $v === "function")) {
			debugger;
			throw new Error("[nylon.client.jsx:13:38] detected invalid cast, value is not a Map or null\n    static var map = js.global[\"map\"] as Map.<Array.<nylonfunc>>;\n                                      ^^\n");
		}
		return $v;
	}(js$0.global.map));
});
$__jsx_lazy_init(dom, "window", function () {
	return js$0.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLDocument)) {
			debugger;
			throw new Error("[/Users/sudalab_mac01/jsx/pen3/node_modules/grunt-jsx/node_modules/jsx/lib/js/js/web.jsx:23:50] detected invalid cast, value is not an instance of the designated type or null\n    static const document = js.global[\"document\"] as __noconvert__ HTMLDocument;\n                                                  ^^\n");
		}
		return $v;
	}(js$0.global.document));
});

var $__jsx_classMap = {
	"pen3.jsx": {
		Pen: Pen,
		Pen$LHTMLCanvasElement$: Pen,
		Palett: Palett,
		Palett$LHTMLCanvasElement$: Palett,
		_Main: _Main,
		_Main$: _Main
	},
	"nylon.client.jsx": {
		nylonfunc: nylonfunc,
		nylonfunc$F$HXV$Lnylon$: nylonfunc,
		nylon: nylon,
		nylon$: nylon,
		_Main: _Main$0,
		_Main$: _Main$0
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		EventInit: EventInit,
		EventInit$: EventInit,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions,
		ScrollOptions: ScrollOptions,
		ScrollOptions$: ScrollOptions,
		ScrollOptionsHorizontal: ScrollOptionsHorizontal,
		ScrollOptionsHorizontal$: ScrollOptionsHorizontal,
		ScrollOptionsVertical: ScrollOptionsVertical,
		ScrollOptionsVertical$: ScrollOptionsVertical,
		BoxQuadOptions: BoxQuadOptions,
		BoxQuadOptions$: BoxQuadOptions,
		ConvertCoordinateOptions: ConvertCoordinateOptions,
		ConvertCoordinateOptions$: ConvertCoordinateOptions,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions,
		DOMPointInit: DOMPointInit,
		DOMPointInit$: DOMPointInit,
		SourceInfo: SourceInfo,
		SourceInfo$: SourceInfo,
		MediaStreamTrackEventInit: MediaStreamTrackEventInit,
		MediaStreamTrackEventInit$: MediaStreamTrackEventInit,
		MediaSourceStates: MediaSourceStates,
		MediaSourceStates$: MediaSourceStates,
		CapabilityRange: CapabilityRange,
		CapabilityRange$: CapabilityRange,
		AllVideoCapabilities: AllVideoCapabilities,
		AllVideoCapabilities$: AllVideoCapabilities,
		AllAudioCapabilities: AllAudioCapabilities,
		AllAudioCapabilities$: AllAudioCapabilities,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints,
		MinMaxConstraint: MinMaxConstraint,
		MinMaxConstraint$: MinMaxConstraint,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit
	},
	"nylon.coe.jsx": {
		coe: coe,
		coe$S: coe
	}
};


/**
 * launches _Main.main(:string[]):void invoked by jsx --run|--executable
 */
JSX.runMain = function (sourceFile, args) {
	var module = JSX.require(sourceFile);
	if (! module) {
		throw new ReferenceError("entry point module not found in " + sourceFile);
	}
	if (! module._Main) {
		throw new ReferenceError("entry point _Main not found in " + sourceFile);
	}
	if (! module._Main.main) {
		throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile);
	}
	module._Main.main(args);
};

/**
 * launches _Test#test*():void invoked by jsx --test
 */
JSX.runTests = function (sourceFile, tests) {
	var module = JSX.require(sourceFile);
	if (! module) return;

	var testClass = module._Test;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function && m.match(/^test\w*$/)) {
				tests.push(m);
			}
		}
	}

	var testCase = new testClass();

	if (testCase.beforeClass != null)
		testCase.beforeClass(tests);

	for (var i = 0; i < tests.length; ++i) {
		(function (method) {
			if (method in testCase) {
				testCase.run(method, function() { testCase[method](); });
			}
			else {
				throw new ReferenceError("No such test method: " + method);
			}
		}(tests[i]));
	}

	if (testCase.afterClass != null)
		testCase.afterClass();
};
/**
 * call a function on load/DOMContentLoaded
 */
function $__jsx_onload (event) {
	window.removeEventListener("load", $__jsx_onload);
	document.removeEventListener("DOMContentLoaded", $__jsx_onload);
	JSX.runMain("pen3.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);

//# sourceMappingURL=pen3.jsx.js.mapping
