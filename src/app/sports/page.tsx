'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import TopNavbar from '@/components/TopNavbar';
import { 
  MapPinIcon, 
 
  UserIcon,
  StarIcon,
  PhoneIcon,
 
  MagnifyingGlassIcon,
  FunnelIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const SportsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const sports = ['all', 'Cricket', 'Football', 'Basketball', 'Tennis', 'Badminton', 'Volleyball'];
  const locations = ['all', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Pune'];

  const sportsGrounds = [
    {
      id: 1,
      name: 'Nehru Stadium',
      sport: 'Cricket',
      location: 'Delhi',
      rating: 4.8,
      distance: '2.5 km',
      price: '₹500/hour',
      facilities: ['Parking', 'Changing Room', 'Cafeteria'],
      coaches: 3,
      image: '🏏',
      description: 'Professional cricket ground with modern facilities and experienced coaches.'
    },
    {
      id: 2,
      name: 'Sports Complex Arena',
      sport: 'Football',
      location: 'Mumbai',
      rating: 4.6,
      distance: '1.8 km',
      price: '₹400/hour',
      facilities: ['Parking', 'Medical Room', 'Water Station'],
      coaches: 2,
      image: '⚽',
      description: 'Full-size football field with floodlights for evening practice sessions.'
    },
    {
      id: 3,
      name: 'Basketball Court Central',
      sport: 'Basketball',
      location: 'Bangalore',
      rating: 4.9,
      distance: '3.2 km',
      price: '₹300/hour',
      facilities: ['Parking', 'Equipment Rental', 'Snack Bar'],
      coaches: 4,
      image: '🏀',
      description: 'Indoor basketball court with professional-grade flooring and equipment.'
    },
    {
      id: 4,
      name: 'Tennis Academy',
      sport: 'Tennis',
      location: 'Chennai',
      rating: 4.7,
      distance: '4.1 km',
      price: '₹600/hour',
      facilities: ['Parking', 'Pro Shop', 'Restaurant'],
      coaches: 2,
      image: '🎾',
      description: 'Premium tennis courts with clay and hard court options available.'
    },
    {
      id: 5,
      name: 'Badminton Center',
      sport: 'Badminton',
      location: 'Kolkata',
      rating: 4.5,
      distance: '2.8 km',
      price: '₹250/hour',
      facilities: ['Parking', 'Equipment Rental', 'Air Conditioning'],
      coaches: 3,
      image: '🏸',
      description: 'Air-conditioned badminton courts with professional lighting.'
    },
    {
      id: 6,
      name: 'Volleyball Arena',
      sport: 'Volleyball',
      location: 'Pune',
      rating: 4.4,
      distance: '3.5 km',
      price: '₹350/hour',
      facilities: ['Parking', 'Changing Room', 'First Aid'],
      coaches: 2,
      image: '🏐',
      description: 'Indoor volleyball court with sand and hard court options.'
    }
  ];

  const coaches = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      sport: 'Cricket',
      experience: '15 years',
      rating: 4.9,
      location: 'Delhi',
      price: '₹2000/session',
      speciality: 'Batting & Bowling',
      image: '👨‍🏫',
      achievements: ['Former Ranji Player', 'BCCI Certified Coach']
    },
    {
      id: 2,
      name: 'Priya Sharma',
      sport: 'Football',
      experience: '12 years',
      rating: 4.8,
      location: 'Mumbai',
      price: '₹1800/session',
      speciality: 'Midfield & Defense',
      image: '👩‍🏫',
      achievements: ['AIFF Certified', 'Youth Development Expert']
    },
    {
      id: 3,
      name: 'Amit Singh',
      sport: 'Basketball',
      experience: '10 years',
      rating: 4.7,
      location: 'Bangalore',
      price: '₹1500/session',
      speciality: 'Shooting & Dribbling',
      image: '👨‍🏫',
      achievements: ['NBA Academy Graduate', 'State Level Player']
    }
  ];

  const filteredGrounds = sportsGrounds.filter(ground => {
    const matchesSearch = ground.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ground.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === 'all' || ground.sport === selectedSport;
    const matchesLocation = selectedLocation === 'all' || ground.location === selectedLocation;
    
    return matchesSearch && matchesSport && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <div className="pt-20 mt-10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Sports Ground
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover nearby sports facilities, connect with experienced coaches, and start your journey 
            while contributing to environmental sustainability.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search grounds or coaches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Sport Filter */}
            <select
              value={selectedSport}
              onChange={(e) => setSelectedSport(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {sports.map(sport => (
                <option key={sport} value={sport}>
                  {sport === 'all' ? 'All Sports' : sport}
                </option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location}>
                  {location === 'all' ? 'All Locations' : location}
                </option>
              ))}
            </select>

            {/* Filter Button */}
            <button className="flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <FunnelIcon className="w-5 h-5 mr-2" />
              Apply Filters
            </button>
          </div>
        </motion.div>

        {/* Sports Grounds Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sports Grounds & Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGrounds.map((ground, index) => (
              <motion.div
                key={ground.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{ground.image}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{ground.name}</h3>
                        <p className="text-sm text-gray-600">{ground.sport}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{ground.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{ground.description}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{ground.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>📍</span>
                      <span>{ground.distance}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-green-600">{ground.price}</div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <UserIcon className="w-4 h-4" />
                      <span>{ground.coaches} coaches</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {ground.facilities.map((facility, idx) => (
                      <span key={idx} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {facility}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                      Book Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <HeartIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coaches Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Coaches & Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-2xl">
                    {coach.image}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{coach.name}</h3>
                    <p className="text-sm text-gray-600">{coach.sport} Coach</p>
                    <div className="flex items-center space-x-1">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{coach.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium">{coach.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Speciality:</span>
                    <span className="font-medium">{coach.speciality}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{coach.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium text-green-600">{coach.price}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Achievements:</h4>
                  <div className="space-y-1">
                    {coach.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                    Contact Coach
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <PhoneIcon className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tree Planting CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-br from-green-600 to-blue-600 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Sports Journey?</h3>
          <p className="text-green-100 mb-6">
            Every sports session you book contributes to tree plantation. Join us in making a difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
              Book Your First Session
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-6 rounded-lg transition-colors">
              Learn About Tree Planting
            </button>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default SportsPage;
