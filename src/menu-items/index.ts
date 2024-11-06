import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import application from "./application";
import widget from "@/menu-items/widget.ts";

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, widget, application, pages, utilities, other]
};

export default menuItems;
