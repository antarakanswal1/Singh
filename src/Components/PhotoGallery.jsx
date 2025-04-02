export default function PhotoGallery() {
    const images = [
      "../src/assets/gal1.png",
      "../src/assets/gal2.png",
      "../src/assets/gal3.png",
      "../src/assets/gal4.png",
      "../src/assets/gal5.png",
      "../src/assets/gal6.png",
      "../src/assets/gal7.png",
      "../src/assets/gal8.png",
    ];
  
    return (
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-lg text-black">Share your setup with</h2>
        <h1 className="text-3xl font-bold text-black">#FuniroFurniture</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
  