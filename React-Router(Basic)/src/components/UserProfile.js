import classes from './UserProfile.module.css';
import { useSelector } from 'react-redux';
const UserProfile = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <main className={classes.profile}>
      
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
