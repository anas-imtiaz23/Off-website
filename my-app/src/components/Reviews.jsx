// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Navigation, Pagination } from 'swiper/modules';

// const reviewsData = [
//   {
//     id: 1,
//     name: 'Khizra',
//     rating: 5,
//     platform: 'Facebook Verified User | Pakistan',
//     review:
//       "I want to express my heartfelt gratitude for your outstanding digital marketing training. Your expertise and dedication have been invaluable. Your sessions have not only enriched my knowledge but have also inspired my passion for the field. Thank you for going above and beyond to help us. I'll surely recommend this training to others. IN SHA ALLAH",
//   },
//   {
//     id: 2,
//     name: 'Sayyed Minhal',
//     rating: 5,
//     platform: 'Facebook Verified User | Pakistan',
//     review:
//       "As I am a totally confused person because I lost many things and a lot of money too To get a golden spoon in a night but obviously it's impossible and the Result is Failure but after yesterday's webinar Umeed Ki roshni mili hai Hope for the Best 🤞 And Thank u Sir Muhammad Hamza Malik for your kind words and encouragement it means a lot ❤️",
//   },
//   {
//     id: 3,
//     name: 'Usama Manzoor',
//     rating: 5,
//     platform: 'Facebook Verified User | Pakistan',
//     review:
//       "Puray aik month may ma nay bht kuch seekha.. Ma nay 2019 may graduation complete ki thi us kay bad private job krta raha 3 saal but kuch khass hasil nah hua life may ... Classes laitay sath 1st class say feel ho gaya tha Ab ma sahi jaga par ho ... Online kam start karnay ki basic samjae hamza bhai nay goals kaisay set krny bht example or polite way may .. or last things jitna ma nay hamza bhai ko is training ki fees di hy wo us say kahi gona zada humhay samjtay or har aik properly guide kartay ... Thanks Muhammad Hamza Malik for doing this great Work..",
//   },
//   {
//     id: 4,
//     name: 'Areeba Khan',
//     rating: 5,
//     platform: 'Facebook Verified User | Pakistan',
//     review:
//       "This training was a game changer for me. I was struggling to find the right direction, but after these classes, I feel more confident about my future in digital marketing.",
//   },
//   {
//     id: 5,
//     name: 'Ahmed Raza',
//     rating: 4,
//     platform: 'Google Verified User | Pakistan',
//     review:
//       "Highly recommended! The practical insights and real-life case studies helped me a lot in understanding how digital marketing actually works.",
//   },
//   {
//     id: 6,
//     name: 'Fatima Noor',
//     rating: 5,
//     platform: 'Facebook Verified User | Pakistan',
//     review:
//       "The best training I have attended so far. The way concepts were explained made everything so simple. Worth every penny!",
//   },
// ];

// function Reviews() {
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-12">
//       <h1 className="text-6xl font-extrabold text-center text-gray-800 mb-2">Here's what Students have to say</h1>
//       <p className="text-3xl text-center text-gray-800">Real Verified Reviews</p>
//       <p className="text-2xl text-center text-gray-800 mt-2 mb-8">
//         Here are the real verified reviews of the Best AI & Digital Marketing Training in Pakistan, showcasing the power of the 3-step to-the-point system.
//       </p>

//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={20}
//         slidesPerView={1}
//         breakpoints={{
//           768: { slidesPerView: 2 }, // 2 slides on tablets
//           1024: { slidesPerView: 3 }, // 3 slides on desktops
//         }}
//         navigation
//         pagination={{ clickable: true }}
//         className="mySwiper"
//       >
//         {reviewsData.map((review) => (
//           <SwiperSlide key={review.id}>
//             <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition duration-300">
//               <div className="mb-4">
//                 <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
//                 <div className="text-yellow-500 text-lg">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
//                 <p className="text-sm text-gray-500">{review.platform}</p>
//               </div>
//               <p className="text-gray-700 text-sm mb-4">{review.review}</p>
//               <button className="text-blue-600 font-medium hover:text-blue-800 transition">Read More</button>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Reviews;
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import { Navigation, Pagination, FreeMode, Scrollbar } from 'swiper/modules';

// const reviewsData = [
//   {
//     id: 1,
//     name: 'Khizra',
//     rating: 5,
//     platform: 'Facebook Verified User | Pakistan',
//     review:
//       "I want to express my heartfelt gratitude for your outstanding digital marketing training...",
//   },
//   {
//     id: 2,
//     name: 'Sayyed Minhal',
//     rating: 5,
//     platform: 'Facebook Verified User | Pakistan',
//     review:
//       "As I am a totally confused person because I lost many things and a lot of money too...",
//   },
//   {
//     id: 3,
//     name: 'Usama Manzoor',
//     rating: 5,
//     platform: 'Facebook Verified User | Pakistan',
//     review:
//       "Puray aik month may ma nay bht kuch seekha.. Ma nay 2019 may graduation complete ki thi...",
//   },
//   {
//     id: 4,
//     name: 'Areeba Khan',
//     rating: 5,
//     platform: 'Facebook Verified User | Pakistan',
//     review:
//       "This training was a game changer for me. I was struggling to find the right direction...",
//   },
//   {
//     id: 5,
//     name: 'Ahmed Raza',
//     rating: 4,
//     platform: 'Google Verified User | Pakistan',
//     review:
//       "Highly recommended! The practical insights and real-life case studies helped me a lot...",
//   },
//   {
//     id: 6,
//     name: 'Fatima Noor',
//     rating: 5,
//     platform: 'Facebook Verified User | Pakistan',
//     review:
//       "The best training I have attended so far. The way concepts were explained made everything simple...",
//   },
// ];

