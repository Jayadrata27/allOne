const mongoose = require('mongoose');

async function main() {

   await mongoose.connect('mongodb://joy69:pangla6969@ac-0ki5w1z-shard-00-00.bkokgxg.mongodb.net:27017,ac-0ki5w1z-shard-00-01.bkokgxg.mongodb.net:27017,ac-0ki5w1z-shard-00-02.bkokgxg.mongodb.net:27017/Instagram?ssl=true&replicaSet=atlas-4p5yb4-shard-0&authSource=admin&appName=CoadingAdda');


}



module.exports=main;   //main function ko export kar diya



  