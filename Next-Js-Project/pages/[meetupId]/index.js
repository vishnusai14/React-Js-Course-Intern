import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetUpDetail";

function MeetupDetailsPage(props) {
  return (
    <MeetupDetail
      image={props.selectedMeetup.image}
      title={props.selectedMeetup.title}
      address={props.selectedMeetup.address}
      description={props.selectedMeetup.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://Vishnu_Sai:SaiVishnu14@cluster0.hkghe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetUpCollection = await db.collection("meetups2");
  const meetups = await meetUpCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    `mongodb+srv://Vishnu_Sai:SaiVishnu14@cluster0.hkghe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetUpCollection = await db.collection("meetups2");
  const selectedMeetup = await meetUpCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      selectedMeetup: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}

export default MeetupDetailsPage;
