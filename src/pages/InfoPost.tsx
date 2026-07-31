import { ShowInfo } from "modules/info-post/components/ShowInfo";
import { useParams } from "react-router-dom";


export function InfoPost() {
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <p>Post ID is missing</p>;
    }

    return (
        <>
            <ShowInfo id={id}/>
        </>
    )
}