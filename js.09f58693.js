parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fk3f":[function(require,module,exports) {
function l(l,e){e.forEach(function(e){var t=l.makeCircle(e.x,e.y,5);t.fill="#fff",t.stroke="#000",t.linewidth=1,e.label&&(l.makeText(e.label.text,e.x+e.label.x,e.y+e.label.y).rotation=e.label.rotation)})}module.exports=l;
},{}],"HJlu":[function(require,module,exports) {
module.exports={U1:"#f00",U2:"#986aae",U3:"#ff9a00",U4:"#008b3b",U6:"#a53505"};
},{}],"Pugw":[function(require,module,exports) {
var r=require("./draw-stations"),e=require("../../data/colors.json");function o(r,o,a){for(var t=0;t<o.length-1;t++){var i=r.makeLine(o[t].x,o[t].y,o[t+1].x,o[t+1].y);i.stroke=e[a],i.linewidth=5,i.curved=!0}}module.exports=o;
},{"./draw-stations":"fk3f","../../data/colors.json":"HJlu"}],"A0nt":[function(require,module,exports) {
function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach(function(e){n(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,n,r,o){var a=e.makeCircle(n.x,n.y,3);a.fill="#fff",a.stroke="#000",a.linewidth=1;var i=Math.abs(n.x-r.x)/o*100,c=Math.abs(n.y-r.y)/o*100;!function t(n,r,o,i,c){var s=n.x-o<r.x&&n.x+o>r.x,u=n.y-i<r.y&&n.y+i>r.y;if(!s||!u){var f=s?0:r.x>n.x?o:-o,p=u?0:r.y>n.y?i:-i;n.x+=f,n.y+=p,a.translation.set(n.x,n.y),e.update(),setTimeout(function(){return t(n,r,o,i,c)},c)}}(t({},n),t({},r),i,c,100)}function o(e,t,n){var o=t[0].lines[0].name.toLowerCase();t.forEach(function(t){var i=t.locationStop.properties.title,c=t.lines[t.lines.length-1],s=n[o].find(function(e){return stationNamesMap[e.name]===i}),u=s&&a(s,c,n[o]);s&&u&&r(e,s,u,5e3)})}function a(e,t,n){var r=n.findIndex(function(t){return t.name===e.name});return stationNamesMap[n[0].name].toUpperCase()===t.towards?n[r-1]:stationNamesMap[n[n.length-1].name].toUpperCase()===t.towards?n[r+1]:void 0}function i(e,t){Promise.all(Object.keys(t).map(function(e){return fetch("https://apps.static-access.net/ViennaTransport/monitor/?line=".concat(e)).then(function(e){return e.json()}).catch(function(e){return console.error(e.message)})})).then(function(n){return n.forEach(function(n){return console.log(n)&&o(e,n.data.monitors,t)})})}module.exports=i;
},{}],"XnMF":[function(require,module,exports) {
var e=require("./draw-stations"),r=require("./draw-connections"),n=require("./animate-trains");function t(n,t){n.clear(),Object.keys(t).forEach(function(e){return r(n,t[e],e)}),Object.keys(t).forEach(function(r){return e(n,t[r])}),n.update()}module.exports=t;
},{"./draw-stations":"fk3f","./draw-connections":"Pugw","./animate-trains":"A0nt"}],"oEzL":[function(require,module,exports) {
function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach(function(e){t(r,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,t,n){var o={};return Object.keys(e).forEach(function(c){o[c]=[],e[c].forEach(function(e){var i=e.x*t,u=e.y*n;o[c].push(r(r({},e),{},{x:i,y:u}))})}),o}module.exports=n;
},{}],"tgiy":[function(require,module,exports) {
module.exports={U1:[{name:"Oberlaa",label:{x:35,y:0,text:"Oberlaa",rotation:0},x:565,y:568},{name:"Neulaa",label:{x:0,y:13,text:"Neulaa",rotation:0},x:536,y:568},{name:"Alaudagasse",label:{x:50,y:-2,text:"Alaudagasse",rotation:0},x:515,y:549},{name:"Altes Landgut",label:{x:55,y:-3,text:"Altes Landgut",rotation:0},x:497,y:529},{name:"Troststraße",label:{x:47,y:0,text:"Troststrasse",rotation:0},x:497,y:500},{name:"Reumannplatz",label:{x:55,y:0,text:"Reumannplatz",rotation:0},x:497,y:471},{name:"Keplerplatz",label:{x:45,y:0,text:"Keplerplatz",rotation:0},x:497,y:442},{name:"Südtiroler Platz",label:{x:55,y:0,text:"Hauptbahnhof",rotation:0},x:497,y:413},{name:"Taubstummengasse",label:{x:73,y:0,text:"Taubstummengasse",rotation:0},x:497,y:384},{name:"Karlsplatz",x:497,y:355},{name:"Stephansplatz",label:{x:50,y:13,text:"Stephansplatz",rotation:0},x:497,y:278},{name:"Schwedenplatz",label:{x:60,y:3,text:"Schwedenplatz",rotation:0},x:533,y:223},{name:"Nestroyplatz",label:{x:50,y:3,text:"Nestroyplatz",rotation:0},x:551,y:206},{name:"Praterstern",x:572,y:185},{name:"Vorgartenstraße",label:{x:65,y:0,text:"Vorgartenstrasse",rotation:0},x:594,y:163},{name:"Donauinsel",label:{x:50,y:0,text:"Donauinsel",rotation:0},x:613,y:143},{name:"Kaisermühlen, V.I.C.",label:{x:55,y:0,text:"Kaisermühlen",rotation:0},x:634,y:124},{name:"Alte Donau",label:{x:50,y:0,text:"Alte Donau",rotation:0},x:652,y:106},{name:"Kagran",label:{x:40,y:0,text:"Kagran",rotation:0},x:669,y:88},{name:"Kagraner Platz",label:{x:60,y:3,text:"Kagraner Platz",rotation:0},x:687,y:70},{name:"Rennbahnweg",label:{x:59,y:3,text:"Rennbahnweg",rotation:0},x:702,y:55},{name:"Aderklaaer Straße",label:{x:70,y:3,text:"Aderklaaer Strasse",rotation:0},x:717,y:39},{name:"Großfeldsiedlung",label:{x:68,y:3,text:"Grossfeldsiedlung",rotation:0},x:733,y:24},{name:"Leopoldau",label:{x:43,y:0,text:"Leopoldau",rotation:0},x:751,y:6}],U2:[{name:"Seestadt",label:{x:5,y:10,text:"Seestadt",rotation:0},x:901,y:169},{name:"Aspern Nord",label:{x:30,y:-40,text:"Aspern Nord",rotation:5.5},x:886,y:150},{name:"Hausfeldstraße",label:{x:38,y:-53,text:"Hausfeldstrasse",rotation:5.5},x:855,y:150},{name:"Aspernstraße",label:{x:0,y:12,text:"Aspernstrasse",rotation:0},x:836,y:177},{name:"Donauspital",label:{x:25,y:-38,text:"Donauspital",rotation:5.5},x:800,y:177},{name:"Hardeggasse",label:{x:0,y:-15,text:"Hardeggasse",rotation:0},x:758,y:177},{name:"Stadlau",label:{x:35,y:3,text:"Stadlau",rotation:0},x:740,y:199},{name:"Donaustadtbrücke",label:{x:70,y:3,text:"Donaustadtbrücke",rotation:0},x:729,y:220},{name:"Donaumarina",label:{x:55,y:3,text:"Donaumarina",rotation:0},x:714,y:243},{name:"Stadion",label:{x:30,y:-8,text:"Stadion",rotation:0},x:673,y:229},{name:"Krieau",label:{x:30,y:-8,text:"Krieau",rotation:0},x:650,y:209},{name:"Messe",label:{x:50,y:-3,text:"Messe-Prater",rotation:0},x:620,y:184},{name:"Praterstern",label:{x:45,y:12,text:"Praterstern",rotation:0},x:570,y:185},{name:"Taborstraße",label:{x:0,y:-15,text:"Taborstrasse",rotation:0},x:534,y:185},{name:"Schottenring",label:{x:-55,y:0,text:"Schottenring",rotation:0},x:494,y:185},{name:"Schottentor",label:{x:-50,y:0,text:"Schottentor",rotation:0},x:460,y:217},{name:"Rathaus",label:{x:-35,y:0,text:"Rathaus",rotation:0},x:435,y:244},{name:"Volkstheater",x:434,y:278},{name:"Museumsquartier",label:{x:60,y:-10,text:"Museumsquartier",rotation:0},x:434,y:317},{name:"Karlsplatz",label:{x:5,y:10,text:"karlsplatz",rotation:0},x:497,y:355}],U3:[{name:"Ottakring",label:{x:25,y:-30,text:"Ottakring",rotation:5.5},x:125,y:195},{name:"Kendlerstraße",label:{x:38,y:-45,text:"Kendlerstrasse",rotation:5.5},x:153,y:209},{name:"Hütteldorfer Straße",label:{x:48,y:-55,text:"Hütteldorferstrasse",rotation:5.5},x:182,y:223},{name:"Johnstraße",label:{x:35,y:-35,text:"Johnstrasse",rotation:5.5},x:209,y:237},{name:"Schweglerstraße",label:{x:48,y:-50,text:"Schweglerstrasse",rotation:5.5},x:241,y:252},{name:"Westbahnhof",x:292,y:278},{name:"Zieglergasse",label:{x:0,y:12,text:"Zieglergasse",rotation:0},x:343,y:278},{name:"Neubaugasse",label:{x:0,y:12,text:"Neubaugasse",rotation:0},x:386,y:278},{name:"Volkstheater",label:{x:35,y:-35,text:"Volkstheater",rotation:5.5},x:434,y:278},{name:"Herrengasse",label:{x:35,y:-35,text:"Herrengasse",rotation:5.5},x:463,y:278},{name:"Stephansplatz",x:495,y:278},{name:"Stubentor",label:{x:0,y:-12,text:"Stubentor",rotation:0},x:525,y:278},{name:"Landstraße",x:564,y:280},{name:"Rochusgasse",label:{x:50,y:-3,text:"Rochusgasse",rotation:0},x:592,y:299},{name:"Kardinal-Nagl-Platz",label:{x:70,y:-3,text:"Kardinal-Nagl-Platz",rotation:0},x:618,y:317},{name:"Schlachthausgasse",label:{x:70,y:-3,text:"Schlachthausgasse",rotation:0},x:642,y:335},{name:"Erdberg",label:{x:40,y:-3,text:"Erdberg",rotation:0},x:673,y:355},{name:"Gasometer",label:{x:50,y:-3,text:"Gasometer",rotation:0},x:699,y:374},{name:"Zippererstraße",label:{x:60,y:-5,text:"Zippererstrasse",rotation:0},x:729,y:396},{name:"Enkplatz",label:{x:40,y:-3,text:"Enkplatz",rotation:0},x:757,y:414},{name:"Simmering",label:{x:45,y:-3,text:"Simmering",rotation:0},x:784,y:434}],U4:[{name:"Hütteldorf",label:{x:20,y:-35,text:"Hütteldorf",rotation:5.5},x:6,y:365},{name:"Ober St. Veit",label:{x:25,y:-40,text:"Ober St. Veit",rotation:5.5},x:46,y:365},{name:"Unter St. Veit",label:{x:25,y:-40,text:"Unter St. Veit",rotation:5.5},x:86,y:365},{name:"Braunschweiggasse",label:{x:40,y:-55,text:"Braunschweiggasse",rotation:5.5},x:126,y:365},{name:"Hietzing",label:{x:20,y:-35,text:"Hietzing",rotation:5.5},x:166,y:365},{name:"Schönbrunn",label:{x:30,y:-40,text:"Schönbrunn",rotation:5.5},x:206,y:365},{name:"Meidling Hauptstraße",label:{x:50,y:-65,text:"Meidling Hauptstrasse",rotation:5.5},x:246,y:365},{name:"Längenfeldgasse",x:295,y:365},{name:"Margaretengürtel",label:{x:35,y:-50,text:"Margaretengürtel",rotation:5.5},x:340,y:365},{name:"Pilgramgasse",label:{x:30,y:-45,text:"Pilgramgasse",rotation:5.5},x:380,y:365},{name:"Kettenbrückengasse",label:{x:0,y:15,text:"Kettenbrückengasse",rotation:0},x:420,y:365},{name:"Karlsplatz",x:460,y:365},{name:"Stadtpark",label:{x:40,y:0,text:"Stadtpark",rotation:0},x:550,y:330},{name:"Landstraße",label:{x:47,y:0,text:"Landstrasse",rotation:0},x:564,y:280},{name:"Schwedenplatz",x:533,y:224},{name:"Schottenring",x:495,y:185},{name:"Roßauer Lände",label:{x:60,y:-4,text:"Rossauerlaende",rotation:0},x:469,y:159},{name:"Friedensbrücke",label:{x:60,y:-4,text:"Friedensbruecke",rotation:0},x:440,y:130},{name:"Spittelau",x:385,y:75},{name:"Heiligenstadt",label:{x:50,y:0,text:"Heiligenstadt",rotation:0},x:385,y:8}],U6:[{name:"Siebenhirten",label:{x:50,y:0,text:"Siebenhirten",rotation:0},x:294,y:557},{name:"Perfektastraße",label:{x:60,y:0,text:"Perfektastrasse",rotation:0},x:294,y:531},{name:"Erlaaer Straße",label:{x:58,y:0,text:"Erlaaerstrasse",rotation:0},x:294,y:505},{name:"Alterlaa",label:{x:35,y:0,text:"Alterlaa",rotation:0},x:294,y:479},{name:"Schöpfwerk",label:{x:60,y:0,text:"Am Schöpfwerk",rotation:0},x:294,y:453},{name:"Tscherttegasse",label:{x:55,y:0,text:"Tscherttegasse",rotation:0},x:294,y:427},{name:"Philadelphiabrücke",label:{x:60,y:0,text:"Bahnof Meidling",rotation:0},x:294,y:401},{name:"Längenfeldgasse",label:{x:60,y:10,text:"Längenfeldgasse",rotation:0},x:294,y:370},{name:"Gumpendorfer Straße",label:{x:80,y:0,text:"Gumpendorferstrasse",rotation:0},x:294,y:316},{name:"Westbahnhof",label:{x:-60,y:10,text:"Westbahnhof",rotation:0},x:294,y:278},{name:"Burggasse - Stadthalle",label:{x:77,y:0,text:"Burggasse-Stadthalle",rotation:0},x:294,y:250},{name:"Thaliastraße",label:{x:50,y:0,text:"Thaliastrasse",rotation:0},x:294,y:228},{name:"Josefstädter Straße",label:{x:70,y:0,text:"Josefstädterstrasse",rotation:0},x:294,y:205},{name:"Alser Straße",label:{x:50,y:0,text:"Alserstrasse",rotation:0},x:294,y:181},{name:"Michelbeuern - AKH",label:{x:68,y:0,text:"Michelbeuern-AKH",rotation:0},x:294,y:153},{name:"Währinger Straße - Volksoper",label:{x:100,y:3,text:"Währingerstrasse-Volksoper",rotation:0},x:294,y:118},{name:"Nußdorfer Straße",label:{x:0,y:-12,text:"Nussdorferstrasse",rotation:0},x:335,y:76},{name:"Spittelau",label:{x:30,y:-30,text:"Spittelau",rotation:5.5},x:385,y:75},{name:"Jägerstraße",label:{x:18,y:-40,text:"Jägerstrasse",rotation:5.5},x:420,y:76},{name:"Dresdner Straße",label:{x:35,y:-50,text:"Dresdnerstrasse",rotation:5.5},x:450,y:76},{name:"Handelskai",label:{x:50,y:3,text:"Handelskai",rotation:0},x:490,y:76},{name:"Neue Donau",label:{x:50,y:5,text:"Neue Donau",rotation:0},x:522,y:42},{name:"Floridsdorf",label:{x:45,y:0,text:"Floridsdorf",rotation:0},x:556,y:8}]};
},{}],"QvaY":[function(require,module,exports) {
var e=require("./draw-all"),t=require("./animate-trains"),i=require("./scale-stations"),h=require("../../data/stations.json"),n=document.getElementById("graph"),r={width:n.offsetWidth,height:n.offsetHeight},d={width:940,height:600},o=r.width/d.width,s=r.height/d.height,a=new Two(r).appendTo(n),f=i(h,o,s);function w(){a.renderer.setSize(n.offsetWidth,n.offsetHeight);n.offsetWidth,d.width,n.offsetHeight,d.height;g()&&e(a,f)&&t(a,f)}function g(){return window.innerWidth>1600&&window.innerHeight>900}g()&&e(a,f)&&t(a,f)&&console.log("ahjsg"),window.addEventListener("resize",w);
},{"./draw-all":"XnMF","./animate-trains":"A0nt","./scale-stations":"oEzL","../../data/stations.json":"tgiy"}]},{},["QvaY"], null)
//# sourceMappingURL=/vienna-u-bahn-monitor/js.09f58693.js.map