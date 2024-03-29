import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="bg-info">
    <Header />
    <div className="p-10">{props.children}</div>
  </div>
);

export default Layout;
