import logo from '../../assets/logo.png';
import { Heading } from './Heading';
import { Hidden, ImageWrapper } from '../mixins';

export const Header = () => {
  return (
    <header>
      <Hidden>
        <Heading size="xl">Jiny Cafe</Heading>
      </Hidden>
      <ImageWrapper>
        <img src={logo} alt="logo" width={128} height={75} />
      </ImageWrapper>
    </header>
  );
};
