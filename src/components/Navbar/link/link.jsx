import PropTypes from "prop-types";

const Link = ({ route }) => {
  const { path, name } = route;
  return (
    <div>
      <li className=" text-2xl hover:bg-yellow-400  p-2 mr-10 ">
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
