import './App.css';

function App() {
  let products = [
    { 
      name: "Macbook",
      price: "900$",
      count: 102,
      url: "https://nout.uz/wp-content/uploads/2021/11/macbook-m14.jpg",
    },
    { 
      name: "Asus",
      price: "600$",
      count: 30,
      url: "https://nout.uz/wp-content/uploads/2024/05/Vivobook-S-15-OLED_Product-photo_2S_Cool-Silver_08.jpg",
    },
    { 
      name: "HP",
      price: "400$",
      count: 60,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwuKa4lpdeMmA_gB_3hC-pZLEDqfV0J1dPWg&s",
    },
    { 
      name: "Lenova",
      price: "500$",
      count: 20,
      url: "https://notebook.uz/wa-data/public/shop/products/64/24/2464/images/7699/7699.750@2x.jpg",
    },
    { 
      name: "MSI",
      price: "750$",
      count: 45,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKybPxqBZi6tjMOmSKY8SLajr69VgNfO4vw&s",
    },
    { 
      name: "LG",
      price: "650$",
      count: 5,
      url: "https://nout.uz/wp-content/uploads/2023/09/LG-Gram-14-1.jpg",
    },  
];
  return (
    <div className="App">
      {products.map((product) => (
        <div className="card">
          <img src={product.url} alt="laptop-image" />
          <h1>Name is: {product.name}</h1>
          <h2>Price: {product.price}</h2>
          <h3>Soni: {product.count}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
