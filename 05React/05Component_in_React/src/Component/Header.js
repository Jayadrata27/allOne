function Header(){
    return(
        <div className="heading">
            <img className="images" src="https://i.pinimg.com/736x/75/68/05/75680550fdc2305216ad9014d2b8b8f2.jpg" height="80px" width="80px" />
            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home and Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
            </div>

            <input placeholder="Search for Products brands and More" className="searchbar"></input>

            <div className="profile">
               <button className="pro">Profiles</button>
               <button className="pro">Wishlist</button>
               <button className="pro">Bag</button>
            </div>

        </div>
    )
}
export default Header;