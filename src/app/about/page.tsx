'use client';

import { motion } from 'framer-motion';
import TopNavbar from '@/components/TopNavbar';
import { 
  HeartIcon, 
  TrophyIcon, 
  MapPinIcon, 
  UserGroupIcon,
  SparklesIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const AboutPage = () => {
  const values = [
    {
      icon: HeartIcon,
      title: 'Environmental Responsibility',
      description: 'Every student action contributes to environmental sustainability through tree plantation.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrophyIcon,
      title: 'Sports Excellence',
      description: 'Providing access to quality sports facilities, coaches, and training programs.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: UserGroupIcon,
      title: 'Community Impact',
      description: 'Building a community of students who care about both personal growth and the planet.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: SparklesIcon,
      title: 'Innovation',
      description: 'Using technology to gamify environmental responsibility and make it engaging.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const team = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Founder & CEO',
      image: '👩‍💼',
      description: 'Environmental scientist with 15+ years in sustainability and education.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'CTO',
      image: '👨‍💻',
      description: 'Tech entrepreneur passionate about using technology for social good.'
    },
    {
      name: 'Amit Singh',
      role: 'Sports Director',
      image: '👨‍🏫',
      description: 'Former national-level athlete and certified sports coach.'
    },
    {
      name: 'Sneha Patel',
      role: 'Community Manager',
      image: '👩‍🎓',
      description: 'Education specialist focused on student engagement and development.'
    }
  ];

  const milestones = [
    { year: '2024', event: 'StudentYug Platform Launch', description: 'Launched with 1000+ students and 50+ sports grounds' },
    { year: '2024', event: 'First 10,000 Trees Planted', description: 'Reached our first major environmental milestone' },
    { year: '2024', event: 'Government Partnership', description: 'Partnered with Ministry of Education for nationwide rollout' },
    { year: '2025', event: 'International Expansion', description: 'Expanding to 5 countries with local partnerships' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-blue-600 py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About StudentYug
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation through sports excellence and environmental responsibility. 
              One student, one tree, one future at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                StudentYug was born from a simple yet powerful idea: what if every students journey 
                in sports could also contribute to environmental sustainability? We believe that 
                personal growth and planetary care go hand in hand.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our platform connects students with sports resources while ensuring that every 
                milestone achieved plants a tree, creating a lasting positive impact on both 
                individual development and environmental health.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <LightBulbIcon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation in Action</h3>
                  <p className="text-gray-600">Using technology to make environmental responsibility engaging</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-600 mb-2">25,000+</div>
                  <div className="text-xl text-gray-700 mb-4">Trees Planted</div>
                  <div className="text-sm text-gray-600">
                    And counting! Every student milestone contributes to a greener future.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at StudentYug, from platform development 
              to community building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-4`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate individuals working together to create a better future for students and the environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to a nationwide movement, here's how StudentYug has grown.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Be part of a movement that's transforming how students engage with sports and environmental responsibility. 
              Together, we can create a greener, healthier future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Join StudentYug
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutPage;
