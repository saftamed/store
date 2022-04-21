import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "../css/nav.css"
function NavBar() {
  return (
    <div className='nav'>
        <div className="left">
            <div className="logo">
                <h1>LTT Store</h1>
            </div>
        </div>
        <div className="right">
            <div className="nav-item">
                <Settings />
                <NotificationsNone />
                <Language />
            </div>
        </div>
    </div>
  )
}

export default NavBar