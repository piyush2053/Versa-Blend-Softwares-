import React from "react";
import ShinyText from "../../Chunks/ShinyText/ShinyText";

interface Review {
  avatar: string;
  username: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  readTime: string;
}

const reviews: Review[] = [
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMkVONle0TRtaHQOOYOthhz5VpoHFpIolLg&s",
    username: "@Josh Patel",
    rating: 5,
    title: "Thanks VBS for my Resturant live Menu System",
    content:
      "Now my whole menu add and Price variation is automated via my app and web app , Thanks to VBS Team",
    date: "3 Months ago",
    readTime: "23 min read",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZtb105jAzU4uQ4ywZxeHG3855Rn4LiH-rw&s",
    username: "@SamGupta",
    rating: 5,
    title: "Great Integration within time",
    content:
      "Thanks for integration my Dashboard with PowerBI, Dropping this review to encourage the team.",
    date: "1 Month ago",
    readTime: "11 min read",
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/v2/C4D03AQH5IoUs4LDQFA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1578742302183?e=2147483647&v=beta&t=JQ5iMayhtHGxzrq-fNWFGo712bMpT2cjynEDufvEVqI",
    username: "@RobinTate",
    rating: 5,
    title: "Vs code extension",
    content:
      "I'm thrilled to have my own VS Code extension for my small startup, making it easier for my developers to access the company's codebases all in one place!",
    date: "2 Months ago",
    readTime: "2 min read",
  },
];


const ClientReviews: React.FC = () => {
  return (
    <section className="grid bg-[#0D0D0D] md:grid-cols-2 xl:grid-cols-3 px-20 mx-auto py-10 px-5 lg:px-10 gap-5">
      <ShinyText text="Our satisfied clients review" disabled={false} speed={1} className=' text-center custom-class md:col-span-2 xl:col-span-3 text-2xl md:text-4xl  mb-5' />
      {reviews?.map((review, index) => (
          <div className="bg-transparent shadow shadow-xl shadow-[#212121] pt-8 lg:pt-0 pb-8 px-5 md:px-8 rounded-2xl hover:scale-105 transition hover:z-50">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <img
                className="w-16 h-16 object-cover rounded-full  shadow-md"
                src={review.avatar}
                alt={review.username}
              />
              <div>
                <h2 className="text-lg text-gray-500 font-semibold lg:mt-10">
                  {review.username}
                </h2>
                <div className="flex items-center mt-2">
                  <span className="shadow-sm bg-gray-900 rounded-full inline-flex items-center px-3 py-1.5 text-gray-500 text-xs">
                    <svg
                      className="mr-1 w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {review.rating}
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-lg text-gray-500 font-semibold mt-7 mb-2.5">
              {review.title}
            </h3>
            <p className="leading-loose text-gray-400">{review.content}</p>
            <div className="md:flex items-center gap-5 mt-4">
              <span className="mb-3 md:mb-0 flex items-center text-gray-700 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-1.5 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {review.date}
              </span>
            </div>
          </div>
      ))}
    </section>
  );
};

export default ClientReviews;
