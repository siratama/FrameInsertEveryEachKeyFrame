package;

import jsfl.Library;
import jsfl.Lib;
import jsfl.Lib.fl;

@:expose("FrameInsertEveryEachKeyFrame")
class FrameInsertEveryEachKeyFrame
{
	private var library:Library;

	public static function main(){
		#if jsfl_insert
		new FrameInsertEveryEachKeyFrame(1);
		#elseif jsfl_remove
		new FrameInsertEveryEachKeyFrame(-1);
		#end
	}
	public function new(addedFrames:Int)
	{
		if(Lib.fl.getDocumentDOM() == null) return;

		var timeline = Lib.fl.getDocumentDOM().getTimeline();
		var selectedLayerIds = timeline.getSelectedLayers();
		for (layerId in selectedLayerIds)
		{
			timeline.currentLayer = layerId;
			var layer = timeline.layers[layerId];

			var frames = layer.frames;
			var frameTotal = frames.length;

			for (frameIndex in 0...frameTotal)
			{
				var frame = frames[frameIndex];
				if(frame.startFrame != frameIndex) continue;

				if(addedFrames > 0){
					timeline.insertFrames(addedFrames, false, frameIndex);
				}
				else{
					if(frame.duration == 1) continue;

					var minus = ((frame.duration + addedFrames) < 1) ? -(frame.duration - 1): addedFrames;
					timeline.removeFrames(frameIndex, frameIndex - minus);

					if(frameIndex + 1 >= frameTotal){
						break;
					}
				}
				frames = layer.frames;
				frameTotal = frames.length;
			}
		}
	}
}
