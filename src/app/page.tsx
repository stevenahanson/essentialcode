import UserProfile from "./components/UserProfile2";

export default function Home() {
  return (
    <>
      <UserProfile
        username="SHanson"
        fullname="Steven Hanson"
        following={2}
        followers={1000000}
      />
    </>
  );
}