// function Reviews() {
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-12">
//       {/* Heading Section */}
//       <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold text-center text-gray-800 mb-2">
//         Here's what Students have to say
//       </h1>
//       <p className="text-lg sm:text-xl md:text-3xl text-center text-gray-800 mb-2">
//         Real Verified Reviews
//       </p>
//       <p className="text-sm sm:text-base md:text-2xl text-center text-gray-800 mt-2 mb-8">
//         Here are the real verified reviews of the Best AI & Digital Marketing Training in Pakistan.
//       </p>

//       {/* Swiper Section */}
//       <Swiper
//         modules={[Navigation, Pagination, FreeMode, Scrollbar]}
//         spaceBetween={20}
//         slidesPerView={1}
//         direction="vertical"
//         scrollbar={{ draggable: true }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             direction: 'vertical',
//           },
//           768: {
//             slidesPerView: 2,
//             direction: 'horizontal',
//           },
//           1024: {
//             slidesPerView: 3,
//             direction: 'horizontal',
//           },
//         }}
//         navigation
//         pagination={{ clickable: true }}
//         className="mySwiper h-[500px] sm:h-[600px] md:h-auto" // Adjust height for mobile
//       >
//         {reviewsData.map((review) => (
//           <SwiperSlide key={review.id} className="w-full">
//             <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-xl transition duration-300">
//               <div className="mb-4">
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{review.name}</h3>
//                 <div className="text-yellow-500 text-base sm:text-lg">
//                   {'★'.repeat(review.rating)}
//                   {'☆'.repeat(5 - review.rating)}
//                 </div>
//                 <p className="text-xs sm:text-sm text-gray-500">{review.platform}</p>
//               </div>
//               <p className="text-gray-700 text-xs sm:text-sm mb-4">{review.review}</p>
//               <button className="text-blue-600 font-medium hover:text-blue-800 transition text-sm sm:text-base">
//                 Read More
//               </button>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Reviews;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, FreeMode, Scrollbar } from 'swiper/modules';

const reviewsData = [
  {
    id: 1,
    name: 'Khizra',
    rating: 5,
    platform: 'Facebook Verified User | Pakistan',
    review:
      "I want to express my heartfelt gratitude for your outstanding digital marketing training...",
  },
  {
    id: 2,
    name: 'Sayyed Minhal',
    rating: 5,
    platform: 'Facebook Verified User | Pakistan',
    review:
      "As I am a totally confused person because I lost many things and a lot of money too...",
  },
  {
    id: 3,
    name: 'Usama Manzoor',
    rating: 5,
    platform: 'Facebook Verified User | Pakistan',
    review:
      "Puray aik month may ma nay bht kuch seekha.. Ma nay 2019 may graduation complete ki thi...",
  },
  {
    id: 4,
    name: 'Areeba Khan',
    rating: 5,
    platform: 'Facebook Verified User | Pakistan',
    review:
      "This training was a game changer for me. I was struggling to find the right direction...",
  },
  {
    id: 5,
    name: 'Ahmed Raza',
    rating: 4,
    platform: 'Google Verified User | Pakistan',
    review:
      "Highly recommended! The practical insights and real-life case studies helped me a lot...",
  },
  {
    id: 6,
    name: 'Fatima Noor',
    rating: 5,
    platform: 'Facebook Verified User | Pakistan',
    review:
      "The best training I have attended so far. The way concepts were explained made everything simple...",
  },
];

function Reviews() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Heading Section */}
      <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold text-center text-gray-800 mb-2">
        Here's what Students have to say
      </h1>
      <p className="text-lg sm:text-xl md:text-3xl text-center text-gray-800 mb-2">
        Real Verified Reviews
      </p>
      <p className="text-sm sm:text-base md:text-2xl text-center text-gray-800 mt-2 mb-8">
        Here are the real verified reviews of the Best AI & Digital Marketing Training in Pakistan.
      </p>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Pagination, FreeMode, Scrollbar]}
        spaceBetween={20}
        slidesPerView={1}
        direction="vertical"
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            direction: 'vertical',
          },
          768: {
            slidesPerView: 2,
            direction: 'horizontal',
          },
          1024: {
            slidesPerView: 3,
            direction: 'horizontal',
          },
        }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper h-[500px] sm:h-[600px] md:h-auto" // Adjust height for mobile
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review.id} className="w-full">
            <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-xl transition duration-300">
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{review.name}</h3>
                <div className="text-yellow-500 text-base sm:text-lg">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
                <p className="text-xs sm:text-sm text-gray-500">{review.platform}</p>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm mb-4">{review.review}</p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition text-sm sm:text-base">
                Read More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Reviews;