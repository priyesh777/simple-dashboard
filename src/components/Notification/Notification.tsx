import styles from "./Notification.module.scss";
import { notificationData } from "./NotficationData";

function Notification() {
    const notificationElement = notificationData.map((data, i) => {
        return (
            <div className={styles.notification__item} key={i}>
                <img src={data.profileImage} alt="profile" />
                <div className={styles.notification__item__content}>
                    <p>{data.title}</p>
                    <p>{data.text}</p>
                </div>
                <p className={styles.notification__item_date}>{data.date}</p>
            </div>
        );
    });

    return (
        <div className={styles.notification}>
            <div className={styles.notification__header}>
                <h2>Notification</h2>
                <p>3 New</p>
            </div>
            {notificationElement}
            <div className={styles.notification__read}>
                <a href="##">Read all notifications</a>
            </div>
        </div>
    );
}

export default Notification;
