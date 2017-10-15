import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import BuyItemsComponent from './BuyItemsComponent';

const mapStateToProps = (state) => ({
  items: state.items.items,
});

export default withRouter(connect(mapStateToProps,null)(BuyItemsComponent));
