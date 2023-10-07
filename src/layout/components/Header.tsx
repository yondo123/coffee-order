import logo from '../../assets/logo.png';
import { Hidden, ImageWrapper } from '../mixins';

export const Header = () => {
  return (
    <header>
      <Hidden>
        <h2>Jiny Cafe</h2>
      </Hidden>
      <ImageWrapper>
        <img src={logo} alt="logo" />
      </ImageWrapper>
    </header>
  );
};
