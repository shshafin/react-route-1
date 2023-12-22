import PropTypes from "prop-types";
import Feature from "../feature/feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-gray-500 p-8 rounded-lg flex flex-col ">
      <h1 className="font-extrabold text-center">
        <span className="text-6xl ">{price}</span>
        <span className="text-2xl">/mon</span>
      </h1>

      <p className="text-3xl text-center  my-5 ">{name}</p>

      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-yellow-400 w-full p-2 rounded-lg mt-4 hover:bg-yellow-500 text-lg font-semibold ">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
