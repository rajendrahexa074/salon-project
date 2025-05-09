import '../css/Spinner.css';  // Path to your Spinner.css file
import { MoonLoader } from 'react-spinners';

const Spinner = ({ loading = true, size = 60 }) => {
  if (!loading) return null;

  return (
    <div className="spinner-overlay">
      <MoonLoader color="#2563eb" size={size} />
    </div>
  );
};

export default Spinner;
