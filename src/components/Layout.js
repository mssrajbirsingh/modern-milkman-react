import React from 'react';
import Category from './Category';
import ItemLayout from './ItemLayout';
import { connect } from 'react-redux';
import { GET_SITE_DATA } from "../actions/manage-site-action-type";


class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedCategories: [], toggled: true };
    this.selectCategory = this.selectCategory.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount = () => {
    const { data } = this.props;
  };
  render() {
    var categories = this.props.getSiteDataObject.map(category => <Category categoryItem={category} selected={this.state.selectedCategories} callback={this.selectCategory} />)
    return (
      <div class="main">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <div class="container">
          <div class="py-md-5 py-3">
            <div class="mb-5">
              <h2 class="text-center">Test by MSS</h2>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <div class="cat-box">
                  <h2 class="cat-head">Categories</h2>
                  <span class="toggler d-lg-none d-flex" onClick={this.toggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <div className={this.state.toggled ? "cat-body" : "cat-body open"}>
                    <div class="d-flex justify-content-between mb-2">
                      <button class="theme-btn w-100" onClick={(() => {
                        let categories = this.props.getSiteDataObject.map(c => c);
                        this.setState({ selectedCategories: categories });
                      })}>Select All</button>
                      <button class="theme-btn alter w-100" onClick={(() => {
                        this.setState({ selectedCategories: [] });
                      })}>Clear</button>
                    </div>
                    {categories}
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <ItemLayout categoryItems={this.state.selectedCategories} />
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }

  selectCategory(category, cb) {
    let selected = this.state.selectedCategories;

    if (selected.length == 0) {
      cb(true);
      selected.push(category);
    } else {
      if (selected.filter(c => c.title == category.title).length > 0) {
        selected.splice(selected.indexOf(category), 1);
        cb(false);
      } else {
        selected.push(category);
        cb(true);
      }
    }

    this.setState({ selectedCategories: selected });
  }

  toggle() {    
    let status = !this.state.toggled;
    this.setState({toggled: status})
    console.log("toggle", this.status)
  }
}

const mapStateToProps = ({
  ManageSite: { isLoading, getSiteDataObject, getSiteStatus, getSiteError },
}) => ({ isLoading, getSiteDataObject, getSiteStatus, getSiteError });


export default connect(mapStateToProps, { GET_SITE_DATA })(Layout);

