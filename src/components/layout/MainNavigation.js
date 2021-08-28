import { Link } from 'react-router-dom';

function MainNavigation() {
    return <header>
        <h1>React Meetups</h1>
        <nav>
            <ul>
                <li><Link to='/'>All Meetups</Link></li>
                <li><Link to='/new-meetup'>Add New Meetups</Link></li>
                <li><Link to='/favorites'>My Favorites</Link></li>
            </ul>
        </nav>
    </header>;
}

export default MainNavigation;