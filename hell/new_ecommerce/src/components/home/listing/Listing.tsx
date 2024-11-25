import { items } from '@/data/products'
import Image from 'next/image'
import Link from 'next/link'

const Listing = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">Latest Products</h1>
      <div className="flex flex-wrap -m-4">
        {items.map((item, index)=>(
          <Card item={item} key={index}/>
        ))}
       
      </div>
    </div>
  </section>
  
  )
}

export default Listing
interface ICard {
  url: string;
  title: string;
  category: string;
  price: number;
 
}

const Card = ({item}: {item : ICard})=>{
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <Link href={''} className="block relative h-48 rounded overflow-hidden">
    <Image
      width={420}
      height={420}
      alt="ecommerce"
      className="object-cover object-center w-full h-full block"
      src={item.url}
    />
  </Link>
  <div className="mt-4">
    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
      {item.category}
    </h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">
      {item.title}
    </h2>
    <p className="mt-1">${item.price}</p>
    <button
      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      
    >
      Add to Cart
    </button>
  </div>
</div>

  )
}