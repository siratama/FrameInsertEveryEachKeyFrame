package;

import flash_extension.csinterface.CSInterfaceUtil;
import jQuery.JQuery;
import js.Browser;

class ExtensionIndex
{
	private var csInterfaceUtil:CSInterfaceUtil;
	private static inline var JSFL_CLASS_NAME = "FrameInsertEveryEachKeyFrame";
	private static inline var JSFL = JSFL_CLASS_NAME + ".jsfl";

	private var addedFramesElement:JQuery;

	public static function main(){
		Browser.window.addEventListener("load", function(event){
			new ExtensionIndex();
		});
	}
	public function new()
	{
		csInterfaceUtil = CSInterfaceUtil.create();

		var containerElement = new JQuery("#container");

		addedFramesElement = new JQuery(".added_frames", containerElement);
		addedFramesElement.val("1");
		addedFramesElement.focus(function(event){
			addedFramesElement.select();
		});

		var insertButton = new JQuery("#insert");
		insertButton.mousedown(function(event){
			run(true);
		});

		var removeButton = new JQuery("#remove");
		removeButton.mousedown(function(event){
			run(false);
		});
	}
	private function run(plus:Bool)
	{
		var addedFramesString = addedFramesElement.val();
		if(addedFramesString == ""){
			csInterfaceUtil.flTrace("Set frames num.");
			return;
		}
		if(!plus){
			addedFramesString = "-" + addedFramesString;
		}
		csInterfaceUtil.evalScript('new $JSFL_CLASS_NAME($addedFramesString);');
	}
}

