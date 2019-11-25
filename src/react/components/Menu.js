import React from 'react';
// import { Link } from '.';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import { withAsyncAction } from '../HOCs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faSignOutAlt, faKiwiBird } from '@fortawesome/free-solid-svg-icons';

class Menu extends React.Component {
	handleLogout = (event) => {
		event.preventDefault();
		this.props.logout();
	};

	render() {
		return (
			<div id="menu">
				<FontAwesomeIcon icon={faKiwiBird} id="kwitterIcon" />
				{this.props.isAuthenticated && (
					<div id="menu-links">
						<div className="link">
							<FontAwesomeIcon icon={faHome} id="smallIcon" />
							<NavLink activeClassName="current" to="/">
								Home
							</NavLink>
						</div>
						<div className="link">
							<FontAwesomeIcon icon={faUser} id="smallIcon" />
							<NavLink activeClassName="current" to="/edit/">
								Profile
							</NavLink>
						</div>

						<div className="link">
							<FontAwesomeIcon icon={faSignOutAlt} id="smallIcon" />
							<NavLink to="/" onClick={this.handleLogout}>
								Logout
							</NavLink>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default withAsyncAction('auth', 'logout')(Menu);
