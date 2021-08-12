import React from 'react';
import PropTypes from 'prop-types';
import './FreteComponent.css';

class FreteComponent extends React.Component {
  render() {
    const { frete } = this.props;

    const haveFrete = frete ? <p data-testid="free-shipping">frete Grátis</p> : <p />;

    return (
      <div
        className="frete-container"
      >
        {haveFrete}
      </div>
    );
  }
}

FreteComponent.propTypes = {
  frete: PropTypes.bool,
};

FreteComponent.defaultProps = {
  frete: false,
};

export default FreteComponent;
