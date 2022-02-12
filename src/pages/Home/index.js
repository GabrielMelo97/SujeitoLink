import { FiLink } from 'react-icons/fi';
import {useState} from 'react';
import './home.css'; 

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import api from '../../services/api';
import {getLinksSave , saveLink} from '../../services/storeLinks';

export default function Home(){
  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [dataLink,setDataLink] = useState({});

  async function processarLink(){
    try{
        if(link != ''){
          const response = await api.post('/shorten', {
            long_url: link
          })

          saveLink('@linksEncurtados', response.data)
          setDataLink(response.data)
          setShowModal(true);
          setLink('');
        }else{
          alert('Por favor cole um link para gerar!')
        }
        
    }catch(e){
      alert('Ops parece que algo deu errado!')
      setLink('');
      console.log(e)
    }
    
  }

  return(
    <div className="home">
      <div className="logo">
          <img src="/logo.png" alt="logo" />
          <h1>SujeitoLink</h1>
          <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
          <div>
              <FiLink size={24} color='#fff'/>
              <input placeholder='Cole seu link aqui...' value={link} onChange={(e) => setLink(e.target.value) } />
          </div>
          <button onClick={processarLink}>Gerar Link</button>
      </div>

      <Menu/>

      { showModal &&
        <LinkItem closeModal={() => setShowModal(false)} content={dataLink} />
      }
    </div>
  )
}
  
  