//================== CANVAS SETUP ==================//
function refreshCanvasSettings(TASK){
	// Adjust location of CANVAS based on species-specific setup
	if (typeof(TASK.HeadsupDisplayFraction) != "undefined"){
		CANVAS.headsupfraction=TASK.HeadsupDisplayFraction
	} //IF headsupdisplayfraction specified
	else{
		if (TASK.Species == "macaque" || TASK.Species == "human"){
			CANVAS.headsupfraction=0;
		}
		else if (TASK.Species == "marmoset"){
			CANVAS.headsupfraction=1/3-0.06;
		}		
	}

	if (CANVAS.headsupfraction == 0){
		var textobj = document.getElementById("headsuptext");
		textobj.innerHTML = ''
		var textobj = document.getElementById("headsuptextdevices");
		textobj.innerHTML = ''
	}
}//refreshCanvasSettings

function writeTextonBlankCanvas(textstr,x,y){
	var blank_canvasobj=CANVAS.obj.blank
	var visible_ctxt = blank_canvasobj.getContext('2d')
	visible_ctxt.textBaseline = "hanging"
	visible_ctxt.fillStyle = "white"
	visible_ctxt.font = "18px Verdana"
	visible_ctxt.fillText(textstr,x,y)
}

function updateStatusText(text){
	var textobj = document.getElementById("headsuptext");
	textobj.innerHTML = text
}

function setupCanvasHeadsUp(){
	canvasobj=document.getElementById("canvasheadsup");
	canvasobj.width=document.body.clientWidth;
	canvasobj.height=Math.round(document.body.clientHeight*CANVAS.headsupfraction);
	CANVAS.offsettop = canvasobj.height;
	if (CANVAS.headsupfraction == 0){
		canvasobj.style.display="none";

		//hide buttons for triggering pump
		document.querySelector("button[id=pumpflush]").style.display = "none" //if do style.visibility=hidden, element will still occupy space
		document.querySelector("button[id=pumptrigger]").style.display = "none" //if do style.visibility=hidden, element will still occupy space
	}
	else{
		canvasobj.style.display="block";

		//show buttons for triggering pump
		document.querySelector("button[id=pumpflush]").style.display = "block"
		document.querySelector("button[id=pumpflush]").style.visibility = "visible"
		document.querySelector("button[id=pumptrigger]").style.display = "block"
		document.querySelector("button[id=pumptrigger]").style.visibility = "visible"
		document.querySelector("button[id=connectblescale]").style.display = "block"
		document.querySelector("button[id=connectblescale]").style.visibility = "visible"

		document.querySelector("button[id=pumpflush]").addEventListener(
			'pointerup',function(){ event.preventDefault(); runPump("flush") },false)
		document.querySelector("button[id=pumptrigger]").addEventListener(
			'pointerup',function(){ event.preventDefault(); runPump("trigger") },false)
	}
	var context=canvasobj.getContext('2d');

	context.fillStyle="#202020";
	context.fillRect(0,0,canvasobj.width,canvasobj.height);
	canvasobj.addEventListener('touchstart',touchstart_listener,false);
}
function setupCanvas(canvasobj){
	// center in page
	canvasobj.style.top=CANVAS.offsettop + "px";
	canvasobj.style.left=CANVAS.offsetleft + "px";
	canvasobj.width=windowWidth - CANVAS.offsetleft;
	canvasobj.height=windowHeight - CANVAS.offsettop;
	canvasobj.style.margin="0 auto";
	canvasobj.style.display="block"; //visible

	setupCanvasListeners(canvasobj)
} 

function setupEyeTrackerCanvas(){
	//SETUP similar to visiblecanvas
	EYETRACKERCANVAS.style.top=VISIBLECANVAS.style.top//mimic VISIBLECANVAS
	EYETRACKERCANVAS.style.left=VISIBLECANVAS.style.left;//mimic VISIBLECANVAS
	EYETRACKERCANVAS.width=VISIBLECANVAS.width //mimic VISIBLECANVAS
	EYETRACKERCANVAS.height=VISIBLECANVAS.height//mimic VISIBLECANVAS

	EYETRACKERCANVAS.style.margin="0 auto";
	EYETRACKERCANVAS.style.display="visible";

	setupCanvasListeners(EYETRACKERCANVAS)
}

function setupCanvasListeners(canvasobj){
		// assign listeners
	canvasobj.addEventListener('touchstart',touchstart_listener,{capture: false,passive: false}); // handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
	canvasobj.addEventListener('touchmove',touchmove_listener,{passive: false}) // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	canvasobj.addEventListener('touchend',touchend_listener,{capture: false, passive:false});
	canvasobj.addEventListener('mousedown',touchstart_listener,{capture: false,passive: false}); // handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
	canvasobj.addEventListener('mousemove',touchmove_listener,{passive: false}) // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	canvasobj.addEventListener('mouseup',touchend_listener,{capture: false, passive:false});
}

// Sync: Adjust canvas for the device pixel ratio & browser backing store size
// from http://www.html5rocks.com/en/tutorials/canvas/hidpi/#disqus_thread
function scaleCanvasforHiDPI(canvasobj){
	if (ENV.DevicePixelRatio !== backingStoreRatio){
		context=canvasobj.getContext("2d");
		var oldWidth = canvasobj.width;
		var oldHeight = canvasobj.height;
		canvasobj.width = oldWidth/ENV.CanvasRatio;
		canvasobj.height = oldHeight/ENV.CanvasRatio;
		canvasobj.style.width = windowWidth - CANVAS.offsetleft + "px";
		canvasobj.style.height = windowHeight - CANVAS.offsettop + "px";
		canvasobj.style.margin="0 auto";
	} 
}

