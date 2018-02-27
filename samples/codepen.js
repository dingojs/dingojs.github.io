
var OBJECT=[];
console.log("Dingo.js v1.0");
console.log("MIT License 2018")
setup();

function getelem(id){
  return OBJECT[id];
}

function addelem(id,type,args){
    OBJECT[id]=new type(args);
    for(var key in args){
      OBJECT[id][key]=args[key];
    }
    insertelem(id);
    for(var key2 in args){
      OBJECT[id][key2]=args[key2];
      updateobject(id,key2,args[key2]);
    }
}

function insertelem(id){
    var p;
    if('parent' in OBJECT[id]){
      p=document.getElementById(OBJECT[id].parent);
    }else{
      p=document.getElementById("body");
    }
    var newelem=document.createElement(OBJECT[id].tag);
    newelem.setAttribute('id',id);
    newelem.onclick=OBJECT[id]["clicked"];
    newelem.onmouseover=OBJECT[id]["hover"];

    //defaults for all types
    if('position' in OBJECT[id]){
      newelem.style.position=OBJECT[id].position;
    }else{
      newelem.style.position="relative";
    }
    newelem.style.display="inline-block";
    newelem.style.overflow="visible";


    if('backgroundcolor' in OBJECT[id]){
      newelem.style.backgroundColor=OBJECT[id].backgroundcolor;
    }else{
      newelem.style.backgroundColor="transparent";
    }
    if('color' in OBJECT[id]){
      newelem.style.color=OBJECT[id].color;
    }else{
      newelem.style.color="black";
    }
    if('x' in OBJECT[id]){
      newelem.style.left=OBJECT[id].x;
    }else{
      newelem.style.left="0%";
    }
    if('y' in OBJECT[id]){
      newelem.style.top=OBJECT[id].y;
    }else{
      newelem.style.top="0%";
    }
    if('z' in OBJECT[id]){
      newelem.style.zIndex=OBJECT[id].z;
    }else{
      newelem.style.zIndex="0";
    }
    if('width' in OBJECT[id]){
      newelem.style.width=OBJECT[id].width;
    }else{
      newelem.style.width="auto";
    }
    if('height' in OBJECT[id]){
      newelem.style.height=OBJECT[id].height;
    }else{
      newelem.style.height="auto";
    }

    if('align' in OBJECT[id]){
      if('align'=="left"){
        newelem.style.textAlign="left";
        newelem.style.horizontalAlign="left";
      }
      if('align'=="center"){
        newelem.style.textAlign="center";
        newelem.style.horizontalAlign="center";
      }
      if('align'=="right"){
        newelem.style.textAlign="right";
        newelem.style.horizontalAlign="right";
      }
      if('align'=="top"){
        newelem.style.verticalAlign ="top";
      }
      if('align'=="middle"){
        newelem.style.verticalAlign ="middle";
      }
      if('align'=="bottom"){
        newelem.style.verticalAlign ="bottom";
      }
    }else{
      newelem.style.verticalAlign ="middle";
    }
    if('padding' in OBJECT[id]){
      newelem.style.padding=OBJECT[id].padding;
    }else{
      newelem.style.padding="0";
    }

    if('margin' in OBJECT[id]){
      newelem.style.margin=OBJECT[id].margin;
    }else{
      newelem.style.margin="0";
    }
    if('borderradius' in OBJECT[id]){
      newelem.style.borderRadius=OBJECT[id].borderradius;
    }else{
      newelem.style.borderRadius="0%";
    }
    if('bordercolor' in OBJECT[id]){
      newelem.style.borderColor=OBJECT[id].bordercolor;
    }else{

    }
    if('borderwidth' in OBJECT[id]){
      newelem.style.borderWidth=OBJECT[id].borderwidth;
    }else{

    }
    if('borderstyle' in OBJECT[id]){
      newelem.style.borderStyle=OBJECT[id].borderstyle;
    }else{
      newelem.style.borderStyle="none";
    }
    if('textsize' in OBJECT[id]){
      newelem.style.fontSize=OBJECT[id].textsize;
    }else{
      newelem.style.fontSize="100%";
    }
    if(OBJECT[id].visibile=="false"){
      newelem.style.display="none";
    }else if(OBJECT[id].visibile=="true"){
      newelem.style.display="inline";
    }
    if('html' in OBJECT[id]){
      newelem.innerHTML=OBJECT[id].html;
    }else{
      newelem.innerHTML="";
    }
    p.appendChild(newelem);
}
function setattr(id,args){
  for(var key in args){
    OBJECT[id][key]=args[key];
    updateobject(id,key,args[key]);
  }
}

function updateobject(id,attr,val){
  var elem=document.getElementById(id);
  switch(attr){
    case "x":
    elem.style.left=val;
    break;
    case "y":
    elem.style.top=val;
    break;
    case "z":
    elem.style.zIndex=val;
    break;
    case "backgroundcolor":
    elem.style.backgroundColor=val;
    break;
    case "width":
    elem.style.width=val;
    break;
    case "height":
    elem.style.height=val;
    break;
    case "textsize":
    elem.style.fontSize=val;
    break;
    case "visible":
    if(val=="false"){
      elem.style.display="none";
    }else if(val=="true"){
      elem.style.display="inline-block";
    }
    case "display":
    elem.style.display=val;
    break;
    break;
    default:
    elem[attr]=val;
    break;
  }
}

function getelem(id){
return OBJECT[id];
}

function getattr(id,val){
return OBJECT[id][val];
}



//libraries
function orientation(){
  if(window.innerWidth>window.innerHeight){
    return true;
  }else{
    return false;
  }
}

function windowwidth(){
  return window.innerWidth;
}

function windowheight(){
  return window.innerHeight;
}

function button(args){
  this.tag="button";
  this.html=args['text'];
  this.borderradius="10%";
  this.clicked=function(){};
  this.hover=function(){};
}

function img(args){
  this.tag="img";
  this.src=args['src'];
  this.clicked=function(){};
  this.hover=function(){};
}

function menu(args){
  this.tag="button";
  this.html=args['text'];
  this.borderradius="10%";
  this.clicked=function(){
    redirect(this.url);
  };
  this.hover=function(){};
}
function header(args){
  this.tag="h1";
  this.html=args['text'];
  this.clicked=function(){};
  this.hover=function(){};

}

function div(args){
  this.tag="div";
  if("text" in args){
    this.html=args['text'];
  }else{
    this.html="";
  }
  this.clicked=function(){};
  this.hover=function(){};
}
function p(args){
  this.tag="p";
  this.html=args['text'];
  this.clicked=function(){};
  this.hover=function(){};
}
function loremipsum(){
  this.tag="p";
  this.html="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  this.clicked=function(){};
  this.hover=function(){};
}


var timeintervals=[];

function delay(func,time){
  setTimeout(func,time);
}
function repeat(func,time,num){
  for(var i=0;i<num;i++){
    setTimeout(func,time*i);
  }
  //timeintervals[func]=setInterval(func, 3000);
}
function cancelrepeat(func){
  clearInterval(timeintervals[func]);
}
function date(){

}
function time(){

}


function redirect(url){
  window.location.href=url;
}
function redirectnew(url){
  window.open(url, '_blank');
}
function storedb(key,value){

}
function getdb(key){

}
function httpget(args){

}
function httppost(args){

}
