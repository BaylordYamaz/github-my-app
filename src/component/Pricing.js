import '../style/pricing.css'
import Item from '../Cart/Item'
import {useNavigate} from 'react-router-dom'

function Pricing() {


const navigate = useNavigate()

  return (
    <div className="home">n
      <div className="home__container">
        <div className="home__row">
          
          
        <h3>Premium</h3>


        <p>Our most advanced tools, 
            unlimited contacts, and priority support; built for teams.</p>
        <p className='p-pricing'>Starts at</p>
        <p className='p-pricing'>$299</p>


        <ul>
    <li>Phone & Priority Support</li>
    <li>Max Contacts: Unlimited</li>
    <li>Custom-Coded and Pre-built Email Templates</li>
    <li>Enhanced Automated Customer Journeys</li>

</ul>


<Item 
  id={1}
  title="asdjiasdjisj"
  price={299}
  ></Item>
</div>


<div className='pringcingPlans'>

<h3 >Standard</h3>
        <p>Sell even more with personalization, optimization tools, and enhanced automations.</p>
        <p className='p-pricing'>Starts at</p>
        <p className='p-pricing'>$17</p>
        <ul>
    <li>24/7 Email & Chat Support</li>
    <li>Max Contacts: 100,000</li>
    <li>Custom-Coded and Pre-built Email Templates</li>
    <li>A/B Testing</li>
</ul>
<Item 
  id={2}
  price={17}></Item>
</div>


<div className='pringcingPlans'>
 
<h3 >Essentials</h3>
        <p>Send the right content at the right time with testing and scheduling features.</p>
        <p className='p-pricing'>Starts at</p>
        <p className='p-pricing' >$11</p>
        <ul>
    <li>24/7 Email & Chat Support</li>
    <li>Max Contacts: 50,000</li>
    <li>Pre-built Email Templates</li>
    <li>Basic Automated Customer Journeys</li>
   
</ul>
<Item id={3} price={11}></Item>
</div>


<div className='pringcingPlans'>
 
<h3 >Free</h3>
        <p>Easily create email campaigns and learn more about your customers.</p>
        <p className='p-pricing'>Starts at</p>
        <p className='p-pricing' >$0</p>
        <ul>
    <li>Email support for first 30 days</li>
    <li>Max Contacts: 500</li>
    <li>Pre-built Email Templates</li>
   
</ul>
<Item id={4} price={0}></Item>
</div>
{/* <Counter></Counter> */}
   </div>
 <button className='shopping-cart' onClick={() => navigate('/pay')} > cart</button>

      </div>
  )
}

export default Pricing