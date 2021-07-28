import React from 'react';
import Item from './Item';

class ItemLayout extends React.Component {
    render() {
      if(this.props.categoryItems != undefined) {
        var items = this.props.categoryItems.map(categoryItem => 
          categoryItem.data.map(item => <Item item={item} />)
        );


        //var items = this.props.categoryItems.data.map(item => <Item item={item} />)
        return (
          <div class="cat-detail">
            <div class="row">
              {items}
            </div>
          </div>
        )
        
      }
      return(
        <div>Please select a category</div>
      )
    }
  }

  export default ItemLayout