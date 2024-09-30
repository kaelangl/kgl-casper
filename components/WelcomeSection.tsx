export default function WelcomeSection() {
    return (
        <div className="bg-[#f8f5f5] w-full py-16 px-4">
            <h2 className="text-4xl font-bold mb-4 text-blue-900 text-center">
                Welcome to <a href="#" className="hover:underline">Casper Labs.</a>
            </h2>
            <p className="text-2xl mb-8 text-blue-900 text-center">
                See how we obsessively engineer every detail of your perfect mattress.
            </p>

            <div className="flex justify-center my-20">
                {[...Array(5)].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.804 1.4 8.177L12 18.896l-7.334 3.86 1.4-8.177L.131 9.21l8.2-1.192L12 .587z" />
                    </svg>
                ))}
            </div>

            <blockquote className="text-2xl italic mb-4 text-blue-900 text-center">
                "I'm hooked! After only one night on our new mattress I was hooked. It is so comfortable and my back hasn’t felt this good in months! It is firm in all the right places and I love that I can’t feel when my partner rolls around at night."
            </blockquote>
            <p className="font-semibold text-blue-900 text-center">- Hannah</p>
        </div>
    );
}
