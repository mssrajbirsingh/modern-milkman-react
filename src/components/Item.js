import React from 'react';

class Item extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="pd-card">
            <div class="img">
                    
            </div>
            <div class="pd-info">
              <div class="head-sm">{this.props.item.title}</div>
              <div class="info-txt">${this.props.item.price} {this.props.amount}</div>
              <div class="info-txt">Stock: {this.props.item.stock===0?"Out of stock":this.props.item.stock<10 && this.props.item.stock>0?"Only Few Left":this.props.item.stock} </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default Item