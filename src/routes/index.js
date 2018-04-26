import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Home from './Home';
import Guide from './Guide';
import Community from './Community';
import Studio from './Studio';
import Upload from './Upload';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Video from './Video';
import Signout from './Signout';
import MyVideos from './MyVideos';
import Settings from './Settings';

import Billing from './settingsSub/Billing';
import MyAccount from './settingsSub/MyAccount';

import ProfileVideos from './profileSub/ProfileVideos';
import ProfileAbout from './profileSub/ProfileAbout';
import ProfileLeaderboard from './profileSub/ProfileLeaderboard';
import ProfileFollowers from './profileSub/ProfileFollowers';
import ProfileFeed from './profileSub/ProfileFeed';
import ProfileChannels from './profileSub/ProfileChannels';

export default() => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/watch/:video_id" exact component={Video}/>
			<Route path="/login" exact component={Login}/>
			<Route path="/login/:error" exact component={Login}/>
			<Route path="/register" exact component={Register}/>
			<Route path="/register/:error" exact component={Register}/>
			<Route path="/profile" exact component={ProfileFeed}/>
			<Route path="/profile/feed" exact component={ProfileFeed}/>
			<Route path="/profile/videos" exact component={ProfileVideos}/>
			<Route path="/profile/leaderboard" exact component={ProfileLeaderboard}/>
			<Route path="/profile/channels" exact component={ProfileChannels}/>
			<Route path="/profile/followers" exact component={ProfileFollowers}/>
			<Route path="/profile/about" exact component={ProfileAbout}/>
			<Route path="/guide" exact component={Guide}/>
			<Route path="/community" exact component={Community}/>
			<Route path="/studio" exact component={Studio}/>
			<Route path="/upload" exact component={Upload}/>
			<Route path="/signout" exact component={Signout} />
			<Route path="/settings" exact component={MyAccount}/>
			<Route path="/settings/billing" exact component={Billing}/>
			<Route path="/myvideos" exact component={MyVideos} />
			<Redirect from='*' to="/" />
		</Switch>
	</BrowserRouter>
);
