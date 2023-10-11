import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth'

const itemClassName = 'text-sm leading-tight select-none'
const itemColor = 'text-slate-400'
const itemColorActive = 'text-slate-200'

export const Navbar = () => {

	const navigate = useNavigate()
	const { user, logout } = useContext(AuthContext)

	const onLogout = () => {
		logout()
		navigate('/login', {replace: true})
	}


	return (
		<div className="bg-slate-800 border-b-2 border-yellow-500 px-6 py-3 flex gap-x-6 items-center justify-between">
			<nav className="flex gap-x-3 items-center">
					
				<Link 
					className="text-yellow-500"
					to="/">
					Asociaciones
				</Link>

				<NavLink 
					className={({isActive}) => `${itemClassName} ${isActive ? itemColorActive : itemColor}`} 
					to="/marvel">
					Marvel
				</NavLink>

				<NavLink 
					className={({isActive}) => `${itemClassName} ${isActive ? itemColorActive : itemColor}`} 
					to="/dc">
					DC
				</NavLink>
				
				<NavLink 
					className={({isActive}) => `${itemClassName} ${isActive ? itemColorActive : itemColor}`} 
					to="/search">
					Search
				</NavLink>
				
			</nav>

			<div className="flex gap-x-3 items-center">
				{user 
				? (
					<div className="text-slate-400 text-sm flex gap-x-3 items-center select-none">
						<span className="text-xs">{user?.name}</span>
						<button onClick={onLogout}>Logout</button>
					</div>
				)
				: (
					<NavLink 
						className={({isActive}) => `${itemClassName} ${isActive ? itemColorActive : itemColor}`} 
						to="/login">
						Login
					</NavLink>
				)}
			</div>
		</div>
	)
}