const element=React.createElement("h1",{id:"first",className:"Rahul", style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello Coder Army");
const element2=React.createElement("h1",{id:"second",className:"Rahul",style:{backgroundColor:"black",fontSize:"30px",color:"yellow"}},"Maja aya mujhe");

const div1=React.createElement('div',{},[element,element2]);

const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(element);       //dutoke aksathe render kora possible na tai div element ta crete kora holo 
// Reactroot.render(element2);

Reactroot.render(div1); 