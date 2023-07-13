import '../style/register.css'
const Register = () =>{
return (
    <div className="container-register">
        <h1>Register</h1>
      <form>
        <div className="form-register">
          <input type="text" id="username" placeholder="Username" />
        </div>
        <div className="form-register">
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="form-register">
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div className="form-register">
          <input
            type="password"
            id="password2"
            placeholder="Confirm password"
          />
    </div>
 <button className='btn'><a href='#link' className='btn1'>login</a></button>
        <div className="signup_link"> <a href="#link">Sign up</a></div>
    </form>
    </div>
)
}
export default Register;