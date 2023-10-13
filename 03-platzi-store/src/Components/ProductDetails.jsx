import  { useContext } from 'react'
import { ShoppingCartContext } from '../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'

export const ProductDetails = () => {
	const {
		isProductDetailOpen,
		closeProductDetail,
		productToShow
	} = useContext(ShoppingCartContext)

	return (
		<>
			{isProductDetailOpen && (
				<aside 
					className="flex flex-col fixed right-0 border border-slate-300 rounded-md bg-white
										w-[360px] h-[calc(100vh-68px)] top-[68px]">
					<div className='flex justify-between items-center p-6'>
						<h2 className='font-medium text-xl'>Detail</h2>
						<div>
							<XMarkIcon 
								className="h-6 w-6 text-black cursor-pointer" 
								onClick={closeProductDetail}
								/>
						</div>
					</div>

					{productToShow && (
					<>
					<figure className='px-6'>
						<img
							className='w-full h-full rounded-lg'
							src={productToShow.images[0]}
							alt={productToShow.title} />
					</figure>

					<p className='flex flex-col p-6'>
						<span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
						<span className='font-medium text-md'>${productToShow.title}</span>
						<span className='font-light text-sm'>${productToShow.description}</span>
					</p>
				</>
					)}

				</aside>
			)}
		</>
  )
}