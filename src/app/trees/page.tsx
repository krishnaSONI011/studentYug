'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
 
  TrophyIcon, 
  StarIcon,
  
  HeartIcon,
  
  PlusIcon,
  
  SparklesIcon
} from '@heroicons/react/24/outline';
import { icons } from 'lucide-react';

const TreesPage = () => {
  const [activeTab, setActiveTab] = useState('my-trees');

  // Mock data - in real app, this would come from API
  const userStats = {
    totalTrees: 12,
    thisMonth: 3,
    thisYear: 12,
    level: 'Environmental Champion',
    nextLevel: 'Green Warrior',
    progressToNext: 75,
    badges: 8,
    streak: 15
  };

  const myTrees = [
    {
      id: 1,
      name: 'Neem Tree',
      plantedDate: '2024-01-15',
      location: 'Delhi Public School',
      reason: 'Completed basketball training',
      status: 'Growing',
      image: '🌳',
      growthStage: 3
    },
    {
      id: 2,
      name: 'Mango Tree',
      plantedDate: '2024-01-10',
      location: 'Central Park',
      reason: 'Won cricket match',
      status: 'Healthy',
      image: '🥭',
      growthStage: 4
    },
    {
      id: 3,
      name: 'Banyan Tree',
      plantedDate: '2024-01-05',
      location: 'Sports Complex',
      reason: 'Joined football coaching',
      status: 'Growing',
      image: '🌿',
      growthStage: 2
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'First Tree',
      description: 'Planted your first tree',
      icon: '🌱',
      earned: true,
      date: '2024-01-05'
    },
    {
      id: 2,
      title: 'Green Thumb',
      description: 'Planted 5 trees',
      icon: '🌿',
      earned: true,
      date: '2024-01-12'
    },
    {
      id: 3,
      title: 'Tree Lover',
      description: 'Planted 10 trees',
      icon: '🌳',
      earned: true,
      date: '2024-01-20'
    },
    {
      id: 4,
      title: 'Environmental Champion',
      description: 'Planted 15 trees',
      icon: '🏆',
      earned: false,
      date: null
    },
    {
      id: 5,
      title: 'Green Warrior',
      description: 'Planted 25 trees',
      icon: '⚔️',
      earned: false,
      date: null
    },
    {
      id: 6,
      title: 'Forest Guardian',
      description: 'Planted 50 trees',
      icon: '🛡️',
      earned: false,
      date: null
    }
  ];

  const communityStats = [
    { label: 'Total Trees Planted', value: '25,000+', icon: '🌳' },
    { label: 'Active Students', value: '10,000+', icon: '👥' },
    { label: 'Schools Participating', value: '500+', icon: '🏫' },
    { label: 'Cities Covered', value: '50+', icon: '🏙️' }
  ];

  const recentActivities = [
    { user: 'Priya Sharma', action: 'planted a Neem tree', time: '2 hours ago', icon: '🌱' },
    { user: 'Amit Kumar', action: 'reached Green Thumb level', time: '4 hours ago', icon: '🏆' },
    { user: 'Sneha Patel', action: 'planted a Mango tree', time: '6 hours ago', icon: '🌳' },
    { user: 'Rajesh Singh', action: 'completed 10-day streak', time: '8 hours ago', icon: '🔥' }
  ];

  const tabs = [
    { id: 'my-trees', label: 'My Trees', icon:TrophyIcon },
    { id: 'achievements', label: 'Achievements', icon: TrophyIcon },
    { id: 'community', label: 'Community', icon: HeartIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tree Tracker & Gamification
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your environmental impact, earn achievements, and see how your sports journey 
            contributes to a greener planet.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{userStats.totalTrees}</div>
            <div className="text-gray-600">Total Trees</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{userStats.thisMonth}</div>
            <div className="text-gray-600">This Month</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{userStats.badges}</div>
            <div className="text-gray-600">Badges Earned</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{userStats.streak}</div>
            <div className="text-gray-600">Day Streak</div>
          </div>
        </motion.div>

        {/* Level Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Level Progress</h3>
            <div className="flex items-center space-x-2">
              <SparklesIcon className="w-5 h-5 text-yellow-500" />
              <span className="font-medium text-gray-700">{userStats.level}</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress to {userStats.nextLevel}</span>
              <span>{userStats.progressToNext}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${userStats.progressToNext}%` }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
              />
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Plant 3 more trees to reach the next level and unlock new achievements!
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg mb-8"
        >
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* My Trees Tab */}
            {activeTab === 'my-trees' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Your Planted Trees</h3>
                  <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <PlusIcon className="w-5 h-5" />
                    <span>Plant New Tree</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myTrees.map((tree, index) => (
                    <motion.div
                      key={tree.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200"
                    >
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{tree.image}</div>
                        <h4 className="text-lg font-semibold text-gray-900">{tree.name}</h4>
                        <p className="text-sm text-gray-600">{tree.status}</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Planted:</span>
                          <span className="font-medium">{tree.plantedDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Location:</span>
                          <span className="font-medium">{tree.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Reason:</span>
                          <span className="font-medium text-green-600">{tree.reason}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Growth Stage</span>
                          <span>{tree.growthStage}/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(tree.growthStage / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className={`rounded-xl p-6 border-2 transition-all duration-300 ${
                        achievement.earned
                          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-lg'
                          : 'bg-gray-50 border-gray-200 opacity-60'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-3">{achievement.icon}</div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                        {achievement.earned ? (
                          <div className="flex items-center justify-center space-x-1 text-yellow-600">
                            <StarIcon className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">Earned</span>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-500">Locked</div>
                        )}
                        {achievement.date && (
                          <p className="text-xs text-gray-500 mt-2">{achievement.date}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Community Tab */}
            {activeTab === 'community' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Community Impact</h3>
                
                {/* Community Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {communityStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 text-center border border-green-200"
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activities */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Community Activities</h4>
                  <div className="space-y-3">
                    {recentActivities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                      >
                        <div className="text-2xl">{activity.icon}</div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">
                            <span className="font-medium">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Plant Tree CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-br from-green-600 to-blue-600 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Plant Your Next Tree?</h3>
          <p className="text-green-100 mb-6">
            Every sports achievement, every milestone reached, contributes to a greener tomorrow. 
            Start your next sports journey and plant a tree today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
              Plant a Tree Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-6 rounded-lg transition-colors">
              View Sports Options
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TreesPage;
