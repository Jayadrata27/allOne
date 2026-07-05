const express=require("express");
const app=express();
const main=require("./aichat");


app.use(express.json());


const chattingHistory={};
// const chattingHistory={
//     1:[{role:'user',parts:[{text:"Hi, How are You"}]},{role:'model',parts:[{text:"I am good,what about you"}]}],
//     2:[],
//     3:[]
// }


// We will install our chat history here
// key: value pair
// key = id
// value = array

app.post('/chat',async(req,res)=>{

    const {id,msg}=req.body;

    if(!chattingHistory[id]){
        chattingHistory[id]=[];
    }


    // Extract user history
    const History=chattingHistory[id];
    //array of history


    // History+Current ; array
    const promptmessage=[...History,{
        role:'user',
        parts:[{text:msg}]
    }]


    const answer=await main(promptmessage);

    // User question ko bhi insert karna hai
    // model ke response ko bhi insert karna hai

    History.push({role:'user',parts:[{text:msg}]});
    History.push({role:'model',parts:[{text:answer}]});
    res.send(answer);

})


app.listen(3000,()=>{
    console.log("Listening at port 3000");
})