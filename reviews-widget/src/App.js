import React from 'react';
import AppSCSS from './App.module.scss';

class App extends React.Component {
  state = {
    badReviews: 0,
    neutralReviews: 0,
    goodReviews: 0,
    allReviews: 0,
  };

  setStar = (starNumber) => {
    return (
      <>
        <input
          type="radio"
          id={`star-${starNumber}`}
          name="rating"
          value={starNumber}
          className={AppSCSS.rating__item}
          onChange={this.handleChange}
          checked={false}
        />
        <label
          htmlFor={`star-${starNumber}`}
          title={`Star ${starNumber}`}
          className={AppSCSS.rating__label}
        ></label>	
      </>
    )
  };

  handleChange = (event) => {
    const {
      value,
    } = event.target;

    const {
      badReviews,
      neutralReviews,
      goodReviews,
      allReviews,
    } = this.state;

    this.setState({
      allReviews: allReviews + 1,
      badReviews: (+value < 3) ? badReviews + 1 : badReviews,
      neutralReviews: (+value === 3) ? neutralReviews + 1 : neutralReviews,
      goodReviews: (+value >= 4 ) ? goodReviews + 1 : goodReviews,
    });

  }

  render() {
    return (
      <div className={AppSCSS.ReviewsWidget}>
        <h1>
          Reviews widget
        </h1>
        <form>
          <div className={AppSCSS.rating}>
            <div className={AppSCSS.rating__items}>
              {this.setStar(5)}  
              {this.setStar(4)}  
              {this.setStar(3)}  
              {this.setStar(2)}  
              {this.setStar(1)}  
            </div>
          </div>
        </form>
        <div>
          <p>
            {`Bad Reviews: ${this.state.badReviews}`}
          </p>
          <p>
            {`Neutral Reviews: ${this.state.neutralReviews}`}
          </p>
          <p>
            {`Good Reviews: ${this.state.goodReviews}`}:
          </p>
          <p>
            {`All Reviews: ${this.state.allReviews}`}:
          </p>
          <p>
            {`Good reviews in percent: ${(this.state.allReviews)
              ? Math.round((this.state.goodReviews / this.state.allReviews) * 100) 
              : 0}%`}
          </p>
        </div>
      </div>
    );
  }
  
}

export default App;
