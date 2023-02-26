import { BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, NOTIFICATIONS_SVG } from './Images'
import MenuItem from './Images/MenuItem'
import './styles.css'

function SideMenu () {



    const menu = [
        { 
            icon: HOME_SVG,
            name: 'Home'
        },
        { 
            icon: EXPLORE_SVG,
            name: 'Explore'
        },
        { 
            icon: NOTIFICATIONS_SVG,
            name: 'Notifications'
        },
        { 
            icon: MESSAGES_SVG,
            name: 'Messages'
        },
        { 
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks'
        }
    ]
    return (
        <div className="w-25 mt-3 mx-5">
            <img className='logo_icon mb-2' src={require('./Images/twitter.png')}/>
            {menu.map((item, index)=><MenuItem item={item} key={index}/>)}

        </div>
    )
}

export default SideMenu