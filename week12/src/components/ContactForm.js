import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.btn}>Submit</button>
      </form>

      {/* Show form values below */}
      <div style={styles.outputBox}>
        <h3>Submitted Data:</h3>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Message:</b> {message}</p>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", width: "350px", margin: "20px auto" },
  input: { width: "100%", padding: "10px", margin: "8px 0" },
  textarea: { width: "100%", padding: "10px", height: "80px", margin: "8px 0" },
  btn: { padding: "10px 20px", cursor: "pointer", background: "#2980b9", color: "#fff", border: "none" },
  outputBox: { marginTop: "15px", background: "#eee", padding: "10px", borderRadius: "6px" }
};

export default ContactForm;
