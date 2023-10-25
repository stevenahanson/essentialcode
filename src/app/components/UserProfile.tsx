"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function UserProfile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch("https://run.mocky.io/v3/e024e80e-b999-4da3-9908-5a3f1f79e32d")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  const personalInfo = {
    email: "stevenahanson@life.com",
    profilePic: "/profile.jpeg",
  };

  const fullProfile = { ...profile, ...personalInfo };

  return (
    <>
      <div className="mt-7">
        <div className="flex justify-center">
          <Image
            className="rounded-full border-yellow-400	border-2"
            src={fullProfile.profilePic}
            width={100}
            height={100}
            alt="profile pic"
          />
        </div>
        <div className="text-center">
          <p>Username: {fullProfile.username}</p>
          <p>Following: {fullProfile.following}</p>
          <p>Followers: {fullProfile.followers}</p>
        </div>
      </div>
    </>
  );
}
