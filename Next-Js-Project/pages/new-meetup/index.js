import axios from "axios";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const newMeetUpHandler = (meetupObj) => {
    axios
      .post("/api/new-meetup", meetupObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <NewMeetUpForm onAddMeetup={newMeetUpHandler} />;
};

export default NewMeetUpPage;
