import * as SC from "./Logo.styled";
import logoIcon from "images/logo-2.png";

export default function Logo() {
  return (
    <SC.LogoLink>
      <SC.LogoIcon src={logoIcon} />
    </SC.LogoLink>
  );
}
