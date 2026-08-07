import { Link } from "react-router-dom";
import { useGetPost } from "../services/post.service";
import { MediaSlider } from "./MediaSlider";
import { Comment } from "./Comment";
import { AiOutlineLike, AiFillLike, AiOutlineComment } from "react-icons/ai";


import styles from './showInfo.module.css'
import { useIsHasLike } from "../services/isHasLike.service";
import { useSendLike } from "../services/sendLike.service";
import { useState } from "react";

interface ShowInfoProps {
    id: string;
}

export function ShowInfo({ id }: ShowInfoProps) {

    const { post, isLoading: isPostLoading, isError: isPostError } = useGetPost(id);

    const { data: hasLike } = useIsHasLike(id);

    const { sendLike, status: statusLike } = useSendLike(id)

    const [isOpenComments, setIsOpenComments] = useState(false)

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
                    <button onClick={() => setIsOpenComments(!isOpenComments)}>
                        <AiOutlineComment className={`${styles.like__btn} ${styles.tools__div__dtn}`} />
                    </button>
                    <Link className={styles.post__author} to={``}>
                        <img className={styles.post__author__img} src={post?.author.picture} alt={post?.author.name} />
                    </Link>
                </div>
            </div>
            {isOpenComments && (
                <div className={styles.post__comments__div}>
                    <div className={styles.post__comments}>
                        <Comment postId={id} setIsOpenComments={setIsOpenComments}/>
                    </div>
                </div>
            )}
        </section>
    )
}