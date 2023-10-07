import { useMemo } from 'react'
import { PropTypes } from 'prop-types'

import { 
	getHeroesByPublisher,
	HeroCard
} from '..'

export const HeroesList = ({publisher}) => {
	
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

	return (
	<>
		<div className="">
			<div className="grid gap-10 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4 lg:gap-x-8 xl:grid-cols-5 xl:gap-x-10">
				{heroes.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</div>
	</>
	)
}


HeroesList.propTypes = {
	getHeroesByPublisher: PropTypes.string,
	HeroCard: PropTypes.object,
	publisher: PropTypes.string
}