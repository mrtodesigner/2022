function stripTags(strx,chop){if(strx.indexOf("<")!=-1){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}strx=s.join("")}chop=(chop<strx.length-1)?chop:strx.length-2;while(strx.charAt(chop-1)!=' '&&strx.indexOf(' ',chop)!=-1)chop++;strx=strx.substring(0,chop-1);return strx+'.'}function readmore(id){var summ=summary;var p=document.getElementById(id),imgtag="",img=p.getElementsByTagName("img");if(img.length>=1){imgtag='<div class="thumb-wrapper"><a class="post-thumb" href="'+x+'"><img class="thumb" src="'+img[0].src+'" style="max-width:100%" /><span>Read More</span></a></div>'}else{imgtag='<div class="no-img"/>'}p.innerHTML=imgtag+'<div class="post-content"><h2 class="post-title"><a href="'+x+'">'+y+'</a></h2><p>'+stripTags(p.innerHTML,summ)+'</p><div class="meta"><span class="ico16 ico16-calendar">'+w+'</span><span id="tag2" class="ico16 icon-user">'+v+'</span><span class="ico16 ico16-link"><a class="mainbutton fr" href="'+x+'">Đọc thêm</a></span></div></div>'}

var summary = 260;

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a(e).b(f(){0 1=g 2();0 4=6[1.k()];0 5=1.i();0 8=3[1.h()];0 7=1.l();a(\'#2\').j(4+\' \'+5+\' \'+8+\' \'+7);9();c.d(9,F)});0 6=[\'m - \',\'y - \',\'x - \',\'A - \',\'B - \',\'E - \',\'D - \'];0 3=[\'C, \',\'w, \',\'v, \',\'p, \',\'o, \',\'n, \',\'q, \',\'r, \',\'u, \',\'t, \',\'s, \',\'z, \'];',42,42,'var|currentTime|Date|months|currentDay|currentDate|days|currentYear|currentMonth|clock|jQuery|ready|window|setInterval|document|function|new|getMonth|getDate|text|getDay|getFullYear|Sunday|June|May|April|July|August|November|October|September|March|February|Tuesday|Monday|December|Wednesday|Thursday|January|Saturday|Friday|1000'.split('|'),0,{}))



eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1z 1A(e){z.q(\'<16 B="H-J-L-I">\');15(j t=0;t<1b;t++){j n=e.Y.W[t];j r=n.N.$t;j i;k(t==e.Y.W.P)17;15(j o=0;o<n.A.P;o++){k(n.A[o].14=="1y"&&n.A[o].1x=="1u/1v"){j u=n.A[o].N;j f=n.A[o].C}k(n.A[o].14=="1B"){i=n.A[o].C;17}}j l;1C{l=n.1I$13.1a}1J(h){s=n.O.$t;a=s.U("<19");b=s.U(\'V="\',a);c=s.U(\'"\',b+5);d=s.1H(b+5,c-b-5);k(a!=-1&&b!=-1&&c!=-1&&d!=""){l=d}G l="1G://1.1D.1E.1F/-1t/1s/1g/1h/1f/1j.1e"}j p=n.1c.$t;j v=p.F(0,4);j m=p.F(5,7);j g=p.F(8,10);j y=1d 1i;y[1]="1k";y[2]="1q";y[3]="1r";y[4]="1p";y[5]="1L";y[6]="1o";y[7]="1l";y[8]="1m";y[9]="1n";y[10]="1K";y[11]="24";y[12]="22";z.q(\'<Q B="20 H-J-L-I-Q">\');k(25==D)z.q(\'<a B="H-J-L-I-13" C="\'+i+\'" M ="K"><19 1Z="1M:1N%;" B="1R" V="\'+l+\'"/></a>\');z.q(\'<a B="H-J-L-I-N" C="\'+i+\'" M ="K">\'+r+"</a><1V/>");k("O"18 n){j w=n.O.$t}G k("Z"18 n){j w=n.Z.$t}G j w="";j E=/<\\S[^>]*>/g;w=w.1U(E,"");k(1W==D){k(w.P<X){z.q("");z.q(w);z.q("")}G{z.q("");w=w.F(0,X);j S=w.1Q(" ");w=w.F(0,S);z.q(w+"...");z.q("")}}j x="";j T=0;z.q("");k(23==D){x=x+y[21(m,10)]+"-"+g+" - "+v;T=1}k(1O==D){k(T==1){x=x+" | "}k(u=="1 R")u="1 1T";k(u=="0 R")u="1X R";u=\'<a C="\'+f+\'" M ="K">\'+u+"</a>";x=x+u;T=1}k(1S==D){k(T==1)x=x+" | ";x=x+\'<a C="\'+i+\'" B="1a" M ="K">1P &#1Y;</a>\';T=1}z.q(x);z.q("</Q>");k(1w==D)k(t!=1b-1)z.q("")}z.q("</16>")}',62,130,'|||||||||||||||||||var|if||||||write|||||||||document|link|class|href|true||substring|else|wpex|posts|widget|_top|recent|target|title|content|length|li|Comments|||indexOf|src|entry|numchars|feed|summary||||thumbnail|rel|for|ul|break|in|img|url|numposts|published|new|gif|s1600|AAAAAAAABAU|e7XkFtErqsU|Array|grey|Jan|Jul|Aug|Sep|Jun|Apr|Feb|Mar|Tp0KrMUdoWI|htG7vy9vIAA|text|html|displayseparator|type|replies|function|labelthumbs|alternate|try|bp|blogspot|com|http|substr|media|catch|Oct|May|width|100|showcommentnum|More|lastIndexOf|label_thumb|displaymore|Comment|replace|br|showpostsummary|No|187|style|clearfix|parseInt|Dec|showpostdate|Nov|showpostthumbnails'.split('|'),0,{}))
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0(h).i(7(e){0("#1-j").k(7(){0(".1-8-1-9").l("a")?0(".1-8-1-9").m("a"):0(".1-8-1-9").n("a")}),0(".o").b(7(e){0(2).3("p",q),0(2).4(".c").3("5","6."+c),0(2).4(".d").3("5","6."+d),0(2).4(".f").3("5","6."+f),0(2).4(".g").3("5","6."+g),0(2).b()})});',27,27,'jQuery|menu|this|attr|find|name|entry|function|primary|container|mnopen|submit|idhoten|iddienthoai||idemail|idduan|document|ready|select|click|hasClass|removeClass|addClass|formdk|action|formacc'.split('|'),0,{}))