function updateHeadsUpDisplay(){
	if (CANVAS.headsupfraction == 0){
		return
	}

	var textobj = document.getElementById("headsuptext");

	// Overall performance
	var ncorrect = 0;
	var nreward = 0;
	for (var i=0; i<=EVENTS['trialseries']['Response'].length-1; i++){
		if (EVENTS['trialseries']['Response'][i] == EVENTS['trialseries']['CorrectItem'][i]){
			ncorrect = ncorrect + 1
			nreward = nreward + EVENTS['trialseries']['NReward'][i]
		}
	}//FOR i trials

	var pctcorrect = Math.round(100 * ncorrect / EVENTS['trialseries']['Response'].length);

	// Task type
	var task1 = "";
	var task2 = "";
	if (TASK.RewardStage == 0){
		task1 = "Fixation";
	}
	else if (TASK.RewardStage == 1){
		task1 = TASK.TestGridIndex.length + "-way AFC:"
		task2 = TASK.SampleON + "ms, " + TASK.ImageBagsTest.length + "-categories in pool"
	}
	if (CANVAS.headsupfraction > 0){
		textobj.innerHTML = 
 		'User: ' + ENV.ResearcherDisplayName + ', ' + ENV.ResearcherEmail + "<br>"
		+ 'Agent: ' + ENV.Subject + ", <font color=green><b>" + pctcorrect 
		+ "%</b></font> " + "(" + ncorrect + " of " + EVENTS['trialseries']['Response'].length + " trials)" 
		+ "<br>" + "NRewards=" + nreward + ", <font color=green><b>" 
		+ Math.round(TASK.RewardPer1000Trials*nreward/1000) 
		+ "mL</b></font> (" + Math.round(TASK.RewardPer1000Trials) 
		+ " mL per 1000)" + "<br> " 
		+ task1 + "<br>" + task2 + "<br>" + "<br>"
		+ "last trial @ " + CURRTRIAL.lastTrialCompleted.toLocaleTimeString("en-US") + "<br>"
		+ "last saved to firebase @ " + CURRTRIAL.lastFirebaseSave.toLocaleTimeString("en-US")

		if (FLAGS.RFIDGeneratorCreated == 1){
			textobj.innerHTML = textobj.innerHTML + "<br>"
			+ "<font color = red>" + "PAUSED: waiting for RFID read!!" + "<br></font>"
		}
		if (TASK.CheckRFID > 0 && port.connected == false){
			textobj.innerHTML = textobj.innerHTML + "<br>"
			+ "<font color = red>" + "WARNING: USB device not connected to check RFID!!" + "<br></font>"
		}
	}
	else if (CANVAS.headsupfraction == 0){
		textobj.innerHTML = '' //port.statustext_connect + blescale.statustext_connect
	}
	else if (isNaN(CANVAS.headsupfraction)){ //before task params load
		if (ENV.ScreenRatio == -1) {
			var firestoreRecordFound = "<font color = red> DEVICE RECORD NOT FOUND! </font>"
			var screenRatioMatchesDPR = ''
		}
		else {
			var firestoreRecordFound = "<font color = green> DEVICE RECORD FOUND </font>"
			if (ENV.ScreenRatio != ENV.DevicePixelRatio){
				var screenRatioMatchesDPR = 'Detected DevicePixelRatio <font color = red>DOES NOT match record </font>'
			}
			else {
				var screenRatioMatchesDPR = 'Detected DevicePixelRatio <font color = green>MATCHES record </font>'
			}
		}
		textobj.innerHTML = 
		'User: ' + ENV.ResearcherDisplayName + ', ' + ENV.ResearcherEmail
		+ "<br>" + "No trials performed"
		+ "<br>"
		+ "<br><b>" + firestoreRecordFound + " for " + ENV.DeviceName.toLowerCase() + "</b>"
		+ "<br>" + "Screen Size = " + ENV.ScreenSizeInches[2] + "in (" + ENV.ViewportPixels + "px; " + ENV.ScreenRatio + "x" + ")"
		+ "<br>" + screenRatioMatchesDPR
		+ "<br>"
		+ "<br>" + "Device brand,name,type: " + ENV.DeviceBrand + ", "  + "<u><font color = green>" + ENV.DeviceName + "</font></u>" + ", " + ENV.DeviceType
		+ "<br>" + "Screen: " + ENV.DeviceScreenWidth + "x" + ENV.DeviceScreenHeight + " pixels"
		+ "<br>" + "TouchScreen: " + ENV.DeviceTouchScreen
		+ "<br>" + "GPU: " + ENV.DeviceGPU
		+ "<br>" + "OS name,codename,ver: " + ENV.DeviceOSName + ", "  + "<u><font color = green>"+ ENV.DeviceOSCodeName + "</font></u>" + ", " + ENV.DeviceOSVersion
		+ "<br>" + "Browser: "  + "<u><font color = green>" + ENV.DeviceBrowserName + "</font></u>" + " v" + ENV.DeviceBrowserVersion
	}//ELSE IF isnan
}

function updateHeadsUpDisplayDevices(){
	var textobj = document.getElementById("headsuptextdevices");
	if (CANVAS.headsupfraction > 0){
		textobj.innerHTML = "<font color=red><b>" + ble.statustext
		+ port.statustext_connect + "<br></font>" 
		+ "<font color=green><b>" + port.statustext_sent + "<br></font>" 
		+ "<font color=blue><b>" + port.statustext_received + "<br></font>"
		+ "<font color=red><b>" + blescale.statustext_connect + "<br></font>" 		
		+ "<font color=blue><b>" + blescale.statustext_received + "<br></font>"
	}
	else if (CANVAS.headsupfraction == 0){
		textobj.innerHTML = '' //port.statustext_connect + blescale.statustext_connect
	}
	else if (isNaN(CANVAS.headsupfraction)){
		//before task params load
		textobj.innerHTML =  port.statustext_connect + blescale.statustext_connect
	}
}

function updateHeadsUpDisplayAutomator(currentautomatorstagename,pctcorrect,ntrials,minpctcorrect,mintrials,eventstring){
	var textobj = document.getElementById("headsuptextautomator");
	if (CANVAS.headsupfraction > 0){
		textobj.innerHTML =
			"Automator: " + 
			"<font color=red><b>" + TASK.Automator + "</b></font> " +
			" " + "<font color=white><b>" +
			 "Stage" + TASK.CurrentAutomatorStage + "=" +
				currentautomatorstagename +
			"</b></font>" +"<br>" +
			"Performance: " + 
			"<font color=green><b>" + Math.round(pctcorrect) + "%, last " + 
			ntrials + " trials</b></font> " + 
			"(min: " + minpctcorrect + 
				"%, " + mintrials + " trials)" + "<br>" + "<br>" +
			eventstring
	}
	else if (CANVAS.headsupfraction == 0){
		textobj.innerHTML = ""
	}
}

//================== IMAGE RENDERING ==================//
function defineImageGrid(ngridpoints, gridspacing,xoffset,yoffset){
	var xgrid =[]
	var ygrid =[]
	var xgridcent =[] 
	var ygridcent =[]
	var cnt=0;
	for (var i=1; i<=ngridpoints; i++){
		for (var j=1; j<=ngridpoints; j++){
			xgrid[cnt]=i - 1/2;
			ygrid[cnt]=j - 1/2;
			cnt++;
		}
	}

	//center x & y grid within canvas
	var xcanvascent = (document.body.clientWidth - CANVAS.offsetleft)*ENV.CanvasRatio*ENV.DevicePixelRatio/2
	xcanvascent = xcanvascent + xoffset
	var dx = xcanvascent - gridspacing*ngridpoints/2; //left side of grid

	var ycanvascent = (document.body.clientHeight - CANVAS.offsettop)*ENV.CanvasRatio*ENV.DevicePixelRatio/2
	ycanvascent = ycanvascent + yoffset
	var dy = ycanvascent - gridspacing*ngridpoints/2; //top of grid

	for (var i=0; i<=xgrid.length-1; i++){
		xgridcent[i]=Math.round(xgrid[i]*gridspacing + dx);
		ygridcent[i]=Math.round(ygrid[i]*gridspacing + dy);
	}

	return [xcanvascent, ycanvascent, xgridcent, ygridcent]
}//FUNCTION defineImageGrid


