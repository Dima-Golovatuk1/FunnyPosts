import { useProfile } from '../services/profile.service';

import { AiOutlineUser } from "react-icons/ai";
import styles from './profileHeader.module.css'

export function ProfileHeader() {
    const {
        profileData,
        isError,
        isLoading
    } = useProfile()

    const formatNumber = (num: number) =>
        new Intl.NumberFormat('en-US', {
            notation: 'compact',
            compactDisplay: 'short',
            maximumFractionDigits: 1,
        }).format(num);

    if (isLoading) {
        return (
            <section className={styles.posts_loading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (isError || !profileData) {
        return (
            <section className={styles.posts_error}>
                <p>Error loading posts</p>
            </section>
        );
    }

    return (
        <section className={styles.profileHeader}>
            <div className='container'>
                <div className={styles.avatar}>
                    {profileData.picture ? (
                        <img src={profileData.picture} alt={profileData.name} />
                    ) : (
                        <AiOutlineUser className={styles.defaultIcon} />
                    )}
                </div>

                <div className={styles.info}>
                    <h1 className={styles.info__title}>
                        {profileData.name} {profileData.lastName}
                    </h1>

                    {profileData.description && (
                        <p className={styles.info__text}>{profileData.description}</p>
                    )}

                    <button className={styles.info__btn}>
                        [ Edit profile ]
                    </button>
                </div>

                <div className={styles.info_post}>
                    <ul className={styles.info_post__list}>
                        <li className={styles.info_post__item}>
                            <p className={styles.info_post__item__text}>
                                Posts: {formatNumber(28)}
                            </p>
                        </li>
                        <li className={styles.info_post__item}>
                            <p className={styles.info_post__item__text}>
                                Likes: {formatNumber(200000)}
                            </p>
                        </li>
                        <li className={styles.info_post__item}>
                            <p className={styles.info_post__item__text}>
                                Comments: {formatNumber(5213)}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}