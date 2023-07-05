import { useDispatch, useSelector } from 'react-redux'
import { contentUrl } from '../../repositories/repository';
import "./HomeDetails.css"
import { removeItem } from '../../Store/index';

const ShoppingStore = () => {
  const { card } = useSelector(state => state)

  const dispatch = useDispatch();
  function handleRemoveItem(id) {
    dispatch(removeItem(id))
  }

  return (
    <section className='text-bg-ligth pb-5 minHegiht'>
      <div >
        <div className=''>
          <h1 className='text-center text-black py-3'>My Favorite</h1>
          {
     ( card.length>0 )?
             (
              card.map((item, index) => (
                <div className='d-flex rounded gap-3  my-1 shoppingList mb-3' key={index}>
                  <img src={contentUrl + item.poster_path} alt={item.title} className='img-fluid DetailsImg ' />
                  <div className='col-11 mt-4'>
                    <div className='d-flex justify-content-between col-md-11'>
                    <h4 className='m-0'>{item.title || item.name} </h4>
                     <h4>
                     <i className="fa-solid fa-heart"></i>  {item.count}
                     </h4>
                    </div>
                    <span>{item.release_date}</span>
                    <h6 >{item.overview}</h6>
                    <div className='py-3'>
                   <div className='d-flex gap-4 pb-2'>
                   <button  className=" buttonItem fs-6 ">
                        <i className="fa-solid fa-star buttonTrash"></i> 
                      </button>
                      <span>Your rating</span>
                      <button  className=" buttonItem fs-6 ">
                        <i className="fa-solid fa-heart buttonTrash"></i> 
                      </button>
                      <span>Favorite</span>
                      <button  className=" buttonItem fs-6 ">
                        <i className="fa-solid fa-list buttonTrash"></i> 
                      </button>
                      <span>Add to list</span>
                      <button onClick={() => handleRemoveItem(item.id)} className=" buttonItem fs-6 ">
                        <i className="fa-solid fa-xmark buttonTrash"></i> 
                      </button>
                      <span>Remove</span>
                   </div>

                    </div>
                  </div>

                </div>
              ))
            ):
            (
              <h1 className='text-center py-3 text-primary'>Hozircha Siz Tanlagan Kinolar Yo'q</h1>
            )
          }
        </div>
      </div>

    </section>
  )
}

export default ShoppingStore
