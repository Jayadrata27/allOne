import { Outlet ,Link} from "react-router";
function Details(){
  return(
     <>
        <nav>
            <Link to="hello" >Hello</Link>
            <Link to="hi" >Hi</Link>
        </nav>

        <h1>Welcome to Detail Page</h1>
        <Outlet/>
     </>
  )
}
export default Details;