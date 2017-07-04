import React from 'react';
import { ResponsiveEmbed, Media } from 'react-bootstrap';

const VideoMain = ({video}) => {

    if(!video){
      return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`

  return(
    <div>
      <ResponsiveEmbed a16by9={true}>
        <iframe src={url}></iframe>
      </ResponsiveEmbed>
      <Media>
        <Media.Heading>{video.snippet.title}</Media.Heading>
        <div>{video.snippet.description}</div>
      </Media>

    </div>
  )

}

export default VideoMain;
