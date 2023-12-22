import PropTypes from "prop-types";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div>
      <h1>name: {name}</h1>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
