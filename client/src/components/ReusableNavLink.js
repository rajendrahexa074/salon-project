import { useNavigate } from 'react-router-dom';
import '../css/ReusableNavLink.css'; // Make sure this path matches your folder structure

const ReusableNavLink = ({
  to = '/',
  text = 'Navigate',
  className = 'nav-link',
  style = {},
}) => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => navigate(to)}
      className={className}
      style={style}
    >
      {text}
    </span>
  );
};

export default ReusableNavLink;
