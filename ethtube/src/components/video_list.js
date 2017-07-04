import React from 'react';
import{ ListGroup, ListGroupItem } from 'react-bootstrap';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItens = props.videos.map((video) => {
    return(
        <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect}/>
    )
  });

  return(
    <div>
      <ListGroup>
        {videoItens}
      </ListGroup>
    </div>
  );
}

export default VideoList;
