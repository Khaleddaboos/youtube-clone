import { FaHome ,FaBitcoin,FaCode ,FaMusic,FaPodcast} from "react-icons/fa";
import { MdCastForEducation, MdLocalMovies ,MdOutlineTheaterComedy,MdSportsTennis,MdLiveTv,MdOutlineGirl} from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { CgGym } from "react-icons/cg";
import { GiClothes } from "react-icons/gi";

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';


export const categories = [
    { name: 'New', icon: <FaHome /> , },
    { name: 'JS Mastery', icon: <FaCode />, },
    { name: 'Coding', icon: <FaCode />, },
    { name: 'ReactJS', icon: <FaCode />, },
    { name: 'NextJS', icon: <FaCode />, },
    { name: 'Music', icon: <FaMusic /> },
    { name: 'Education', icon: <MdCastForEducation />, },
    { name: 'Podcast', icon: <FaPodcast />, },
    { name: 'Movie', icon: <MdLocalMovies />, },
    { name: 'Gaming', icon: <SiYoutubegaming />, },
    { name: 'Live', icon: <MdLiveTv />, },
    { name: 'Sport', icon: <MdSportsTennis />, },
    { name: 'Fashion', icon: <GiClothes />, },
    { name: 'Beauty', icon: <MdOutlineGirl />, },
    { name: 'Comedy', icon: <MdOutlineTheaterComedy />, },
    { name: 'Gym', icon: <CgGym />, },
    { name: 'Crypto', icon: <FaBitcoin />, },
  ];