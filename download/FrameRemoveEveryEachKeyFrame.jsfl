(function ($hx_exports) { "use strict";
var FrameInsertEveryEachKeyFrame = $hx_exports.FrameInsertEveryEachKeyFrame = function(addedFrames) {
	if(jsfl.Lib.fl.getDocumentDOM() == null) return;
	var timeline = jsfl.Lib.fl.getDocumentDOM().getTimeline();
	var selectedLayerIds = timeline.getSelectedLayers();
	var _g = 0;
	while(_g < selectedLayerIds.length) {
		var layerId = selectedLayerIds[_g];
		++_g;
		timeline.currentLayer = layerId;
		var layer = timeline.layers[layerId];
		var frames = layer.frames;
		var frameTotal = frames.length;
		var _g1 = 0;
		while(_g1 < frameTotal) {
			var frameIndex = _g1++;
			var frame = frames[frameIndex];
			if(frame.startFrame != frameIndex) continue;
			if(addedFrames > 0) timeline.insertFrames(addedFrames,false,frameIndex); else {
				if(frame.duration == 1) continue;
				var minus;
				if(frame.duration + addedFrames < 1) minus = -(frame.duration - 1); else minus = addedFrames;
				timeline.removeFrames(frameIndex,frameIndex - minus);
				if(frameIndex + 1 >= frameTotal) break;
			}
			frames = layer.frames;
			frameTotal = frames.length;
		}
	}
	var _g2 = 0;
	while(_g2 < selectedLayerIds.length) {
		var layerId1 = selectedLayerIds[_g2];
		++_g2;
		timeline.setSelectedLayers(layerId1,false);
	}
};
FrameInsertEveryEachKeyFrame.__name__ = true;
FrameInsertEveryEachKeyFrame.main = function() {
	new FrameInsertEveryEachKeyFrame(-1);
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
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
jsfl.AlignMode = function() { };
jsfl.AlignMode.__name__ = true;
jsfl.ArrangeMode = function() { };
jsfl.ArrangeMode.__name__ = true;
jsfl.Boot = function() { };
jsfl.Boot.__name__ = true;
jsfl.Boot.trace = function(v,infos) {
	fl.trace("" + Std.string(v));
};
jsfl.ColorMode = function() { };
jsfl.ColorMode.__name__ = true;
jsfl.CompressionType = function() { };
jsfl.CompressionType.__name__ = true;
jsfl.DocumentEnterEditMode = function() { };
jsfl.DocumentEnterEditMode.__name__ = true;
jsfl.ElementType = function() { };
jsfl.ElementType.__name__ = true;
jsfl.EventType = function() { };
jsfl.EventType.__name__ = true;
jsfl.FilterType = function() { };
jsfl.FilterType.__name__ = true;
jsfl._InstanceType = {};
jsfl._InstanceType.InstanceType_Impl_ = function() { };
jsfl._InstanceType.InstanceType_Impl_.__name__ = true;
jsfl.ItemType = function() { };
jsfl.ItemType.__name__ = true;
jsfl.LayerType = function() { };
jsfl.LayerType.__name__ = true;
jsfl.Lib = function() { };
jsfl.Lib.__name__ = true;
jsfl.Lib.alert = function(alertText) {
	alert(alertText);
};
jsfl.Lib.confirm = function(strAlert) {
	return confirm(strAlert);
};
jsfl.Lib.prompt = function(promptMsg,text) {
	if(text == null) text = "";
	return prompt(promptMsg,text);
};
jsfl.Lib.throwError = function(object,posInfos) {
	jsfl.Lib.fl.trace("Error : " + Std.string(object) + " at " + posInfos.methodName + "[" + posInfos.fileName + ":" + posInfos.lineNumber + "]");
	throw object;
};
jsfl.PersistentDataType = function() { };
jsfl.PersistentDataType.__name__ = true;
jsfl._SpriteSheetExporter = {};
jsfl._SpriteSheetExporter.SpriteSheetExporterAlgorithm_Impl_ = function() { };
jsfl._SpriteSheetExporter.SpriteSheetExporterAlgorithm_Impl_.__name__ = true;
jsfl._SpriteSheetExporter.SpriteSheetExporterFormat_Impl_ = function() { };
jsfl._SpriteSheetExporter.SpriteSheetExporterFormat_Impl_.__name__ = true;
jsfl._SpriteSheetExporter.SpriteSheetExporterLayoutFormat_Impl_ = function() { };
jsfl._SpriteSheetExporter.SpriteSheetExporterLayoutFormat_Impl_.__name__ = true;
jsfl._SymbolInstance = {};
jsfl._SymbolInstance.LoopType_Impl_ = function() { };
jsfl._SymbolInstance.LoopType_Impl_.__name__ = true;
jsfl.SymbolType = function() { };
jsfl.SymbolType.__name__ = true;
jsfl._TweenType = {};
jsfl._TweenType.TweenType_Impl_ = function() { };
jsfl._TweenType.TweenType_Impl_.__name__ = true;
String.__name__ = true;
Array.__name__ = true;
haxe.Log.trace = jsfl.Boot.trace;
jsfl.AlignMode.LEFT = "left";
jsfl.AlignMode.RIGHT = "right";
jsfl.AlignMode.TOP = "top";
jsfl.AlignMode.BOTTOM = "bottom";
jsfl.AlignMode.VERTICAL_CENTER = "vertical center";
jsfl.AlignMode.HORIZONTAL_CENTER = "horizontal center";
jsfl.ArrangeMode.BACK = "back";
jsfl.ArrangeMode.BACKWARD = "backward";
jsfl.ArrangeMode.FORWARD = "forward";
jsfl.ArrangeMode.FRONT = "front";
jsfl.ColorMode.NONE = "none";
jsfl.ColorMode.BRIGHTNESS = "brightness";
jsfl.ColorMode.TINT = "tint";
jsfl.ColorMode.ALPHA = "alpha";
jsfl.ColorMode.ADVANCED = "advanced";
jsfl.CompressionType.PHOTO = "photo";
jsfl.CompressionType.LOSSLESS = "lossless";
jsfl.DocumentEnterEditMode.IN_PLACE = "inPlace";
jsfl.DocumentEnterEditMode.NEW_WINDOW = "newWindow";
jsfl.ElementType.SHAPE = "shape";
jsfl.ElementType.TEXT = "text";
jsfl.ElementType.TLF_TEXT = "tlfText";
jsfl.ElementType.INSTANCE = "instance";
jsfl.ElementType.SHAPE_OBJ = "shapeObj";
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
jsfl.FilterType.ADJUSTCOLOR = "adjustColorFilter";
jsfl.FilterType.BEVEL = "bevelFilter";
jsfl.FilterType.BLUR = "blurFilter";
jsfl.FilterType.DROPSHADOW = "dropShadowFilter";
jsfl.FilterType.GLOW = "glowFilter";
jsfl.FilterType.GRADIENT_BEVEL = "gradientBevelFilter";
jsfl.FilterType.GRADIENT_GLOW = "gradientGlowFilter";
jsfl._InstanceType.InstanceType_Impl_.SYMBOL = "symbol";
jsfl._InstanceType.InstanceType_Impl_.BITMAP = "bitmap";
jsfl._InstanceType.InstanceType_Impl_.EMBEDDED_VIDEO = "embedded video";
jsfl._InstanceType.InstanceType_Impl_.LINKED_VIDEO = "linked video";
jsfl._InstanceType.InstanceType_Impl_.VIDEO = "video";
jsfl._InstanceType.InstanceType_Impl_.COMPILED_CLIP = "compiled clip";
jsfl.ItemType.UNDEFINED = "undefined";
jsfl.ItemType.COMPONENT = "component";
jsfl.ItemType.MOVIE_CLIP = "movie clip";
jsfl.ItemType.GRAPHIC = "graphic";
jsfl.ItemType.BUTTON = "button";
jsfl.ItemType.FOLDER = "folder";
jsfl.ItemType.FONT = "font";
jsfl.ItemType.SOUND = "sound";
jsfl.ItemType.BITMAP = "bitmap";
jsfl.ItemType.COMPILED_CLIP = "compiled clip";
jsfl.ItemType.SCREEN = "screen";
jsfl.ItemType.VIDEO = "video";
jsfl.LayerType.NORMAL = "normal";
jsfl.LayerType.GUIDE = "guide";
jsfl.LayerType.GUIDED = "guided";
jsfl.LayerType.MASK = "mask";
jsfl.LayerType.MASKED = "masked";
jsfl.LayerType.FOLDER = "folder";
jsfl.Lib.fl = fl;
jsfl.PersistentDataType.INTEGER = "integer";
jsfl.PersistentDataType.INTEGER_ARRAY = "integerArray";
jsfl.PersistentDataType.DOUBLE = "double";
jsfl.PersistentDataType.DOUBLE_ARRAY = "doubleArray";
jsfl.PersistentDataType.STRING = "string";
jsfl.PersistentDataType.BYTE_ARRAY = "byteArray";
jsfl._SpriteSheetExporter.SpriteSheetExporterAlgorithm_Impl_.BASIC = "basic";
jsfl._SpriteSheetExporter.SpriteSheetExporterAlgorithm_Impl_.MAX_RECTS = "maxRects";
jsfl._SpriteSheetExporter.SpriteSheetExporterFormat_Impl_.RGBA8888 = "RGBA8888";
jsfl._SpriteSheetExporter.SpriteSheetExporterFormat_Impl_.RGB888x = "RGB888x";
jsfl._SpriteSheetExporter.SpriteSheetExporterFormat_Impl_.RGB8 = "RGB8";
jsfl._SpriteSheetExporter.SpriteSheetExporterLayoutFormat_Impl_.COCOS2D_V2 = "cocos2dv2";
jsfl._SpriteSheetExporter.SpriteSheetExporterLayoutFormat_Impl_.COCOS2D_V3 = "cocos2dv3";
jsfl._SpriteSheetExporter.SpriteSheetExporterLayoutFormat_Impl_.EASEL_JS = "easeljs";
jsfl._SpriteSheetExporter.SpriteSheetExporterLayoutFormat_Impl_.JSON = "JSON";
jsfl._SpriteSheetExporter.SpriteSheetExporterLayoutFormat_Impl_.JSON_ARRAY = "JSON-Array";
jsfl._SpriteSheetExporter.SpriteSheetExporterLayoutFormat_Impl_.SPARROW_V1 = "Sparrow-v1";
jsfl._SpriteSheetExporter.SpriteSheetExporterLayoutFormat_Impl_.SPARROW_V2 = "Sparrow-v2";
jsfl._SpriteSheetExporter.SpriteSheetExporterLayoutFormat_Impl_.STARLING = "Starling";
jsfl._SymbolInstance.LoopType_Impl_.LOOP = "loop";
jsfl._SymbolInstance.LoopType_Impl_.PLAY_ONCE = "play once";
jsfl._SymbolInstance.LoopType_Impl_.SINGLE_FRAME = "single frame";
jsfl.SymbolType.MOVIE_CLIP = "movie clip";
jsfl.SymbolType.GRAPHIC = "graphic";
jsfl.SymbolType.BUTTON = "button";
jsfl._TweenType.TweenType_Impl_.MOTION = "motion";
jsfl._TweenType.TweenType_Impl_.SHAPE = "shape";
jsfl._TweenType.TweenType_Impl_.NONE = "none";
jsfl._TweenType.TweenType_Impl_.MOTION_OBJECT = "motion object";
FrameInsertEveryEachKeyFrame.main();
})(typeof window != "undefined" ? window : exports);
