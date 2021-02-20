import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import LayoutTopMenu from "layouts/layout-top-menu";
import LayoutLeftMenu from "layouts/layout-left-menu";

interface ILayoutPage {
  children: JSX.Element;
}

/**Такого шаблона придерживаются все страницы приложения */
const LayoutPage: React.FC<ILayoutPage> = ({ children }) => (
  <div>
    <Header />
    <LayoutTopMenu />
    <LayoutLeftMenu />
    {children}
    <Footer/>
  </div>
);
export default LayoutPage;
