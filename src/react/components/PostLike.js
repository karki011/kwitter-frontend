import React from 'react';
import { withAsyncAction } from '../HOCs';
import { Button, Icon } from 'semantic-ui-react';

class PostLike extends React.Component {
	render() {
		return (
			<Button>
				<Icon name="thumbs up outline" />Like
			</Button>
		);
	}
}

export default withAsyncAction('likes', 'postLike')(PostLike);
// export default PostLike;
