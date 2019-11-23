import Home from './Home';
import Profile from './Profile';
import NotFound from './NotFound';
import Register from './Register';

export default {
	Home: { path: '/', component: Home },
	Profile: { path: '/profile/:username', component: Profile },
	Signup: { path: '/signup', component: Register },
	NotFound: { path: '*', component: NotFound }
};
