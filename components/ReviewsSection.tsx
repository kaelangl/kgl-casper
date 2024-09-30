'use client';

const reviewsData = [
  {
    name: 'Whitney D.',
    date: '12/08/24',
    title: 'Softer Than Expected',
    content:
      "It's a good mattress. I had a hybrid mattress by a different brand and found it to be more firm, which I loved. I tried Casper because I was upsizing to a king and had heard good things. I don't sink into it, however I think I'd try their hybrid model next time.",
    rating: 4,
  },
  {
    name: 'Kevin L.',
    date: '26/07/24',
    title: 'Quality of life improvement',
    content:
      "I haven't had a bad sleep since switching to the Casper mattress. What a world of a difference it has made, highly recommended.",
    rating: 5,
  },
  {
    name: 'Alia S.',
    date: '26/07/24',
    title: 'Dreams do come true',
    content:
      "This foam mattress is the best. It's firm yet not too firm. Excellent for my side sleeping as it supports my body perfectly. Paired with an adjustable base and it's a game changer!!! Highly recommend!",
    rating: 5,
  },
  {
    name: 'Norman K.',
    date: '20/07/24',
    title: 'This is our 2nd Casper',
    content:
      'We love the original mattress. The ease of taking mattress to a location without renting a truck is fantastic!',
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Customer Reviews</h2>
      <div className="divide-y divide-gray-300">
        {reviewsData.map((review, index) => (
          <div key={index} className="py-6">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <span className="text-gray-500">👤</span>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">{review.name}</p>
                <p className="text-xs text-gray-500">Verified Buyer</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">{review.date}</p>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-xl ${i < review.rating ? 'text-orange-500' : 'text-gray-300'}`}>★</span>
              ))}
              <p className="ml-2 font-semibold text-blue-900">{review.title}</p>
            </div>
            <p className="text-sm text-gray-700 mb-4">{review.content}</p>
            <div className="flex items-center text-xs text-gray-500">
              <p>Was this review helpful?</p>
              <button className="ml-2">👍 0</button>
              <button className="ml-2">👎 0</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
