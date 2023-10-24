export default function Home() {
  const mentors = ["leonardo dicaprio", "steven barlett", "master p"];

  const [third, first, second] = mentors;

  console.log("current mentor is " + first);
  console.log("future mentor is " + second);
  console.log("super future mentor is " + third);

  return (
    <div>
      <p>I am currently being mentored by: {first}</p>
      <p>In the future, {second} will be my mentor</p>
      <p>In the super future, {third} will be my mentor</p>
    </div>
  );
}
