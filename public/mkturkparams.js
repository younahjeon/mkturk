// Variables (updatable through parameter file or saved in data file)
// dataname: name of parameter when saved in paramaterfile or datafile
// user: user-facing parameters, will be saved and read from subject parameterfile
// save: saved into head of datafile
// init: initial value variable takes when mkturk first loads
// meta: description of the parameter including its definition, example values it can take, and the meaning of its different values
var params = {
	datadir: {dataname: "DataDirectory",user: 0,save: 0,init: "/MonkeyTurk/",meta: "Path for saving json data files."},
	savedata: {dataname: "SaveData",user: 0,save: 0,init: 0,meta: "Flag that allows trials to be performed without saving any data. trial.savedata=0 is used when the task is first loaded to do a few test trials before the subject is presented with the task."},
	takephoto: {dataname: "TakePhoto",user: 0,save: 0,init: 0,meta: "takephoto=1, use tablet camera to take photo during various task phases within a trial. If setting takephoto=1, check to make sure system performance/speed is not affected."},
	runvideo: {dataname: "RunVideo",user: 0,save: 0,init: 0,meta: "runvideo=1 will start a video object for showing camera feed on heads up display. runvideo=0 means no video object is created which may ensure better system performance."},
	subjid: {dataname: "Subject",user: 0,save: 1,init: "",meta: "Name of subject, chosen from pulldown menu at beginning of task."},
	weight: {dataname: "Weight",user: 1,save: 1,init: 0,meta: "Weight in kilograms"},
	species: {dataname: "Species",user: 1,save: 1,init: "",meta: "Name of primate species: marmoset, macaque, or human"},
	homecage: {dataname: "Homecage",user: 1,save: 1,init: 1,meta: "Where task was performed. 0=lab 1=subject's home"},
	separated: {dataname: "Separated",user: 1,save: 1,init: 1,meta: "0=subject was paired with conspecific during task performance, 1=subject was separated from conspecific"},
	liquid: {dataname: "Liquid",user: 1,save: 1,init: 1,meta: "1=water 2=water-condensed milk 3=marshmallow slurry (4/30mL)"},
	tablet: {dataname: "Tablet",user: 1,save: 1,init: "",meta: "Tablet used: nexus9, samsung10, googlepixelc10"},
	pump: {dataname: "Pump",user: 1,save: 1,init: 3,meta: "1=adafruit peristaltic 2=submersible centrifugal tcs 3=diaphragm pump tcs 4=piezoelectric 3mL takasago 5=newer diaphragm pumps tcs 6=piezoelectric 7mL takasago"},
	objectlist: {dataname: "TestedObjects",user: 1,save: 1,init: [0,1],meta: "List of objects to use for sample image"},
	nway: {dataname: "Nway",user: 1,save: 1,init: 2,meta: "NwayAFC task, 2,4,or 8 AFC typically used"},
	ngridpoints: {dataname: "NGridPoints",user: 1,save: 1,init: 3,meta: "Number of display grid points in either direction. Produces square grid. 3x3 is typical. Images (fixation,sample, & test) will appear centered on one of the grid points. Grid is serially zero indexed by rows then columns. ngridpoints can be made larger to allow for more response choices to be simultaneously displayed."},
	gridscale: {dataname: "GridScale",user: 1,save: 1,init: 1,meta: "Determines intergridpoint spacing. Can think of this as the resolution of grid. gridscale=1 means intergridpoint spacing is equal to the width of the sample image. Finer grid resolutions (gridscale<1) can be used for more precise sample positioning."},
	fixationgridindex: {dataname: "StaticFixationGridIndex",user: 1,save: 0,init: [5],meta: "Index on the grid where the fixation image will appear. If fixationmove>0, then fixationgridindex is ignored."},
	samplegrid: {dataname: "SampleGridIndex",user: 1,save: 1,init: [4],meta: "Index on grid where sample image appears. samplegrid=4 centers the image on a 3x3 grid, where ngridpoints=3"},
	testgrid: {dataname: "TestGridIndex",user: 1,save: 1,init: [2,8],meta: "Index on grid where test images (choices) appear."},
	objectgrid: {dataname: "ObjectGridIndex",user: 1,save: 1,init: [],meta: "Used for SR task. If this variable is set, then each object is tied to a particular location on the grid. objectgrid.length must equal objectlist.length for appropriate assignment of each object label to a grid location"},
	rewardStage: {dataname: "RewardStage",user: 1,save: 1,init: 1,meta: "rewardStage=0 rewards for successful fixtion and skips match to sample phase of task, rewardStage=1 rewards for correct match to sample"},
	rewardper1000: {dataname: "RewardPer1000Trials",user: 1,save: 1,init: 1,meta: "Amount of liquid reward in mL for 1000 correct trials. For macaques, this is around 100mL for every 1000 correct trials."},
	punish: {dataname: "PunishTimeOut",user: 1,save: 1,init: 1000,meta: "Time out in milliseconds for incorrect responses. Black square and incorrect sound may be presented for feedback during this time."},
	nfixations: {dataname: "NFixations",user: 1,save: 1,init: 1,meta: "Number of times fixation dot needs to be pressed to advance to the match to sample phase of the task. nfixations=1 means the subject simply has to press the fixation dot once before the sample is presented. This mode allow parametric control over fixed ratio scheduling."},
	fixationdur: {dataname: "FixationDuration",user: 1,save: 1,init: 0,meta: "How long subject has to hold fixation touch in milliseconds for a successful fixation to register. fixationdur<0, then the program skips the fixation step and instead presents the sample image at the beginning of the trial"},
	fixationmove: {dataname: "FixationMove",user: 1,save: 1,init: 0,meta: "fixationmove=0, fixation image is presented at fixationgridindex. fixationmove=N, N>0, fixation image is presented at a randomly selected grid point and the fixation position is redrawn every N milliseconds. fixationmove > 0 can be used to train subjects to touch different screen locations or to calibrate an eyetracker."},
	sampleON: {dataname: "SampleON",user: 1,save: 1,init: 1,meta: "Duration in milliseconds that sample image is presented"},
	sampleOFF: {dataname: "SampleOFF",user: 1,save: 1,init: 1,meta: "Duration in milliseconds that a gray screen is presented after the sample image before the response screen. This implements the delay in a DMS task. sampleOFF=0, leads to no delay"},
	keepSampleON: {dataname: "KeepSampleON",user: 1,save: 1,init: 0,meta: "keepSampleON=0, sample is presented only for sampleON milliseconds for a delayed match-to-sample, keepSampleON=1 sample remains on during choice scree. This implements a spatial match to sample."},
	hidetestdistractors: {dataname: "HideTestDistractors",user: 1,save: 1,init: 0,meta: "hidetestdistractors=1, hides the distractor choices so that subject only sees matching choice."},
	sampleblocksize: {dataname: "SampleBlockSize",user: 1,save: 1,init: 0,meta: "Number of consecutive times to present a sample from the same object label (if want subject performing blocked object recognition). SampleBlockSize=0 means sample is drawn randomly from all available objects in objectlist."},
	nstickyreponse: {dataname: "NStickyResponse",user: 1,save: 1,init: 5,meta: "Number of times subject can choose the same location on the screen before force them out of it by placing the correct answer somewhere else (i.e. if they have response bias, then on the next trial, the correct choice is drawn somewhere away from that bias)."},
	consecutivehitsITI: {dataname: "ConsecutiveHitsITI",user: 1,save: 1,init: 8000,meta: "Maximum time in milliseconds allowed to elapse from the previous trial for the current trial to count toward reward accumulation for a string of correct responses. For example, if consecutivehitsITI=8000, then subject has 8 seconds to complete the next trial successfully and the consecutivehits counter will be incremented. Otherwise, the number of consecutivehits will get set to 0"},
	nconsecutivehitsforbonus: {dataname: "NConsecutiveHitsforBonus",user: 1,save: 1,init: 4,meta: "How many consecutive hits subject needs for the reward amount to increase.  If nconsecutivehitsforbonus=4, then subject will get 2x reward for correct responses on 4 consecutive trials, 3x reward for correct responses on 8 consecutive trials, up to nrewardmax times of 1x reward. This is a way to make chance on a 2AFC task be virtually < 50% since reward is jointly distributed across trials rather than independently on the current trial."},
	nrewardmax: {dataname: "NRewardMax",user: 1,save: 1,init: 1,meta: "Max number of rewards that can be given for a successful trial. This caps how much extra (bonus) reward subject can get for successful completion of consecutive trials. If nrewardmax=3, then subject can get up to 3x reward for completing 3*nconsecutivehitsforbonus consecutive trials successfully, and then would get 3x reward after that until gets a trial wrong."},
	fixationusessample: {dataname: "FixationUsesSample",user: 1,save: 1,init: 0,meta: "fixationusessample=0, a fixation circle is shown for subject to touch; fixationusessample=1, sample image is shown as the fixation image. This allows implementation of a trianing strategy where the subject has to engage the sample image nfixations number of times before the choice screen."},
	imageFolderSample: {dataname: "ImageFolderSample",user: 1,save: 1,init: 0,meta: "Folder number where sample images are drawn. Examples: 0=prototype images (labels), 1=var6 test images with no position variation and no backgrounds, 2=var6 test images with no backgrounds, 3=var6 test images on backgrounds"},
	imageFolderTest: {dataname: "ImageFolderTest",user: 1,save: 1,init: 0,meta: "Folder number where test images are drawn. Same numbering convention as sample images. Test folder may contain token (prototype) images to represent each object choice."},
	fixationScale: {dataname: "FixationScale",user: 1,save: 1,init: 1,meta: "Size of fixation image in units of sample image width."},
	fixationradius: {dataname: "FixationRadius",user: 0,save: 1,init: 0,meta: "Radius of fixation image in pixels. This is not set by the user. Rather, user specifies fixationScale, and then fixationradius stores the actual pixel-based size in the json data file."},
	sampleScale: {dataname: "SampleScale",user: 1,save: 1,init: 1,meta: "Size of sample image in units of sample image width. sampleScal=1 displays a npx x npx image on npx x npx screen pixels on the screen (i.e. no up or down sampling/resizing/filtering of the image)"},
	testScale: {dataname: "TestScale",user: 1,save: 1,init: 1,meta: "Size of the test image in units of sample image width"},
	automator: {dataname: "Automator",user: 1,save: 1,init: "",meta: "Name of the automator used for automated training. automator=OR trains basic 24-object (objectome) match to sample task. automator=SR trains stimulus-response task."},
	currentAutomatorStage: {dataname: "CurrentAutomatorStage",user: 1,save: 1,init: 0,meta: "Training stage of automator."},
	currentAutomatorStageName: {dataname: "CurrentAutomatorStageName",user: 0,save: 1,init: "",meta: "Name of current automator training stage."},
	automatorFilePath: {dataname: "AutomatorFilePath",user: 1,save: 1,init: "",meta: "File path for additional automator params to adjust the automator curriculum."},
	params: {dataname: "Params",user: 0,save: 1,init: "",meta: "Path to subject parameter file, e.g. /MonkeyTurk/parameterfiles/Zico_params.txt"},
	fixationgrid: {dataname: "FixationGridIndex",user: 0,save: 1,init: [],meta: "Fixation grid location on each trial."},
	sampleserial: {dataname: "Sample",user: 0,save: 1,init: [],meta: "Sample image number for each trial."},
	testserial: {dataname: "Test",user: 0,save: 1,init: [],meta: "Test image numbers for each trial."},
	response: {dataname: "Response",user: 0,save: 1,init: [],meta: "Index of selection in choice vector, e.g. 0=chose left, 1=chose right if testgridindex=[2,8]."},
	correctItem: {dataname: "CorrectItem",user: 0,save: 1,init: [],meta: "Index of correct item in choice vector, e.g. 0=left was correct, 1=right was correct if testgridindex=[2,8]."},
	tstart: {dataname: "StartTime",user: 0,save: 1,init: [],meta: "The starting time of each trial (fixation onset) in microseconds."},
	xytfixation: {dataname: "FixationXYT",user: 0,save: 1,init: [],meta: "The xy coordinates in pixels and time in microseconds of subject's last successful touch on the fixation screen."},
	allxytfixation: {dataname: "AllFixationXYT",user: 0,save: 1,init: [],meta: "The xy coordinates in pixels and time in microseconds of each successful touch on the fixation screen. Longer vector than xytfixation when nfixations > 1"},
	xytresponse: {dataname: "ResponseXYT",user: 0,save: 1,init: [],meta: "The xy coordinates in pixels and time in microseconds of subject's choice on test screen."},
	nreward: {dataname: "NReward",user: 0,save: 1,init: [],meta: "The number of rewards given at the end of the trial; usually 1x reward unless subject got many trials in a row correct in which case may get bonus reward according to nconsecutivehitsforbonus."},
}

// Initialize trial variable using params.init
var trial = {}
for (var p in params){
	trial[p] = params[p].init
}

// List of parameters controlled by automators
var ORautomatorparams = [
"rewardStage","fixationmove","fixationScale","nfixations","sampleON","ngridpoints",
"gridscale","fixationgridindex","samplegrid","objectgrid","fixationusessample",
"keepSampleON","nway","imageFolderSample","sampleScale","testScale",
"hidetestdistractors","objectlist","currentAutomatorStageName"
]

var SRautomatorparams = [
"rewardStage","fixationmove","fixationScale","sampleON","samplegrid",
"objectgrid","keepSampleON","nway","imageFolderSample","sampleScale",
"testScale","hidetestdistractors","objectlist"
]