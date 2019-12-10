import Home from "./Home";
import MessageFeed from "./MessageFeed";
import NotFound from "./NotFound";
import Register from "./Register";
import Profile from "./UserProfileEdit";

export default {
  Home: { path: "/", component: Home },
  MessageFeed: { path: "/MessageFeed/", component: MessageFeed },
  Signup: { path: "/signup", component: Register },
  Profile: { path: "/profile/:username", component: Profile },
  NotFound: { path: "*", component: NotFound }
};
