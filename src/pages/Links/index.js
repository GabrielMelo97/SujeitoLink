import {useState, useEffect} from 'react';
import './links.css';
import { FiLink, FiTrash, FiArrowLeft, FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {getLinksSave, deleteLink} from '../../services/storeLinks';
import LinkItem from '../../components/LinkItem';

export default function Links(){
    const [myLinks, setMyLinks] = useState([])
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [emptyList, setEmptyList] = useState(false);


    useEffect(() => {
        async function carregarLinks(){
          const result = await getLinksSave('@linksEncurtados');

          if(result.length === 0){
            setEmptyList(true)
          }

          setMyLinks(result)
        }

        carregarLinks();
    },[])

    function handleOpenLink(link){
      setData(link)
      setShowModal(true)
    }

    async function handleDeleteLink(id){
      console.log(id)
      const result = await deleteLink(myLinks, id);
      if(result.length === 0){
        setEmptyList(true)
      }

      setMyLinks(result)
    }

    return(
      <div className="links-container">

        <div className='links-header'>
            <Link to='/'>
              <FiArrowLeft size={38} color='#fff' />
            </Link>
            <h1>Meus Links</h1>
        </div>

        {emptyList && (
          <div className='empty-list'>
            <FiList color='#fff' size={200}/>
            <h2>Não foi encontrado nenhum registro...</h2>
          </div>
        )}

        { myLinks.map( el => (
          <div key={el.id} className='links-item'>
              <button className='link' onClick={() => handleOpenLink(el)}>
                  <FiLink size={18} color='#fff' />
                  {el.long_url}
              </button>
              <button className='btn-excluir' onClick={() => handleDeleteLink(el.id)}>
                  <FiTrash size={20} color='#ff5454' />
              </button>
          </div>
        ))
        }

        {showModal && (
          <LinkItem closeModal={() => setShowModal(false)} content={data}  />
        )}

      </div>
    )
  }