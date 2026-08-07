import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { useGetComment } from "../services/getComment.service";

import styles from "./comment.module.css";
import { useSendComment } from "../services/sendComment.service";

interface CommentProps {
    postId: string;
    setIsOpenComments: (isOpen: boolean) => void;
}

export function Comment({ postId, setIsOpenComments }: CommentProps) {
    const { comments, isError, isLoading } = useGetComment(postId);

    const [textComment, setTextComment] = useState("");

    const { sendComment, status: statusComment } = useSendComment(postId, textComment)

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
        const textarea = textareaRef.current;

        if (!textarea) return;

        textarea.style.height = "auto";

        const maxHeight = 144;

        if (textarea.scrollHeight > maxHeight) {
            textarea.style.height = `${maxHeight}px`;
            textarea.style.overflowY = "auto";
        } else {
            textarea.style.height = `${textarea.scrollHeight}px`;
            textarea.style.overflowY = "hidden";
        }
    };

    if (isLoading) {
        return <p>Load...</p>;
    }

    if (isError) {
        return <p>Something went wrong</p>;
    }

    if (!comments || comments.length === 0) {
        return (
            <div className={styles.comments}>
                <button
                    onClick={() => setIsOpenComments(false)}
                    className={styles.comments__close}
                    type="button"
                >
                    <AiOutlineClose className={styles.comments__icon__close} />
                </button>

                <div className={styles.comments__list}>
                    <p>No comments yet.</p>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (!textComment.trim()) return;

                        sendComment();

                        setTextComment("");
                        if (textareaRef.current) {
                            textareaRef.current.style.height = "auto";
                        }
                    }}
                    className={styles.comments__form}>
                    <textarea
                        ref={textareaRef}
                        value={textComment}
                        className={styles.comments__textarea}
                        placeholder="Write a comment..."
                        rows={1}
                        onChange={(e) => setTextComment(e.target.value)}
                        onInput={handleInput}
                    />

                    <button
                        className={styles.comments__button}
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className={styles.comments}>
            <button
                onClick={() => setIsOpenComments(false)}
                className={styles.comments__close}
                type="button"
            >
                <AiOutlineClose className={styles.comments__icon__close} />
            </button>

            <ul className={styles.comments__list}>
                {comments.map((comment) => (
                    <li key={comment.id} className={styles.comment}>
                        <Link className={styles.comment__avatar} to="">
                            <img
                                src={comment.user.picture}
                                alt={comment.user.name}
                            />
                        </Link>

                        <div className={styles.comment__content}>
                            <div className={styles.comment__header}>
                                <Link
                                    className={styles.comment__author}
                                    to=""
                                >
                                    {comment.user.name}
                                </Link>

                                <span className={styles.comment__date}>
                                    {new Date(comment.createdAt).toLocaleDateString()}
                                </span>
                            </div>

                            <p className={styles.comment__text}>
                                {comment.text}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!textComment.trim()) return;

                    sendComment();

                    setTextComment("");
                    if (textareaRef.current) {
                        textareaRef.current.style.height = "auto";
                    }
                }}
                className={styles.comments__form}>
                <textarea
                    ref={textareaRef}
                    value={textComment}
                    className={styles.comments__textarea}
                    placeholder="Write a comment..."
                    rows={1}
                    onChange={(e) => setTextComment(e.target.value)}
                    onInput={handleInput}
                />

                <button
                    className={styles.comments__button}
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>
    );
}