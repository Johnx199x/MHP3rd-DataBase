import './CustomLoader.css'
const CustomLoader = () => {
  return (
    <div className="custom-loader">
      <div className="loader-content">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Loading...</p>
      </div>
      
    </div>
  );
};

export default CustomLoader;