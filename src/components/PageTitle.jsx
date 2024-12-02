/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;