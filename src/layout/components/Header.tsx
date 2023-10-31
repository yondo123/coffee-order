import logo from '../../assets/logo.png';
import { Heading } from './Heading';
import { Image } from './Image';
import { Hidden } from '../mixins';

export const Header = () => {
  return (
    <header>
      <Hidden>
        <Heading size="xl">Jiny Cafe</Heading>
      </Hidden>
      <Image src={logo} alt="logo" width={128} height={75} />
    </header>
  );
};
