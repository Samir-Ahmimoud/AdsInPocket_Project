import { useState } from 'react'
import './App.css'
export function TwitterFollowCard({children, userName = 'Unknown', initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const addAt = (userName) => `@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick= () => {
        setIsFollowing(!isFollowing)
    }

    return(
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar' 
                alt='El avatar de ${userName}'
                src={`https://unavatar.io/${userName}`} />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>{addAt(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClass} onClick={handleClick}>
                <span className='tw-followCard-following'>{text}</span> 
                <span className='tw-followCard-unfollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}