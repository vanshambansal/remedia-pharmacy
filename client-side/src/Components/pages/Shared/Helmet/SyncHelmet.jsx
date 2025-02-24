
import PropTypes from 'prop-types'; // ES6
import { Helmet} from "react-helmet-async";

const SyncHelmet = ({loc}) => {
  return (
    <div>
      <Helmet>
        <title>Remedia Pharmaceuticals | {loc}</title>
      </Helmet>
    </div>
  );
}
SyncHelmet.propTypes = {
  loc: PropTypes.string,
};

export default SyncHelmet