function displayTrial(sequencetaskscreen,sequencesceneindex,tsequence){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then();

	var start = null;
	CURRTRIAL.tsequenceactual = []
	async function updateCanvas(timestamp){

		// If start has not been set to a float timestamp, set it now.
		if (!start) start = timestamp;

		// If time to show new frame, 
		if (timestamp - start > tsequence[frame.current]){

	//=================== 3D rendering =====================//
			if (sequencetaskscreen[frame.current] == "sample" || sequencetaskscreen[frame.current] == "test" || sequencetaskscreen[frame.current] == "choice"
				|| (sequencetaskscreen[frame.current] == "touchfix" && TASK.FixationUsesSample)){

				var taskscreen = [sequencetaskscreen[frame.current].charAt(0).toUpperCase() + sequencetaskscreen[frame.current].slice(1)]
				if (sequencetaskscreen[frame.current] == "touchfix" && TASK.FixationUsesSample){
					taskscreen = "Sample"
				}

				renderer.autoClear = false
			
				if (TASK.KeepSampleON == 1 && (sequencetaskscreen[frame.current] == "test" || sequencetaskscreen[frame.current]=="choice")){
					setViewport(TASK.SampleGridIndex)
					var camera = scene["Sample"].getObjectByName("cam"+CURRTRIAL.sequencesamplelabel[CURRTRIAL.sequencesamplelabel.length-1])
			    	renderer.render(scene["Sample"],camera) //takes >1ms, do before the fast 2D swap (<1ms)	
			   	}
				if (TASK.KeepTestON == 1 && sequencetaskscreen[frame.current] == "choice"){
					setViewport(TASK.TestGridIndex[0])
					var camera = scene["Test"].getObjectByName("cam"+CURRTRIAL.test_scenebag_labels)
					renderer.render(scene["Test"],camera)
				}

				if (sequencetaskscreen[frame.current] == "sample" || sequencetaskscreen[frame.current] == "test"
					|| (sequencetaskscreen[frame.current] == "touchfix" && TASK.FixationUsesSample)){
					if (sequencetaskscreen[frame.current] == "touchfix" && TASK.FixationUsesSample){
						setViewport(CURRTRIAL.fixationgridindex)
						var camera = scene["Sample"].getObjectByName("cam"+CURRTRIAL.sequencesamplelabel[frame.current])							
						renderer.render(scene[taskscreen],camera) //takes >1ms, do before the fast 2D swap (<1ms)						
					}//fixationusessample
					else if (sequencetaskscreen[frame.current]=="sample"){
						setViewport(TASK.SampleGridIndex)
						var camera = scene["Sample"].getObjectByName("cam"+CURRTRIAL.sequencesamplelabel[frame.current])							
						renderer.render(scene[taskscreen],camera) //takes >1ms, do before the fast 2D swap (<1ms)			
					}//sample
					else if (sequencetaskscreen[frame.current]=="test"){
						setViewport(TASK.TestGridIndex[0])
						var camera = scene[taskscreen].getObjectByName("cam"+CURRTRIAL.test_scenebag_labels[0])					
						renderer.render(scene[taskscreen],camera) //takes >1ms, do before the fast 2D swap (<1ms)			
					} //test
			    	if (sequencetaskscreen[frame.current] == "test" && CURRTRIAL.test_scenebag_labels.length > 1){
			    		for (var j = 1; j<=CURRTRIAL.test_scenebag_labels.length - 1; j++){
					    	updateSingleFrame3D(
									taskscreen,
									CURRTRIAL.test_scenebag_labels[j],
									CURRTRIAL.test_scenebag_indices[j],
									[],
									TASK.TestGridIndex[j]
								)
							setViewport(TASK.TestGridIndex[j])
							var camera = scene[taskscreen].getObjectByName("cam"+CURRTRIAL.test_scenebag_labels[j])
							// var camera = scene[sequencetaskscreen[frame.current].charAt(0).toUpperCase() + sequencetaskscreen[frame.current].slice(1)].getObjectByName(-1)
					    	renderer.render(scene[taskscreen],camera) //takes >1ms, do before the fast 2D swap (<1ms)
			    		} //FOR j test items
			    	} //IF test

			    	if (sequencetaskscreen[frame.current] == "sample" && TASK.Agent == "SaveImages" && FLAGS.savedata == 1){
			    		saveScreenshot(VISIBLECANVASWEBGL,CURRTRIAL.num,sequencetaskscreen[frame.current],frame.current)
			    	}//save out images
				} //IF sample || test || fixationusessample

				if (sequencetaskscreen[frame.current] == "choice" && TASK.KeepTestON == 0 && TASK.KeepSampleON == 0){
					 VISIBLECANVASWEBGL.style.visibility='hidden';
				} else{
					VISIBLECANVASWEBGL.style.visibility='visible';
				}
			} //IF sample || test || choice || fixationusessample
			else {
			    VISIBLECANVASWEBGL.style.visibility='hidden';
			} //ELSE hide 3D
	//=================== 3D rendering (END) =====================//


	//=================== 2D rendering =====================//
			if(frame.current==0 || 
				sequencetaskscreen[frame.current] != sequencetaskscreen[frame.current-1] ||
				sequencesceneindex[frame.current] != sequencesceneindex[frame.current-1]){
				if (ENV.OffscreenCanvasAvailable){
					//pre-rendered offscreen, now transfer
					var renderstr = OFFSCREENCANVAS.commitTo(VISIBLECANVAS.getContext("bitmaprenderer"))

					if (renderstr.status == "failed"){
						console.log("**** FAILED on 1ST rendering attempt of " + sequencetaskscreen[frame.current])

						// attempt again
						CURRTRIAL.tsequenceactual[frame.current] = Math.round(100*(timestamp - start))/100 //in milliseconds, rounded to nearest hundredth of a millisecond

						//pre-rendered offscreen, now transfer
						var renderstr = OFFSCREENCANVAS.commitTo(VISIBLECANVAS.getContext("bitmaprenderer"))				
						console.log("**** " + renderstr.status + " on 2ND rendering attempt of " + sequencetaskscreen[frame.current])

						if (renderstr.status == "failed"){
							if (sequencetaskscreen[frame.current] == "touchfix" || sequencetaskscreen[frame.current] == "test" || sequencetaskscreen[frame.current] == "choice"){
								for (var j=0; j < 100; j++){
									// attempt again
									await setTimeout(j*100)
									CURRTRIAL.tsequenceactual[frame.current] = Math.round(100*(timestamp - start))/100 //in milliseconds, rounded to nearest hundredth of a millisecond

									//pre-rendered offscreen, now transfer
									var renderstr = OFFSCREENCANVAS.commitTo(VISIBLECANVAS.getContext("bitmaprenderer"))				

									if (renderstr.status == "succeeded"){
										break
									}
								}
								console.log("Render "  + sequencetaskscreen[frame.current] + " " + renderstr.status + " after " + j + " attempts")
							}
							else {
								CURRTRIAL.tsequenceactual[frame.current] = -99
								console.log("Skipping render since not touchfix or test screen")
							} //if touchfix || test
						} //if failed again
					} //if failed
				}//IF Offscreen api available
				else {
					//render directly, offscreencanvas is visiblecanvas
					renderScreen(sequencetaskscreen[frame.current],OFFSCREENCANVAS)
				}//IF Offscreen not available
			}//IF render 2D image
	//=================== 2D rendering (END) =====================//

	    	if (sequencetaskscreen[frame.current] == "sample" && TASK.Agent == "SaveImages" && FLAGS.savedata == 1){
	    		saveScreenshot(VISIBLECANVAS,CURRTRIAL.num,sequencetaskscreen[frame.current],frame.current)
	    	}//save out images

			CURRTRIAL.tsequenceactual[frame.current] = Math.round(100*(timestamp - start))/100 //in milliseconds, rounded to nearest hundredth of a millisecond
			frame.shown[frame.current]=1;
			frame.current++;
		}//IF time to show new frame
		
		// continue if not all frames shown
		if (frame.shown[frame.shown.length-1] != 1){
			var taskscreen = [sequencetaskscreen[frame.current].charAt(0).toUpperCase() + sequencetaskscreen[frame.current].slice(1)]

		//================= 3D update frame =================//
			if (sequencetaskscreen[frame.current] == "sample" && scene["Sample"].framenum != frame.current || 
				sequencetaskscreen[frame.current] == 'touchfix' && TASK.FixationUsesSample){

				if (sequencetaskscreen[frame.current] == 'touchfix' && TASK.FixationUsesSample){
					if (FLAGS.moviepersample[CURRTRIAL.sequencesamplelabel[frame.current]][sequencesceneindex[frame.current]] == 1){
						updateSingleFrame3D(
							"Sample",
							CURRTRIAL.sequencesamplelabel[frame.current],
							sequencesceneindex[frame.current],
							CURRTRIAL.sequencesampleframe[frame.current],
							CURRTRIAL.fixationgridindex
						)				
					}//IF movie
					else {
						updateSingleFrame3D(
							"Sample",
							CURRTRIAL.sequencesamplelabel[frame.current],
							sequencesceneindex[frame.current],
							[],
							CURRTRIAL.fixationgridindex
						)				
					}//ELSE not a movie	
				}//IF FixationUsesSample
				else {
					if (FLAGS.moviepersample[CURRTRIAL.sequencesamplelabel[frame.current]][sequencesceneindex[frame.current]] == 1){
						updateSingleFrame3D(
							"Sample",
							CURRTRIAL.sequencesamplelabel[frame.current],
							sequencesceneindex[frame.current],
							CURRTRIAL.sequencesampleframe[frame.current],
							TASK.SampleGridIndex
						)				
					} //IF movie
					else { // if not a movie
						updateSingleFrame3D(
							taskscreen,
							CURRTRIAL.sequencesamplelabel[frame.current],
							sequencesceneindex[frame.current],
							[],
							TASK.SampleGridIndex
						)
					}//ELSE not a movie			
				}//ELSE sample
				scene["Sample"].framenum = frame.current
			}//IF sample
			else if (sequencetaskscreen[frame.current] == "test"  && scene["Test"].framenum != frame.current){
				boundingBoxesChoice3D = {'x':[],'y':[]}
				updateSingleFrame3D(
							taskscreen,
							CURRTRIAL.test_scenebag_labels[0],
							CURRTRIAL.test_scenebag_indices[0],
							[],
							TASK.TestGridIndex[0]
						) //Update 3D scene prior to next frame draw
				scene["Test"].framenum = frame.current
			}//ELSE IF test
		//================= 3D update frame (END) =================//

		//================= 2D buffer image =================//
			if (ENV.OffscreenCanvasAvailable){// && sequencetaskscreen[frame.current] != "sample" && sequencetaskscreen[frame.current] != "test"){
				if (frame.current==0 ||
					sequencetaskscreen[frame.current] != sequencetaskscreen[frame.current-1] ||
					sequencesceneindex[frame.current] != sequencesceneindex[frame.current-1] ){
					renderScreen(sequencetaskscreen[frame.current],OFFSCREENCANVAS) //render 2D image offscreen prior to next frame draw
					if (sequencetaskscreen[frame.current] == "choice"){
						boundingBoxesChoice3D = boundingBoxesChoice //default to 2D coords for same different buttons
					}
				}//IF new task screen
			}//IF offscreenAvailable, pre-render next frame
		//================= 2D buffer image (END) =================//

			window.requestAnimationFrame(updateCanvas);
		}//IF more frames
		else{
			resolveFunc(CURRTRIAL.tsequenceactual);
		}//ELSE all frames shown
	}
	//requestAnimationFrame advantages: goes on next screen refresh and syncs to browsers refresh rate on separate clock (not js clock)
	window.requestAnimationFrame(updateCanvas); // kick off async work
	return p
}//FUNCTION displayTrial

