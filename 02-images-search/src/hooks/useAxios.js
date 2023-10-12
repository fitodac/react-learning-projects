import PropTypes from 'prop-types'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'


export const useAxios = ({ 
	url, 
	method = 'GET',
	headers = null,
	body = null,
	token = null,
	initialLoading = false,
	init = 1 // Set "init" to zero to disable the auto-execution of this hook
}) => {

	const [response, setResponse] = useState({})
	const [loading, setLoading] = useState(initialLoading)
	const [error, setError] = useState(false)
	const [reload, setReload] = useState(init)

	const refetch = useCallback(async () => {
		setReload(prev => prev + 1)
	}, [])

	useEffect(() => {
		if( reload ){
			setLoading(true)
			const fetchData = () => {
				axios.request({
					url,
					method,
					data: body, 
					headers: {...headers, Authorization: token}
				})
				.then(resp => setResponse(resp.data))
				.catch(err => {
					console.log('error', err)
					setError(err.response)
				})
				.finally(() => setLoading(false))
			}

			try {
				// if( !token ) setError(NoToken())
				fetchData()
			}catch(err){
				console.log('Error:', err)
				throw new Error(err)
			}
		}
		// eslint-disable-next-line
	}, [reload])

	return { response, error, loading, refetch }

}


useAxios.propTypes = {
	url: PropTypes.string.isRequired,
	method: PropTypes.string,
	headers: PropTypes.object
}