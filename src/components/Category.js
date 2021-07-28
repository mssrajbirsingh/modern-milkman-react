import React from 'react';
import  img2 from '../images/cat-4.jpg'
class Category extends React.Component {
    selected = false;

    constructor(props) {
      super(props);
      this.state = { selectedCategory: props.categoryItem.title }
      this.checkIfSelected = this.checkIfSelected.bind(this);
    }
  
    render() {
      let title = this.props.categoryItem.title;
      this.selected = this.props.selected.filter(c => c.title === this.props.categoryItem.title).length > 0 ? true : false;
      return (
      <div class="col-lg-3 col-md-4 col-6" onClick={() => this.handleCategoryClick(title)}>
        <div className={this.selected?"cat-card active":"cat-card"}  >
          <div class="img">
        
            <img src={img2} alt="Fruits" class="img-fluid"/>    
        
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