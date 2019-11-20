import Home from "./Home";
import MessageFeed from "./MessageFeed";
import Profile from "./Profile";
import NotFound from "./NotFound";

export default {
  Home: { path: "/", component: Home },
  MessageFeed: { path: "/messagefeed/:username", component: MessageFeed },
  Profile: { path: "/profile/:username", component: Profile },
  NotFound: { path: "*", component: NotFound }
};
