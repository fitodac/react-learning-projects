import { useContext } from 'react'
import { 
	Layout,
	Card,
	ProductDetails
} from '../../Components'
import { ShoppingCartContext } from '../../Context'

function Home() {
	
	const {
		items,
		searchByTitle,
		setSearchByTitle,
		filteredItems
	} = useContext(ShoppingCartContext)

	const renderView = () => {
		if (filteredItems?.length > 0) {
			return (
				filteredItems?.map(item => (
					<Card key={item.id} data={item} />
				))
			)
			} else {
				return (<div>We don't have anything :(</div>)
		}
	}


	return (
		<Layout>
			<div className='flex items-center justify-center relative w-80 mb-4'>
				<h1 className='font-medium text-xl'>Exclusive Products</h1>
			</div>

			<input
				type="text"
				placeholder='Search a product'
				className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
				onChange={(event) => setSearchByTitle(event.target.value)} />

			<div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-6'>
				{renderView()}
			</div>

			<ProductDetails />

		</Layout>
	)
}

export default Home