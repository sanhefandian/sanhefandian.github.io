var openComment, styles, time, writeStyleChar, writeStyles;
function audioAutoPlay(id){
var audio = document.getElementById(id);
audio.play();
document.addEventListener("WeixinJSBridgeReady", function () {
audio.play();
    }, false);
document.addEventListener('YixinJSBridgeReady', function() {
audio.play();
    }, false);
}
audioAutoPlay('autoaudio');
 (function () {
      function resize() {
        var body = document.getElementsByTagName('body')[0];
        var html = document.getElementsByTagName('html')[0];
        var width = html.clientWidth;
        var height =  html.clientHeight;
        var max = width > height ? width : height;
        var min = width > height ? height : width;
        body.style.width = max + "px";
        body.style.height = min + "px";
      }
      resize();
      window.addEventListener("resize", resize)
    })();
styles = "/* \n * \"好想告诉你\" v1.0.12\n * Authored by Zero_DK\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n\npre { \n  position: fixed; width: 48%;\n  top: 30px; bottom: 30px; left: 26%;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n\n/* ...                  \n *\n * ...你好?            \n *\n * 你是谁?\n *\n * 你问我在干嘛?我一直在\n   这里等一个人.          \n *\n * 你要陪我一起等吗?                       \n *\n * 好啊，这下我\n   终于就有伴了.\n *\n * ...\n * ........\n * .....................\n * \n * 等了好久,那个人都没有来唉,\n   会不会她再也不会来了?\n * \n * 哈哈哈,也是啊,\n   你不是一直陪在我身边吗?\n *\n * 我本来准备了一个东西是要给她看的,\n   看来她是不会来了,那么你要看吗?\n *\n * 好,你等一下!\n */\n\n\n/* \n * 等下,现在颜色好单调呀,\n   我来让它们变的漂亮一点!\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/* \n * 现在好看多了,你等下,\n   我把东西准备好.\n */ \n\n\n/* 等等,让我往右边去一点,\n   我的东西还挺重要的呢! */\n\npre { left: 50%; }\n\n\n/* 现在总算是腾出点空间给它了,\n   让我现在把它拿出来! */\n\n#heart, #echo { \n  position: fixed;\n  width: 300px; height: 300px;\n  top: calc(50% - 150px); left: calc(25% - 150px);\n  text-align: center;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n\n/* 是不是不够好看?果然还是等的太久了吗?\n   都落灰了,你稍微等一下,我把它擦一擦. */\n\n#heart::after { \n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before { \n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n\n/* \n * 现在是好看一点了,不过实在是等的太久了,\n   它都不再会跳动了.\n *\n * 什么,你想摸摸它吗?好呀,\n   我自己都忘了照顾它呢.\n *\n * 你的手好温暖啊!\n *\n * 嗯?它变得有点奇怪!\n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% { \n    -webkit-transform: scale(0.85); \n            transform: scale(0.85); \n  }\n  50% { \n    -webkit-transform: scale(1.00); \n            transform: scale(1.00); \n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.85); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   { \n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    -webkit-transform: scale(1.6);\n            transform: scale(1.6);\n  }\n}\n\n@keyframes echo {\n  0%   { \n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(1.6);\n  }\n}\n\n\n/* \n * 不要松开你的手好吗?\n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function: \n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function: \n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n#heart { \n  -webkit-animation-name: heartbeat; \n          animation-name: heartbeat; \n}\n#echo { \n  -webkit-animation-name: echo; \n          animation-name: echo; \n}\n\n\n/* \n * 终于  \n */\n\n#heart, #echo {\n\n/* \n * 它          \n */\n  \n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  \n/* \n * 又重新跳起来了!       \n */\n  \n}\n\n/* 谢谢你,让它苏醒.\n *\n * 哦,对了.我都忘了\n   问你的名字.\n *\n * 平.这名字真美.\n *\n * 什么?你问我还要再\n   继续等那个人吗?\n *\n * 我想,她已经不知不觉\n   来到我身边了吧.      \n * \n * 嗯,那个.如果你不介意的话,\n   你愿意和我一起吗?\n *\n * 不不不,我的意思是.........\n *\n */\n\n#heart i::before {\n  content: '平我爱你';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 30px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n";
openComment = false;
writeStyleChar = function(which) {
  if (which === '/' && openComment === false) {
    openComment = true;
    styles = $('#style-text').html() + which;
  } else if (which === '/' && openComment === true) {
    openComment = false;
    styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
  } else if (which === ':') {
    styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
  } else if (which === ';') {
    styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
  } else if (which === '{') {
    styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
  } else {
    styles = $('#style-text').html() + which;
  }
  $('#style-text').html(styles);
  return $('#style-tag').append(which);
};
writeStyles = function(message, index, interval) {
  var pre;
  if (index < message.length) {
    pre = document.getElementById('style-text');
    pre.scrollTop = pre.scrollHeight;
    writeStyleChar(message[index++]);
    return setTimeout((function() {
      return writeStyles(message, index, interval);
    }), interval);
  }
};
$('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>");
time = window.innerWidth >= 800 ? 35 : 63;
writeStyles(styles, 0, time);
