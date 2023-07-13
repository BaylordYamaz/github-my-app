import '../style/footer.css'
const Footer = ()=>{
    return (
<footer>
     <div className="container-footer">
        <div className="noi-dung contact">
     <h2>Home</h2>
<ul>
<li><a href='#link'>Marketing Library</a></li>
<li><a href='#link'>Free Marketing Tools</a></li>
<li><a href='#link'>Marketing Glossary</a></li>
</ul>
</div>
         <div className="noi-dung contact">
            <h2>Community</h2>
            <ul>
                 <li><a href="#link">Agencies & Freelancers</a></li>
                 <li><a href="#link">Developers</a></li>
                 <li><a href="#link">Event</a></li>
             </ul>
         </div>
         <div className="noi-dung contact">
             <h2>Company</h2>
             <ul>
                 <li><a href="#link">Our Story</a></li>
                 <li><a href="#link">Newsroom</a></li>
                 <li><a href="#link">Careers</a></li>
             </ul>
         </div>
         <div className="noi-dung contact">
             <h2>Contact Us</h2>
             <ul className="info">
                 <li>
                     <p><a href="#link">email@gmail.com</a></p>
                </li>
             </ul>
         </div>
     </div>
 </footer>
    )
}
export default Footer;