import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../css/style.css";
const Footer =() =>{
    return(
        <>
        
        <div class="rightpane">
            <div className='follow'>
            <span class='uppertest'>FOLLOW US</span>
            <span class='uppertest1'><a href='https://www.instagram.com/khollaboration' class='insta' target='_blank'> Instagram</a> | <a href='https://www.facebook.com/khollaboration' class='facebook' target='_blank'> Facebook</a></span>
            </div>
            <div className='rights'>
            <span class='test'>All Rights Reserved</span>
            <span class='test1'>@2024 KhollabCommunications</span>
            </div>
            
        </div>

        </>
    )
}

export default Footer;