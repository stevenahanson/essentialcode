export default function UserProfile() {
  const userProfile = {
    userName: "SHanson",
    firstName: "Steven",
    lastName: "Hanson",
    followers: 1000000,
    following: 2,
  };

  const personalInfo = {
    email: "stevenahanson@life.com",
    profilePic: "me.png",
  };

  const fullProfile = { ...userProfile, ...personalInfo };

  return (
    <>
      <div>
        <p>{fullProfile.profilePic}</p>
        <p>Username: {fullProfile.userName}</p>
        <p>Following: {fullProfile.following}</p>
        <p>Followers: {fullProfile.followers}</p>
      </div>
    </>
  );
}
