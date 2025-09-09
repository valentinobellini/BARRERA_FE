import "./PostCard.css";

import { useNavigate } from 'react-router-dom'
import { usePostContext } from '../../contexts/PostContext'




export default function PostCard({ id, image_url, published_at, reading_time, title, headline, tags }) {


    // ✅ funzione per convertire il titolo in slug URL-friendly
    function slugify(string) {
        return string
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')  // rimuove caratteri speciali
            .trim()
            .replace(/\s+/g, '-')      // spazi → trattini
    }

    const { searchPosts } = usePostContext()
    const navigate = useNavigate()

    const handleOpen = () => {
        const slug = slugify(title);
        navigate(`/blog/${id}/${slug}`);
    };

    const handleTagClick = (e, tag) => {
        e.stopPropagation();
        searchPosts(tag);
    };


    return (
        <article className="post-card"
            onClick={handleOpen}>
            <div className="post-card-image">
                {image_url ?
                    <div className='post-thumb'>
                        <img src={image_url} alt="" />
                    </div> :
                    null}
            </div>

            <div className="post-card-content">
                <div className="post-card-meta">
                    <span className="date">
                        {new Date(published_at).toLocaleDateString()}
                    </span> ··· <span>{reading_time} min</span>
                </div>

                <h3 className="post-card-title">{title}</h3>
                <p className="post-card-text">{headline}</p>

                <div className="post-card-tags">

                    {Array.isArray(tags) && tags.length > 0 && (
                        <>

                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        searchPosts(tag)
                                    }}
                                >
                                    <div className="tag-wrapper">

                                        {tags.map((tag, i) => {
                                            return (
                                                <div key={i}
                                                    className='tag'
                                                    onClick={(e) => handleTagClick(e, tag)}>
                                                    {tag}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </span>
                            ))}
                        </>
                    )}

                </div>
            </div>
        </article>
    );
}










// <div className="posts-container">
//     {posts.map(post => (
//         <div
//             key={post.id}
//             className="post-row"
//             onClick={() => handleClick(post)}
//         >
//             {post.image_url ?
//                 <div className='post-thumb'>
//                     <img src={post.image_url} alt="" />
//                 </div> :
//                 null}
//             <h3 className="post-title">{post.title}</h3>
//             <p className="post-headline">{post.headline}</p>

//             <p className="tags">
//                 {Array.isArray(post.tags) && post.tags.length > 0 && (
//                     <>
//                         <span className="tags-label">Etiquetas:</span>{" "}
//                         {post.tags.map((tag, index) => (
//                             <span
//                                 key={index}
//                                 onClick={(e) => {
//                                     e.stopPropagation()
//                                     searchPosts(tag)
//                                 }}
//                             >
//                                 <span className='tag'>
//                                     {tag}
//                                     {index < post.tags.length - 1 && ', '}
//                                 </span>
//                             </span>
//                         ))}
//                     </>
//                 )}
//             </p>

//             <p className="date">
//                 {new Date(post.published_at).toLocaleDateString()}
//             </p>
//         </div>