!function($){function t(){x.attr("transform","translate("+g.translate()+")scale("+g.scale()+")")}function e(){x.attr("transform","translate("+g.translate()+")scale("+g.scale()+")")}function a(t,a){var n=this;return d3.transition().duration(350).tween("zoom",function(){var n=d3.interpolate(g.translate(),t),r=d3.interpolate(g.scale(),a);return function(t){g.scale(r(t)).translate(n(t)),e()}})}function n(){var t=d3.event.target,e=1,n=1,r=1,l=[i/2,s/2],o=g.scaleExtent(),d=g.translate(),u=g.scale(),c=[],p=[],h={x:d[0],y:d[1],k:g.scale()};return console.log(u),d3.event.preventDefault(),e="zoom_in"===this.id?1:-1,r=u+e,1>=r&&(r=1),r>=15&&(r=15),r<o[0]||r>o[1]?!1:(c=[(l[0]-h.x)/h.k,(l[1]-h.y)/h.k],h.k=r,p=[c[0]*h.k+h.x,c[1]*h.k+h.y],h.x+=l[0]-p[0],h.y+=l[1]-p[1],void a([h.x,h.y],h.k))}function r(t){var e=t.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");return e}if(Foundation.utils.is_medium_up()){var i=670,s=520,l,o=3e3,d=[600,900,1200,1500,1800,2100,2400,2700,3e3,3300,3600,3900],u=[600,900,1200,1500,1800,2100,2400,2700,3e3,3300,3600,3900],c=[],p=d3.scale.threshold().domain(d).range([0,.08,.16,.24,.33,.41,.5,.58,.66,.75,.83,.89,1]),h=d3.geo.albersUsa().scale(820).translate([i/2,s/2]),f=d3.geo.path().projection(h),g=d3.behavior.zoom().scaleExtent([1,15]).on("zoom",t),m=d3.select("#map").append("svg").attr("width",i).attr("height",s).call(g).on("dblclick.zoom",null).on("wheel.zoom",null);m.append("rect").attr("class","background").attr("width",i).attr("height",s),defs=m.append("svg:defs"),defs.append("svg:pattern").attr("id","plus-svg").attr("patternUnits","userSpaceOnUse").attr("width","20").attr("height","20").append("svg:image").attr("xlink:href",Variables.theme_url+"/assets/svg/plus.svg").attr("x",0).attr("y",0).attr("width",20).attr("height",20),defs=m.append("svg:defs"),defs.append("svg:pattern").attr("id","minus-svg").attr("patternUnits","userSpaceOnUse").attr("width","20").attr("height","20").append("svg:image").attr("xlink:href",Variables.theme_url+"/assets/svg/minus.svg").attr("x",0).attr("y",0).attr("width",20).attr("height",20);var v=m.append("defs").append("filter").attr("id","drop-shadow").attr("height","130%").attr("width","130%");v.append("feGaussianBlur").attr("in","SourceAlpha").attr("stdDeviation",2).attr("result","blur"),v.append("feOffset").attr("in","blur").attr("dx",-1).attr("dy",1).attr("result","offsetBlur"),v.append("feFlood").attr("in","offsetBlur").attr("flood-color","#000").attr("flood-opacity","0.4").attr("result","offsetColor"),v.append("feComposite").attr("in","offsetColor").attr("in2","offsetBlur").attr("operator","in").attr("result","offsetBlur");var _=v.append("feMerge");_.append("feMergeNode").attr("in","offsetBlur"),_.append("feMergeNode").attr("in","SourceGraphic");var x=m.append("g").attr("id","state-wrap");d3.json(Variables.theme_url+"/assets/json/us-copy.json",function(t){d3.json(Variables.home_url+"/wp-json/reviews/v1/fetch/map",function(e){var a={},s={},l={},d={},c={},h={},g={};quote={},quote_name={},quote_title={},quote_department={},e.forEach(function(t,e){a[t.d3_id]=t.name,s[t.d3_id]=t.shortname,l[t.d3_id]=t.annual_average_premium,d[t.d3_id]=t.state_min_bi,c[t.d3_id]=t.state_min_per_accident,h[t.d3_id]=t.state_min_pd,g[t.d3_id]=t.post_id,quote[t.d3_id]=t.quote,quote_name[t.d3_id]=t.quote_name,quote_title[t.d3_id]=t.quote_title,quote_department[t.d3_id]=t.quote_department}),x.append("g").attr("id","states").selectAll("path").data(topojson.feature(t,t.objects.states).features).enter().append("path").attr("d",f).attr("class","state").style("fill",function(t){return"#00ADEF"}).style("opacity",function(t){var e=l[t.id]/o;return e}).on("mouseover",function(t){m.selectAll("path").sort(function(e,a){return e.id!=t.id?-1:1}),d3.select(this).style("filter","url(#drop-shadow)")}).on("mouseout",function(t){d3.select(this).transition().style("filter","none")}).on("click",function(t){if(!d3.event.defaultPrevented){var e=a[t.id];$(".marker").each(function(t,a){var n=$(this).attr("data-name");n==e?$(this).show():$(this).hide()}),m.selectAll("path").attr("class","state"),$(this).attr("class","active-state"),$("#state").html(a[t.id]),$("#state-premium").html("$"+r(l[t.id])),$("#per-person").html("$"+r(d[t.id])),$("#per-accident").html("$"+r(c[t.id])),$("#property-damage").html("$"+r(h[t.id])),$("#map-quote").html(quote[t.id]),""!=quote_name[t.id]?($("#map-name").html(quote_name[t.id]+", "),$("#map-title").html(quote_title[t.id])):($("#map-name").html(""),$("#map-title").html("")),$("#map-depart").html(quote_department[t.id]),d3.selectAll(".state").style("fill",function(t){return"#00ADEF"}),d3.select("#state-borders").style("fill","none")}}),x.append("path").datum(topojson.mesh(t,t.objects.states,function(t,e){return t!==e})).attr("id","state-borders").attr("d",f);var v=m.selectAll("g.legend").data(u).enter().append("g").attr("class","legend"),_=56,y=12;v.append("rect").attr("y",480).attr("x",function(t,e){return e*_}).attr("width",_).attr("height",y).style("opacity",function(t,e){return p(t)}).style("fill","#00ADEF");var w=m.selectAll("g.zoom-wrap").data(["1"]).enter().append("g").attr("class","plus-minus-wrap"),_=20,y=40;w.append("rect").attr("x",0).attr("y",function(t,e){return e*_}).attr("width",_).attr("height",y).attr("fill","#fff").style("opacity",.9);var b=m.selectAll("g.zoom").data(["1","2"]).enter().append("g").attr("class","plus-minus"),_=20,y=20;b.append("rect").attr("x",0).attr("y",function(t,e){return e*_}).attr("width",_).attr("height",y).attr("fill",function(t,e){return 1==e?"url(#minus-svg)":"url(#plus-svg)"}).attr("id",function(t,e){return 1==e?"zoom_out":"zoom_in"}).attr("stroke","rgba(0,0,0,.1)").style("opacity",.8).style("cursor","pointer").on("click",n);var k=m.selectAll("g.legendrect").data(["1"]).enter().append("g").attr("class","legendrect");k.append("rect").attr("x",0).attr("y",492).attr("fill","#fff").attr("height","34px").attr("width",i);var q=m.selectAll("g.legendtext").data(["1"]).enter().append("g").attr("class","legendtext");q.append("text").attr("x",0).attr("y",519).attr("class","legendtext").text(function(t,e){return"$100"}).attr("text-anchor","left"),q.append("text").attr("x",630).attr("y",519).attr("class","legendtext").text(function(t,e){return"$3,000"}).attr("text-anchor","right"),q.append("text").attr("x",335).attr("y",519).attr("class","legendtext-national").text(function(t,e){return"National Average Annual Premium $1,670"}).attr("text-anchor","middle");var A=m.selectAll("g.legendline").data(["1","2"]).enter().append("g").attr("class","legendline");A.append("line").attr("x1",0).attr("x2",0).attr("y1",480).attr("y2",505).attr("class","legend-line").attr("stroke-width","1px").attr("stroke","black"),A.append("line").attr("x1",670).attr("x2",670).attr("y1",480).attr("y2",505).attr("class","legend-line").attr("stroke-width","1px").attr("stroke","black"),A.append("line").attr("x1",335).attr("x2",335).attr("y1",480).attr("y2",505).attr("class","legend-line").attr("stroke-width",".2px").attr("stroke","black"),x.selectAll("image").data(topojson.feature(t,t.objects.states).features).enter().append("svg:image").attr("xlink:href",Variables.theme_url+"/assets/svg/pin.svg").attr("width",40).attr("height",42).attr("class","marker").attr("text-anchor","middle").attr("data-name",function(t){return a[t.id]}).style("display",function(t){return"Washington"==a[t.id]?"block":"none"}).attr("x",function(t){return f.centroid(t)[0]-20}).attr("y",function(t){return f.centroid(t)[1]-37}).attr("text-anchor","middle")})})}$("#quote-form").bind("submit",function(t){t.preventDefault();var e=$("#zip-code").val(),a=$("#quote-error"),n=$("#modal-results"),r=/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(e);r?(MediaAlphaExchange={type:"ad_unit",ua_class:"auto",placement_id:"1hgKepAMZvEu7EDq3BG99P6AI-4CbQ",version:"17",sub_1:Variables.current_url,sub_2:"Map",data:{zip:e,currently_insured:"1",current_company:"other",drivers:[{sr_22:"0"}]}},n.html("Loading ..."),a.css("display","none"),MediaAlphaExchange__load("modal-results"),$("#autoModal").foundation("reveal","open")):(a.css("display","inline-block"),$(document).foundation("equalizer","reflow"))}),$("#see-more-states").bind("click",function(t){$(".hidden-states").slideDown(),$(this).hide()}),$("#close-hidden-states").bind("click",function(t){$(".hidden-states").slideUp("",function(){$("#see-more-states").show()})}),$(window).on("load resize",function(){Foundation.utils.is_small_only()&&($.getJSON(Variables.home_url+"/wp-json/reviews/v1/fetch/map",function(t){json=t}).done(function(){function t(){var t=[];$.each(json,function(e,a){cur_state=a.name,t.push("<option value='"+cur_state+"'>"+cur_state+"</li>")});var e=t.join("");$("#map-option").append(e)}function e(){function e(t,e){return t.name>e.name?1:-1}json.sort(e),t()}e()}),$("#map-option").change(function(){function t(t){var e=t.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");return e}var e="";$("select option:selected").each(function(){e+=$(this).val()}),$.getJSON(Variables.home_url+"/wp-json/reviews/v1/fetch/map",function(t){json=t}).done(function(){$.each(json,function(a,n){cur_state=n.name,cur_state==e&&($("#state").html(cur_state),$("#state-premium").html("$"+t(n.annual_average_premium)),$("#per-person").html("$"+t(n.state_min_bi)),$("#per-accident").html("$"+t(n.state_min_per_accident)),$("#property-damage").html("$"+t(n.state_min_pd)),$("#map-quote").html(n.quote),""!=n.quote_name?($("#map-name").html(n.quote_name+", "),$("#map-title").html(n.quote_title)):($("#map-name").html(""),$("#map-title").html("")),$("#map-depart").html(n.quote_department),$(document).foundation("equalizer","reflow"))})})}).change())})}(jQuery),function(){var t=300,e=600,a=1/3,n=-200,r=400;window.FunnelChart=function(i){this.data=i.data,this.totalEngagement=0;for(var s=0;s<this.data.length;s++)this.totalEngagement+=this.data[s][1];this.width="undefined"!=typeof i.width?i.width:e,this.height="undefined"!=typeof i.height?i.height:t,this.offset="undefined"!=typeof i.offset?i.offset:n;var l="undefined"!=typeof i.translate?i.translate:r,o="undefined"!=typeof i.bottomPct?i.bottomPct:a;this._slope=2*this.height/(this.width-o*this.width),this._totalArea=(this.width+o*this.width)*this.height/2},window.FunnelChart.prototype._getLabel=function(t){return this.data[t][0]},window.FunnelChart.prototype._getLabelId=function(t){var e=this.data[t][0].replace(/[^A-Z0-9]+/gi,"_");return e},window.FunnelChart.prototype._getEngagementCount=function(t){return this.data[t][1]},window.FunnelChart.prototype._getTranslate=function(t){return this.translate},window.FunnelChart.prototype._createPaths=function(){function t(e,a,n,r,i){i>=e.data.length||(area=e.data[i][1]*e._totalArea/e.totalEngagement,prevBaseLength=n-a,nextBaseLength=Math.sqrt((e._slope*prevBaseLength*prevBaseLength-4*area)/e._slope),nextLeftX=(prevBaseLength-nextBaseLength)/2+a,nextRightX=n-(prevBaseLength-nextBaseLength)/2,nextHeight=e._slope*(prevBaseLength-nextBaseLength)/2+r,points=[[nextRightX,nextHeight]],points.push([n,r]),points.push([a,r]),points.push([nextLeftX,nextHeight]),points.push([nextRightX,nextHeight]),trapezoids.push(points),t(e,nextLeftX,nextRightX,nextHeight,i+1))}return trapezoids=[],t(this,0,this.width,0,0),trapezoids},window.FunnelChart.prototype.draw=function(t,e){function a(t,e){var n=i.append("svg:path").attr("d",function(t){return s([l[e][0],l[e][1],l[e][2],l[e][2],l[e][1],l[e][2]])}).attr("data-relate",function(a){return t._getLabelId(e)}).attr("class","funnel-part").attr("data-relate",function(a){return t._getLabelId(e)}).on("mouseover",function(t){}).on("click",function(a){d3.selectAll(".funnel-part").attr("class","funnel-part"),d3.selectAll(".funnel-part").attr("data-class","no-transform"),d3.select(this).attr("data-class","yes-transform"),d3.selectAll(".funnel-part").style("transform","translateX(0px)"),$(".funnel-part").each(function(t,e){$(this).attr("fill","url(#funnel-stripes)")}),d3.select(this).style("transform","translateX(-30px)"),d3.select(this).attr("fill","#21aeec");var n=t._getLabelId(e);$(".funnel-text-number").each(function(t,e){var a=$(this).attr("data-relate");a==n?$(this).attr("x","270").attr("fill","#fff"):$(this).attr("x","300").attr("fill","#000")}),$(".funnel-line").each(function(e,a){var r=$(this).attr("data-relate"),i=$(this).attr("x2"),s=$(this).attr("clicked");if(r==n)"yes"==s||($(this).attr("clicked","yes"),$(this).attr("x2",i-30));else{var l=t.width/2.15;console.log(l),$(this).attr("x2",l),$(this).attr("clicked","no")}}),$(".funnel-reveal").hide();var r="#"+n;$(r).fadeIn()}).on("mouseout",function(t){});nextHeight=l[e][[l[e].length]-1];var r=n.node().getTotalLength(),o=n.transition().duration(0).ease("linear").attr("d",function(t){return s(l[e])}).attr("fill","url(#funnel-stripes)");i.append("svg:text").text(t._getEngagementCount(e)).attr("class","funnel-text-number").attr("x",function(e){return t.width/2}).attr("y",function(t){return(l[e][0][1]+l[e][1][1])/2}).attr("text-anchor","middle").attr("dominant-baseline","middle").attr("fill","#000").attr("data-relate",function(a){return t._getLabelId(e)}),i.append("svg:text").text(t._getLabel(e)).attr("class","funnel-text").attr("x",function(e){return t.offset}).attr("y",function(t){return(l[e][0][1]+l[e][1][1])/2-10}).attr("text-anchor","left").attr("dominant-baseline","middle").attr("fill","#000").attr("data-relate",function(a){return t._getLabelId(e)}),i.append("line").attr("y1",function(t){return(l[e][0][1]+l[e][1][1])/2}).attr("y2",function(t){return(l[e][0][1]+l[e][1][1])/2}).attr("x1",t.offset).attr("x2",t.width/2.15).attr("class","funnel-line").attr("stroke-width",".3px").attr("stroke","black").attr("data-relate",function(a){return t._getLabelId(e)}),e<l.length-1&&o.each("end",function(){a(t,e+1)})}var n=0;e="undefined"!=typeof e?e:n;var i=d3.select(t).append("svg:svg").attr("width",1e3).attr("height",this.height).attr("id","funnel-graph").append("svg:g").attr("id","funnel-translate").attr("style","transform:translate("+r+"px,0px)");defs=i.append("svg:defs"),defs.append("svg:pattern").attr("id","funnel-stripes").attr("patternUnits","userSpaceOnUse").attr("width","32").attr("height","32").append("svg:image").attr("xlink:href",Variables.theme_url+"/assets/images/diag-pat.png").attr("x",0).attr("y",0).attr("width",32).attr("height",32);var s=d3.svg.line().x(function(t){return t[0]}).y(function(t){return t[1]}),l=this._createPaths();a(this,0)}}();var chart=new FunnelChart({data:funnelData,width:600,height:420,bottomPct:.001,offset:-300});chart.draw("#funnelContainer",10),jQuery.fn.d3Click=function(){this.each(function(t,e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(a)})},$(window).on("load resize",function(){var t=d3.select(".funnel-part").attr("data-relate");d3.select(".funnel-part").style("transform","translateX(-30px)").attr("fill","#21aeec").attr("data-class","yes-transform"),$(".funnel-text-number").each(function(e,a){var n=$(this).attr("data-relate");n==t&&$(this).attr("x","270").attr("fill","#fff")});var e,a;$(".funnel-line").each(function(e,a){var n=$(this).attr("data-relate"),r=$(this).attr("x2"),i=$(this).attr("clicked");n==t&&("yes"==i||($(this).attr("clicked","yes"),$(this).attr("x2",r-30)))}),$(".funnel-reveal").hide();var n="#"+t;$(n).show()});