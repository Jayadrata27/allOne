const bcrypt=require("bcrypt");

const password="Rohit@123";

// hashcode + Solt
async function Hashing(){
    const hashpass=await bcrypt.hash(password,10);
    // console.log(hashpass);

    // const salt=await bcrypt.genSalt(10);
    // console.log(salt)

    const ans=await bcrypt.compare(password,hashpass);
    console.log(ans);
}

Hashing();