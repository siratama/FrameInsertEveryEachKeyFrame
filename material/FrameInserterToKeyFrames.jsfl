function FrameInserterToKeyFrames(){

	this.constractor.apply(this, arguments);
}
FrameInserterToKeyFrames.prototype = {

	constractor: function(){

		var path = fl.scriptURI;
		fl.runScript(path.replace(path.split("/").pop(),
			"FrameTotalChangerToKeyFrames.jsfl"));
	},
	run: function(){

		var changer = new FrameTotalChangerToKeyFrames(1);
		changer.run();
	}
};

var inserter = new FrameInserterToKeyFrames();
inserter.run();

