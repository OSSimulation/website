var _____WB$wombat$assign$function_____ = function (name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function (obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");


    function getObject(elementId) { if (document.getElementById) { return document.getElementById(elementId); } else if (document.all) { return document.all[elementId]; } else if (document.layers) { return document.layers[elementId]; } }
    function getObjectsByTagAndClass(tag, cls) { var array = document.getElementsByTagName(tag); var output = new Array(); var matches = 0; for (var i = 0; i < array.length; i++) { var parts = array[i].className.split(' '); for (var j = 0; j < parts.length; j++) { if (parts[j] == cls) { output[matches++] = array[i]; } } } return output; }
    function getTargetFromEvent(e) { if (!e) var e = window.event; if (e.target) var tg = e.target; else if (e.srcElement) var tg = e.srcElement; while (tg.nodeType != 1) tg = tg.parentNode; return tg; }
    function getBrowserWidth() { if (window.innerWidth) return window.innerWidth; else if (document.body.clientWidth) return document.body.clientWidth; else return -1; }
    function getBrowserHeight() { return document.documentElement.clientHeight; }
    function getBodyHeight() { if (document.body.clientHeight) return document.body.clientHeight; else return -1; }
    function getObjectHeight(i) { return i.offsetHeight; }
    function uLS() { document.write("<!" + "--"); }
    function wFlO(fs, w, h) { if (w == undefined) w = ''; if (h == undefined) h = ''; if (gFV() >= 6) { document.write("<object " + (w != '' ? " width='" + w + "'" : "") + (h != '' ? " height='" + h + "'" : "") + " classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + fs + "'><param name='allowScriptAccess' value='always'><param name='quality' value='high'><param name='wmode' value='transparent'><embed " + (w != '' ? " width='" + w + "'" : "") + (h != '' ? " height='" + h + "'" : "") + " src='" + fs + "' quality='high' bgcolor='#ffffff' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash' pluginspage='http:/" + "/www.macromedia.com/go/getflashplayer' wmode='transparent'></object>"); return 1; } return 0; } var fV = 0; var fVer = -1;
    function gFV() { var lfv = 12; var ag = navigator.userAgent.toLowerCase(); if (ag.indexOf("mozilla/3") != -1 && ag.indexOf("msie") == -1) { fV = 0; } if (fVer != -1) return fVer; if (navigator.plugins != null && navigator.plugins.length > 0) { var fP = navigator.plugins['Shockwave Flash']; if (typeof fP == 'object') { for (var i = lfv; i >= 3; i--) { if (fP.description.indexOf(i + '.') != -1) { fV = i; break; } } } } else if (ag.indexOf("msie") != -1 && parseInt(navigator.appVersion) >= 4 && ag.indexOf("win") != -1 && ag.indexOf("16bit") == -1) { var doc = '<scr' + 'ipt language="VBScript"\> \r'; doc += 'On Error Resume Next \r'; doc += 'Dim obFlash \r'; doc += 'For i=' + lfv + ' To 3 Step -1 \r'; doc += ' Set obFlash=CreateObject("ShockwaveFlash.ShockwaveFlash." & i) \r'; doc += ' If IsObject(obFlash) Then \r'; doc += ' fV=i \r'; doc += ' Exit For \r'; doc += ' End If \r'; doc += 'Next \r'; doc += '</scr' + 'ipt\>'; document.write(doc); } else { fV = 0; } fVer = fV; return fV; } var wpfeVer = -1;
    function gWPFEV() { return 0; }
    function KP(o) { var k = GKBH(o); if (k == 13 || k == 32) { eval(KPF); return false; } return k; }
    function GKBH(o) { var k; try { k = (window.event != null && window.event.keyCode != null) ? window.event.keyCode : e.which; } catch (e) { k = null; }; return (k == null && o != null && o.keyCode != null) ? o.keyCode : k; }
    function SNKP(o) { var k = GKBH(o); if (k == 9) { if (o == null) o = window.event; if (o.shiftKey != true) { eval(KPF); return false; } } return k; }
    function MNKP(o) { var k = GKBH(o); if (k == 9) { var nw = getObject('MNW'); var f = getObject('LSNI'); if (null != nw && subNavVisible && null != f) { if (o == null) o = window.event; if (o.shiftKey == true) { f.focus(); return false; } } } return k; }
    function MNFocus(which) { if (null == which) which = 'q'; var o = getObject(which); if (null != o) o.focus(); } var currentTabGroup = 0; var currentTabIndex = 0; var activeTabIndeces = new Array(); var activeTabTimers = new Array();
    function activateTab(tabGroup, index) { clearTimeout(activeTabTimers[tabGroup]); currentTabGroup = tabGroup; currentTabIndex = index; if (activeTabIndeces.length <= tabGroup) { activeTabIndeces[tabGroup] = 0; } var activeTabIndex = activeTabIndeces[tabGroup]; if (index != activeTabIndex) { activeTabTimers[tabGroup] = setTimeout("activateTabTimer()", 250); } }
    function mouseOutTab(tabGroup, index) { clearTimeout(activeTabTimers[tabGroup]); }
    function activateTabTimer() { var activeTabIndex = activeTabIndeces[currentTabGroup]; if (currentTabIndex != activeTabIndex) { var h = 'tbh' + currentTabGroup + '_'; var c = 'tbc' + currentTabGroup + '_'; var activeTab = getObject(h + activeTabIndex); var activeTabPanel = getObject(c + activeTabIndex); var newTab = getObject(h + currentTabIndex); var newTabPanel = getObject(c + currentTabIndex); activeTab.className = 'tab'; activeTabPanel.className = 'tabPanel tabHiddenPanel'; newTab.className = 'tab tabActive'; newTabPanel.className = 'tabPanel tabActivePanel'; activeTabIndeces[currentTabGroup] = currentTabIndex; clearTimeout(impT); impT = setTimeout("swtI(" + currentTabIndex + ")", 1000); } } var TVIEWHEIGHT = 0;
    function collapseTabs() { var ih = 0; var i = 0; var objects = getObjectsByTagAndClass("h3", "dlh"); for (i = 0; i < objects.length; i++) { objects[i].style.display = 'none'; } objects = getObjectsByTagAndClass("div", "tbc"); for (i = 0; i < objects.length; i++) { ih = getObjectHeight(objects[i]); if (ih > TVIEWHEIGHT) TVIEWHEIGHT = ih; } var objects = getObjectsByTagAndClass("div", "dlTabs"); for (i = 0; i < objects.length; i++) { objects[i].style.display = 'none'; } objects = getObjectsByTagAndClass("div", "ulTabs"); for (i = 0; i < objects.length; i++) { objects[i].style.display = 'block'; } objects = getObjectsByTagAndClass("h3", "dlh"); for (i = 0; i < objects.length; i++) { objects[i].style.display = 'none'; } objects = getObjectsByTagAndClass("div", "dlTabSpacer"); for (i = 0; i < objects.length; i++) { objects[i].style.display = 'none'; } objects = getObjectsByTagAndClass("div", "tabContentPanel"); for (i = 0; i < objects.length; i++) { objects[i].className = 'tabContentPanel'; objects[i].style.height = TVIEWHEIGHT + "px"; } objects = getObjectsByTagAndClass("div", "tabPanel"); for (i = 0; i < objects.length; i++) { if (i == 0) { objects[i].className = 'tabPanel tabActivePanel'; } else { objects[i].className = 'tabPanel tabHiddenPanel'; } } } var mnl; var mnl_h; var mnl_oh; var isE = true; var timer; var closeWhileCollapse = false;
    function navH1Click(e) { if (timer) { clearInterval(timer); timer = null; } var target = getTargetFromEvent(e); mnl = getObject('masterNavLinks'); if (target && mnl) { if (target.nodeName != 'H1') { target = target.parentNode; } mnl_h = mnl.offsetHeight; if (!mnl_oh) { mnl_oh = mnl_h; } isE = !isE; if (isE) { target.className = 'active'; } else { target.className = 'inactive'; } navH1Interval(); timer = setInterval(navH1Interval, 1); } }
    function navH1Interval() { if (mnl_h <= 0 && isE) { var o = getObject('masterNavLinks'); if (null != o) { o.style.display = 'block'; } } if (!isE) { mnl_h -= 20; } else { mnl_h += 20; } if (mnl_h < 0) { mnl_h = 0; } else if (mnl_h > mnl_oh) { mnl_h = mnl_oh; } mnl.style.height = mnl_h + 'px'; if (mnl_h <= 0 || mnl_h >= mnl_oh) { if (mnl_h <= 0 && !isE) { var o = getObject('masterNavLinks'); o.style.display = 'none'; } clearInterval(timer); timer = null; var masterNavLinks = getObject('masterNavLinks'); if (closeWhileCollapse && isE && masterNavLinks && masterNavLinks.childNodes) { closeWhileCollapse = false; resetNavToFirst(masterNavLinks); } } }
    function resetNavToFirst(masterNavLinks) { for (var i = 0; i < masterNavLinks.childNodes.length; i++) { var node = masterNavLinks.childNodes[i]; if (node && node.className == 'container' && node.childNodes) { var firstIndex = 0; for (var j = 0; j < node.childNodes.length; j++) { var link = node.childNodes[j]; if (link && link.nodeName == 'A') { if (j == firstIndex) { link.className = 'activeNav'; } else { link.className = ''; } } else if (j == 0) { firstIndex = 1; } } } } } var wt_level1 = ''; var msWinPath = ''; var isAnimating = false; var isFading = false; var fContent; var l1timer; var l1op = 0; var l1al = 0; var subNav;
    function navClick(e) { var target = getTargetFromEvent(e); subNav = getObject('MNW'); if (isAnimating) { return false; } if (!subNav) { return true; } try { if (!subNavVisible) { subNav.innerHtml = '&nbsp;'; subNav.className = ''; subNavVisible = true; } else { } for (var i = 0; i < target.parentNode.childNodes.length; i++) { var node = target.parentNode.childNodes[i]; if (node && node.nodeName == 'A') { node.className = ''; } } target.className = 'activeNav'; var navScreen = getObject('masterNavScreen'); if (target.childNodes[0].nodeValue) { msWinPath = target.childNodes[0].nodeValue; } else { if (isDebug) alert('target.innerText was null: target is:' + target); return false; } if (msWinPath != '') { var value = GetLevel2(msWinPath); if (value != null && value != "") { wt_level1 = msWinPath; wt_level2 = 'default'; try { var dcsuri = "/L1/" + ESQ(wt_level1) + "/"; dcsMultiTrack('DCS.dcsuri', dcsuri, 'DCSext.ngn_clevel', 'Level 1', 'DCSext.ngn_lname', ESQ(wt_level1), 'DCS.ngn_type', 'Master Navigation', 'WT.si_p', 'Level 2a', 'WT.ti', ESQ(wt_level1), 'WT.dl', '1', 'DCSext.wt_linkid', ''); } catch (e) { } hoverSubNav = -1; activeSubNav = 0; subNav.innerHTML = value; resizePage(); } else { subNavClose(); return !isDebug; } } navScreen.style.display = 'block'; return false; } catch (e) { if (isDebug) alert(e.Message + ", " + e.description + ", " + e); subNavClose(); return !isDebug; } }
    function navMouseOver(e) { var target = getTargetFromEvent(e); window.status = target.childNodes[0].nodeValue; return true; } var wt_level2 = ''; var subNavVisible = false; var hoverSubNav = -1; var activeSubNav = 0; var l2timer; var l2op = 0; var l2al = 0; var mnwPanel;
    function subNavOver(index) { if (index != activeSubNav && index != hoverSubNav) { var newTab = getObject('sn_' + index); hoverSubNav = index; } }
    function subNavOut(index) { if (index == hoverSubNav && index != activeSubNav) { var hoverTab = getObject('sn_' + hoverSubNav); hoverSubNav = -1; } }
    function subNavClick(index, target) { if (isAnimating) { return; } if (index != activeSubNav) { var newTab = getObject('sn_' + index); var oldTab = getObject('sn_' + activeSubNav); if (newTab && oldTab) { newTab.className = 'subNavActive'; oldTab.className = ''; activeSubNav = index; } mnwPanel = getObject('MNWPanel'); if (mnwPanel != null) { wt_level2 = target.childNodes[0].nodeValue; try { var dcsuri = "/L1/" + ESQ(wt_level1) + "/" + ESQ(wt_level2) + "/"; dcsMultiTrack('DCS.dcsuri', dcsuri, 'DCSext.ngn_clevel', 'Level 2a', 'DCSext.ngn_lname', ESQ(wt_level2), 'DCS.ngn_type', 'Master Navigation', 'WT.si_p', 'Level 2b', 'WT.ti', ESQ(wt_level1) + ": " + ESQ(wt_level2), 'WT.dl', '1', 'DCSext.wt_linkid', ''); } catch (e) { } var value = GetLevel3(msWinPath, newTab.childNodes[0].nodeValue); if (value != null && value != "") { fContent = value; isFading = true; isAnimating = true; l2al = 100; l2op = 1; l2timer = setInterval(subNavClickInterval, 1); } } } }
    function subNavClickInterval() { if (isFading) { if (l2al <= 0) { isFading = false; mnwPanel.innerHTML = fContent; } else { l2al = l2al - 15; if (l2al < 0) l2al = 0; l2op = l2op - 0.15; if (l2op < 0) l2op = 0; } } else { l2al = l2al + 15; l2op = l2op + 0.15; } mnwPanel.style.MozOpacity = '' + l2op; mnwPanel.style.filter = 'alpha(Opacity=' + l2al + ')'; if (l2al >= 100 && !isFading) { mnwPanel.style.MozOpacity = ''; mnwPanel.style.filter = ''; clearInterval(l2timer); isAnimating = false; l2timer = null; } }
    function subNavClose() { if (isAnimating) { return; } var subNav = getObject('MNW'); if (!subNav || !subNavVisible) { return; } var navScreen = getObject('masterNavScreen'); navScreen.style.display = 'none'; subNav.className = 'hidden'; subNavVisible = false; var masterNavLinks = getObject('masterNavLinks'); if (!isE) { closeWhileCollapse = true; } else if (isE && masterNavLinks && masterNavLinks.childNodes) { resetNavToFirst(masterNavLinks); } var subNavActive = getObjectsByTagAndClass("a", "subNavActive"); if (subNavActive.length > 0) { wt_level2 = subNavActive[0].childNodes[0].nodeValue; } try { var dcsuri = "/L2a/" + ESQ(wt_level1) + "/" + ESQ(wt_level2) + "/close/"; dcsMultiTrack('DCS.dcsuri', dcsuri, 'DCSext.ngnclose', '1', 'DCSext.ngn_l1close', ESQ(wt_level1), 'DCS.ngn_l2aclose', ESQ(wt_level2), 'DCS.ngn_type', 'Master Navigation', 'WT.si_p', 'Level 1', 'WT.ti', 'Nav Close', 'DCSext.wt_linkid', ''); } catch (e) { } }
    function loadPage() { resizePage(); try { if (eval('nP')) { var masterNavLinks = getObject('masterNavLinks'); if (masterNavLinks && masterNavLinks.childNodes) { for (var i = 0; i < masterNavLinks.childNodes.length; i++) { var node = masterNavLinks.childNodes[i]; if (node && node.className == 'container' && node.childNodes) { for (var j = 0; j < node.childNodes.length; j++) { var link = node.childNodes[j]; if (link && link.nodeName == 'A' && link.className.indexOf('link') == -1) { link.onclick = navClick; } } } } } var masterNavBody = getObject('masterNavBody'); if (masterNavBody && masterNavBody.childNodes) { for (var i = 0; i < masterNavBody.childNodes.length; i++) { var node = masterNavBody.childNodes[i]; if (node && node.nodeName == 'H1') { node.onclick = navH1Click; } } } var navScreen = getObject('masterNavScreen'); navScreen.style.height = getBodyHeight() + 'px'; } } catch (e) { ; } collapseTabs(); }
    function resizePage() { var width = getBrowserWidth(); var masterNav = getObject('masterNav'); if (masterNav && masterNav.style) { if (width <= 950) { masterNav.style.right = '37px'; } else { masterNav.style.right = ''; } } var bHeight = getBrowserHeight(); var d = 0; if (bHeight > 0 && bHeight <= 575) { d = 575 - bHeight; if (d > 200) { d = 200; } } var object = getObject("MNWTabsC"); if (object) { object.style.height = (468 - d) + 'px'; } object = getObject("MNWPanel"); if (object) { object.style.height = (477 - d) + 'px'; } object = getObject("MNWBody"); if (object) { object.style.height = (478 - d) + 'px'; } object = getObject("MNW"); if (object) { object.style.height = (522 - d) + 'px'; } }
    function enc(s) { return encodeURI(s).replace("&", "%26"); }
    function DoRequest(url, urlParmString) { var result = null; var callBack = new XMLHttpRequest(); if (callBack) { try { callBack.open('POST', url, false); if (urlParmString == null) urlParmString = ''; callBack.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8'); callBack.send(urlParmString); if (callBack.responseXML.childNodes[0] && callBack.responseXML.childNodes[0].firstChild) { result = callBack.responseText.substring(callBack.responseText.indexOf("%")); result = result.replace("</string>", ""); result = unescape(result); } else if (callBack.responseXML.childNodes.length > 1) { result = unescape(callBack.responseXML.childNodes[1].text); } } catch (e) { ; if (isDebug) { if (callBack.responseText != null && callBack.responseText != '') alert('DoRequest() Error:\n' + e + "\n\n" + callBack.responseText); else alert('DoRequest() Error:\n' + e); } subNavClose(); } callBack = null; } else { if (isDebug) alert('Dev Debug error: callBack is false'); } return result; } var mIsInitialized = false; var mViewType = 1; var mViewName = 'MNWVDetails'; var mTab; if (!window.XMLHttpRequest) { eval("window.XMLHttpRequest = f" + "unction(){var progIDs = [ 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP' ];for (var i = 0; i < progIDs.length; i++){try{var xmlHttp = new ActiveXObject(progIDs[i]);mIsInitialized = true;return xmlHttp;}catch (ex) {}}return null;}"); } else { mIsInitialized = true; }
    function vss(obj, styleType) { if (obj.id == mViewName) return; obj.className = obj.id + styleType; }
    function swtI(n) { if (impT != null && n > 0 && tlids[n] != false) { try { dcsMultiTrack("DCS.dcsuri", "/tabs/" + (n + 1), "WT.ad", "", "WT.mc_id", "", "DCSext.wt_linkid", tlids[n], "WT.dl", "5", "WT.ti", "Tab " + (n + 1)); tlids[n] = false; impT = null; } catch (e) { ; } } }
    function mn3md(target) { var isIE = navigator.appVersion.indexOf("MSIE") != -1; if (!isIE) { mn3track(target); } }
    function mn3mc(target) { var isIE = navigator.appVersion.indexOf("MSIE") != -1; if (isIE) { mn3track(target); } }
    function mn3track(target) { var subNavActive = getObjectsByTagAndClass("a", "subNavActive"); if (subNavActive.length > 0) { wt_level2 = subNavActive[0].childNodes[0].nodeValue; } var wt_level3 = 'unknown'; if (target) { for (var i = 0; i < target.childNodes.length; i++) { var child = target.childNodes[i]; if (child.nodeName == "DIV" && child.className == "Title" && child.childNodes.length > 0) { wt_level3 = child.childNodes[0].nodeValue; } } } var href = ''; var qs = ''; if (target.href) { href = target.href; var qStart = href.indexOf('?'); if (qStart != -1) { var arr = href.split('?'); href = arr[0]; qs = arr[1]; } href = target.hostname; } var uri = (target.pathname == "") ? "/" : "/" + target.pathname; try { dcsMultiTrack('DCS.dcssip', href, 'DCS.dcsuri', uri, 'DCS.dcsqry', qs, 'DCSext.ngn_clevel', 'Level 2b', 'DCSext.ngn_lname', ESQ(wt_level3), 'DCS.ngn_type', 'Master Navigation', 'WT.si_p', 'Level 3', 'WT.ti', ESQ(wt_level1) + ": " + ESQ(wt_level2) + ":" + ESQ(wt_level3), 'DCSext.wt_linkid', ''); } catch (e) { } }
    function ESQ(str) { return str.replace("'", "''"); } /*@end @*/

}