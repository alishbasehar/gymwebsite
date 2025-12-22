import React from 'react';
import { FaDumbbell, FaRunning, FaStar } from 'react-icons/fa';

const Training = () => {
  const services = [
    {
      id: 1,
      title: 'Dedicated Services',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
      icon: FaStar,
    },
    {
      id: 2,
      title: 'Tons Of Equipment',
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority.',
      icon: FaDumbbell,
    },
    {
      id: 3,
      title: 'Best Training',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roclassical.',
      icon: FaRunning,
    },
  ];

  return (
    <div className="container mx-auto  max-w-7xl px-4 py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="group bg-gray-800 rounded-2xl p-6 text-center  transform transition-transform duration-300 hover:scale-105 flex-1"
            >
              {/* Icon */}
              <div className="mb-4 w-15 h-16 mx-auto flex items-center justify-center rounded-full bg-gray-700 transition-colors duration-300 group-hover:bg-[#A58120]">
                <IconComponent className="text-[#A58120] group-hover:text-white  w-8 h-8 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Training;
