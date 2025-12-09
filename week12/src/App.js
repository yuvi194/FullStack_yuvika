import  ProductCard  from "./components/ProductCard";
import  ContactForm  from "./components/ContactForm";
function App() {
  const products = [
    {
      image: "https://via.placeholder.com/250",
      title: "Wireless Headphones",
      desc: "High-quality sound with noise cancellation."
    },
    {
      image: "https://via.placeholder.com/250/ff4444",
      title: "Smart Watch",
      desc: "Track fitness and notifications."
    },
    {
      image: "https://via.placeholder.com/250/0099ff",
      title: "Gaming Mouse",
      desc: "Precision sensor and RGB lights."
    }
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {products.map((item, index) => (
        <ProductCard
          key={index}
          image={item.image}
          title={item.title}
          desc={item.desc}
        />
  ))}
      <h1 style={{ textAlign: "center" }}>Product Catalog</h1>
       <ContactForm />
      </div>
);
}

export default App;
