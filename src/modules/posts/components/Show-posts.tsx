import { useEffect, useRef } from "react";
import { usePosts } from "../services/posts.service";
import { Link } from "react-router-dom";

import styles from'./Show-posts.module.css';

export function ShowPosts() {
    const {
        posts,
        isLoading,
        isError,
        error,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = usePosts(5);

    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!hasNextPage || isFetchingNextPage) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchNextPage();
                }
            },
            {
                threshold: 0.1,
            }
        );

        const currentTarget = observerRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    if (isError) {
        console.error(error);
        return (
            <section className={styles.posts_status}>
                <p>Error loading posts</p>
            </section>
        );
    }

    if (isLoading) {
        return (
            <section className={styles.posts_status}>
                <p>Loading...</p>
            </section>
        );
    }

    if (posts.length === 0) {
        return (
            <section className={styles.posts_status}>
                <p>There are no posts</p>
            </section>
        );
    }

    return (
        <section className={styles.posts}>
            <div className={styles.container}>
                <ul className={styles.posts__list}>
                    {posts.map((post) => (
                        <li className={styles.posts__item} key={post.id}>
                            <Link className={styles.post__link} to={`/posts/${post.id}`}>
                                <img
                                    className={styles.posts__item__img}
                                    src={post.coverUrl}
                                    alt={post.title}
                                />
                                <h2 className={styles.posts__item__title}>{post.title}</h2>
                            </Link>

                            <Link className={styles.author__link} to={`/users/${post.author.id}`}>
                                <img
                                    className={styles.author__link__img}
                                    src={post.author.picture}
                                    alt={post.author.name}
                                />
                                <p className={styles.author__link__text}>{post.author.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div ref={observerRef} style={{ height: "20px", marginTop: "20px" }}>
                    {isFetchingNextPage && (
                        <p style={{ textAlign: "center", color: "#666" }}>Loading more...</p>
                    )}
                </div>
            </div>
        </section>
    );
}