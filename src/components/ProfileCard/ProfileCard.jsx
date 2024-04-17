import "./styles.css";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <img
        src="https://th.bing.com/th/id/R.6d9329ffad20f19db341208725fb1b39?rik=LG%2bgUZMtkERySw&riu=http%3a%2f%2fnetworthcelebrities.com%2fwp-content%2fuploads%2f2016%2f01%2fKeanu-Reeves_6.jpg&ehk=Hdnyx%2bPSGEKdczDtLCaDemqch%2bqYkipQZvAIjcdLMHo%3d&risl=&pid=ImgRaw&r=0"
        alt="PhotoKeanu Reeves"
      />
      <div className="info">
        <h2>Keanu Reeves</h2>
        <p>Occupation: actor</p>
        <p>Hobbies: Motorcycles, Music, Photography</p>
      </div>
    </div>
  );
};

export default ProfileCard;
