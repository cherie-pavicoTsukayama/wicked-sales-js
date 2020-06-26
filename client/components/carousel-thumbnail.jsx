import React from 'react';

export default function CarouselThumbnail(props) {
  return (
    <div key={props.image} className="thumbnail-container align-self-center">
      <img className="thumbnail p-2" src={ props.image } alt=""/>
    </div>
  );
}
