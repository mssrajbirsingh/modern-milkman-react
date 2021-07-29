import React from 'react';
import Item from './Item';

class ItemLayout extends React.Component {
    render() {
      if(this.props.categoryItems.length > 0) {
        var items = this.props.categoryItems.map(categoryItem => 
          categoryItem.data.map(item => <Item item={item} />)
        );
        //var items = this.props.categoryItems.data.map(item => <Item item={item} />)
        return (
          <div class="cat-detail">
            <div class="row pd-card-row">
              {items}
            </div>
          </div>
        )
        
      }
      return(
        <div class="no-pd-txt"><span>Please select a category</span></div>
      )
    }
  }

  export default ItemLayout