export default function Home() {
  const userProfile = {
    userName: "SHanson",
    fullName: "Steven Hanson",
    followers: 1000000,
    following: 2,
  };

  const { userName, followers, following } = userProfile;

  return (
    <>
      <div>
        <p>Profile</p>
      </div>
      <div>
        <h1>Your profile:</h1>
      </div>
      <div>
        <p>Username: {userName}</p>
        <p>Following: {following}</p>
        <p>Followers: {followers}</p>
      </div>
    </>
  );
}
