import Image from "next/image";

export default function ProductHighlight() {
  const products = [
    {
      name: "Dawn Mattress",
      price: "Starting at $559",
      image: "/images/dawn-mattress.png",
      buttonText: "Shop now",
    },
    {
      name: "Atlas Hybrid Mattress",
      price: "Starting at $719",
      image: "/images/atlas-hybrid-mattress.png",
      buttonText: "Shop now",
    },
  ];

  return (
    <div className="py-16 px-8 bg-white">
      <div className="max-w-8xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {products.map((product, index) => (
          <div key={index} className="relative group">
            <Image
              src={product.image}
              alt={product.name}
              layout="responsive"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg group-hover:opacity-50 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-3xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg mb-4">{product.price}</p>
              <div className="flex justify-end">
                <button className="px-6 py-2 text-sm font-semibold bg-white text-black border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300">
                  {product.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
