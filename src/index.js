import React from 'react';
import PropTypes from 'prop-types';
// Code Goes Here
// PROPS
// cone — a boolean indicating if the ice cream should be in a cone, defaults to true
// size — a string to indicate the size of the order, defaults to 'regular'
// scoops — an array of ice cream flavors
// orderInfo — an object containing data about the ice cream order
class Order extends React.Component{
  render(){
    return(
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : ' Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops:
            {this.props.scoops.join(", ")}
          </li>
          <li>Ordered by {this.props.orderInfo.customerName} at
            {this.props.orderInfo.orderedAt}
          </li>
        </ul>
    </div>
    )
  }
}

Order.defaultProps = {
  cone:true,
  size: 'regular'
}

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.array(PropTypes.string).isRequired, // tell it we're expecting an array of strings:
  //React.PropTypes.shape, we can tell our component to expect the prop to have a certain shape:
  // orderInfo: PropTypes.object.isRequired
  orderInfo: PropTypes.object.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired
  }).isRequired
}
