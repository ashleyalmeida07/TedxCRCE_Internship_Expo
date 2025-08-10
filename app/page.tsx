'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence,easeOut } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Building2, MapPin, Instagram, Linkedin, Twitter, ExternalLink, ChevronLeft, ChevronRight, Menu, X, Target, Lightbulb, TrendingUp, Award, Globe,Clock, MapPinIcon,  Briefcase, Trophy, Rocket,  User } from 'lucide-react'

export default function TEDxCRCEExpo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'], {
  ease: easeOut
})
  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 72,
    hours: 9,
    minutes: 10,
    seconds: 10
  })

  useEffect(() => {
const targetDate = new Date('2025-10-18T09:00:00').getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Timeline data
  const timelineEvents = [
  {
    date: "Oct 6, 2025",
    title: "Resume Workshop",
    description: "Guidance session to help students create impactful resumes and portfolios.",
    step: 1,
    status: "active"
  },
  {
    date: "Oct 7, 2025",
    title: "Registration",
    description: "Students register for the TEDxCRCE Internship Expo 2025.",
    step: 2,
    status: "active"
  },
  {
    date: "Oct 18, 2025",
    title: "Expo Day & Interviews",
    description: "Registered students attend the expo, participate in interviews, and network with companies.",
    step: 3,
    status: "active"
  }
];

  
  const stats = [
    { number: '100+', label: 'Students', icon: Users },
    { number: '30+', label: 'Companies', icon: Globe },
    { number: '50+', label: 'Internships', icon: Rocket },
    { number: '95%', label: 'Success Rate', icon: TrendingUp }
  ]


  // Companies data
  const companies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png", domain: "Tech", positions: 25 },
    { name: "Microsoft", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s", domain: "Tech", positions: 30 },
    { name: "Amazon", logo: "/placeholder.svg?height=80&width=120&text=Amazon", domain: "Tech", positions: 20 },
    { name: "Netflix", logo: "/placeholder.svg?height=80&width=120&text=Netflix", domain: "Media", positions: 15 },
    { name: "Adobe", logo: "/placeholder.svg?height=80&width=120&text=Adobe", domain: "Design", positions: 18 },
    { name: "Meta", logo: "/placeholder.svg?height=80&width=120&text=Meta", domain: "Tech", positions: 22 },
    { name: "Apple", logo: "/placeholder.svg?height=80&width=120&text=Apple", domain: "Tech", positions: 12 },
    { name: "Spotify", logo: "/placeholder.svg?height=80&width=120&text=Spotify", domain: "Media", positions: 10 },
    { name: "Tesla", logo: "/placeholder.svg?height=80&width=120&text=Tesla", domain: "Tech", positions: 8 },
    { name: "Uber", logo: "/placeholder.svg?height=80&width=120&text=Uber", domain: "Tech", positions: 16 },
    { name: "Airbnb", logo: "/placeholder.svg?height=80&width=120&text=Airbnb", domain: "Tech", positions: 14 },
    { name: "Salesforce", logo: "/placeholder.svg?height=80&width=120&text=Salesforce", domain: "Tech", positions: 20 }
  ]

  // Gallery data
  const galleryImages = [
    { 
      id: 1, 
      src: "https://tedxcrce.com/_next/image?url=%2F19.jpg&w=1920&q=75", 
      category: "event", 
      title: "Main Stage Setup",
      description: "The iconic red circle stage where ideas come to life"
    },
    { 
      id: 2, 
      src: "/placeholder.svg?height=400&width=600&text=Networking+Session", 
      category: "networking", 
      title: "Networking Sessions",
      description: "Students connecting with industry professionals"
    },
    { 
      id: 3, 
      src: "/placeholder.svg?height=400&width=600&text=Company+Booths", 
      category: "companies", 
      title: "Company Exhibition",
      description: "Interactive booths showcasing career opportunities"
    },
    { 
      id: 4, 
      src: "/placeholder.svg?height=400&width=600&text=Student+Presentations", 
      category: "presentations", 
      title: "Student Presentations",
      description: "Innovative project demonstrations by students"
    },
    { 
      id: 5, 
      src: "/placeholder.svg?height=400&width=600&text=Panel+Discussion", 
      category: "event", 
      title: "Expert Panel Discussion",
      description: "Industry leaders sharing insights on future trends"
    },
    { 
      id: 6, 
      src: "/placeholder.svg?height=400&width=600&text=Award+Ceremony", 
      category: "event", 
      title: "Award Ceremony",
      description: "Recognizing outstanding projects and achievements"
    }
  ]



  const filteredGallery = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % filteredGallery.length)
  }

  const prevGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length)
  }


  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TEDx</span>
              </div>
              <span className="font-bold text-xl text-white">CRCE</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-red-500 transition-colors font-medium">About</a>
            <a href="#timeline" className="hover:text-red-500 transition-colors font-medium">Timeline</a>
            <a href="#companies" className="hover:text-red-500 transition-colors font-medium">Companies</a>
            <a href="#gallery" className="hover:text-red-500 transition-colors font-medium">Gallery</a>
            <button className="btn-glitch ">
            Register Now
          </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                <a href="#about" className="block hover:text-red-500 transition-colors font-medium">About</a>
                <a href="#timeline" className="block hover:text-red-500 transition-colors font-medium">Timeline</a>
                <a href="#companies" className="block hover:text-red-500 transition-colors font-medium">Companies</a>
                <a href="#gallery" className="block hover:text-red-500 transition-colors font-medium">Gallery</a>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Register Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, }}
            animate={{ opacity: 1}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center space-y-12"
          >
            {/* TEDx CRCE Logo and Branding */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-2xl">TEDx</span>
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-white">CRCE</h1>
                  <p className="text-red-400 text-lg font-medium">Internship Expo 2025</p>
                </div>
              </motion.div>
              
              {/* Main Tagline */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                  Ideas. <span className="text-red-500">Internships.</span> Impact.
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Join us for the most innovative internship expo of 2025. Where brilliant minds meet 
                  groundbreaking opportunities, and ideas transform into career-defining moments.
                </p>
              </motion.div>
            </div>

            {/* Key Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300"
                >
                  <stat.icon className="h-8 w-8 text-red-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Countdown Timer */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="max-w-2xl mx-auto bg-gray-900/80 border border-gray-800 text-white p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center justify-center">
                <Clock className="mr-3 h-6 w-6 text-red-500" />
                Event Starts In:
              </h3>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-red-500">{timeLeft.days}</div>
                  <div className="text-sm text-gray-400 mt-1">Days</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-red-500">{timeLeft.hours}</div>
                  <div className="text-sm text-gray-400 mt-1">Hours</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-red-500">{timeLeft.minutes}</div>
                  <div className="text-sm text-gray-400 mt-1">Minutes</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-red-500">{timeLeft.seconds}</div>
                  <div className="text-sm text-gray-400 mt-1">Seconds</div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto"
            >
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 rounded-xl border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg"
              >
                <User className="mr-3 h-5 w-5" />
                Register Now
              </Button>
              <Button 
                size="lg"
                variant="ghost"
                className="text-lg px-8 py-4 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                <Calendar className="mr-3 h-5 w-5" />
              <a href="#timeline">View Schedule</a>
              </Button>
            </motion.div>

            {/* Event Details */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-400 max-w-2xl mx-auto"
            >
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-red-500" />
                <span>October 18, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-red-500" />
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-red-500" />
                <span>CRCE, Mumbai</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section with Fixed Color Scheme */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-900/50 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20 mb-6">
              <Target className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-medium">About the Event</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About the Expo
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              TEDxCRCE Internship Expo 2025 bridges the gap between innovative student minds 
              and industry opportunities, creating a platform for meaningful connections and career transformation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
             {
                icon: Lightbulb,
                title: 'Resume Building & Preparation',
                description: 'Join expert-led workshops to craft impressive resumes, polish your portfolio, and prepare for impactful interviews.'
              },
              {
                icon: Target,
                title: 'Internship Opportunities',
                description: 'Meet and connect with top companies offering internships that match your skills, interests, and career aspirations.'
              },
              {
                icon: Award,
                title: 'Showcase & Selection',
                description: 'On Expo Day, present your talents, participate in interviews, and secure exciting internship offers from participating companies.'
              }

            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="text-center p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/10 h-full">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-red-500/30 group-hover:to-red-600/40 transition-all duration-300 shadow-lg">
                      <item.icon className="h-10 w-10 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Previous Year Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 shadow-2xl hover:shadow-red-500/5 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Previous Year Highlights</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "Student Participants", icon: <Users className="w-8 h-8" /> },
                { number: "30+", label: "Partner Companies", icon: <Building2 className="w-8 h-8" /> },
                { number: "18+", label: "Internship Offers", icon: <Briefcase className="w-8 h-8" /> },
                { number: "95%", label: "Satisfaction Rate", icon: <Trophy className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="space-y-4 group"
                >
                  <div className="text-red-500 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section id="timeline" className="py-24 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-500/3 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-500/8 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20 mb-6">
              <Calendar className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-medium">Event Roadmap</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Event Timeline
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
             Track each stage of the TEDxCRCE Internship Expo — from sign-up to selection — as we move closer to connecting students with their next big opportunity.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Enhanced Vertical Line with Gradient and Glow */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-red-600 to-red-500 rounded-full shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-600 to-red-500 rounded-full blur-sm opacity-50"></div>
              </div>
              
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-20 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Enhanced Timeline Node with Pulse Animation */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className={`w-8 h-8 rounded-full border-4 border-black shadow-2xl ${
                        event.status === 'completed' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                        event.status === 'active' ? 'bg-gradient-to-br from-red-500 to-red-600 animate-pulse' :
                        'bg-gradient-to-br from-gray-500 to-gray-600'
                      }`}></div>
                      {event.status === 'active' && (
                        <div className="absolute inset-0 w-8 h-8 bg-red-500 rounded-full animate-ping opacity-20"></div>
                      )}
                    </div>
                  </motion.div>
                  
                  {/* Enhanced Step Number with Better Design */}
                  <motion.div 
                    className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 z-30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl border-2 ${
                      event.status === 'completed' ? 'bg-gradient-to-br from-green-500 to-green-700 border-green-400' :
                      event.status === 'active' ? 'bg-gradient-to-br from-red-500 to-red-700 border-red-400' :
                      'bg-gradient-to-br from-gray-600 to-gray-800 border-gray-500'
                    }`}>
                      {event.step}
                    </div>
                  </motion.div>

                  {/* Enhanced Content Card */}
                  <div className={`ml-28 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="group"
                    >
                      <Card className={`bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border-2 transition-all duration-500 shadow-2xl hover:shadow-red-500/10 ${
                        event.status === 'completed' ? 'border-green-500/50 hover:border-green-400' : 
                        event.status === 'active' ? 'border-red-500/50 hover:border-red-400' : 'border-gray-600/50 hover:border-gray-500'
                      } hover:bg-gradient-to-br hover:from-gray-700/90 hover:to-gray-800/90`}>
                        <CardContent className="p-8">
                          <div className="flex items-center justify-between mb-6">
                            <Badge className={`text-white font-semibold px-4 py-2 text-sm ${
                              event.status === 'completed' ? 'bg-gradient-to-r from-green-600 to-green-700' :
                              event.status === 'active' ? 'bg-gradient-to-r from-red-600 to-red-700' : 'bg-gradient-to-r from-gray-600 to-gray-700'
                            }`}>
                              <Clock className="w-4 h-4 mr-2" />
                              {event.date}
                            </Badge>
                           
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                            {event.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed text-lg">
                            {event.description}
                          </p>
                          
                          {/* Progress Indicator */}
                          <div className="mt-6 pt-4 border-t border-gray-700/50">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-400">Step {event.step} of 3</span>
                              <div className="flex space-x-1">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className={`w-2 h-2 rounded-full ${
                                    i < event.step ? 'bg-red-500' : 'bg-gray-600'
                                  }`}></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Companies Section */}
      <section id="companies" className="py-24 bg-gradient-to-b from-gray-900/50 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 right-20 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-20 w-56 h-56 bg-red-500/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20 mb-6">
              <Building2 className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-medium">Industry Partners</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Participating Companies
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Innovative startups and emerging companies are ready to meet passionate students. Discover exciting internship openings across a variety of domains at the Expo.
            </p>
          </motion.div>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group cursor-pointer"
              >
               <Card className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md border border-gray-700/60 hover:border-red-500/70 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-red-500/20 overflow-hidden rounded-2xl">
                  <CardContent className="p-6 text-center relative z-10">

                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0"></div>
                      <img 
                        src={company.logo || "/placeholder.svg"} 
                        alt={company.name}
                      className="w-full h-16 object-contain group-hover:scale-110 transition-all duration-500"
                      />
                    
                    {/* <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300 mb-2 tracking-wide">
                      {company.name}
                    </h3> */}

                    <div className="flex justify-between items-center text-sm">
                      <Badge 
                        variant="outline"
                        className="border border-red-500/50 text-red-400 bg-red-500/10 group-hover:border-red-400 group-hover:bg-red-500/20 transition-all duration-300"
                      >
                        {company.domain}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

              </motion.div>
            ))}
          </div>

    
        </div>
      </section>

      {/* Event Gallery Section */}
      <section id="gallery" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Event Gallery</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Relive the magic of previous TEDxCRCE events. From inspiring presentations to 
              life-changing networking moments, witness the transformation that happens here.
            </p>
          </motion.div>

        

          {/* Main Gallery Display */}
          <div className="max-w-6xl mx-auto">
            <div className="relative mb-8">
              <motion.div
                key={currentGalleryImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img 
                  src={filteredGallery[currentGalleryImage]?.src || "/placeholder.svg"} 
                  alt={filteredGallery[currentGalleryImage]?.title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {filteredGallery[currentGalleryImage]?.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {filteredGallery[currentGalleryImage]?.description}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevGalleryImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-red-500 text-red-500 hover:bg-red-500 hover:text-white backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextGalleryImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-red-500 text-red-500 hover:bg-red-500 hover:text-white backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {filteredGallery.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCurrentGalleryImage(index)}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentGalleryImage ? 'border-red-500' : 'border-transparent hover:border-red-500/50'
                  }`}
                >
                  <img 
                    src={image.src || "/placeholder.svg"} 
                    alt={image.title}
                    className="w-full h-16 md:h-20 object-cover"
                  />
                </motion.div>

                
              ))}
            </div>
             <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
            >
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Internship Expo 2025</h3>
              <p className="text-gray-300 mb-6">
                Discover amazing internship opportunities and connect with top companies.A TEDxCRCE initiative
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="voltage-button">
                <a href="https://drive.google.com/file/d/1jE3rVJo3uUnwxx1akyTmTu3mdxju_bha/view?usp=sharing"    target="_blank" >
           <Button size="lg" variant="outline" className="border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-400 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Expo Brochure
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
                </a>
    </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">TEDxCRCE</span>
                  <div className="text-sm text-red-500 font-medium">EXPO 2025</div>
                </div>
              </div>
              <p className="text-red-500 font-semibold mb-4">Ideas. Internships. Impact.</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming careers through innovation, one connection at a time. 
                Join the movement that's reshaping the future of internships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
              <div className="space-y-3">
                {['About', 'Timeline', 'Companies', 'Gallery'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-400 hover:text-red-500 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-6 text-lg">Event Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-red-500 w-5 h-5" />
                  <span className="text-gray-400">October 10, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-red-500 w-5 h-5" />
                  <span className="text-gray-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="text-red-500 w-5 h-5" />
                  <span className="text-gray-400">CRCE Campus, Mumbai</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-6 text-lg">Connect With Us</h4>
              <div className="flex space-x-4 mb-6">
                  {[
                    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/tedxcrce/" },
                    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/tedxcrce/" },
                    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/TEDxCRCE" }
                  ].map((social, index) => (
                    <a 
                      key={index} 
                      href={social.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                      >
                        {social.icon}
                      </Button>
                    </a>
                  ))}
                </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">@tedxcrce</p>
                <p className="text-red-500 text-sm font-medium">#TEDxCRCEExpo2025</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 TEDxCRCE. All rights reserved. This independent TEDx event is operated under license from TED.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Code of Conduct</a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
