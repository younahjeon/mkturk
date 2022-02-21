/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/functions */ "./node_modules/firebase/functions/dist/index.esm.js");




const firebaseConfig = {
    apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
    authDomain: "sandbox-ce2c5.firebaseapp.com",
    databaseURL: "https://sandbox-ce2c5.firebaseio.com",
    projectId: "sandbox-ce2c5",
    storageBucket: "sandbox-ce2c5.appspot.com",
    messagingSenderId: "1003719887944",
    clientId: "1003719887944-rlc06cjecqrp9fgvmvo56vqop1otm9ht.apps.googleusercontent.com"
};
firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp(firebaseConfig);
const functions = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.functions();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth();
const submitAssignment = functions.httpsCallable('submitAssignment');
const submitSurvey = functions.httpsCallable('submitSurvey');
const countriesList = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla",
    "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba",
    "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
    "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic",
    "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands",
    "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the",
    "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czeck Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island",
    "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France",
    "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon",
    "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar",
    "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala",
    "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands",
    "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland",
    "India", "Indonesia", "Iran", "Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy",
    "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan",
    "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of",
    "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico",
    "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia",
    "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands",
    "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau",
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland",
    "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
    "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan",
    "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay",
    "USA", "Uzbekistan", "Vatican City", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales",
    "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
];
let mturkUserConfig = {};
mturkUserConfig.survey = {};
console.log('location:', window.location.search);
if (window.location.search) {
    try {
        let mturkCfgPairStr = window.location.search.split('?')[1].split('&');
        mturkCfgPairStr.forEach(str => {
            let pair = str.split('=');
            if (pair[0] == 'AID') { // AID: assignmentId
                mturkUserConfig.aid = pair[1];
            }
            else if (pair[0] == 'HID') { // HID: hitId
                mturkUserConfig.hid = pair[1];
            }
            else if (pair[0] == 'WID') { // WID: workerId
                mturkUserConfig.wid = pair[1];
            }
            else if (pair[0] == 'TASK') { // TASK: name of task in params_storage
                mturkUserConfig.task = pair[1];
            }
        });
    }
    catch (e) {
        console.error('Error Parsing User Config:', e);
    }
}
console.log(mturkUserConfig);
const surveyForm = document.querySelector('#survey-form');
surveyForm.addEventListener('submit', async (evt) => {
    // prevent submit form on ENTER/RETURN
    evt.preventDefault();
    // 1. Check that all required elements are populated
    // console.log(document.querySelectorAll('input[name=difficulty]:checked')[0].value);
    let difficultyChecked = document.querySelectorAll('input[name=difficulty]:checked').length;
    let engagingChecked = document.querySelectorAll('input[name=engaging]:checked').length;
    const requiredElems = document.querySelectorAll('.required');
    try {
        if (!difficultyChecked) {
            throw new TypeError(`DIFFICULTY level is not checked`);
        }
        if (!engagingChecked) {
            throw new TypeError(`ENGAGING level is not checked`);
        }
        requiredElems.forEach((requiredEl) => {
            if (!requiredEl.value) {
                throw new TypeError(`value of ${requiredEl.id} is undefined`);
            }
            else {
                if (requiredEl.id == 'age') {
                    mturkUserConfig.survey[requiredEl.id] = parseInt(requiredEl.value);
                }
                else {
                    mturkUserConfig.survey[requiredEl.id] = requiredEl.value;
                }
            }
        });
        let engagingLevel = document.querySelector('input[name=difficulty]:checked');
        let difficultyLevel = document.querySelector('input[name=difficulty]:checked');
        mturkUserConfig.survey['engagingLevel'] = parseInt(engagingLevel.value);
        mturkUserConfig.survey['difficultyLevel'] = parseInt(difficultyLevel.value);
        console.log('all values look good:', mturkUserConfig);
        let response = await submitSurvey(mturkUserConfig);
        if (response.data.status === 200) {
            alert(`Your submit code is: ${response.data.message}`);
        }
        else {
            alert(`There was an error: ${response.data.message}`);
        }
    }
    catch (error) {
        console.error(error);
        alert(error.message);
    }
});
const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('pointerup', (evt) => {
    surveyForm.dispatchEvent(new Event('submit'));
});
const countriesListEls = document.querySelectorAll('.countries-list');
countriesList.forEach((country) => {
    let option = document.createElement('option');
    option.textContent = country;
    option.value = country.toLocaleLowerCase();
    countriesListEls.forEach((el) => {
        el.appendChild(option.cloneNode(true));
    });
});
const assignmentBtn = document.querySelector('#assignment-btn');
assignmentBtn.addEventListener('pointerup', async (evt) => {
    let response = await submitAssignment(mturkUserConfig);
    console.log(response);
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/main.ts","vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_auth_dist_index_esm-146fc1"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmturksurvey"] = self["webpackChunkmturksurvey"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdHVya3N1cnZleS8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL210dXJrc3VydmV5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL210dXJrc3VydmV5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdHVya3N1cnZleS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL210dXJrc3VydmV5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXR1cmtzdXJ2ZXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tdHVya3N1cnZleS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tdHVya3N1cnZleS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ2I7QUFDRztBQUNFO0FBRTVCLE1BQU0sY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakQsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxXQUFXLEVBQUUsc0NBQXNDO0lBQ25ELFNBQVMsRUFBRSxlQUFlO0lBQzFCLGFBQWEsRUFBRSwyQkFBMkI7SUFDMUMsaUJBQWlCLEVBQUUsZUFBZTtJQUNsQyxRQUFRLEVBQUUsMkVBQTJFO0NBQ3RGLENBQUM7QUFFRiwrREFBc0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV2QyxNQUFNLFNBQVMsR0FBRywyREFBa0IsRUFBRSxDQUFDO0FBQ3ZDLE1BQU0sSUFBSSxHQUFHLHNEQUFhLEVBQUUsQ0FBQztBQUM3QixNQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNyRSxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFD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VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsNENBQTRDO1dBQzVDO1dBQ0EsRTs7OztVQ3BGQTtVQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCAnZmlyZWJhc2UvZnVuY3Rpb25zJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lBMGZidjJWcUUtQWZGNlZfbnhTU1hDRXFhVGxCbFpuVElcIixcbiAgYXV0aERvbWFpbjogXCJzYW5kYm94LWNlMmM1LmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3NhbmRib3gtY2UyYzUuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcInNhbmRib3gtY2UyYzVcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJzYW5kYm94LWNlMmM1LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMDM3MTk4ODc5NDRcIixcbiAgY2xpZW50SWQ6IFwiMTAwMzcxOTg4Nzk0NC1ybGMwNmNqZWNxcnA5Zmd2bXZvNTZ2cW9wMW90bTlodC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG59O1xuXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuY29uc3QgZnVuY3Rpb25zID0gZmlyZWJhc2UuZnVuY3Rpb25zKCk7XG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuY29uc3Qgc3VibWl0QXNzaWdubWVudCA9IGZ1bmN0aW9ucy5odHRwc0NhbGxhYmxlKCdzdWJtaXRBc3NpZ25tZW50Jyk7XG5jb25zdCBzdWJtaXRTdXJ2ZXkgPSBmdW5jdGlvbnMuaHR0cHNDYWxsYWJsZSgnc3VibWl0U3VydmV5Jyk7XG5jb25zdCBjb3VudHJpZXNMaXN0ID0gW1xuICBcIkFmZ2hhbmlzdGFuXCIsIFwiQWxiYW5pYVwiLCBcIkFsZ2VyaWFcIiwgXCJBbWVyaWNhbiBTYW1vYVwiLCBcIkFuZ29sYVwiLCBcIkFuZ3VpbGxhXCIsXG4gIFwiQW50YXJ0aWNhXCIsIFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBcIkFyZ2VudGluYVwiLCBcIkFybWVuaWFcIiwgXCJBcnViYVwiLFxuICBcIkFzaG1vcmUgYW5kIENhcnRpZXIgSXNsYW5kXCIsIFwiQXVzdHJhbGlhXCIsIFwiQXVzdHJpYVwiLCBcIkF6ZXJiYWlqYW5cIiwgXCJCYWhhbWFzXCIsXG4gIFwiQmFocmFpblwiLCBcIkJhbmdsYWRlc2hcIiwgXCJCYXJiYWRvc1wiLCBcIkJlbGFydXNcIiwgXCJCZWxnaXVtXCIsIFwiQmVsaXplXCIsIFwiQmVuaW5cIixcbiAgXCJCZXJtdWRhXCIsIFwiQmh1dGFuXCIsIFwiQm9saXZpYVwiLCBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJCb3Rzd2FuYVwiLCBcIkJyYXppbFwiLFxuICBcIkJyaXRpc2ggVmlyZ2luIElzbGFuZHNcIiwgXCJCcnVuZWlcIiwgXCJCdWxnYXJpYVwiLCBcIkJ1cmtpbmEgRmFzb1wiLCBcIkJ1cm1hXCIsIFwiQnVydW5kaVwiLFxuICBcIkNhbWJvZGlhXCIsIFwiQ2FtZXJvb25cIiwgXCJDYW5hZGFcIiwgXCJDYXBlIFZlcmRlXCIsIFwiQ2F5bWFuIElzbGFuZHNcIiwgXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIixcbiAgXCJDaGFkXCIsIFwiQ2hpbGVcIiwgXCJDaGluYVwiLCBcIkNocmlzdG1hcyBJc2xhbmRcIiwgXCJDbGlwcGVydG9uIElzbGFuZFwiLCBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsXG4gIFwiQ29sb21iaWFcIiwgXCJDb21vcm9zXCIsIFwiQ29uZ28sIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsIFwiQ29uZ28sIFJlcHVibGljIG9mIHRoZVwiLFxuICBcIkNvb2sgSXNsYW5kc1wiLCBcIkNvc3RhIFJpY2FcIiwgXCJDb3RlIGQnSXZvaXJlXCIsIFwiQ3JvYXRpYVwiLCBcIkN1YmFcIiwgXCJDeXBydXNcIiwgXCJDemVjayBSZXB1YmxpY1wiLFxuICBcIkRlbm1hcmtcIiwgXCJEamlib3V0aVwiLCBcIkRvbWluaWNhXCIsIFwiRG9taW5pY2FuIFJlcHVibGljXCIsIFwiRWN1YWRvclwiLCBcIkVneXB0XCIsIFwiRWwgU2FsdmFkb3JcIixcbiAgXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBcIkVyaXRyZWFcIiwgXCJFc3RvbmlhXCIsIFwiRXRoaW9waWFcIiwgXCJFdXJvcGEgSXNsYW5kXCIsXG4gIFwiRmFsa2xhbmQgSXNsYW5kcyAoSXNsYXMgTWFsdmluYXMpXCIsIFwiRmFyb2UgSXNsYW5kc1wiLCBcIkZpamlcIiwgXCJGaW5sYW5kXCIsIFwiRnJhbmNlXCIsXG4gIFwiRnJlbmNoIEd1aWFuYVwiLCBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgXCJGcmVuY2ggU291dGhlcm4gYW5kIEFudGFyY3RpYyBMYW5kc1wiLCBcIkdhYm9uXCIsXG4gIFwiR2FtYmlhLCBUaGVcIiwgXCJHYXphIFN0cmlwXCIsIFwiR2VvcmdpYVwiLCBcIkdlcm1hbnlcIiwgXCJHaGFuYVwiLCBcIkdpYnJhbHRhclwiLFxuICBcIkdsb3Jpb3NvIElzbGFuZHNcIiwgXCJHcmVlY2VcIiwgXCJHcmVlbmxhbmRcIiwgXCJHcmVuYWRhXCIsIFwiR3VhZGVsb3VwZVwiLCBcIkd1YW1cIiwgXCJHdWF0ZW1hbGFcIixcbiAgXCJHdWVybnNleVwiLCBcIkd1aW5lYVwiLCBcIkd1aW5lYS1CaXNzYXVcIiwgXCJHdXlhbmFcIiwgXCJIYWl0aVwiLCBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLFxuICBcIkhvbmR1cmFzXCIsIFwiSG9uZyBLb25nXCIsIFwiSG93bGFuZCBJc2xhbmRcIiwgXCJIdW5nYXJ5XCIsIFwiSWNlbGFuZFwiLFxuICBcIkluZGlhXCIsIFwiSW5kb25lc2lhXCIsIFwiSXJhblwiLCBcIklyYXFcIiwgXCJJcmVsYW5kXCIsIFwiSXJlbGFuZCwgTm9ydGhlcm5cIiwgXCJJc3JhZWxcIiwgXCJJdGFseVwiLFxuICBcIkphbWFpY2FcIiwgXCJKYW4gTWF5ZW5cIiwgXCJKYXBhblwiLCBcIkphcnZpcyBJc2xhbmRcIiwgXCJKZXJzZXlcIiwgXCJKb2huc3RvbiBBdG9sbFwiLCBcIkpvcmRhblwiLFxuICBcIkp1YW4gZGUgTm92YSBJc2xhbmRcIiwgXCJLYXpha2hzdGFuXCIsIFwiS2VueWFcIiwgXCJLaXJpYmF0aVwiLCBcIktvcmVhLCBOb3J0aFwiLCBcIktvcmVhLCBTb3V0aFwiLFxuICBcIkt1d2FpdFwiLCBcIkt5cmd5enN0YW5cIiwgXCJMYW9zXCIsIFwiTGF0dmlhXCIsIFwiTGViYW5vblwiLCBcIkxlc290aG9cIiwgXCJMaWJlcmlhXCIsIFwiTGlieWFcIixcbiAgXCJMaWVjaHRlbnN0ZWluXCIsIFwiTGl0aHVhbmlhXCIsIFwiTHV4ZW1ib3VyZ1wiLCBcIk1hY2F1XCIsIFwiTWFjZWRvbmlhXCIsXG4gIFwiTWFkYWdhc2NhclwiLCBcIk1hbGF3aVwiLCBcIk1hbGF5c2lhXCIsIFwiTWFsZGl2ZXNcIiwgXCJNYWxpXCIsIFwiTWFsdGFcIiwgXCJNYW4sIElzbGUgb2ZcIixcbiAgXCJNYXJzaGFsbCBJc2xhbmRzXCIsIFwiTWFydGluaXF1ZVwiLCBcIk1hdXJpdGFuaWFcIiwgXCJNYXVyaXRpdXNcIiwgXCJNYXlvdHRlXCIsIFwiTWV4aWNvXCIsXG4gIFwiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZlwiLCBcIk1pZHdheSBJc2xhbmRzXCIsIFwiTW9sZG92YVwiLCBcIk1vbmFjb1wiLCBcIk1vbmdvbGlhXCIsXG4gIFwiTW9udHNlcnJhdFwiLCBcIk1vcm9jY29cIiwgXCJNb3phbWJpcXVlXCIsIFwiTmFtaWJpYVwiLCBcIk5hdXJ1XCIsIFwiTmVwYWxcIiwgXCJOZXRoZXJsYW5kc1wiLFxuICBcIk5ldGhlcmxhbmRzIEFudGlsbGVzXCIsIFwiTmV3IENhbGVkb25pYVwiLCBcIk5ldyBaZWFsYW5kXCIsIFwiTmljYXJhZ3VhXCIsIFwiTmlnZXJcIiwgXCJOaWdlcmlhXCIsXG4gIFwiTml1ZVwiLCBcIk5vcmZvbGsgSXNsYW5kXCIsIFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIFwiTm9yd2F5XCIsIFwiT21hblwiLCBcIlBha2lzdGFuXCIsIFwiUGFsYXVcIixcbiAgXCJQYW5hbWFcIiwgXCJQYXB1YSBOZXcgR3VpbmVhXCIsIFwiUGFyYWd1YXlcIiwgXCJQZXJ1XCIsIFwiUGhpbGlwcGluZXNcIiwgXCJQaXRjYWltIElzbGFuZHNcIiwgXCJQb2xhbmRcIixcbiAgXCJQb3J0dWdhbFwiLCBcIlB1ZXJ0byBSaWNvXCIsIFwiUWF0YXJcIiwgXCJSZXVuaW9uXCIsIFwiUm9tYWluaWFcIiwgXCJSdXNzaWFcIiwgXCJSd2FuZGFcIiwgXCJTYWludCBIZWxlbmFcIixcbiAgXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIiwgXCJTYWludCBMdWNpYVwiLCBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIixcbiAgXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLCBcIlNhbW9hXCIsIFwiU2FuIE1hcmlub1wiLCBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLFxuICBcIlNhdWRpIEFyYWJpYVwiLCBcIlNjb3RsYW5kXCIsIFwiU2VuZWdhbFwiLCBcIlNleWNoZWxsZXNcIiwgXCJTaWVycmEgTGVvbmVcIiwgXCJTaW5nYXBvcmVcIiwgXCJTbG92YWtpYVwiLFxuICBcIlNsb3ZlbmlhXCIsIFwiU29sb21vbiBJc2xhbmRzXCIsIFwiU29tYWxpYVwiLCBcIlNvdXRoIEFmcmljYVwiLFxuICBcIlNvdXRoIEdlb3JnaWEgYW5kIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIiwgXCJTcGFpblwiLCBcIlNwcmF0bHkgSXNsYW5kc1wiLCBcIlNyaSBMYW5rYVwiLCBcIlN1ZGFuXCIsXG4gIFwiU3VyaW5hbWVcIiwgXCJTdmFsYmFyZFwiLCBcIlN3YXppbGFuZFwiLCBcIlN3ZWRlblwiLCBcIlN3aXR6ZXJsYW5kXCIsIFwiU3lyaWFcIiwgXCJUYWl3YW5cIiwgXCJUYWppa2lzdGFuXCIsXG4gIFwiVGFuemFuaWFcIiwgXCJUaGFpbGFuZFwiLCBcIlRvYmFnb1wiLCBcIlRvZ2FcIiwgXCJUb2tlbGF1XCIsIFwiVG9uZ2FcIiwgXCJUcmluaWRhZFwiLCBcIlR1bmlzaWFcIiwgXCJUdXJrZXlcIixcbiAgXCJUdXJrbWVuaXN0YW5cIiwgXCJUdXZhbHVcIiwgXCJVZ2FuZGFcIiwgXCJVa3JhaW5lXCIsIFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgXCJVbml0ZWQgS2luZ2RvbVwiLCBcIlVydWd1YXlcIixcbiAgXCJVU0FcIiwgXCJVemJla2lzdGFuXCIsIFwiVmF0aWNhbiBDaXR5XCIsIFwiVmFudWF0dVwiLCBcIlZlbmV6dWVsYVwiLCBcIlZpZXRuYW1cIiwgXCJWaXJnaW4gSXNsYW5kc1wiLCBcIldhbGVzXCIsXG4gIFwiV2FsbGlzIGFuZCBGdXR1bmFcIiwgXCJXZXN0IEJhbmtcIiwgXCJXZXN0ZXJuIFNhaGFyYVwiLCBcIlllbWVuXCIsIFwiWXVnb3NsYXZpYVwiLCBcIlphbWJpYVwiLCBcIlppbWJhYndlXCJcbl07XG5cbmxldCBtdHVya1VzZXJDb25maWc6IGFueSA9IHt9O1xubXR1cmtVc2VyQ29uZmlnLnN1cnZleSA9IHt9O1xuY29uc29sZS5sb2coJ2xvY2F0aW9uOicsIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpIHtcbiAgdHJ5IHtcbiAgICBsZXQgbXR1cmtDZmdQYWlyU3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnPycpWzFdLnNwbGl0KCcmJyk7XG4gICAgbXR1cmtDZmdQYWlyU3RyLmZvckVhY2goc3RyID0+IHtcbiAgICAgIGxldCBwYWlyID0gc3RyLnNwbGl0KCc9Jyk7XG4gICAgICBpZiAocGFpclswXSA9PSAnQUlEJykgeyAvLyBBSUQ6IGFzc2lnbm1lbnRJZFxuICAgICAgICBtdHVya1VzZXJDb25maWcuYWlkID0gcGFpclsxXTtcbiAgICAgIH0gZWxzZSBpZiAocGFpclswXSA9PSAnSElEJykgeyAvLyBISUQ6IGhpdElkXG4gICAgICAgIG10dXJrVXNlckNvbmZpZy5oaWQgPSBwYWlyWzFdO1xuICAgICAgfSBlbHNlIGlmIChwYWlyWzBdID09ICdXSUQnKSB7IC8vIFdJRDogd29ya2VySWRcbiAgICAgICAgbXR1cmtVc2VyQ29uZmlnLndpZCA9IHBhaXJbMV07XG4gICAgICB9IGVsc2UgaWYgKHBhaXJbMF0gPT0gJ1RBU0snKSB7IC8vIFRBU0s6IG5hbWUgb2YgdGFzayBpbiBwYXJhbXNfc3RvcmFnZVxuICAgICAgICBtdHVya1VzZXJDb25maWcudGFzayA9IHBhaXJbMV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBQYXJzaW5nIFVzZXIgQ29uZmlnOicsIGUpO1xuICB9XG59XG5jb25zb2xlLmxvZyhtdHVya1VzZXJDb25maWcpO1xuXG5jb25zdCBzdXJ2ZXlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1cnZleS1mb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuc3VydmV5Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZ0OiBFdmVudCkgPT4ge1xuICAvLyBwcmV2ZW50IHN1Ym1pdCBmb3JtIG9uIEVOVEVSL1JFVFVSTlxuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gMS4gQ2hlY2sgdGhhdCBhbGwgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHBvcHVsYXRlZFxuICBcbiAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1kaWZmaWN1bHR5XTpjaGVja2VkJylbMF0udmFsdWUpO1xuICBsZXQgZGlmZmljdWx0eUNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPWRpZmZpY3VsdHldOmNoZWNrZWQnKS5sZW5ndGg7XG4gIGxldCBlbmdhZ2luZ0NoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPWVuZ2FnaW5nXTpjaGVja2VkJykubGVuZ3RoO1xuICBjb25zdCByZXF1aXJlZEVsZW1zID0gKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXF1aXJlZCcpIGFzIE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50PlxuICApO1xuICB0cnkge1xuICAgIGlmICghZGlmZmljdWx0eUNoZWNrZWQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYERJRkZJQ1VMVFkgbGV2ZWwgaXMgbm90IGNoZWNrZWRgKTtcbiAgICB9XG5cbiAgICBpZiAoIWVuZ2FnaW5nQ2hlY2tlZCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRU5HQUdJTkcgbGV2ZWwgaXMgbm90IGNoZWNrZWRgKTtcbiAgICB9XG4gICAgcmVxdWlyZWRFbGVtcy5mb3JFYWNoKChyZXF1aXJlZEVsOiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghcmVxdWlyZWRFbC52YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGB2YWx1ZSBvZiAke3JlcXVpcmVkRWwuaWR9IGlzIHVuZGVmaW5lZGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlcXVpcmVkRWwuaWQgPT0gJ2FnZScpIHtcbiAgICAgICAgICBtdHVya1VzZXJDb25maWcuc3VydmV5W3JlcXVpcmVkRWwuaWRdID0gcGFyc2VJbnQocmVxdWlyZWRFbC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbXR1cmtVc2VyQ29uZmlnLnN1cnZleVtyZXF1aXJlZEVsLmlkXSA9IHJlcXVpcmVkRWwudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBlbmdhZ2luZ0xldmVsID0gKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1kaWZmaWN1bHR5XTpjaGVja2VkJykgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICk7XG4gICAgbGV0IGRpZmZpY3VsdHlMZXZlbCA9IChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9ZGlmZmljdWx0eV06Y2hlY2tlZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICApO1xuXG4gICAgbXR1cmtVc2VyQ29uZmlnLnN1cnZleVsnZW5nYWdpbmdMZXZlbCddID0gcGFyc2VJbnQoZW5nYWdpbmdMZXZlbC52YWx1ZSk7XG4gICAgbXR1cmtVc2VyQ29uZmlnLnN1cnZleVsnZGlmZmljdWx0eUxldmVsJ10gPSBwYXJzZUludChkaWZmaWN1bHR5TGV2ZWwudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKCdhbGwgdmFsdWVzIGxvb2sgZ29vZDonLCBtdHVya1VzZXJDb25maWcpO1xuXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgc3VibWl0U3VydmV5KG10dXJrVXNlckNvbmZpZyk7XG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGFsZXJ0KGBZb3VyIHN1Ym1pdCBjb2RlIGlzOiAke3Jlc3BvbnNlLmRhdGEubWVzc2FnZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoYFRoZXJlIHdhcyBhbiBlcnJvcjogJHtyZXNwb25zZS5kYXRhLm1lc3NhZ2V9YCk7XG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gIH1cbiAgXG59KTtcblxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idG4nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIChldnQ6IEV2ZW50KSA9PiB7XG4gIHN1cnZleUZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N1Ym1pdCcpKTtcbn0pO1xuXG5jb25zdCBjb3VudHJpZXNMaXN0RWxzID0gKFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY291bnRyaWVzLWxpc3QnKSBhcyBOb2RlTGlzdE9mPEhUTUxTZWxlY3RFbGVtZW50PlxuKTtcblxuY291bnRyaWVzTGlzdC5mb3JFYWNoKChjb3VudHJ5OiBzdHJpbmcpID0+IHtcbiAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSBjb3VudHJ5O1xuICBvcHRpb24udmFsdWUgPSBjb3VudHJ5LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgY291bnRyaWVzTGlzdEVscy5mb3JFYWNoKChlbDogSFRNTFNlbGVjdEVsZW1lbnQpID0+IHtcbiAgICBlbC5hcHBlbmRDaGlsZChvcHRpb24uY2xvbmVOb2RlKHRydWUpKTtcbiAgfSk7XG59KTtcblxuY29uc3QgYXNzaWdubWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhc3NpZ25tZW50LWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuYXNzaWdubWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBhc3luYyAoZXZ0OiBFdmVudCkgPT4ge1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBzdWJtaXRBc3NpZ25tZW50KG10dXJrVXNlckNvbmZpZyk7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbn0pO1xuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG4vLyBJdCdzIGVtcHR5IGFzIHNvbWUgcnVudGltZSBtb2R1bGUgaGFuZGxlcyB0aGUgZGVmYXVsdCBiZWhhdmlvclxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0geCA9PiB7fVxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19maXJlYmFzZV9hcHBfZGlzdF9pbmRleF9lc21fanMtbm9kZV9tb2R1bGVzX2ZpcmViYXNlX2F1dGhfZGlzdF9pbmRleF9lc20tMTQ2ZmMxXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0geCA9PiB7fTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWUsIGV4ZWN1dGVNb2R1bGVzXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua210dXJrc3VydmV5XCJdID0gc2VsZltcIndlYnBhY2tDaHVua210dXJrc3VydmV5XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTtcblxuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbnZhciBzdGFydHVwID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBzdGFydHVwIHx8ICh4ID0+IHt9KTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07IiwiLy8gcnVuIHN0YXJ0dXBcbl9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==