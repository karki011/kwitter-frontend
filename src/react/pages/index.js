import Home from './Home';
import Profile from './Profile';
import NotFound from './NotFound';
import Register from './Register';
import UserProfileEdit from './UserProfileEdit';

export default {
	Home: { path: '/', component: Home },
	Profile: { path: '/profile/:username', component: Profile },
	Signup: { path: '/signup', component: Register },
	Edit: { path: '/edit/', component: UserProfileEdit },
	NotFound: { path: '*', component: NotFound }
};
