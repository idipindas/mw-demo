import React from 'react';

function Service() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 h-[49.7rem] w-full">
      <h2 className="text-4xl font-bold text-white text-center mb-8">Our Services</h2>
      <div className="flex justify-evenly space-x-4">
        <div className="max-w-sm w-full bg-white rounded overflow-hidden shadow-lg">
          <img className="w-full h-48 object-cover" src="https://files.cdn-files-a.com/uploads/9435802/400_668d11796fd24.jpg" alt="Community Support" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Community Support</div>
            <p className="text-gray-700 text-base">
              Our supportive community promotes social interaction, peer support, and a sense of belonging, empowering residents on their recovery journey.
            </p>
          </div>
        </div>
        <div className="max-w-sm w-full bg-white rounded overflow-hidden shadow-lg">
          <img className="w-full h-48 object-cover" src="https://files.cdn-files-a.com/uploads/9435802/400_668d1177c93bc.jpg" alt="Therapy Sessions" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Therapy Sessions</div>
            <p className="text-gray-700 text-base">
              We offer a variety of therapy sessions, including cognitive-behavioral therapy, group therapy, and art therapy, aimed at nurturing mental well-being.
            </p>
          </div>
        </div>
        <div className="max-w-sm w-full bg-white rounded overflow-hidden shadow-lg">
          <img className="w-full h-48 object-cover" src="https://static1.s123-cdn-static-a.com/uploads/2031/400_57d14bd1c7c33.jpg" alt="Personalized Care Plans" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Personalized Care Plans</div>
            <p className="text-gray-700 text-base">
              Our team creates individualized care plans to meet the unique needs of each resident, ensuring tailored support and comprehensive care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
