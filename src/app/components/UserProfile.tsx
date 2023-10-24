"use client";

import Image from "next/image";

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
    profilePic: "/profile.jpeg",
  };

  const fullProfile = { ...userProfile, ...personalInfo };

  return (
    <>
      <div className="flex justify-center">
        <Image
          className="rounded-full border-yellow-400	border-2"
          src={fullProfile.profilePic}
          width={60}
          height={60}
          alt="profile pic"
        />
      </div>
    </>
  );
}
