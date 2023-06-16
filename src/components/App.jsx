import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avtar from "./Avtar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avtar img="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages_900x.png?v=1619126283" />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
