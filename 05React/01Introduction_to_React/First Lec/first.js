// Create element through JS
// const header1=document.createElement('h1');
// header1.innerHTML="Hello Coder Army";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="30px";
// header1.style.color="white";


// const header2=document.createElement('h2');
// header2.innerHTML="Kaise ho ap sab log";
// header2.style.backgroundColor="black";
// header2.style.fontSize="25px";
// header2.style.color="white";

// const root=document.getElementById("root");
// root.append(header1,header2);






const obj={
    createElement:function(tag,styles,children){
        const element=document.createElement(tag);             //tag
                  

         for(key in styles){                                  //attributes
           element.style[key]=styles[key];
        }
                                                          
                                                          //children
        if(typeof children==='object'){                  //at the end Array is Object
            for(val of children){
               element.append(val);
            }
        }
        else{                                            //string or any other
             element.innerHTML=children;       
        }  

        return element;

    }
}
const header1=obj.createElement('h1',{backgroundColor:"blue",fontSize:"30px",color:"white"},"Hello Coder Army");
const header2=obj.createElement('h2',{backgroundColor:"black",fontSize:"25px",color:"white"},"Kaise ho app sab log");
//unordered list
// HTML
// CSS
// JS
// TS
const li1=obj.createElement('li',{},"HTML");
const li2=obj.createElement('li',{},"CSS");
const li3=obj.createElement('li',{},"JS");
const li4=obj.createElement('li',{},"TS");
const UL=obj.createElement('ul',{backgroundColor:"blue",fontSize:"30px",color:"white"},[li1,li2,li3,li4]);   //list guloke amra array er through pass korbo

// const root=document.getElementById('root');
// root.append(header1,header2);

const objDOM={
    render:function(element,root){
        root.append(element);
    }
}
objDOM.render(header1,document.getElementById('root'));
objDOM.render(header2,document.getElementById('root'));
objDOM.render(UL,document.getElementById("root"));



