function ProductCard({ image, title, desc }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.img} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px",
    background: "#f4f4f4",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  img: {
    width: "100%",
    borderRadius: "8px",
  },
};

export default ProductCard;
