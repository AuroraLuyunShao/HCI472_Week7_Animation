(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Aurora_animate_HTML5 Canvas_atlas_1", frames: [[368,378,366,51],[0,378,366,61],[0,0,557,61],[0,63,557,61],[0,126,557,61],[0,189,557,61],[0,252,557,61],[0,315,557,61]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Aurora_animate_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Aurora_animate_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Aurora_animate_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Aurora_animate_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Aurora_animate_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Aurora_animate_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Aurora_animate_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Aurora_animate_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(115,58,33,0)").ss(1,1,1).p("AGSJbImNkNImIEUICEnOIl/kfIHfgQICcnGICjHDIHfAHIl6Eng");
	this.shape.setTransform(63.925,60.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("Aj/CUIl/kfIHfgQICcnGICjHDIHfAIIl6EmICNHLImNkNImIETg");
	this.shape_1.setTransform(63.925,60.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,129.9,123.9);


(lib.StageOutline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(3,1,1).p("EgV3gjJMArvAAAMAAABGTMgrvAAAg");
	this.shape.setTransform(140,225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(115,58,33,0)").s().p("EgV3AjKMAAAhGTMArvAAAMAAABGTg");
	this.shape_1.setTransform(140,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,283,453);


(lib.ButtonOne = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(48.5,19.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(48.5,22.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

	// ButtonBG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("AzXFeQigAAAAigIAAl7QAAigCgAAMAmvAAAQCgAAAACgIAAF7QAACgigAAg");
	this.shape.setTransform(140,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3366").s().p("Ax/FFQiUAAAAiVIAAlfQAAiVCUAAMAj+AAAQCVAAAACVIAAFfQAACViVAAg");
	this.shape_1.setTransform(140,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AzXolMAmvAAAQCgAAAACgIAAMLQAACgigAAMgmvAAAQigAAAAigIAAsLQAAigCgAAg");
	this.shape_2.setTransform(139.5,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AzXImQigAAAAigIAAsLQAAigCgAAMAmvAAAQCgAAAACgIAAMLQAACgigAAg");
	this.shape_3.setTransform(139.5,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-12,283,113);


// stage content:
(lib.Aurora_animate_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {StartSquash:1,StartAnticipation:72,StartFollowThru:140};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,71,139,205];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.StartFollowThru.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并继续从该帧播放。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndPlay('StartFollowThru');
		});
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.StartAnticipation.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并继续从该帧播放。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndPlay('StartAnticipation');
		});
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.StartSquash.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧标签并继续从该帧播放。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndPlay('StartSquash');
		});
	}
	this.frame_71 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
	}
	this.frame_139 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
	}
	this.frame_205 = function() {
		var _this = this;
		/*
		停止播放影片剪辑/视频
		停止播放指定影片剪辑或视频。
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(68).call(this.frame_139).wait(66).call(this.frame_205).wait(1));

	// ButtonThree
	this.StartFollowThru = new lib.ButtonOne();
	this.StartFollowThru.name = "StartFollowThru";
	this.StartFollowThru.setTransform(861,568.95);
	new cjs.ButtonHelper(this.StartFollowThru, 0, 1, 2, false, new lib.ButtonOne(), 3);

	this.timeline.addTween(cjs.Tween.get(this.StartFollowThru).wait(206));

	// ButtonTwo
	this.StartAnticipation = new lib.ButtonOne();
	this.StartAnticipation.name = "StartAnticipation";
	this.StartAnticipation.setTransform(489,568.95);
	new cjs.ButtonHelper(this.StartAnticipation, 0, 1, 2, false, new lib.ButtonOne(), 3);

	this.timeline.addTween(cjs.Tween.get(this.StartAnticipation).wait(206));

	// ButtonOne
	this.StartSquash = new lib.ButtonOne();
	this.StartSquash.name = "StartSquash";
	this.StartSquash.setTransform(120.65,568.95);
	new cjs.ButtonHelper(this.StartSquash, 0, 1, 2, false, new lib.ButtonOne(), 3);

	this.timeline.addTween(cjs.Tween.get(this.StartSquash).wait(206));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAj8AjKMAAAhGTMArwAAAMAAABGTgEgWLAjKMAAAhGTMArvAAAMAAABGTgEhPrAjKMAAAhGTMArwAAAMAAABGTg");
	mask.setTransform(631,320);

	// FollowThru
	this.instance = new lib.Star("synched",0);
	this.instance.setTransform(849.95,420,0.7857,0.7079,0,0,0,64.3,61.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({rotation:360,x:999.95,y:250},24,cjs.Ease.quintIn).to({startPosition:0},20,cjs.Ease.quintOut).to({rotation:720,x:1139.95,y:420},21,cjs.Ease.quintIn).wait(1));

	// Anticipation
	this.instance_1 = new lib.Star("synched",0);
	this.instance_1.setTransform(620,495,0.9073,0.8238,0,0,0,64.2,61.4);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).to({regY:61.5,scaleX:1.0376,rotation:-14.999,x:609.25,y:487.45},4).to({rotation:0,x:623.25,y:495.45},4).to({rotation:14.9992,x:636.3,y:487.5},4).to({rotation:0,x:623.25,y:495.45},3).to({regY:61.6,scaleY:0.7943,rotation:-14.9987,x:609.25,y:488.5},3).to({scaleY:0.7963,rotation:0,x:623.25,y:496.55},3).to({scaleY:0.8004,rotation:14.9976,x:636.25,y:488.55},3).to({scaleY:0.7963,rotation:0,x:623.25,y:496.55},2).to({scaleY:0.6009,y:508.55},23,cjs.Ease.circOut).to({regX:64,regY:60.9,scaleX:0.6804,scaleY:0.9816,x:623.05,y:35},18,cjs.Ease.quintIn).wait(67));

	// SquashAndStretch
	this.instance_2 = new lib.Star("synched",0);
	this.instance_2.setTransform(260.65,100.1,0.8435,1.3125,0,0,0,63.9,61);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:64,scaleX:1.1565,scaleY:0.7235,x:260.75,y:501.05},18).to({regY:61.1,scaleX:1.001,scaleY:1.1562,y:320.15},15).to({regY:61.2,scaleX:1.0847,scaleY:0.7919,x:260.7,y:497},10).to({regX:64.2,regY:61.4,scaleX:0.9232,scaleY:1.0032,x:261.25,y:410.15},8).to({regY:61.5,scaleX:1.0174,scaleY:0.799,x:262.25,y:496.65},7).to({scaleX:0.8256,scaleY:0.8708,x:262.05,y:470.05},4).to({regX:64.3,regY:61.6,scaleX:0.8914,scaleY:0.8711,x:262,y:492.1},3).to({regX:64.2,regY:61.4,scaleX:0.9073,scaleY:0.8238,x:262.3,y:487.6},2).wait(1).to({y:495},0).wait(1).to({y:492.4},0).wait(1).to({y:495},0).wait(135));

	// Stages
	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(859.4,44.65,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(489.4,44.65,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1();
	this.instance_5.setTransform(120.1,44.95,0.5,0.5);

	this.instance_6 = new lib.StageOutline("synched",0);
	this.instance_6.setTransform(260.65,320,1,1,0,0,0,140,225);

	this.instance_7 = new lib.StageOutline("synched",0);
	this.instance_7.setTransform(1000.65,319.8,1,1,0,0,0,140,225);

	this.instance_8 = new lib.StageOutline("synched",0);
	this.instance_8.setTransform(628.2,320,1,1,0,0,0,140,225);

	this.instance_9 = new lib.CachedBmp_6();
	this.instance_9.setTransform(859.4,44.65,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_5();
	this.instance_10.setTransform(489.4,44.65,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_4();
	this.instance_11.setTransform(120.1,44.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},1).wait(205));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(758.7,404.7,383.5,265.3);
// library properties:
lib.properties = {
	id: 'BBBF8EA2BBFB28459C0A341B97E2E597',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Aurora_animate_HTML5 Canvas_atlas_1.png?1621263654554", id:"Aurora_animate_HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BBBF8EA2BBFB28459C0A341B97E2E597'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;