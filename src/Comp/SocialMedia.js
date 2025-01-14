import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import fbicon from '../images/fbicon2.png';
import twittericon from '../images/twittericon2.png';
import linkedinicon from '../images/linkedinicon2.png';
export default function SocialMedia(){
    return(
        <div className="socialmedia">
            <Link to="https://www.facebook.com/profile.php?id=61551982963205"><img className='img-fluidd' src={fbicon}></img></Link>
            <Link to="https://twitter.com/Sawhneyhardik"><img className='img-fluidd' src={twittericon}></img></Link>
            <Link to="https://www.linkedin.com/in/hardik--sawhney/"><img className='img-fluidd' src={linkedinicon}></img></Link>
        </div>
    );
}