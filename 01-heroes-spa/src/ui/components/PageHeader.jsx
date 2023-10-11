import { PropTypes } from 'prop-types'

export const PageHeader = ({title}) => {
	return (<h2 className="border-b border-slate-100 text-2xl leading-tight pb-2 mb-4">{title}</h2>)
}

PageHeader.propTypes = {
	title: PropTypes.string
}