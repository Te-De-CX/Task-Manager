import React, { useEffect, useState } from "react";
import { FaTasks, FaUsers, FaChartLine, FaTools, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

const AboutPage: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState([false, false, false, false]);

  // Simulate checking each item one by one
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCheckedItems([true, false, false, false]);
    }, 1000); // 1 second delay for the first item

    const timer2 = setTimeout(() => {
      setCheckedItems([true, true, false, false]);
    }, 2000); // 2 seconds delay for the second item

    const timer3 = setTimeout(() => {
      setCheckedItems([true, true, true, false]);
    }, 3000); // 3 seconds delay for the third item

    const timer4 = setTimeout(() => {
      setCheckedItems([true, true, true, true]);
    }, 4000); // 4 seconds delay for the fourth item

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);


  return (
    <section className="bg-[#F7F7F7] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-[#2E2E2E] mb-12 animate-fade-in">
          About GoTaskList
        </h1>

        {/* Introduction Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#6B5B95] mb-4">
            What is GoTaskList?
          </h2>
          <p className="text-[#2E2E2E] leading-relaxed">
            GoTaskList is a powerful task management tool designed to help
            individuals and teams stay organized, boost productivity, and achieve
            their goals. Whether you're managing personal tasks or collaborating
            on team projects, GoTaskList provides an intuitive and seamless
            experience.
          </p>
        </div>

        {/* Dashboard Overview Section */}
        <div className="mb-16">
      <h2 className="text-2xl font-semibold text-[#6B5B95] mb-4">
        Dashboard Overview
      </h2>
      <p className="text-[#2E2E2E] leading-relaxed mb-4">
        The GoTaskList dashboard is your central hub for managing tasks, tracking
        progress, and staying on top of deadlines. Here's what you can expect:
      </p>
      <ul className="list-none text-[#2E2E2E] space-y-2">
        {/* Task Overview */}
        <li className="flex items-center space-x-4">
          <div
            className={`w-6 h-6 border-2 border-[#6B5B95] rounded-full flex items-center justify-center transition-all duration-300 ${
              checkedItems[0] ? "bg-[#6B5B95]" : "bg-transparent"
            }`}
          >
            {checkedItems[0] && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span>
            <strong>Task Overview:</strong> View all your tasks in one place,
            organized by priority, due date, or project.
          </span>
        </li>

        {/* Progress Tracking */}
        <li className="flex items-center space-x-4">
          <div
            className={`w-6 h-6 border-2 border-[#6B5B95] rounded-full flex items-center justify-center transition-all duration-300 ${
              checkedItems[1] ? "bg-[#6B5B95]" : "bg-transparent"
            }`}
          >
            {checkedItems[1] && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span>
            <strong>Progress Tracking:</strong> Monitor your progress with
            visual charts and completion percentages.
          </span>
        </li>

        {/* Notifications */}
        <li className="flex items-center space-x-4">
          <div
            className={`w-6 h-6 border-2 border-[#6B5B95] rounded-full flex items-center justify-center transition-all duration-300 ${
              checkedItems[2] ? "bg-[#6B5B95]" : "bg-transparent"
            }`}
          >
            {checkedItems[2] && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span>
            <strong>Notifications:</strong> Get real-time updates on task
            deadlines, comments, and team activity.
          </span>
        </li>

        {/* Customization */}
        <li className="flex items-center space-x-4">
          <div
            className={`w-6 h-6 border-2 border-[#6B5B95] rounded-full flex items-center justify-center transition-all duration-300 ${
              checkedItems[3] ? "bg-[#6B5B95]" : "bg-transparent"
            }`}
          >
            {checkedItems[3] && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span>
            <strong>Customization:</strong> Personalize your dashboard with
            themes, layouts, and widgets.
          </span>
        </li>
      </ul>
    </div>
        {/* Functionalities Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#6B5B95] mb-4">
            Key Functionalities
          </h2>
          <p className="text-[#2E2E2E] leading-relaxed mb-4">
            GoTaskList is packed with features to streamline your workflow and
            enhance productivity. Here are some of the key functionalities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Task Management */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group relative overflow-hidden">
              <div className="flex items-center mb-4">
                <FaTasks className="w-8 h-8 text-[#FF6F61] mr-4" />
                <h3 className="text-xl font-semibold text-[#6B5B95]">
                  Task Management
                </h3>
              </div>
              <p className="text-[#2E2E2E]">
                Create, organize, and prioritize tasks with ease. Set due dates,
                add descriptions, and assign tasks to team members.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group relative overflow-hidden">
              <div className="flex items-center mb-4">
                <FaUsers className="w-8 h-8 text-[#FF6F61] mr-4" />
                <h3 className="text-xl font-semibold text-[#6B5B95]">
                  Collaboration
                </h3>
              </div>
              <p className="text-[#2E2E2E]">
                Work seamlessly with your team. Share tasks, leave comments, and
                track progress in real-time.
              </p>
            
            </div>

            {/* Analytics */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group relative overflow-hidden">
              <div className="flex items-center mb-4">
                <FaChartLine className="w-8 h-8 text-[#FF6F61] mr-4" />
                <h3 className="text-xl font-semibold text-[#6B5B95]">
                  Analytics
                </h3>
              </div>
              <p className="text-[#2E2E2E]">
                Gain insights into your productivity with detailed analytics and
                reports.
              </p>
              
            </div>

            {/* Integrations */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group relative overflow-hidden">
              <div className="flex items-center mb-4">
                <FaTools className="w-8 h-8 text-[#FF6F61] mr-4" />
                <h3 className="text-xl font-semibold text-[#6B5B95]">
                  Integrations
                </h3>
              </div>
              <p className="text-[#2E2E2E]">
                Connect GoTaskList with your favorite tools like Google Calendar,
                Slack, and more.
              </p>
            </div>

            {/* Mobile App */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group relative overflow-hidden">
              <div className="flex items-center mb-4">
                <FaMobileAlt className="w-8 h-8 text-[#FF6F61] mr-4" />
                <h3 className="text-xl font-semibold text-[#6B5B95]">
                  Mobile App
                </h3>
              </div>
              <p className="text-[#2E2E2E]">
                Manage your tasks on the go with our mobile app, available for
                iOS and Android.
              </p>
            
            </div>

            {/* Security */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group relative overflow-hidden">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="w-8 h-8 text-[#FF6F61] mr-4" />
                <h3 className="text-xl font-semibold text-[#6B5B95]">
                  Security
                </h3>
              </div>
              <p className="text-[#2E2E2E]">
                Your data is safe with us. GoTaskList uses advanced encryption
                and security protocols.
              </p>
            </div>
          </div>
        </div>

        {/* Timed Animation Section */}
     
      </div>
    </section>
  );
};

export default AboutPage;