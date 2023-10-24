import UserProfile from "./components/UserProfile";

export default function Home() {
  return (
    <>
      <div>
        <p>Profile</p>
      </div>
      <div>
        <h1>Your profile:</h1>
      </div>
      <UserProfile />
    </>
  );
}