function renderScreen(screenType,canvasobj){
	if (FLAGS.savedata == 0){
		renderBlankWithGridMarkers(ENV.XGridCenter,ENV.YGridCenter, 
			TASK.StaticFixationGridIndex,TASK.SampleGridIndex,TASK.TestGridIndex, TASK.ChoiceGridIndex,
			ENV.FixationScale, ENV.SampleScale, ENV.SampleFixationScale, ENV.TestScale, ENV.ChoiceScale,
			ENV.ImageWidthPixels, ENV.CanvasRatio,canvasobj);
	}
	else if (FLAGS.savedata == 1){
		renderBlank(canvasobj,TASK.BackgroundColor2D)
	}
	switch (screenType) {
	case 'blank':
		renderBlank(canvasobj,TASK.BackgroundColor2D)
		break
	case 'blankWithGridMarkers':
		renderBlankWithGridMarkers(ENV.XGridCenter,ENV.YGridCenter, 
			TASK.StaticFixationGridIndex,TASK.SampleGridIndex,TASK.TestGridIndex, TASK.ChoiceGridIndex,
			ENV.FixationScale, ENV.SampleScale, ENV.SampleFixationScale, ENV.TestScale, ENV.ChoiceScale,
			ENV.ImageWidthPixels, ENV.CanvasRatio,canvasobj);
		break
	case 'touchfix':
		if(TASK.FixationUsesSample != 1){
			if (TASK.TestON <= 0){
				bufferFixationUsingDot(ENV.FixationColor, CURRTRIAL.fixationgridindex,
									ENV.FixationRadius, canvasobj);
			}
			else if (TASK.TestON > 0){
				bufferFixationUsingTriangle(ENV.ChoiceColor, CURRTRIAL.fixationgridindex,
									ENV.FixationRadius, canvasobj);
			}
		}
		else {
			bufferFixationUsingImage(CURRTRIAL.sampleimage, CURRTRIAL.fixationgridindex,
									ENV.SampleScale, canvasobj)	
		}
		break
	case 'sample':
		bufferSampleImage(CURRTRIAL.sampleimage[CURRTRIAL.sequencesampleclip[frame.current]], TASK.SampleGridIndex,canvasobj);
		break
	case 'test':
		bufferTestImages(CURRTRIAL.sampleimage[CURRTRIAL.sequencesampleclip[CURRTRIAL.sequencesampleclip.length-1]],
						TASK.SampleGridIndex, 
						CURRTRIAL.testimages, TASK.TestGridIndex, CURRTRIAL.correctitem, 
						canvasobj);
		break
	case 'choice':
		bufferChoiceUsingDot(CURRTRIAL.sampleimage[CURRTRIAL.sequencesampleclip[CURRTRIAL.sequencesampleclip.length-1]],
						TASK.SampleGridIndex, 
						CURRTRIAL.testimages, TASK.TestGridIndex, CURRTRIAL.correctitem, 
						ENV.ChoiceColor,ENV.ChoiceRadius,TASK.ChoiceGridIndex,
						canvasobj);
		break
	case 'reward':
		renderReward(canvasobj)
		break
	case 'punish':
		renderPunish(canvasobj)
		break
	default:
	}
}//FUNCTION renderScreen


