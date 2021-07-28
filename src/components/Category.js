import React from 'react';

class Category extends React.Component {
    selected = false;

    constructor(props) {
      super(props);
      this.state = { selectedCategory: props.categoryItem.title }
      this.checkIfSelected = this.checkIfSelected.bind(this);
    }
  
    render() {
      let title = this.props.categoryItem.title;
      this.selected = this.props.selected.filter(c => c.title == this.props.categoryItem.title).length > 0 ? true : false;
      return (
      <div className={this.selected?"col-lg-3 col-md-4 col-6 selected":"col-lg-3 col-md-4 col-6"} onClick={() => this.handleCategoryClick(title)}>
        <div class="cat-card active">
          <div class="img">

          </div>
          <div class="theme-head">{title}</div>
        </div>
      </div>
      )
    }
  
    handleCategoryClick(title) {
      this.props.callback(this.props.categoryItem, this.checkIfSelected);
    }

    checkIfSelected(status) {
      this.selected = status;
    }
  }

  export default Category