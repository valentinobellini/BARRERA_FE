import { usePostContext } from '../../contexts/PostContext'
import './SearchBar.css'

const SearchBar = () => {
    const { searchQuery, searchPosts } = usePostContext()

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar por título, contenido o etiqueta..."
                value={searchQuery}
                onChange={(e) => searchPosts(e.target.value)}
                className="search-input"
            />
        </div>
    )
}

export default SearchBar
