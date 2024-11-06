import { navBarData, navBarInsutries, navBarServices } from "../utils/utils";

const NavMenuBar = ({
  navWipeUpOnLoad,
  isActive,
}: {
  navWipeUpOnLoad: boolean;
  isActive: boolean;
}) => {
  const formatData = (dataArray: String[]) => {
    return dataArray?.map((item) => (
      <>
        <span className="nav-italicI-format">/</span>
        <span className="nav-format-text">{item}</span>
      </>
    ));
  };

  return (
    <div
      className={`navbar-content-wrapper ${
        navWipeUpOnLoad === false && isActive === false
          ? "navbar-display-inactive"
          : "navbar-display-active"
      }`}
      transition-style={`${
        navWipeUpOnLoad === false && isActive === false
          ? ""
          : navWipeUpOnLoad === true && isActive === true
          ? "in:wipe:down"
          : "out:wipe:up"
      }`}
    >
      <div className={`nav-div ${isActive && "visible"}`}>
        {/* Nav Bar 4 Box Flex with Image & title */}
        <div className="nav-flex-container">
          {navBarData?.map((data: any, index: number) => (
            <div key={index} className="nav-each-flex-box-container">
              <div className="nav-flex-title">{data?.title}</div>
              <div>
                <img
                  className="nav-flex-image"
                  src={data?.image}
                  alt={data?.title}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="nav-services-industries-wrapper">
          <div>
            <div className="nav-services-title">Services</div>
            <div className="nav-services-text-container">
              {formatData(navBarServices)}
            </div>
          </div>

          <div className="nav-industries-container">
            <div className="nav-industries-title">Industries</div>
            <div className="nav-industries-text-container">
              {formatData(navBarInsutries)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavMenuBar;
