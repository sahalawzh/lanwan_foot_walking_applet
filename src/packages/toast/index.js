"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var _theme_behaviors=require("./../package_help/theme_behaviors.js"),_theme_behaviors2=_interopRequireDefault(_theme_behaviors),_icon_behaviors=require("./../package_help/icon_behaviors.js"),_icon_behaviors2=_interopRequireDefault(_icon_behaviors),DEFAULT_DATA={title:"",icon:"",slotIcon:"false",locked:"false",duration:3e3,status:"hide"};exports.default=Component({behaviors:[_theme_behaviors2.default,_icon_behaviors2.default],properties:{title:{type:String,value:""},icon:{type:String,value:""},slotIcon:{type:String,value:"false"},locked:{type:String,value:"false"},status:{type:String,value:"hide",observer:function(t,e){this.data.isShowIng||("show"===t?this.showWithOptions(this.data):this.hide())}},duration:{type:String,value:"3000"}},data:{iconClass:"",isLoading:!1,timeId:0,isShowIng:!1},attached:function(){var t=this.data.icon,e=this._parseIcon(t);e&&this.setData(e)},methods:{_handlePopupClose:function(t){this._hide()},_parseIcon:function(t){var e=this.data.iconMaps;if(t){if(0===t.indexOf("loading"))return{isLoading:!0,locked:"true",duration:"-1",iconClass:t};if(e[t])return{isLoading:!1,iconClass:e[t]}}return{}},_show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this.data,s=e.timeId||i.timeId,a=e.duration||i.duration,o=Object.assign({},e,{status:"show"});this.data.isShowIng=!0,clearTimeout(s),a&&"-1"!==a?(s=setTimeout(function(){t._hide(!0)},a),o.timeId=s,this.setData(o)):this.setData(o)},_hide:function(t){clearTimeout(this.data.timeId),t&&this.setData({status:"hide"}),this.data.isShowIng=!1},show:function(){this._show()},showWithOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},DEFAULT_DATA,t);e.icon?Object.assign(e,this._parseIcon(t.icon)):e.iconClass="",this._show(e)},hide:function(){this._hide(!0)}}});