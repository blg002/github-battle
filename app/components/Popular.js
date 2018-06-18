var React = require('react');


class Popular extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			selectedLang: 'All',
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(lang) {
		// this.setState({selectedLang: lang});
		this.setState(function(){
			return {
				selectedLang: lang
			}
		})
	}

	render() {
		var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
		return (
			<ul className='languages'>
				{languages.map(function(lang) {
					this.state.selectedLang
					return (
						<li
							style={lang === this.state.selectedLang ? {color: '#d0021b'} : null}
							onClick={this.updateLanguage.bind(null, lang)}
							key={lang}>
							{lang}
						</li>
					)
				}, this)}
			</ul>
		)
	}
}

module.exports = Popular;
