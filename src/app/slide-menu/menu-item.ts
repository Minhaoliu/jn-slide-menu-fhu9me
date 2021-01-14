
export interface MenuItem {
  label?: string;
  icon?: string;
  items?: MenuItem[]
  action?: (MenuItem) => void;
}
