import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
        <nav>This is the navbar</nav>
      {/* Header */}
      <header className="">
        <h1>Emma's Dashboard</h1>
      </header>
      
      {/* Main content */}
      <main className="flex-1 p-4">{children}</main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-4 text-center">
        <p>© 2025 Emma Fattori</p>
      </footer>
    </div>
  );
};

export default Layout;