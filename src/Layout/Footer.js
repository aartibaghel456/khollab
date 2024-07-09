import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../css/style.css";
const Footer =() =>{
    return(
        <>
        
        <div class="right_nav">
            <div className='follow'>
            <span class='uppertest'>FOLLOW US</span>
            <span class='uppertest1'><a href='https://www.instagram.com/khollaboration' class='insta' target='_blank'> Instagram</a> | <a href='https://www.behance.net/STUDIOCHAPEAUX' class='facebook' target='_blank'> Behance</a></span>
            </div>
            <div className='midle'>
            <span class='create'>We Create</span>
            <span class='brands'>® Resonation Brands</span>
            </div>
            <div className='rights'>
            <span class='test'>2014</span>
            <span class='test1'>-2024 @</span>
            </div>
            
        </div>

        </>
    )
}

export default Footer;