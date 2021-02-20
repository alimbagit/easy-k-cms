import React from "react";
import Header from "components/header";
import Footer from "components/footer";

interface ILayoutLeftMenu {
  items?: JSX.Element[];
}

/**Такого шаблона придерживаются все страницы приложения */
const LayoutLeftMenu: React.FC<ILayoutLeftMenu> = ({ items }) => (
  <div>
    {items}
  </div>
);
export default LayoutLeftMenu;
