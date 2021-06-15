import spinnerStyles from './WithSpinner.module.scss';

const WithSpinner =
  WrapperComponent =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className={spinnerStyles.spinnerContainer}>
        <div className={spinnerStyles.spinner} />
      </div>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };

export default WithSpinner;
