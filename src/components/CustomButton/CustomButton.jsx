import customButtonStyles from './CustomButton.module.scss';

const CustomButton = ({ handleClick, children }) => {
  return (
    <button className={customButtonStyles.customButton} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
