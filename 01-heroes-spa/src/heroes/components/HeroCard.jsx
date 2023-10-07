import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const CharactersByHero = ({alter_ego, characters}) => {
	return alter_ego === characters
		? (<div className="text-slate-400 text-sm leading-none mt-2">{characters}</div>)
		: (<></>)
}


export const HeroCard = ({
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters
}) => {
	
	const heroImagePath = `/heroes/${id}.jpg`

	return (
		<div className="border border-slate-100 w-72 mx-auto flex flex-col select-none shadow-xl rounded md:w-full">
			<img 
				src={heroImagePath}
				className="w-full h-72 object-cover object-top rounded-t" 
				alt={superhero} />
			
			<div className="flex flex-col justify-between flex-1 p-4">
				<div className="">
					<h3 className="font-semibold">{superhero}</h3>
					<div className="text-slate-600 text-sm font-medium">{alter_ego}</div>
					<CharactersByHero characters={characters} alter_ego={alter_ego} />
					<div className="text-slate-400 text-xs leading-none mt-2">{first_appearance}</div>
				</div>

				<div className="mt-5">
					<Link 
						className="bg-slate-500 text-slate-300 text-sm text-center w-full p-2 block select-none rounded"
						to={`/hero/${id}`}>Más información</Link>
				</div>
			</div>

		</div>
	)
}


HeroCard.propTypes = {
	id: PropTypes.string,
	superhero: PropTypes.string,
	alter_ego: PropTypes.string,
	first_appearance: PropTypes.string,
	characters: PropTypes.string,
}

CharactersByHero.propTypes = {
	alter_ego: PropTypes.string,
	characters: PropTypes.string,
}