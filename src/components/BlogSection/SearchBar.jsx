import { usePostContext } from '../../contexts/PostContext'
import './SearchBar.css'

const SearchBar = () => {
    const { setSearchQuery, searchQuery, searchPosts } = usePostContext()

    function handleReset() {
        setSearchQuery('')
    }


    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar por título, contenido o etiqueta..."
                    value={searchQuery}
                    onChange={(e) => searchPosts(e.target.value)}
                    className="search-input"
                />

            </div>
            <p className='bar-reset'
                onClick={handleReset}>x</p>
        </>
    )
}

export default SearchBar
