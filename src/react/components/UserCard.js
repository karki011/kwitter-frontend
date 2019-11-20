import React from "react";

const fakeUser = {
  pictureLocation: null,
  about: "",
  username: "testchick",
  displayName: "Kenzie",
  updatedAt: "2019-11-18T23:28:49.709Z",
  createdAt: "2019-11-18T23:28:49.709Z",
  googleId: null
};

class UserCard extends React.Component {
  render() {
    return (
      <>
        <img src={"http://simpleicon.com/wp-content/uploads/user1.svg"} />
        <h3>{fakeUser.displayName} </h3>
        <p>{fakeUser.username} </p>
        <p>
          {fakeUser.about ? fakeUser.about : "Stay tuned for the about details"}{" "}
        </p>
        <p>Created: {new Date(fakeUser.createdAt).toDateString()} </p>
        <p>Last Updated: {new Date(fakeUser.updatedAt).toDateString()} </p>
      </>
    );
  }
}

export default UserCard;
