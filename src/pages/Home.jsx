import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { MdOutlineHeadphones, MdOutlineAccountBalanceWallet} from "react-icons/md";
import { GiWallet } from "react-icons/gi";



const Home = () => {
  return (
    <>
    <section className='home-section'>
        <div className="content">
          <p className="heading">Auther Books</p>
          <p className="subheading">Here is all books available</p>
          <p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quod laudantium consectetur, quis eius magnam eligendi dolores quasi nihil enim quaerat totam aut minus vero illo omnis facere natus dignissimos.</p>
          <button type='button' className='btn'>Read More</button>
        </div>
    </section>

    {/* home card started from here  */}
    <section className="home-card">
      <div className="h-card">
        <TbTruckDelivery size={'4rem'} color='#ad023b'/>
        <div className='card-des'>
          <p className="card-title">Delivery Date</p>
          <p className="card-para">Delivery on given date</p>
        </div>
      </div>
      <div className="h-card">
        <GoGift size={'4rem'} color='#ad023b'/>
        <div className='card-des'>
          <p className="card-title">Gift Books</p>
          <p className="card-para">Delivery on given date</p>
        </div>
      </div>
      <div className="h-card">
        <MdOutlineAccountBalanceWallet size={'4rem'} color='#ad023b'/>
        <div className='card-des'>
          <p className="card-title">Save Money</p>
          <p className="card-para">Delivery on given date</p>
        </div>
      </div>
      <div className="h-card">
        <MdOutlineHeadphones size={'4rem'} color='#ad023b'/>
        <div className='card-des'>
          <p className="card-title">Audio Books</p>
          <p className="card-para">Delivery on given date</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home