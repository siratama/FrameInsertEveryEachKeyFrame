function FrameTotalChangerToKeyFrames(){

	this.constractor.apply(this, arguments);
}
FrameTotalChangerToKeyFrames.prototype = {

	constractor: function(added){

		this.added = added;
		this.timeline = fl.getDocumentDOM().getTimeline();
	},

	run: function(){

		var selectedLayerIds = this.timeline.getSelectedLayers();
		if(selectedLayerIds.length != 1){

			fl.trace("ƒŒƒCƒ„[‚ğˆê‚Â‚¾‚¯‘I‘ğ‚µ‚Ä‚­‚¾‚³‚¢");
			return;
		}
		this.selectedLayerId = selectedLayerIds[0];
		this.updateFramesData();

		this.addFrameToAllKeyFrame(this.added);
	},

	updateFramesData: function(){

		this.frames = this.timeline.layers[this.selectedLayerId].frames;
		this.totalFrames = this.frames.length;
	},

	addFrameToAllKeyFrame: function(added){

		for(var i=0; i < this.totalFrames; i++){

			var frame = this.frames[i];
			if(frame.startFrame != i) continue;

			if(added > 0)
				this.timeline.insertFrames(added, false, i);
			else
				this.timeline.removeFrames(i, i - added);

			this.updateFramesData();
		}
	}
};


