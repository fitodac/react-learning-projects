import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '..'

export const LoginPage = () => {

	const { login } = useContext(AuthContext)
	const navigate = useNavigate()

	const onLogin = () => {
		const lastPath = localStorage.getItem('lastPath') || '/'
		login('John Doe')		
		navigate(lastPath, {replace: true})

	}


	return (
	<>
		<div className="grid place-content-center h-screen">
			<div className="bg-slate-50 text-center w-fit p-10 mt-5 grid space-y-4 rounded-lg">
				<div>Login page</div>

				<button
					onClick={onLogin}
					className="bg-slate-400 text-white px-14 py-2 rounded">
					LogIn
				</button>
			</div>
		</div>
	</>
	)
}