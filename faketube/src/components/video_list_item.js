import React from 'react';
import { Media, Image, ListGroupItem } from 'react-bootstrap';

const VideoListItem = (({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <ListGroupItem onClick={() => onVideoSelect(video)}>
      <Media>
         <Media.Left>
            <img width={64} height={64} src={imageUrl}/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{video.snippet.title}</Media.Heading>
            <p>{video.snippet.publishedAt}</p>
          </Media.Body>
    </Media>
  </ListGroupItem>
  )
})

export default VideoListItem;
