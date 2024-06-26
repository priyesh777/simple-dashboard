import { useMemo, useState } from "react";
import styles from "./Navbar.module.scss";
import { MdNotifications } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import Notification from "../../components/Notification/Notification";
import NavbarDropdown from "../../components/NavbarDropdown/NavbarDropdown";
import { TextInput } from "@tremor/react";
import { HiSearch } from "react-icons/hi";
import profileImg from "../../assets/avatar.jpg";
import ProfileDropdown from "../../components/ProfileDropdown/ProfileDropdown";

type Props = {
    activeMenu: boolean;
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ activeMenu, setActiveMenu }: Props) {
    const [notifToggle, setNotifToggle] = useState(false);
    const [themeModalToggle, setThemeModalToggle] = useState(false);
    const [dropdownToggle, setDropdownToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);

    const handleMenuToggle = () => setActiveMenu((prevMenu) => !prevMenu);
    const handleNotifToggle = () => setNotifToggle((prevToggle) => !prevToggle);
    const handleThemeModalToggle = () =>
        setThemeModalToggle((prevToggle) => !prevToggle);
    const handleDropdownToggle = () =>
        setDropdownToggle((prevToggle) => !prevToggle);
    const handleProfileToggle = () =>
        setProfileToggle((prevToggle) => !prevToggle);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleAutoCloseMenus = useMemo(() => {
        // Closed any open menu's when sidebar is activ
        if (activeMenu) {
            setDropdownToggle(false);
            setNotifToggle(false);
            setThemeModalToggle(false);
            setProfileToggle(false);
        }
    }, [activeMenu]);

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbar__container}>
                    {/* Menu Button  */}
                    <div className={styles.navbar__menu}>
                        <button
                            className={styles.navbar__container__menubtn}
                            type="button"
                            onClick={handleMenuToggle}
                        >
                            <AiOutlineMenu />
                        </button>
                        <div className={styles.navbar__search}>
                            <TextInput icon={HiSearch} placeholder="Search..." />
                        </div>
                    </div>

                    {/* Nav Container */}
                    {/* Notification */}
                    <div className={styles.navbar__items}>
                        <button
                            type="button"
                            className={styles.navbar__items__btn}
                            onClick={handleNotifToggle}
                        >
                            <MdNotifications />
                        </button>
                        {notifToggle && <Notification />}
                        {/* Extends */}
                        <button
                            type="button"
                            className={`${styles.navbar__items__btn} ${styles.navbar__items__extend}`}
                            onClick={handleDropdownToggle}
                        >
                            <FiMoreVertical />
                        </button>
                        {dropdownToggle && <NavbarDropdown />}

                        {/* Profile */}
                        <button
                            type="button"
                            className={styles.profile_btn}
                            onClick={handleProfileToggle}
                        >
                            <img src={profileImg} alt="" />
                            <p>USER NAME</p>
                        </button>
                        {profileToggle && <ProfileDropdown />}
                    </div>
                </div>
            </div>
            {activeMenu && (
                <div
                    className={styles.overlay}
                    onClick={() => setActiveMenu(false)}
                ></div>
            )}
        </>
    );
}

export default Navbar;
