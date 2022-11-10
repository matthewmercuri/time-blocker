import styles from './Layout.module.scss';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styles.test}>{children}</div>;
};

export default Layout;
