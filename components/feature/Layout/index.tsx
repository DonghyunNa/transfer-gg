function Layout({ children }: { children: JSX.Element }) {
  return <div className='sm:max-w-md max-w-full mx-auto py-5'>{children}</div>;
}

export default Layout;
