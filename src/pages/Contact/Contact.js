import styles from "./Contact.module.scss";
import { useState, useEffect } from "react";
import { InputField, Button } from "../../components/";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "post",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify([[name, email, contact, description]]),
  };

  function submitHandler(e) {
    e.preventDefault();

    fetch(
      "https://v1.nocodeapi.com/shishir/google_sheets/bnrndVsHfQqUWePy?tabId=contacts",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setName("");
    setEmail("");
    setContact("");
    setDescription("");
  }
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <InputField
          style={{ gridArea: "name" }}
          variant="normal"
          label="Name"
          type="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Your name"
          required={true}
        />
        <InputField
          style={{ gridArea: "email" }}
          variant="normal"
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="john@example.com"
          required={true}
        />
        <InputField
          style={{ gridArea: "contact" }}
          variant="normal"
          label="Contact Number"
          type="tel"
          onChange={(e) => setContact(e.target.value)}
          value={contact}
          placeholder="Your Contact Information"
          required={true}
        />
        <InputField
          style={{ gridArea: "description" }}
          variant="large"
          label="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Describe the situation here"
          required={true}
        />
        <br />
        <Button style={{ gridArea: "button" }} variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Contact;
