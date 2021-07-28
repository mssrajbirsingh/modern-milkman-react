import React from 'react';

class Category extends React.Component {
    constructor(props) {
      super(props);
      this.state = { selectedCategory: props.categoryItem.title }
    }
  
    render() {
      let title = this.props.categoryItem.title;
      return (
      <div class="col-lg-3 col-md-4 col-6" onClick={() => this.handleCategoryClick(title)}>
        <div class="cat-card active">
          <div class="img">

          </div>
          <div class="theme-head">{title}</div>
        </div>
      </div>
      )
    }
  
    handleCategoryClick(title) {
      this.props.callback(this.props.categoryItem);
    }
  }

  export default Category