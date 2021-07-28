import React from 'react';
import Item from './Item';

class ItemLayout extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      if(this.props.categoryItem != undefined) {
        var items = this.props.categoryItem.data.map(item => <Item item={item} />)
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