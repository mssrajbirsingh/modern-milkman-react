import React from 'react';
import Category from './Category';
import ItemLayout from './ItemLayout';
import { connect } from 'react-redux';
import { GET_SITE_DATA } from "../actions/manage-site-action-type";


class Layout extends React.Component {
    constructor(props) {

      
      super(props);
      this.state = {selectedCategory: null};
      this.selectCategory = this.selectCategory.bind(this);
    }
    componentDidMount = () => {
     const { data } = this.props;
     console.log(data);
    };
    render() {

 

      var categories = this.props.getSiteDataObject.map(category => <Category categoryItem={category} callback={this.selectCategory} />)
      return(
        <div class="main">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          <div class="container">
            <div class="py-md-5 py-3">
              <div class="row cat-row">
                {categories}
              </div>
              <ItemLayout categoryItem={this.state.selectedCategory} />
              
            </div>
          </div>
        </div>
          )
    }
  
    selectCategory(category) {
      this.setState({selectedCategory: category});
    }
  }

  const mapStateToProps = ({
    ManageSite: { isLoading, getSiteDataObject, getSiteStatus, getSiteError },
  }) => ({ isLoading, getSiteDataObject, getSiteStatus, getSiteError });

  
  export default connect(mapStateToProps, { GET_SITE_DATA })(Layout);
  
