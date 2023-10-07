import { LayoutContainer } from '../styles/layoutStyle';
import { MENU_LIST } from '../constants';
import { Header } from './Header';
import { Navbar } from './Navbar';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return (
    <LayoutContainer>
      <Header />
      <Navbar navigationList={MENU_LIST} />
      {children}
    </LayoutContainer>
  );
};
