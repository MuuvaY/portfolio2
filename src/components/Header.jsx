import "./../scss/style.scss";
import Button from "./Button";
import logo from "./../assets/img/logo.webp";

function Header() {
  return (
    <>
      <div className="header">
        <h1 className="header__title">Portfolio</h1>
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__buttons">
          <Button />
        </div>
      </div>
      <div className="header__border"></div>
    </>
  );
}

export default Header;
