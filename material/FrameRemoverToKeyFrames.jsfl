function FrameRemoverToKeyFrames(){

	this.constractor.apply(this, arguments);
}
FrameRemoverToKeyFrames.prototype = {

	constractor: function(){

		var path = fl.scriptURI;
		fl.runScript(path.replace(path.split("/").pop(),
			"FrameTotalChangerToKeyFrames.jsfl"));
	},
	run: function(){

		var changer = new FrameTotalChangerToKeyFrames(-1);
		changer.run();
	}
};

var remover = new FrameRemoverToKeyFrames();
remover.run();

