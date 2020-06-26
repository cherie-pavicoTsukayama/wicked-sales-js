import React from 'react';

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

  render() {
    return (
      <div className="row">
        <button id="prev" className="btn carousel-button" onClick={ this.handleClickPrev }>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="carousel-container">
          <div id="carouselBox" className={`carousel-box d-flex ${this.state.toggleMoveBlock}`}>
            <div className="siblings image-block block-one">
            </div>
            <div className="siblings image-block block-two">
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
