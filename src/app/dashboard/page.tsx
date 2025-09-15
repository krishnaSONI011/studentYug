'use client';

import { motion } from 'framer-motion';
import TopNavbar from '@/components/TopNavbar';
import { 
  UserIcon, 
 
  TrophyIcon, 
  MapPinIcon,
  CalendarIcon,
  ChartBarIcon,
  StarIcon,
  PlusIcon,
  FireIcon,
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  // Mock data - in real app, this would come from API
  const studentData = {
    name: "Aarav Sharma",
    class: "Class 10",
    school: "Delhi Public School",
    location: "New Delhi",
    treesPlanted: 12,
    sportsJoined: 3,
    level: "Environmental Champion",
    badges: 8,
    streak: 15
  };

  const recentActivities = [
    { type: 'tree', message: 'Planted a Neem tree after completing basketball training', date: '2 days ago', icon: FireIcon },
    { type: 'sport', message: 'Joined cricket coaching at Nehru Stadium', date: '1 week ago', icon: TrophyIcon },
    { type: 'achievement', message: 'Earned "Green Warrior" badge', date: '2 weeks ago', icon: StarIcon },
    { type: 'tree', message: 'Planted a Mango tree after football match', date: '3 weeks ago', icon: FireIcon },
  ];

  const sportsProgress = [
    { sport: 'Cricket', level: 'Intermediate', progress: 75, trees: 4 },
    { sport: 'Basketball', level: 'Beginner', progress: 45, trees: 3 },
    { sport: 'Football', level: 'Advanced', progress: 90, trees: 5 },
  ];

  const upcomingEvents = [
    { title: 'Cricket Practice', time: 'Today, 4:00 PM', location: 'Nehru Stadium' },
    { title: 'Tree Plantation Drive', time: 'Tomorrow, 10:00 AM', location: 'Central Park' },
    { title: 'Basketball Tournament', time: 'Next Week', location: 'Sports Complex' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <div className="pt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {studentData.name}!</h1>
          <p className="text-gray-600">Track your sports progress and environmental impact</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <UserIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{studentData.name}</h3>
                  <p className="text-gray-600">{studentData.class} • {studentData.school}</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    {studentData.location}
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">{studentData.level}</div>
                  <div className="text-sm text-gray-600">Current Level</div>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                
                <div className="text-2xl font-bold text-gray-900">{studentData.treesPlanted}</div>
                <div className="text-sm text-gray-600">Trees Planted</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <TrophyIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{studentData.sportsJoined}</div>
                <div className="text-sm text-gray-600">Sports</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <StarIcon className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{studentData.badges}</div>
                <div className="text-sm text-gray-600">Badges</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <FireIcon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{studentData.streak}</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors">
                  <PlusIcon className="w-5 h-5" />
                  <span>Plant a Tree</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-4 rounded-lg transition-colors">
                  <TrophyIcon className="w-5 h-5" />
                  <span>Join Sports</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-3 px-4 rounded-lg transition-colors">
                  <ChartBarIcon className="w-5 h-5" />
                  <span>View Progress</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Activities & Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sports Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Sports Progress</h3>
              <div className="space-y-4">
                {sportsProgress.map((sport, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">{sport.sport}</h4>
                      <span className="text-sm text-gray-600">{sport.level}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${sport.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{sport.progress}%</span>
                    </div>
                    <div className="flex items-center text-sm text-green-600">
                     
                      <span>{sport.trees} trees planted</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'tree' ? 'bg-green-100' :
                      activity.type === 'sport' ? 'bg-blue-100' : 'bg-yellow-100'
                    }`}>
                      <activity.icon className={`w-4 h-4 ${
                        activity.type === 'tree' ? 'text-green-600' :
                        activity.type === 'sport' ? 'text-blue-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">{activity.message}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
                    <CalendarIcon className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.time}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
