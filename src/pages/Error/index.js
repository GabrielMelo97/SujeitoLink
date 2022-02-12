import './error.css';
import { Link } from 'react-router-dom';

export default function Error(){
    return(
        <div className="error-container">
            <img src='/notfound.png' alt='logo-error' />
            <h1>Página não encontrada!</h1>
            
            <Link to='/'>
                <button>Voltar para home</button>
            </Link>
        </div>
    )
}