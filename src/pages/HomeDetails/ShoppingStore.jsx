import { useDispatch, useSelector} from 'react-redux'
import { contentUrl } from '../../repositories/repository';
import "./HomeDetails.css"
import { minusItem, plusItem, removeItem } from '../../Store';

const ShoppingStore = () => {
  const { card } = useSelector(state => state)
  const dispatch=useDispatch();
  function handleRemoveItem(id){
    dispatch(removeItem(id)).payload
  }
  function plusItemAdd(id){
    dispatch(plusItem(id)).payload
  }
  function minusItemAdd(id){
    dispatch(minusItem(id)).payload
  }

  return (
    <section className='text-bg-ligth'>
      <div className="container">
      <h1 className='text-center py-3 text-primary'>Your Cart</h1>
    <ul className='list-group'>
     {
      (card.length>0)&&(
        card.map((item,index)=>(
          <li className='list-group-item row d-flex rounded shadow my-1' key={index}>
          <div className='col-md-1'> 
          <img src={ contentUrl + item.poster_path} alt={item.title} className='img-fluid DetailsImg '  />
          </div>
          <div className='col-8 mt-4'>
          <h3 >{item.title} {item.release_date}</h3>
          <p >{item.overview}</p>
          </div>
          <div className='col-md-2 d-flex align-items-center '>
          <button onClick={()=>minusItemAdd(item.id)} className="btn btn-secondary buttonItem d-block mx-1 ">
            <i className="fa-solid fa-minus "></i>
          </button>
          <span className='h4'>{item.vote_count}</span>
          <button onClick={()=>plusItemAdd(item.id)} className="btn btn-secondary buttonItem d-block mx-1">
            <i className="fa-solid  fa-plus"></i>
          </button>
    
          </div>
          <div className='col-md-1 align-items-center d-flex'>
        <button onClick={()=>handleRemoveItem(item.id)} className="btn btn-danger buttonItem fs-5">
          <i className="fa-solid fa-trash "></i>
        </button>
          </div>
          </li>
        ))
      )
     }
    </ul>
      </div>

    </section>
  )
}

export default ShoppingStore
