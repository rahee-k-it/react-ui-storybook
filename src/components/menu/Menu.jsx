import Button from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faEllipsis,
  faEllipsisVertical,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';

const MenuTypes = {
  hamberger: faBars,
  kebab: faEllipsisVertical,
  meatballs: faEllipsis,
  doner: faFilter,
};

const Menu = ({ type = 'hamberger', ...others }) => {
  return (
    <Button {...others}>
      <FontAwesomeIcon icon={MenuTypes[type]} />
    </Button>
  );
};

export default Menu;
