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
                        <img src={image_url} alt="" loading="lazy" decoding="async" />
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
                        <div className="tag-wrapper">
                            {tags.map((tag, i) => (
                                <div
                                    key={`${tag}-${i}`}
                                    className="tag"
                                    onClick={(e) => handleTagClick(e, tag)}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </article>
    );
}







