import React from 'react';
import CarouselThumbnail from './carousel-thumbnail';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMoveBlock: ''
    };
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
  }

  handleClickNext() {
    this.setState({ toggleMoveBlock: 'move-right' });
  }

  handleClickPrev() {
    this.setState({ toggleMoveBlock: '' });
  }

  createFirstCarouselThumbnailBlock() {
    const firstThreeImages = this.props.images.slice(0, 3);
    const thumbnail = firstThreeImages.map(image => {
      return <CarouselThumbnail key={image} image={image} />;
    });
    return thumbnail;
  }

  createSecondCarouselThumbnailBlock() {
    const firstThreeImages = this.props.images.slice(3, 6);
    const thumbnail = firstThreeImages.map(image => {
      return <CarouselThumbnail key={image} image={image} />;
    });
    return thumbnail;
  }

  render() {
    return (
      <div className="col-12 align-content-center d-flex border-top mt-4 py-3">
        <button id="prev" className="btn carousel-button" onClick={ this.handleClickPrev }>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="carousel-container ">
          <div id="carouselBox" className={`carousel-box d-flex ${this.state.toggleMoveBlock}`}>
            <div className="image-block d-flex justify-content-around">
              {this.createFirstCarouselThumbnailBlock()}
            </div>
            <div className="image-block d-flex justify-content-around">
              {this.createSecondCarouselThumbnailBlock()}
            </div>
          </div>
        </div>
        <button id="next" className=" btn carousel-button" onClick={ this.handleClickNext }>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  }
}