//========== BUFFER SAMPLE CANVAS ==========//
async function bufferSampleImage(sample_image, sample_image_grid_index,canvasobj){
	var context=canvasobj.getContext('2d'); 
	if (typeof(sample_image) !="undefined"){
	await renderImageOnCanvas(sample_image, sample_image_grid_index, ENV.SampleScale, canvasobj)
	}
}

//========== BUFFER TEST CANVAS ==========//
async function bufferTestImages(sample_image, sample_image_grid_index, test_images, test_image_grid_indices, correct_index,canvasobj){
	// Option: draw sample (TODO: remove the blink between sample screen and test screen)
	if (TASK.KeepSampleON==1 && typeof(sample_image) !="undefined"){
		await renderImageOnCanvas(sample_image, sample_image_grid_index, ENV.SampleScale, canvasobj)
	}

	// Option: gray out before buffering test: (for overriding previous trial's test screen if current trial test screen has transparent elements?)	
	boundingBoxesChoice['x'] = []
	boundingBoxesChoice['y'] = []

	if (typeof(test_images) !="undefined"){
		// Draw test object(s): 
		for (i = 0; i<test_images.length; i++){
			if (typeof(test_images[i])!="undefined"){
			// If HideTestDistractors, simply do not draw the image
			if(TASK.HideTestDistractors == 1){
				if (correct_index != i){
					boundingBoxesChoice.x.push([NaN, NaN]); 
					boundingBoxesChoice.y.push([NaN, NaN]); 
					continue 
				}
			}		

			funcreturn = await renderImageOnCanvas(test_images[i], test_image_grid_indices[i], ENV.TestScale, canvasobj); 
			boundingBoxesChoice.x.push(funcreturn[0]); 
			boundingBoxesChoice.y.push(funcreturn[1]); 
			}
		}//FOR i test images
	}//IF
}//ASYNC FUNCTION BUFFERTESTIMAGES

//========== BUFFER CHOICE CANVAS ==========//
async function bufferChoiceUsingDot(sample_image, sample_image_grid_index, test_images, test_image_grid_indices, correct_index, choice_color, choice_radius, choice_grid_indices, canvasobj){
	// Option: gray out before buffering test: (for overriding previous trial's test screen if current trial test screen has transparent elements?)	
	boundingBoxesChoice['x'] = []
	boundingBoxesChoice['y'] = []
	// Draw test object(s): 
	for (i = 0; i<choice_grid_indices.length; i++){
		// If HideTestDistractors, simply do not draw the image
		if(TASK.HideChoiceDistractors == 1){
			if (correct_index != i){
				boundingBoxesChoice.x.push([NaN, NaN]); 
				boundingBoxesChoice.y.push([NaN, NaN]); 
				continue 
			}
		}
		if (i==0){
			funcreturn = await renderDotOnCanvas(choice_color, choice_grid_indices[i], choice_radius, canvasobj);
		} //same = circle
		else if (i==1){
			funcreturn = await renderSquareOnCanvas(choice_color, choice_grid_indices[i], 2*choice_radius, canvasobj);
		} //different = square
		boundingBoxesChoice.x.push(funcreturn[0]); 
		boundingBoxesChoice.y.push(funcreturn[1]); 
	} //FOR i choices

	// Option: draw sample (TODO: remove the blink between sample screen and test screen)
	if (TASK.KeepSampleON==1 && typeof(sample_image) !="undefined"){
		await renderImageOnCanvas(sample_image, sample_image_grid_index, ENV.SampleScale, canvasobj)
	}
	if (TASK.KeepTestON==1&& typeof(test_images[0]) !="undefined"){ //should only be one test image
		await renderImageOnCanvas(test_images[0], test_image_grid_indices[0], ENV.TestScale, canvasobj);
	}
} //FUNCTION bufferChoiceUsingDot

// Dot render using gridindex
async function renderDotOnCanvas(color, gridindex, dot_pixelradius, canvasobj){
	var context=canvasobj.getContext('2d');

	// Draw fixation dot
	if (Array.isArray(gridindex)){
		var xcent = gridindex[0]/ENV.CanvasRatio
		var ycent = gridindex[1]/ENV.CanvasRatio
	}//IF x,y coord provided
	else {
		var xcent = ENV.XGridCenter[gridindex]/ENV.CanvasRatio;
		var ycent = ENV.YGridCenter[gridindex]/ENV.CanvasRatio;	
	}//IF gridindex provided
	var rad = dot_pixelradius/ENV.CanvasRatio;
	context.beginPath();
	context.arc(xcent,ycent,rad,0*Math.PI,2*Math.PI);
	context.fillStyle=color; 
	context.fill();

	// Define (rectangular) boundaries of fixation
	// Bounding boxes of dot on canvas
	xbound = [ (xcent-rad)*ENV.CanvasRatio, (xcent+rad)*ENV.CanvasRatio ];
	ybound = [ (ycent-rad)*ENV.CanvasRatio, (ycent+rad)*ENV.CanvasRatio ];

	xbound[0]=xbound[0]+CANVAS.offsetleft;
	xbound[1]=xbound[1]+CANVAS.offsetleft;
	ybound[0]=ybound[0]+CANVAS.offsettop;
	ybound[1]=ybound[1]+CANVAS.offsettop;
	return [xbound, ybound]
}//FUNCTION renderDotOnCanvas

function getSampleFixationBoundingBox(gridindex,rad){
	var xcent = ENV.XGridCenter[gridindex]
	var ycent = ENV.YGridCenter[gridindex]

	// Bounding boxes of dot on canvas
	xbound = [ (xcent-rad), (xcent+rad)];
	ybound = [ (ycent-rad), (ycent+rad)];

	xbound[0]=xbound[0]+CANVAS.offsetleft;
	xbound[1]=xbound[1]+CANVAS.offsetleft;
	ybound[0]=ybound[0]+CANVAS.offsettop;
	ybound[1]=ybound[1]+CANVAS.offsettop;

	return [xbound,ybound]
}//FUNCTION getSampleFixationBoundingBox

