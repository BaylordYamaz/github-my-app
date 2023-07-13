import '../style/navbar.css';
const Navbar = () =>{
    return (
    <div className="icon-bar">
        <ul >
            <li> <a href="http://localhost:3000/">Home</a>
                </li>
            <li><a href="http://localhost:3000/product">Product</a></li>
            <li><a href="http://localhost:3000/About">About</a></li>
            <li><a href='http://localhost:3000/Pricing '>Pricing</a></li>
        </ul>
        {/* <div className='btn-nav'> */}
 <a className='button-nav' href="http://localhost:3000/ServiceLogin">
     <button className='btn-nav1'>Login</button>
    </a>
    <a className='button-nav1' href="http://localhost:3000/register">
    <button className='btn-nav2'>Sign Up</button>
    </a>
 {/* </div> */}
 </div>
  

)
}
export default Navbar;

var prevScroll = window.pageYOffset;
window.onscroll = function() {
var currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    document.querySelector(".icon-bar").style.top = "0";
  } else {
    document.querySelector(".icon-bar").style.top = "-50px";
  }
  prevScroll = currentScroll;
}