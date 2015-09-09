(function () { "use strict";
var $estr = function() { return js.Boot.__string_rec(this,''); };
var ExtensionIndex = function() {
	var _g = this;
	this.csInterfaceUtil = flash_extension.csinterface.CSInterfaceUtil.create();
	var containerElement = new $("#container");
	this.addedFramesElement = new $(".added_frames",containerElement);
	this.addedFramesElement.val("1");
	this.addedFramesElement.focus(function(event) {
		_g.addedFramesElement.select();
	});
	var insertButton = new $("#insert");
	insertButton.mousedown(function(event1) {
		_g.run(true);
	});
	var removeButton = new $("#remove");
	removeButton.mousedown(function(event2) {
		_g.run(false);
	});
};
ExtensionIndex.__name__ = true;
ExtensionIndex.main = function() {
	window.addEventListener("load",function(event) {
		new ExtensionIndex();
	});
};
ExtensionIndex.prototype = {
	run: function(plus) {
		var addedFramesString = this.addedFramesElement.val();
		if(addedFramesString == "") {
			this.csInterfaceUtil.flTrace("Set frames num.");
			return;
		}
		if(!plus) addedFramesString = "-" + Std.string(addedFramesString);
		this.csInterfaceUtil.evalScript("new " + "FrameInsertEveryEachKeyFrame" + "(" + Std.string(addedFramesString) + ");");
	}
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
var flash_extension = {};
flash_extension.csinterface = {};
flash_extension.csinterface.CSInterfaceUtil = function(csInterface) {
	this.csInterface = csInterface;
};
flash_extension.csinterface.CSInterfaceUtil.__name__ = true;
flash_extension.csinterface.CSInterfaceUtil.create = function() {
	return new flash_extension.csinterface.CSInterfaceUtil(new CSInterface());
};
flash_extension.csinterface.CSInterfaceUtil.prototype = {
	runJsflScript: function(jsflUri) {
		this.csInterface.evalScript("fl.runScript(\"" + jsflUri + "\")");
	}
	,flTrace: function(text) {
		this.csInterface.evalScript("fl.trace(\"" + text + "\")");
	}
	,getExtensionUri: function() {
		return "file:///" + this.csInterface.getSystemPath(SystemPath.EXTENSION);
	}
	,evalScript: function(script,callback) {
		this.csInterface.evalScript(script,callback);
	}
	,addDataToDocument: function(key,dataType,data) {
		this.csInterface.evalScript("document.addDataToDocument(\"" + key + "\", \"" + Std.string(dataType) + "\", \"" + data + "\");");
	}
	,getDataFromDocument: function(key,callback) {
		this.csInterface.evalScript("document.getDataFromDocument(\"" + key + "\");",callback);
	}
	,addEventListener: function(eventType,callbackCode,callback) {
		this.csInterface.evalScript("fl.addEventListener(\"" + Std.string(eventType) + "\", function(){ " + callbackCode + " });",callback);
	}
};
var haxe = {};
haxe.Log = function() { };
haxe.Log.__name__ = true;
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = true;
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var jsfl = {};
jsfl.Boot = function() { };
jsfl.Boot.__name__ = true;
jsfl.Boot.trace = function(v,infos) {
	fl.trace("" + Std.string(v));
};
jsfl.EventType = function() { };
jsfl.EventType.__name__ = true;
jsfl.PersistentDataType = function() { };
jsfl.PersistentDataType.__name__ = true;
String.__name__ = true;
Array.__name__ = true;
haxe.Log.trace = jsfl.Boot.trace;
ExtensionIndex.JSFL_CLASS_NAME = "FrameInsertEveryEachKeyFrame";
ExtensionIndex.JSFL = "FrameInsertEveryEachKeyFrame" + ".jsfl";
jsfl.EventType.DOCUMENT_NEW = "documentNew";
jsfl.EventType.DOCUMENT_OPENED = "documentOpened";
jsfl.EventType.DOCUMENT_CLOSED = "documentClosed";
jsfl.EventType.MOUSE_MOVE = "mouseMove";
jsfl.EventType.DOCUMENT_CHANGED = "documentChanged";
jsfl.EventType.LAYER_CHANGED = "layerChanged";
jsfl.EventType.TIMELINE_CHANGED = "timelineChanged";
jsfl.EventType.FRAME_CHANGED = "frameChanged";
jsfl.EventType.PRE_PUBLISH = "prePublish";
jsfl.EventType.POST_PUBLISH = "postPublish";
jsfl.EventType.SELECTION_CHANGED = "selectionChanged";
jsfl.EventType.DPI_CHANGED = "dpiChanged";
jsfl.PersistentDataType.INTEGER = "integer";
jsfl.PersistentDataType.INTEGER_ARRAY = "integerArray";
jsfl.PersistentDataType.DOUBLE = "double";
jsfl.PersistentDataType.DOUBLE_ARRAY = "doubleArray";
jsfl.PersistentDataType.STRING = "string";
jsfl.PersistentDataType.BYTE_ARRAY = "byteArray";
ExtensionIndex.main();
})();