async function renderSquareOnCanvas(color, gridindex, square_pixelwidth, canvasobj){
	// Draw Square
	var context=canvasobj.getContext('2d');
	var wd = square_pixelwidth/ENV.CanvasRatio;
	var xcent = ENV.XGridCenter[gridindex]/ENV.CanvasRatio;
	var ycent = ENV.YGridCenter[gridindex]/ENV.CanvasRatio;
	context.fillStyle=color;
	context.fillRect(xcent-wd/2,ycent-wd/2,wd,wd);


	// Define (rectangular) boundaries of fixation
	// Bounding boxes of dot on canvas
	xbound = [ (xcent-wd/2)*ENV.CanvasRatio, (xcent+wd/2)*ENV.CanvasRatio ];
	ybound = [ (ycent-wd/2)*ENV.CanvasRatio, (ycent+wd/2)*ENV.CanvasRatio ];

	xbound[0]=xbound[0]+CANVAS.offsetleft;
	xbound[1]=xbound[1]+CANVAS.offsetleft;
	ybound[0]=ybound[0]+CANVAS.offsettop;
	ybound[1]=ybound[1]+CANVAS.offsettop;
	return [xbound, ybound]
}//FUNCTION renderSquareOnCanvas

async function renderTriangleOnCanvas(color, gridindex, square_pixelwidth, canvasobj){
	// Draw Triangle
	var context=canvasobj.getContext('2d');
	var wd = square_pixelwidth/ENV.CanvasRatio;
	var xcent = ENV.XGridCenter[gridindex]/ENV.CanvasRatio;
	var ycent = ENV.YGridCenter[gridindex]/ENV.CanvasRatio;
	context.fillStyle=color;

	// var len_side = Math.sqrt(Math.pow(2*(wd/2),2))
	// var len_side = Math.sin(30 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)


	context.beginPath();
    // context.moveTo(xcent, ycent + wd/2); //bottom vertex
    // context.lineTo(xcent-wd/2, ycent-wd/2); //top left
    // context.lineTo(xcent+wd/2, ycent-wd/2); //top right
    context.moveTo(xcent, ycent - wd/2); //bottom vertex
    context.lineTo(xcent-wd/2, ycent+wd/2); //top left
    context.lineTo(xcent+wd/2, ycent+wd/2); //top right
    context.fill();

	// Define (rectangular) boundaries of fixation
	// Bounding boxes of dot on canvas
	xbound = [ (xcent-wd/2)*ENV.CanvasRatio, (xcent+wd/2)*ENV.CanvasRatio ];
	ybound = [ (ycent-wd/2)*ENV.CanvasRatio, (ycent+wd/2)*ENV.CanvasRatio ];

	xbound[0]=xbound[0]+CANVAS.offsetleft;
	xbound[1]=xbound[1]+CANVAS.offsetleft;
	ybound[0]=ybound[0]+CANVAS.offsettop;
	ybound[1]=ybound[1]+CANVAS.offsettop;
	return [xbound, ybound]
}//FUNCTION renderTriangleOnCanvas


async function renderImageOnCanvas(image, grid_index, scale, canvasobj){
	var context=canvasobj.getContext('2d');

	var xleft=NaN;
	var ytop=NaN;
	var xbound=[];
	var ybound=[];

	wd = image.width
	ht = image.height
	xleft = Math.round(ENV.XGridCenter[grid_index]/ENV.CanvasRatio - 0.5*wd*scale);
	ytop = Math.round(ENV.YGridCenter[grid_index]/ENV.CanvasRatio - 0.5*ht*scale);
	
	context.drawImage(
		image, // Image element
		xleft, // dx: Canvas x-coordinate of image's top-left corner. 
		ytop, // dy: Canvas y-coordinate of  image's top-left corner. 
		image.width*scale, // dwidth. width of drawn image. 
		image.height*scale); // dheight. height of drawn image.

	// For drawing cropped regions of an image in the canvas, see alternate input argument structures,
	// See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
	
	// Bounding boxes of images on canvas
	xbound=[xleft*ENV.CanvasRatio, (xleft+wd*scale)*ENV.CanvasRatio];
	ybound=[ytop*ENV.CanvasRatio, (ytop+ht*scale)*ENV.CanvasRatio];

	xbound[0]=xbound[0]+CANVAS.offsetleft;
	xbound[1]=xbound[1]+CANVAS.offsetleft;
	ybound[0]=ybound[0]+CANVAS.offsettop;
	ybound[1]=ybound[1]+CANVAS.offsettop;

	return [xbound, ybound]
}//FUNCTION renderImageOnCanvas

function renderBlank(canvasobj,bkgdcolor){
	var context=canvasobj.getContext('2d');
	context.fillStyle=bkgdcolor;
	context.fillRect(0,100,canvasobj.width,canvasobj.height);
	// context.clearRect(0,0,canvasobj.width,canvasobj.height);
}//FUNCTION renderBlank

