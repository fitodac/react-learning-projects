import { useContext } from 'react'
import { 
	Link, 
	useParams 
} from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import {
	Layout,
	OrderCard
} from '../../Components'

import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
	const {
		products,
		order
	} = useContext(ShoppingCartContext)

	const currentPath = window.location.pathname
	const params = useParams()

	let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
	console.log('params', params)
	console.log('index', index)
	if (index === 'last') index = order?.length - 1

	return (
		<Layout>
			<div className='flex items-center justify-center relative w-80 mb-6'>
				<Link to='/my-orders' className='absolute left-0'>
					<ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
				</Link>
				<h1>My Order</h1>
			</div>

			<div className='flex flex-col w-80'>
				{
					order?.[index].products.map(product => (
						
						<OrderCard
							key={product.id}
							{...product}
						/>
					))
				}
			</div>
		</Layout>
	)
}

export default MyOrder