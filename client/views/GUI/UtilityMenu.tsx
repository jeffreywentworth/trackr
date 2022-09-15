import './styles.scss';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';


//button click initial state [!jobToggle, !interviewToggle, !commentsToggle]
  // add Job = onClick()=> {jobToggle = true}
     //render NewJob
  // add Interview = onClick()=> {interviewToggle = true}
    //render NewInterview
  // add Comment = onClick()=> {commentsToggle = true}
    //render NewComment

export default function UtilityMenu() {
  return (
    <Menu menuButton={<MenuButton>Open Menu</MenuButton>} transition>
      <MenuItem>Add Job </MenuItem>
      <MenuItem>Add Interview</MenuItem>
      <MenuItem>Add Comments</MenuItem>
    </Menu>
  );
}