function renderBlankWithGridMarkers(gridx,gridy,fixationgridindex,samplegridindex,testgridindex,choicegridindex,fixationscale,samplescale,samplefixationscale,testscale,choicescale,imwidth,canvasratio,canvasobj)
{
	var outofbounds_str = ''
	var context=canvasobj.getContext('2d');
	context.clearRect(0,0,canvasobj.width,canvasobj.height);

	//Show image positions & display grid
	//Display grid
	for (var i = 0; i <= gridx.length-1; i++){
		rad = 10
		context.beginPath()
		context.arc(gridx[i]/ENV.CanvasRatio,gridy[i]/ENV.CanvasRatio,rad/ENV.CanvasRatio,0*Math.PI,2*Math.PI)
		context.fillStyle="red"
		context.fill();

		var displaycoord = [gridx[i]-rad,gridy[i]-rad,gridx[i]+rad,gridy[i]+rad]
		var outofbounds=checkDisplayBounds(displaycoord)
		if (outofbounds == 1){
			outofbounds_str = outofbounds_str + "<br>" + "gridpoint" + i + " is out of bounds"
		}
		displayGridCoordinate(i,[gridx[i],gridy[i]],canvasobj)
	}

	//Fixation Image Bounding Box
	var wd = imwidth*fixationscale
	var xcent = gridx[fixationgridindex]/ENV.CanvasRatio
	var ycent = gridy[fixationgridindex]/ENV.CanvasRatio
	context.strokeStyle="white"
	context.strokeRect(xcent-wd/2,ycent-wd/2,wd+1,wd+1)

	var displaycoord = [(xcent-wd/2)*ENV.CanvasRatio,(ycent-wd/2)*ENV.CanvasRatio,
						(xcent+wd/2)*ENV.CanvasRatio,(ycent+wd/2)*ENV.CanvasRatio]
	var outofbounds=checkDisplayBounds(displaycoord)
	if (outofbounds == 1){
		outofbounds_str = outofbounds_str + "<br>" + "Fixation dot is out of bounds"
	}
	displayPhysicalSize(TASK.Tablet,displaycoord,canvasobj)

	
	//Sample Image Bounding Box
	var wd = imwidth*samplescale
	var xcent = gridx[samplegridindex]/ENV.CanvasRatio
	var ycent = gridy[samplegridindex]/ENV.CanvasRatio
	context.strokeStyle="green"
	context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)

	var displaycoord = [(xcent-wd/2)*ENV.CanvasRatio,(ycent-wd/2)*ENV.CanvasRatio,
						(xcent+wd/2)*ENV.CanvasRatio,(ycent+wd/2)*ENV.CanvasRatio]
	var outofbounds=checkDisplayBounds(displaycoord)
	if (outofbounds == 1){
		outofbounds_str = outofbounds_str + "<br>" + "Sample Image is out of bounds"
	}
	displayPhysicalSize(TASK.Tablet,displaycoord,canvasobj)

	//Sample Fixation Bounding Box
	var wd = imwidth*samplefixationscale
	var xcent = gridx[samplegridindex]/ENV.CanvasRatio
	var ycent = gridy[samplegridindex]/ENV.CanvasRatio
	context.strokeStyle="yellow"
	context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)

	var displaycoord = [(xcent-wd/2)*ENV.CanvasRatio,(ycent-wd/2)*ENV.CanvasRatio,
						(xcent+wd/2)*ENV.CanvasRatio,(ycent+wd/2)*ENV.CanvasRatio]
	var outofbounds=checkDisplayBounds(displaycoord)
	if (outofbounds == 1){
		outofbounds_str = outofbounds_str + "<br>" + "Sample Fixation Window is out of bounds"
	}
	displayPhysicalSize(TASK.Tablet,displaycoord,canvasobj)


	//Test Image Bounding Box(es)
	for (var i = 0; i <= testgridindex.length-1; i++){
		var wd = imwidth*testscale
		var xcent = gridx[testgridindex[i]]/ENV.CanvasRatio
		var ycent = gridy[testgridindex[i]]/ENV.CanvasRatio
		context.strokeStyle="black"
		context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)

		var displaycoord = [(xcent-wd/2)*ENV.CanvasRatio,(ycent-wd/2)*ENV.CanvasRatio,
						(xcent+wd/2)*ENV.CanvasRatio,(ycent+wd/2)*ENV.CanvasRatio]
		var outofbounds=checkDisplayBounds(displaycoord)
		if (outofbounds == 1){
			outofbounds_str = outofbounds_str + "<br>" + "Test Image" + i + " is out of bounds"
		}
		displayPhysicalSize(TASK.Tablet,displaycoord,canvasobj)
	}

	//Choice Image Bounding Box(es)
	if (TASK.TestON > 0){
		for (var i = 0; i <= choicegridindex.length-1; i++){
			var wd = imwidth*choicescale
			var xcent = gridx[choicegridindex[i]]/ENV.CanvasRatio
			var ycent = gridy[choicegridindex[i]]/ENV.CanvasRatio
			context.strokeStyle="red"
			context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)

			var displaycoord = [(xcent-wd/2)*ENV.CanvasRatio,(ycent-wd/2)*ENV.CanvasRatio,
							(xcent+wd/2)*ENV.CanvasRatio,(ycent+wd/2)*ENV.CanvasRatio]
			var outofbounds=checkDisplayBounds(displaycoord)
			if (outofbounds == 1){
				outofbounds_str = outofbounds_str + "<br>" + "Choice Image" + i + " is out of bounds"
			}
			displayPhysicalSize(TASK.Tablet,displaycoord,canvasobj)
		}
	} //IF testON (same-different choice screen)

	if (FLAGS.scene3d == 1 && (VISIBLECANVASWEBGL.width > 4096 || VISIBLECANVASWEBGL.height > 4096) ){
		outofbounds_str = outofbounds_str + "Canvas may be too large for webgl limit of 4096 pixels in either dimension -- 3d rendering may not be accurate! Consider using a smaller display size."
	}

	if (outofbounds_str == ''){
		outofbounds_str = 'All display elements are fully visible'
	}

	displayoutofboundsstr = outofbounds_str
	updateImageLoadingAndDisplayText(' ')
}//FUNCTION renderBlankwithGridMarkers

function renderReward(canvasobj){
	var context=canvasobj.getContext('2d');
	context.fillStyle="green";
	context.fillRect(xcanvascenter/ENV.CanvasRatio-200/ENV.CanvasRatio,
					ycanvascenter/ENV.CanvasRatio-200/ENV.CanvasRatio,400/ENV.CanvasRatio,400/ENV.CanvasRatio);
}//FUNCTION renderReward

function renderPunish(canvasobj){
	var context=canvasobj.getContext('2d');
	context.fillStyle="#3c3c3c";
	context.fillRect(xcanvascenter/ENV.CanvasRatio-200/ENV.CanvasRatio,
					ycanvascenter/ENV.CanvasRatio-200/ENV.CanvasRatio,400/ENV.CanvasRatio,400/ENV.CanvasRatio);
}//FUNCTION renderPunish

async function bufferFixationUsingImage(image, gridindex, scale, canvasobj){
// 	var context=canvasobj.getContext('2d');
// 	context.clearRect(0,0,canvasobj.width,canvasobj.height);

	boundingBoxesFixation['x']=[]
	boundingBoxesFixation['y']=[]
	
	if (typeof(image)!= "undefined"){
	funcreturn = await renderImageOnCanvas(image, gridindex, scale, canvasobj); 
	boundingBoxesFixation.x.push(funcreturn[0]);
	boundingBoxesFixation.y.push(funcreturn[1]);
	}
}//FUNCTION bufferFixationUsingImage

async function bufferFixationUsingDot(color, gridindex, dot_pixelradius, canvasobj){
	boundingBoxesFixation['x']=[]
	boundingBoxesFixation['y']=[]

	funcreturn = await renderDotOnCanvas(color, gridindex, dot_pixelradius, canvasobj)
	boundingBoxesFixation.x.push(funcreturn[0]);
	boundingBoxesFixation.y.push(funcreturn[1]);
}//FUNCTION bufferFixationUsingDot

async function bufferFixationUsingTriangle(color, gridindex, dot_pixelradius, canvasobj){
	boundingBoxesFixation['x']=[]
	boundingBoxesFixation['y']=[]

	funcreturn = await renderTriangleOnCanvas(color, gridindex, 2*dot_pixelradius, canvasobj);
	boundingBoxesFixation.x.push(funcreturn[0]);
	boundingBoxesFixation.y.push(funcreturn[1]);
}//FUNCTION bufferFixationUsingTriangle


function checkDisplayBounds(displayobject_coord){
	var outofbounds=0
	if (displayobject_coord[0]/ENV.CanvasRatio < CANVAS.workspace[0] ||
		displayobject_coord[1]/ENV.CanvasRatio < CANVAS.workspace[1] ||
		displayobject_coord[2]/ENV.CanvasRatio > CANVAS.workspace[2] ||
		displayobject_coord[3]/ENV.CanvasRatio > CANVAS.workspace[3]){
		outofbounds=1
	}
	return outofbounds
}
function setupImageLoadingText(){
	var textobj = document.getElementById("imageloadingtext")
	textobj.style.top = CANVAS.offsettop + "px"
	textobj.innerHTML = ''
	setupCanvasListeners(textobj)
}

