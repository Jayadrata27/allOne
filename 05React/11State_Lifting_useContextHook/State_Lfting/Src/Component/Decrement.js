function Decrement({counts,setCounts}){               ////props take distructer a convert kore store korlam
  return(
    <>
       <button onClick={()=>setCounts(counts-1)}>Decrement</button>
    </>
  )
}
export default Decrement;