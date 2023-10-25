"use client";
import React, { Component } from "react";
import Image from "next/image";

interface UserProfileProps {
  username: string;
  fullname: string;
  following: number;
  followers: number;
}

class UserProfile extends Component {
  profilePic = "/profile.jpeg";

  constructor(props: UserProfileProps) {
    super(props);
    this.state = {
      username: props.username,
      fullname: props.fullname,
      following: props.following,
      followers: props.followers,
    };
  }

  render() {
    return (
      <>
        <Image
          className="rounded-full border-yellow-400	border-2"
          src={this.profilePic}
          width={60}
          height={60}
          alt="profile pic"
        />
        <p>Username: {this.state.username}</p>
        <p>Full name: {this.state.fullname}</p>
        <p>Following: {this.state.following}</p>
        <p>Followers: {this.state.followers}</p>
      </>
    );
  }
}

export default UserProfile;