function updateImageLoadingAndDisplayText(str){
	var textobj = document.getElementById("imageloadingtext")

	//DISPLAY TIMING: Software check for frame drops
	var dt = []
	var u_dt = 0
	for (var i=0; i<=CURRTRIAL.tsequenceactual.length-1; i++){
		dt[i] = CURRTRIAL.tsequenceactual[i] - CURRTRIAL.tsequencedesired[i]
		u_dt = u_dt + Math.abs(dt[i])
	}
	u_dt = u_dt/dt.length

	textobj.innerHTML =
	str
	+ imageloadingtimestr
	+ "<br>" + displayoutofboundsstr 
	+ "<br>" + 0.1*Math.round(10*ENV.FrameRateDisplay) + "Hz (" + 0.1*Math.round(10000/ENV.FrameRateDisplay) + 'ms) display' 
	+ "<br>" + "<font color=red> mean(t_actual - t_desired) = " + Math.round(u_dt) + " ms"
	+ "  (min=" + Math.round(Math.min(... dt)) + ", max=" + Math.round(Math.max(... dt)) + ") </font>"
	+ "<br>" + eyedataratestr
}

function displayPhysicalSize(tabletname,displayobject_coord,canvasobj){
	var visible_ctxt = canvasobj.getContext('2d');
	visible_ctxt.textBaseline = "hanging";
	visible_ctxt.fillStyle = "white";
	visible_ctxt.font = "16px Verdana";
	visible_ctxt.fillText( 
		Math.round(100*(displayobject_coord[2]-displayobject_coord[0])/ENV.ViewportPPI)/100 +
		' x ' +
		Math.round(100*(displayobject_coord[3]-displayobject_coord[1])/ENV.ViewportPPI)/100 + 
		' in', 
		displayobject_coord[0]/ENV.CanvasRatio,(displayobject_coord[1]-16)/ENV.CanvasRatio
	);
}

function displayGridCoordinate(idx,xycoord,canvasobj){
	var visible_ctxt = canvasobj.getContext('2d');
	visible_ctxt.textAlign = "center";
	visible_ctxt.textBaseline = "middle";
	visible_ctxt.fillStyle = "white";
	visible_ctxt.font = "20px Verdana";
	visible_ctxt.fillText(idx,xycoord[0]/ENV.CanvasRatio, xycoord[1]/ENV.CanvasRatio)
}

function setViewport(gridindex){
	//==== RENDERER 2D VIEWPORT
	//width and height are determined by object size Inches. the viewport can't be smaller than the object's size. otherwise the object will look cropped
	var scenecenterX = ENV.XGridCenter[gridindex]
	var scenecenterY = ENV.YGridCenter[gridindex]
	var scenewidth = renderer.getContext().canvas.width
	var sceneheight = renderer.getContext().canvas.height
	var left = scenecenterX - scenewidth/2
	var bottom = -sceneheight/2 + (VISIBLECANVAS.clientHeight-scenecenterY)


	renderer.setViewport(left, bottom, scenewidth, sceneheight);
	renderer.setScissor(left,bottom,scenewidth,sceneheight)
	renderer.setScissorTest(true)
}

async function saveScreenshot(canvasobj,currtrial,frametype,framenum){
	//---- upload screenshot to firebase 
	//sample image will be uploaded to the appropriate folder in the scene 

	var currtrial_samplepath = TASK.ImageBagsSample[CURRTRIAL.sample_scenebag_label]
	var currtrial_date = ENV.DataFileName
	var currtrial_parampath = ENV.ParamFileName

	//path to scene folder
	var ind_start = currtrial_samplepath.lastIndexOf('/')
	var ind_end = currtrial_samplepath.indexOf('.js')
	var scenefolder = currtrial_samplepath.substring(0,ind_end)

	//paramfolder name
	var ind_start = currtrial_parampath.lastIndexOf('/')
	var ind_end = currtrial_parampath.indexOf('.txt')
	var paramfolder = currtrial_parampath.substring(ind_start+1,ind_end)

	//date 
	var ind_start = currtrial_date.lastIndexOf('/')
	var ind_end = currtrial_date.indexOf('T')
	var date = currtrial_date.substring(ind_start+1,ind_end) 

	var storage_path = scenefolder + '_scene_'
 						+ date + '_' + paramfolder + '_'
						+ ENV.DeviceName + '_device'

	if (canvasobj.width > 4096 || canvasobj.height > 4096){
		console.log("Canvas may be too large for webgl limit of 4096 pixels in either dimension -- Image Saving may not be accurate! Consider using a smaller display size.")
	}

	canvasobj.toBlob(function(blob){
		var fullpath = storage_path + '/'
						+ canvasobj.id 
						+ '_' + 'trialnum' + currtrial 
						+ '_' + frametype + framenum 
						+ '_' + 'label' + CURRTRIAL.sample_scenebag_label
						+ '.png'
		try {
			var response = storage.ref().child(fullpath).put(blob)
			console.log("saved image: " + fullpath);
			console.log("FIREBASE: Successful image file upload. Size:" + Math.round(response.totalBytes/1000) + 'kb')
		}
		catch (error){
			console.log(error)
		}
	})
}//FUNCTION saveScreenshot

// Estimate max software fps
function estimatefps(){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then();


	var lasttime = null
	var elapsedSinceLastFrame = [];
	var nframes = 0
	var dtScreen = 0;
	async function dummyLoop(timestamp){
		if (!lasttime) lasttime = timestamp
		elapsedSinceLastFrame[nframes]=(timestamp-lasttime)
		lasttime=timestamp
		nframes=nframes+1
	  	if (nframes < 20){
	  		window.requestAnimationFrame(dummyLoop)
	  	}
	  	else {
	  		for (var i=10; i<=nframes-1; i++){
				dtScreen = dtScreen + elapsedSinceLastFrame[i]
	  		}
	  		dtScreen = dtScreen / (nframes - 10)
	  		resolveFunc(1000/dtScreen)
	  	}
	}//dummyLoop
	
	window.requestAnimationFrame(dummyLoop);
	return p
}//estimatefps

function appendTest(){
	var t0 = CURRTRIAL.tsequence[CURRTRIAL.tsequence.length-1]
	if (TASK.SampleOFF>0){
		t0 = t0+TASK.SampleOFF
	}//blank duration after image
	if (TASK.TestON <= 0){
		var seq=["test"]
		var tseq=[t0]; 
	}//IF SR or MTS, show test
	else if (TASK.TestON > 0){
		if (TASK.TestOFF > 0){
			var seq=["test","blank","choice"]
			var tseq=[	t0,
						t0+TASK.TestON,
						t0+TASK.TestON+TASK.TestOFF
					];
		}//ELSEIF TestOFF
		else if (TASK.TestOFF <= 0){
			var seq=["test","choice"]
			var tseq=[	t0,
						t0+TASK.TestON
					];
		}//ELSEIF no TestOFF
	}//IF SD, show test & choice
	return [seq,tseq]
}//FUNCTION appendTest