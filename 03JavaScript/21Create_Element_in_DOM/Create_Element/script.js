// Create Element
// Attach Element
// let element=document.createElement("li");
// element.innerHTML="TS";
// let parent=document.getElementById("root");
// parent.appendChild(element);



// Attach element by using function
// function attach(content){ 
//     let element=document.createElement("li");
//     element.innerHTML=content;
//     let parent=document.getElementById("root");
//     parent.appendChild(element);
//  }
//  attach("TS");
//  attach("EJ");
//  attach("React");



// function attach(content){ 
//     let element=document.createElement("li");
//     element.innerHTML=content;

//     let element2=document.createElement("li");
//     element2.innerHTML=content+"v2";

//     let parent=document.getElementById("root");
//     parent.append(element,element2);
//  }
//  attach("TS");
//  attach("EJ");
//  attach("React");





// Attach by text node
// let element=document.createTextNode("Hello Coder Army");
// let parent=document.getElementById("root");
// parent.append(element);



// Craete Attribute Node
// let element=document.createAttribute("id");
// element.value="first";

// // let curr_list=document.querySelector("li");        //add id at 1st list in unorder list
// // curr_list.setAttributeNode(element)



// let parent=document.getElementById("root");
// parent.children[1].setAttributeNode(element);        //add id at 2nd Children in unorder List





// Access Attribute of a element
// let element=document.getElementById("root");
// console.log(element.getAttribute("id"));
// element.setAttribute("custom","20");                //setAttribute
// element.setAttribute("class","Rohan");
// element.removeAttribute("custom");                 //removeAttribute




// Add Node to the DOM
// let element=document.createElement("li");
// element.innerHTML="TS";
// let parent=document.getElementById("root");
// parent.append(element);                         //append
// parent.prepend(element);                        //prepend
// let child2=parent.children[1];
// parent.insertBefore(element,child2);            //insertBefore
// parent.replaceChild(element,child2);            //replaceChild





// let parent=document.getElementById("root");
// parent.innerHTML +="<li>TS</li>";

// let element=document.createElement("div");
// element.innerHTML="Hello Coder Army";

// parent.insertAdjacentElement("beforebegin",element);    //insertAdjacentElement

// let element=document.querySelector("li");
// element.remove();


