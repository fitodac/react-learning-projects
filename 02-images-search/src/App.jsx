
import { useState, useEffect, useCallback } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useAxios } from './hooks/useAxios'

const IMAGES_PER_PAGE = 15

export default function App() {

	const [ inputState, setInputState ] = useState('')
	const [ page, setPage ] = useState(1)

	const {
		response, 
		// error, 
		loading, 
		refetch
	} = useAxios({
		url: `https://api.unsplash.com/search/photos?query=${inputState}
					&page=${page}
					&per_page=${IMAGES_PER_PAGE}
					&client_id=${import.meta.env.VITE_API_KEY}`,
		init: 0
	})

	const fetchImages = useCallback(() => refetch(), [refetch])
	
	useEffect(() => {
		fetchImages()
	}, [page, fetchImages])
		// eslint-disable-next-line react-hooks/exhaustive-deps

	const onSearchInputChange = e => {
		const {value} = e.target
		setInputState(value)
	}

	const resetSearch = () => {
		setPage(1)
		fetchImages()
	}

	const handleSearch = (e) => {
    e.preventDefault()
		resetSearch()
  }

	const handleSelection = selection => {
		setInputState(selection)
		resetSearch()
	}

	return (
		<div className="container">

			<h1 className="title">Image Search</h1>

			<div className="search-section">
				<Form onSubmit={handleSearch}>
					<Form.Control
						type="search"
						placeholder="Type something to search..."
						className="search-input"
						value={inputState}
						onChange={onSearchInputChange}
					/>
				</Form>
			</div>

			<div className="filters">
				<div onClick={() => handleSelection('nature')}>Nature</div>
				<div onClick={() => handleSelection('birds')}>Birds</div>
				<div onClick={() => handleSelection('cats')}>Cats</div>
				<div onClick={() => handleSelection('shoes')}>Shoes</div>
			</div>

			{loading 
			? (<p className="loading">loading...</p>)
			: response?.results 
				&& (<>
					<div className="images">
						{response.results.map(({id, urls: {small}, alt_description}) => (
								<img 
									key={id} 
									src={small} 
									alt={alt_description} 
									className="image" />
							))}
					</div>


					<div className="buttons">
						{ page > 1 && (<Button onClick={() => setPage(page - 1)}>Previous</Button>)}
						{ page < response.total_pages && (<Button onClick={() => setPage(page + 1)}>Next</Button>)}
					</div>
				</>)}
			

		</div>
	)
}
