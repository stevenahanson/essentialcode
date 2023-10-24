export default function UserProfile() {
  const userProfile = {
    userName: "SHanson",
    fullName: "Steven Hanson",
    followers: 1000000,
    following: 2,
  };

  const { userName, followers, following } = userProfile;

  return (
    <div>
      <p>Username: {userName}</p>
      <p>Following: {following}</p>
      <p>Followers: {followers}</p>
    </div>
  );
}
