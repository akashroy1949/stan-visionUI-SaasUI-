const TwoLineHamburger = ({
  toggleMenu,
  isActive,
}: {
  toggleMenu: () => void;
  isActive: boolean;
}) => {
  return (
    <div
      role="button"
      className={`hamburger ${isActive ? "active" : "hover"}`}
      onClick={toggleMenu}
    >
      <div className="line line1"></div>
      <div className="line line2"></div>
    </div>
  );
};
export default TwoLineHamburger;
