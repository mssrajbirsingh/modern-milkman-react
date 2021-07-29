import React from 'react';
import  img2 from '../images/cat-5.jpg'
class Item extends React.Component {
    render() {
      return (
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <div class="pd-card">
            <div class="img">
            <img src={img2} alt="Fruits" class="img-fluid"/>    
            </div>
            <div class="pd-info">
              <div class="head-sm">{this.props.item.title}</div>
              <div class="info-txt">£{this.props.item.price} {this.props.amount}</div>
              <div class="info-txt">Stock: {this.props.item.stock===0?"Out of stock":this.props.item.stock<10 && this.props.item.stock>0?"Only Few Left":this.props.item.stock} </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default Item