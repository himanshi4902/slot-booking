export default function Inbar(){
    return (
    <nav className="nav">
        <a href="/" className="site-title">Events</a>
        <ul>
            <li>
                <a href="./component/pages/Pending">Pending</a>
            </li>
            <li>
                <a href="./component/pages/Approved">Approved</a>
            </li>
            <li>
                <a href="./component/pages/Declined">Declined</a>
            </li>
        </ul>
    </nav>
    )
}

