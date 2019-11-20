import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import NotFound from "./NotFound";

export default {
  Login: { path: "/", component: Login },
  Home: { path: "/home/:username", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  NotFound: { path: "*", component: NotFound }
};
