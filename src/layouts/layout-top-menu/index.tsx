import React from "react";
import Header from "components/header";
import Footer from "components/footer";

interface ILayoutTopMenu {
  items?: JSX.Element[];
}

/**Такого шаблона придерживаются все страницы приложения */
const LayoutTopMenu: React.FC<ILayoutTopMenu> = ({ items }) => (
  <div>
    {items}
  </div>
);
export default LayoutTopMenu;
