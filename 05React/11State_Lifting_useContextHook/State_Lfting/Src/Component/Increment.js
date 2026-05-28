
function Increment({counts,setCounts}){                //props take distructer a convert kore store korlam

   return(
      <>
         <h2>Child Counter is: {counts}</h2>
         <button onClick={()=>setCounts(counts+1)}>Increment</button>
      </>
   )
}
export default Increment;

