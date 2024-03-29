import React, { useState, useEffect } from "react";
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import { DocumentSnapshot } from 'firebase/firestore';

import styles from "./UserProfile.module.scss";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";

function UserProfile() {
    const [profile, setProfile] = useState<DocumentSnapshot | any>();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const user = auth.currentUser;
            if (user) {
                const userProfileRef = doc(db, "users", user.uid);
                const userProfileSnap = await getDoc(userProfileRef);

                if (userProfileSnap.exists()) {
                    setProfile(userProfileSnap.data());
                } else {
                    console.log("User not found");
                }
            }
        };

        fetchUserProfile();
    }, []);
    console.log('Check profile info::>', profile);
    if (!profile) {
        return <div className={styles.container}>Loading user profile...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <img src={user_icon} style={{ width: "30px" }} alt="" />
                    &nbsp; &nbsp;Profile Info
                </div>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <img src={user_icon} alt="" />
                    Name:&nbsp;&nbsp;
                    <input
                        type="text"
                        value={profile?.name}
                    />
                </div>
                <div className={styles.input}>
                    <img src={email_icon} alt="" />
                    UID:&nbsp;&nbsp;
                    <input type="text" value={profile?.uid} disabled />
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
