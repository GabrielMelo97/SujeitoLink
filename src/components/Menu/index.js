import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://instagram.com/sujeitoprogramador' target='_blank'>
               <BsInstagram size={24} color='#fff' /> 
            </a>
            <a className='social' href='https://youtube.com/c/sujeitoprogramador' target='_blank'>
               <BsYoutube size={24} color='#fff' /> 
            </a>

            <Link to='/links' className='menu-item'>
                Meus Links
            </Link>
        </div>
    )
}