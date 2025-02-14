import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-black mb-12 animate-fade-in">
          About GoTaskList
        </h1>

        {/* Introduction Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">
            What is GoTaskList?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            GoTaskList is a powerful task management tool designed to help
            individuals and teams stay organized, boost productivity, and achieve
            their goals. Whether you're managing personal tasks or collaborating
            on team projects, GoTaskList provides an intuitive and seamless
            experience.
          </p>
        </div>

        {/* Dashboard Overview Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Dashboard Overview
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The GoTaskList dashboard is your central hub for managing tasks,
            tracking progress, and staying on top of deadlines. Here's what you
            can expect:
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>
              <strong>Task Overview:</strong> View all your tasks in one place,
              organized by priority, due date, or project.
            </li>
            <li>
              <strong>Progress Tracking:</strong> Monitor your progress with
              visual charts and completion percentages.
            </li>
            <li>
              <strong>Notifications:</strong> Get real-time updates on task
              deadlines, comments, and team activity.
            </li>
            <li>
              <strong>Customization:</strong> Personalize your dashboard with
              themes, layouts, and widgets.
            </li>
          </ul>
        </div>

        {/* Functionalities Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Key Functionalities
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            GoTaskList is packed with features to streamline your workflow and
            enhance productivity. Here are some of the key functionalities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Task Management */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-black mb-2">
                Task Management
              </h3>
              <p className="text-slate-700">
                Create, organize, and prioritize tasks with ease. Set due dates,
                add descriptions, and assign tasks to team members.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-black mb-2">
                Collaboration
              </h3>
              <p className="text-slate-700">
                Work seamlessly with your team. Share tasks, leave comments, and
                track progress in real-time.
              </p>
            </div>

            {/* Analytics */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-black mb-2">
                Analytics
              </h3>
              <p className="text-slate-700">
                Gain insights into your productivity with detailed analytics and
                reports.
              </p>
            </div>

            {/* Integrations */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-black mb-2">
                Integrations
              </h3>
              <p className="text-slate-700">
                Connect GoTaskList with your favorite tools like Google Calendar,
                Slack, and more.
              </p>
            </div>

            {/* Mobile App */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-black mb-2">
                Mobile App
              </h3>
              <p className="text-slate-700">
                Manage your tasks on the go with our mobile app, available for
                iOS and Android.
              </p>
            </div>

            {/* Security */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-black mb-2">Security</h3>
              <p className="text-slate-700">
                Your data is safe with us. GoTaskList uses advanced encryption
                and security protocols.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-700 mb-6">
            Join thousands of users who are already boosting their productivity
            with GoTaskList.
          </p>
          <button className="bg-slate-300 text-black px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 transform hover:scale-105">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;