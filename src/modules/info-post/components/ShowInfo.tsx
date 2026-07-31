import { Link } from "react-router-dom";
import { useGetPost } from "../services/post.service";
import { MediaSlider } from "./MediaSlider";
import { AiOutlineLike, AiFillLike, AiOutlineComment } from "react-icons/ai";


import styles from './showInfo.module.css'
import { useIsHasLike } from "../services/isHasLike.service";
import { useSendLike } from "../services/sendLike.service";

interface ShowInfoProps {
    id: string;
}

export function ShowInfo({ id }: ShowInfoProps) {

    const { post, isLoading: isPostLoading, isError: isPostError } = useGetPost(id);

    const { data: hasLike } = useIsHasLike(id);

    const { sendLike, status: statusLike } = useSendLike(id)

    if (isPostLoading) {
        return (
            <p>Load...</p>
        )
    }

    if (!post) {
        return (
            <p>Post not found</p>
        )
    }

    if (isPostError) {
        return (
            <p>Something went wrong</p>
        )
    }

    return (
        <section className={styles.post}>
            <div className="container">
                <div className={styles.post__media__div}>
                    <MediaSlider mediaList={post.media}></MediaSlider>
                </div>
                <h2 className={styles.post__tiitle}>
                    {post.title}
                </h2>
                <p className={styles.post__text}>
                    {post.description}
                </p>
                <div className={styles.tools__div}>
                    <button onClick={() => sendLike()} disabled={statusLike === 'pending'}>
                        {hasLike
                            ? <AiFillLike className={`${styles.like__btn} ${styles.tools__div__dtn}`} />
                            : <AiOutlineLike className={`${styles.like__btn} ${styles.tools__div__dtn}`} />}
                    </button>
                    <button>
                        <AiOutlineComment className={`${styles.like__btn} ${styles.tools__div__dtn}`} />
                    </button>
                    <Link className={styles.post__author} to={``}>
                        <img className={styles.post__author__img} src={post?.author.picture} alt={post?.author.name} />
                    </Link>
                </div>
            </div>
        </section>
    )
}