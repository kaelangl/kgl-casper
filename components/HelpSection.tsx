import Image from "next/image";

export default function HelpSection() {
  const helpItems = [
    {
      title: "Chat with us",
      description:
        "Our award-winning customer service can answer any of your sleep questions.",
      icon: "/icons/icon-chat.svg",
      linkText: "Ask away.",
    },
    {
      title: "Take a test nap",
      description:
        "Try out one of our mattresses in person at one of our stores.",
      icon: "/icons/icon-test.svg",
      linkText: "Find a location near you.",
    },
    {
      title: "Give us a ring",
      description:
        "Our Sleep Specialists are here to help you find the mattress of your dreams.",
      icon: "/icons/icon-ring.svg",
      linkText: "Give us a call at +1 888 828 5448",
    },
  ];

  return (
    <div className="text-center py-16 px-4">
      <h2 className="text-2xl font-bold mb-8">Need help deciding?</h2>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
        {helpItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md shadow-md flex flex-col items-center text-center"
          >
            <div className="mb-4">
              <Image src={item.icon} alt={item.title} width={50} height={50} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <a href="#" className="text-blue-600 hover:underline">
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
