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

		fl.trace("�폜�t���[��������͂���ꍇ �}�C�i�X�l(-1 �` -N)��ݒ肵�Ă��������B");
		var data = prompt("�}�� or �폜�t���[��������", "2");

		if(data == null || data == 0) return;

		var changer = new FrameTotalChangerToKeyFrames(parseInt(data));
		changer.run();
	}
};

var gui = new FrameTotalChangerToKeyFramesGUI();
gui.run();

