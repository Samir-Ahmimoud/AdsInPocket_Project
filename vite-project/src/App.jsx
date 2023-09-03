import './App.css'
export function App (){
    return (
        <>
            <h1>Twitter Card</h1>
            <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img className='tw-followCard-avatar' alt="El avatar de midudev" src="https://unavatar.io/midudev" />
                    <div className='tw-followCard-info'>
                        <strong>Samir Ahmimoud</strong>
                        <span className='tw-followCard-infoUserName'>@sammimundo</span>
                    </div>
                </header>
                <aside>
                    <button className='tw-followCard-button'>
                        Seguir
                    </button>
                </aside>
            </article>
        </>
    )
}