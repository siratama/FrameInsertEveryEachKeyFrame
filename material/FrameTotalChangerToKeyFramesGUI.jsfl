function FrameTotalChangerToKeyFramesGUI(){

	this.constractor.apply(this, arguments);
}
FrameTotalChangerToKeyFramesGUI.prototype = {

	constractor: function(){

		var path = fl.scriptURI;
		fl.runScript(path.replace(path.split("/").pop(),
			"FrameTotalChangerToKeyFrames.jsfl"));
	},
	run: function(){

		fl.trace("削除フレーム数を入力する場合 マイナス値(-1 ～ -N)を設定してください。");
		var data = prompt("挿入 or 削除フレーム数入力", "2");

		if(data == null || data == 0) return;

		var changer = new FrameTotalChangerToKeyFrames(parseInt(data));
		changer.run();
	}
};

var gui = new FrameTotalChangerToKeyFramesGUI();
gui.run();

