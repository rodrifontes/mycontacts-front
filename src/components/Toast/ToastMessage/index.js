import PropTypes from 'prop-types';

import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg'
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg'

export default function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={xCircleIcon} alt="X" />}
      {type === 'sucess' && <img src={checkCircleIcon} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'danger', 'sucess']),
}

ToastMessage.defaultProps = {
  type: 'default',
}
