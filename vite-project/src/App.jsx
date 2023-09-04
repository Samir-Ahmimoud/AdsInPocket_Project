import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName:'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName:'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    },
    {
        userName:'tmchein',
        name: 'Tomas Edison',
        isFollowing: false
    },
    {
        userName:'pheralb',
        name: 'Pablo Heraldo',
        isFollowing: true
    }
]

export function App (){
    
    return (
        <section className='App'>
            <h1>Twitter Card</h1>
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
