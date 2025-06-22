import './UnderConstruction.css'
const UnderConstruction = ({ 
  title = "Work in Progress",
  message = "This page is under development."
}) => {
  return (
    <div className="under-construction">
      <div className="uc-content">
        <div className="uc-icon">
          <div className="gear">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <h2 className="uc-title">{title}</h2>
        <p className="uc-message">{message}</p>
        <div className="uc-progress">
          <div className="uc-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;