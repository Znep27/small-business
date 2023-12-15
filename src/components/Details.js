import React from "react";

function Details(props) {
  const urlStuff = window.location.href.split("/");
  const targetBusiness = urlStuff[urlStuff.length - 1];
  const business = props.businesses.find(
    (biz) => biz.id === Number(targetBusiness)
  );
  console.log(business);
  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {props.username && (
        <div className="top-level-user">Logged in as: {props.username}</div>
      )}
      <div className="details">
        <h1>{business.name}</h1>
        <h3>{business.address}</h3>
        <h3>{business.hours}</h3>
        <p>{business.description}</p>
      </div>
    </div>
  );
}

export default Details;