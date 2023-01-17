import styles from "./Sidebar.module.css";
import SidebarLink from "./Subcomponents/SidebarLink/SidebarLink";

const Sidebar = (props) => {
  return (
    <nav className={styles.sidebar}>
      <SidebarLink url={`profile/id${props.id}`} title="Профиль"></SidebarLink>
      <SidebarLink url={`trends`} title="Тренды"></SidebarLink>
      <SidebarLink url={`dialogs`} title="Сообщения"></SidebarLink>
      <SidebarLink url={`users`} title="Друзья"></SidebarLink>
      <SidebarLink url={`settings`} title="Настройки"></SidebarLink>
    </nav>
  );
};
export default Sidebar;
