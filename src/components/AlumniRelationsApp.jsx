import React, { useState } from 'react';
import { 
  Home, Users, Bell, MessageSquare, TrendingUp, 
  Settings, Palette, Bookmark, Search, Edit3, 
  Heart, Share2, MoreHorizontal, Send, UserPlus,
  Calendar, Briefcase, GraduationCap, DollarSign,
  Award, Globe, ChevronRight, Menu, X
} from 'lucide-react';

// Main App Component
const AlumniRelationsApp = () => {
  const [activeView, setActiveView] = useState('home');
  const [userType, setUserType] = useState('student');
  const [showThemeCustomizer, setShowThemeCustomizer] = useState(false);
  const [notifications, setNotifications] = useState(9);
  const [messages, setMessages] = useState(6);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Authentication Component
  const AuthView = () => {
    const [authMode, setAuthMode] = useState('login');
    const [selectedUserType, setSelectedUserType] = useState('student');

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-12 h-12" />
            </div>
            <h1 className="text-3xl font-bold text-center">Panimalar Alumni</h1>
            <p className="text-center text-blue-100 mt-2">
              Enhancing Alumni Relations Using Integrated Digital Ecosystem
            </p>
          </div>

          <div className="p-8">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setAuthMode('login')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                  authMode === 'login'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setAuthMode('signup')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                  authMode === 'signup'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                User Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['student', 'alumni', 'admin'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedUserType(type)}
                    className={`py-2 px-3 rounded-lg capitalize font-medium transition ${
                      selectedUserType === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <form className="space-y-4">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {authMode === 'signup' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Register Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter register number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {authMode === 'signup' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  setUserType(selectedUserType);
                  setActiveView('home');
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition"
              >
                {authMode === 'login' ? 'Login' : 'Sign Up'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              {authMode === 'login' ? (
                <p>
                  Don't have an account?{' '}
                  <button
                    onClick={() => setAuthMode('signup')}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button
                    onClick={() => setAuthMode('login')}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Login
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Navigation Component
  const Navigation = () => {
    const menuItems = [
      { icon: Home, label: 'Home', view: 'home' },
      { icon: Users, label: 'Groups', view: 'groups' },
      { icon: Bell, label: 'Notifications', view: 'notifications', badge: notifications },
      { icon: MessageSquare, label: 'Messages', view: 'messages', badge: messages },
      { icon: Bookmark, label: 'Donation', view: 'donation' },
      { icon: TrendingUp, label: 'Analytics', view: 'analytics' },
      { icon: Palette, label: 'Theme', action: () => setShowThemeCustomizer(true) },
      { icon: Settings, label: 'Settings', view: 'settings' },
    ];

    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            PM
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Pradeep M</h3>
            <p className="text-xs text-gray-500">@pradeepkrishna140</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.action ? item.action() : setActiveView(item.view)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeView === item.view
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition">
          Create Post
        </button>
      </div>
    );
  };

  // Stories Component
  const Stories = () => {
    const stories = [
      { name: 'Your Story', image: '🎓', color: 'from-purple-500 to-pink-500' },
      { name: 'Meetup', image: '🤝', color: 'from-blue-500 to-cyan-500' },
      { name: 'Internships', image: '💼', color: 'from-green-500 to-emerald-500' },
      { name: 'Reunion', image: '🎉', color: 'from-orange-500 to-red-500' },
      { name: 'Donation', image: '💰', color: 'from-yellow-500 to-orange-500' },
      { name: 'Career', image: '🚀', color: 'from-indigo-500 to-purple-500' },
    ];

    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {stories.map((story) => (
            <button
              key={story.name}
              className="flex flex-col items-center gap-2 flex-shrink-0 group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${story.color} flex items-center justify-center text-2xl ring-4 ring-white group-hover:ring-blue-200 transition`}>
                {story.image}
              </div>
              <span className="text-xs font-medium text-gray-700">{story.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Post Creation Component
  const CreatePost = () => {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold flex-shrink-0">
            PM
          </div>
          <input
            type="text"
            placeholder="What's on your mind, Pradeep?"
            className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border-none outline-none focus:bg-gray-100 transition"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition">
            Post
          </button>
        </div>
      </div>
    );
  };

  // Feed Posts Component
  const FeedPosts = () => {
    const posts = [
      {
        id: 1,
        author: 'Pradeep M',
        role: 'Student',
        location: 'Panimalar Engineering College, Chennai',
        avatar: 'PM',
        time: '2 hours ago',
        content: 'Excited to share that I completed my internship at ApexPlanet! Grateful for the amazing learning experience and mentorship. Looking forward to applying these skills in my final year project. 🎓',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
        likes: 234,
        comments: 45,
        shares: 12,
      },
      {
        id: 2,
        author: 'Mohamed Aashath K',
        role: 'Alumni',
        location: 'Software Engineer at Google',
        avatar: 'VN',
        time: '5 hours ago',
        content: 'Great to see the annual tech fest happening! Reminds me of my college days. Wishing all the participants the best of luck! 🚀',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
        likes: 567,
        comments: 89,
        shares: 34,
      },
      {
        id: 3,
        author: 'Nagappan S',
        role: 'Alumni',
        location: 'Senior Designer at Microsoft',
        avatar: 'VR',
        time: '8 hours ago',
        content: 'Attended the career guidance session for final year students today. Amazing to give back to the community! If anyone needs help with UX/UI career paths, feel free to reach out. 💼',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
        likes: 423,
        comments: 67,
        shares: 23,
      },
      {
        id: 4,
        author: 'Karthi ',
        role: 'Student',
        location: 'Panimalar Engineering College, Chennai',
        avatar: 'MA',
        time: '12 hours ago',
        content: 'Proud moment! Our team won first place in the national level hackathon. Thanks to our alumni mentors for their guidance! 🏆',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
        likes: 789,
        comments: 123,
        shares: 45,
      },
    ];

    return (
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {post.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-600">{post.role}</p>
                    <p className="text-xs text-gray-500">{post.location} • {post.time}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-800 mb-4">{post.content}</p>
            </div>

            <img
              src={post.image}
              alt="Post"
              className="w-full h-96 object-cover"
            />

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white"></div>
                  </div>
                  <span>{post.likes} likes</span>
                </div>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>{post.comments} comments</span>
                  <span>{post.shares} shares</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t">
                <button className="flex items-center gap-2 flex-1 justify-center py-2 rounded-lg hover:bg-gray-50 transition text-gray-700 font-medium">
                  <Heart className="w-5 h-5" />
                  <span>Like</span>
                </button>
                <button className="flex items-center gap-2 flex-1 justify-center py-2 rounded-lg hover:bg-gray-50 transition text-gray-700 font-medium">
                  <MessageSquare className="w-5 h-5" />
                  <span>Comment</span>
                </button>
                <button className="flex items-center gap-2 flex-1 justify-center py-2 rounded-lg hover:bg-gray-50 transition text-gray-700 font-medium">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Messages Sidebar Component
  const MessagesSidebar = () => {
    const chats = [
      { name: 'Mohamed Aashath K', message: 'Just woke up bruh', avatar: 'MA', online: false, unread: 0 },
      { name: 'Nagappan S', message: '2 new messages', avatar: 'NS', online: true, unread: 2 },
      { name: 'Karthi', message: 'lol u right', avatar: 'KR', online: true, unread: 0 },
      { name: 'Pradeep', message: 'Birthday Tomorrow ', avatar: 'PK', online: false, unread: 0 },
      { name: 'Lux', message: 'haha got that!', avatar: 'LX', online: false, unread: 0 },
    ];

    const requests = [
      { name: 'Madhan ', mutualFriends: 8, avatar: 'MA' },
      { name: 'Kabi', mutualFriends: 2, avatar: 'KB' },
      { name: 'Prasanth', mutualFriends: 5, avatar: 'PR' },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Messages</h2>
            <button className="text-blue-600 hover:text-blue-700">
              <Edit3 className="w-5 h-5" />
            </button>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search messages"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border-none outline-none focus:bg-gray-100 transition"
            />
          </div>

          <div className="flex gap-2 mb-4">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm">
              Primary
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200">
              General
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200">
              Requests (7)
            </button>
          </div>

          <div className="space-y-2">
            {chats.map((chat) => (
              <button
                key={chat.name}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {chat.avatar}
                  </div>
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-900">{chat.name}</h4>
                  <p className={`text-sm ${chat.unread > 0 ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                    {chat.message}
                  </p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {chat.unread}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Friend Requests</h2>
          <div className="space-y-4">
            {requests.map((request) => (
              <div key={request.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
                    {request.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{request.name}</h4>
                    <p className="text-xs text-gray-500">{request.mutualFriends} mutual friends</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                    Accept
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Theme Customizer Component
  const ThemeCustomizer = () => {
    if (!showThemeCustomizer) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Customize Theme</h2>
            <button
              onClick={() => setShowThemeCustomizer(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-600 mb-6">Manage your font size, color, and background</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Font Size</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm">Aa</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((size) => (
                    <button
                      key={size}
                      className={`w-8 h-8 rounded-full ${
                        size === 2 ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-2xl">Aa</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Primary Color</h3>
              <div className="flex gap-3">
                {['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-orange-600', 'bg-pink-600'].map((color) => (
                  <button
                    key={color}
                    className={`w-10 h-10 rounded-full ${color}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Background</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Light', bg: 'bg-white' },
                  { name: 'Dim', bg: 'bg-gray-100' },
                  { name: 'Dark', bg: 'bg-gray-900' },
                ].map((theme) => (
                  <button
                    key={theme.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg border-2 border-gray-200 hover:border-blue-600"
                  >
                    <div className={`w-full h-12 rounded ${theme.bg} border border-gray-300`} />
                    <span className="text-sm font-medium">{theme.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main Dashboard Component
  const Dashboard = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="lg:hidden text-gray-700"
                >
                  <Menu className="w-6 h-6" />
                </button>
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-900">Panimalar Alumni</h1>
              </div>

              <div className="hidden md:flex flex-1 max-w-md mx-8">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Search for alumni, events, and more..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border-none outline-none focus:bg-gray-100 transition"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Bell className="w-6 h-6" />
                  {notifications > 0 && (
                    <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                      {notifications > 9 ? '9+' : notifications}
                    </span>
                  )}
                </button>
                <button className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <MessageSquare className="w-6 h-6" />
                  {messages > 0 && (
                    <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                      {messages}
                    </span>
                  )}
                </button>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold cursor-pointer">
                  PM
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar - Navigation */}
            <div className={`lg:col-span-3 ${showMobileMenu ? 'block' : 'hidden lg:block'}`}>
              <Navigation />
            </div>

            {/* Middle - Feed */}
            <div className="lg:col-span-6">
              <Stories />
              <CreatePost />
              <FeedPosts />
            </div>

            {/* Right Sidebar - Messages */}
            <div className="hidden xl:block lg:col-span-3">
              <MessagesSidebar />
            </div>
          </div>
        </div>

        {/* Theme Customizer */}
        <ThemeCustomizer />
      </div>
    );
  };

  // Groups View Component
  const GroupsView = () => {
    const groups = [
      {
        id: 1,
        name: 'IT Department Alumni',
        members: 1234,
        posts: 567,
        image: '💻',
        description: 'Connect with IT department alumni from all batches',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        id: 2,
        name: 'Placement Cell',
        members: 890,
        posts: 234,
        image: '💼',
        description: 'Job opportunities and career guidance',
        color: 'from-green-500 to-emerald-500',
      },
      {
        id: 3,
        name: 'Entrepreneurs Hub',
        members: 456,
        posts: 123,
        image: '🚀',
        description: 'For alumni who started their own ventures',
        color: 'from-purple-500 to-pink-500',
      },
      {
        id: 4,
        name: 'Research & Innovation',
        members: 678,
        posts: 345,
        image: '🔬',
        description: 'Discuss research projects and innovations',
        color: 'from-orange-500 to-red-500',
      },
      {
        id: 5,
        name: 'Sports & Fitness',
        members: 543,
        posts: 234,
        image: '⚽',
        description: 'Stay fit and organize sports events',
        color: 'from-yellow-500 to-orange-500',
      },
      {
        id: 6,
        name: 'Cultural Events',
        members: 789,
        posts: 456,
        image: '🎭',
        description: 'Organize and participate in cultural activities',
        color: 'from-indigo-500 to-purple-500',
      },
    ];

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Groups</h1>
          <p className="text-gray-600">Connect with alumni who share your interests</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div key={group.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className={`h-32 bg-gradient-to-br ${group.color} flex items-center justify-center text-6xl`}>
                {group.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{group.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {group.members} members
                  </span>
                  <span>{group.posts} posts</span>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Notifications View Component
  const NotificationsView = () => {
    const notificationsList = [
      {
        id: 1,
        type: 'like',
        user: 'Nagappan',
        action: 'liked your post',
        time: '2 hours ago',
        avatar: 'NS',
        read: false,
      },
      {
        id: 2,
        type: 'comment',
        user: 'Karthi',
        action: 'commented on your post',
        time: '4 hours ago',
        avatar: 'KR',
        read: false,
      },
      {
        id: 3,
        type: 'friend',
        user: 'Mohamed Aashath K',
        action: 'sent you a friend request',
        time: '6 hours ago',
        avatar: 'MA',
        read: true,
      },
      {
        id: 4,
        type: 'share',
        user: 'Kabi',
        action: 'shared your post',
        time: '1 day ago',
        avatar: 'KB',
        read: true,
      },
      {
        id: 5,
        type: 'event',
        user: 'Alumni Committee',
        action: 'invited you to Annual Reunion 2025',
        time: '2 days ago',
        avatar: 'AC',
        read: true,
      },
    ];

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">Stay updated with your connections</p>
          </div>
          <button className="text-blue-600 font-semibold hover:text-blue-700">
            Mark all as read
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm divide-y">
          {notificationsList.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 hover:bg-gray-50 transition ${!notification.read ? 'bg-blue-50' : ''}`}
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  {notification.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">
                    <span className="font-semibold">{notification.user}</span>{' '}
                    {notification.action}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Donation View Component
  const DonationView = () => {
    const campaigns = [
      {
        id: 1,
        title: 'New Computer Lab',
        description: 'Help us build a state-of-the-art computer lab for students',
        raised: 450000,
        goal: 1000000,
        donors: 123,
        image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800',
      },
      {
        id: 2,
        title: 'Scholarship Fund',
        description: 'Support deserving students with scholarships',
        raised: 780000,
        goal: 1500000,
        donors: 234,
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
      },
      {
        id: 3,
        title: 'Library Expansion',
        description: 'Expand our library with more books and resources',
        raised: 320000,
        goal: 800000,
        donors: 89,
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      },
    ];

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Donation Campaigns</h1>
          <p className="text-gray-600">Give back to your alma mater and help shape the future</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{campaign.title}</h3>
                <p className="text-gray-600 mb-4">{campaign.description}</p>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-semibold text-gray-900">
                      ₹{campaign.raised.toLocaleString()} raised
                    </span>
                    <span className="text-gray-500">
                      of ₹{campaign.goal.toLocaleString()} goal
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full"
                      style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{campaign.donors} donors</p>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Your Impact Matters</h2>
          <p className="mb-6">
            Every contribution, no matter the size, makes a difference in the lives of our students. 
            Join hundreds of alumni who are helping build a brighter future for Panimalar Engineering College.
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">₹15.5M</div>
              <div className="text-blue-100">Total Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">456</div>
              <div className="text-blue-100">Active Donors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-blue-100">Campaigns</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Analytics View Component
  const AnalyticsView = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your engagement and network growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[
            { label: 'Profile Views', value: '2,345', change: '+12%', icon: TrendingUp, color: 'blue' },
            { label: 'Connections', value: '856', change: '+8%', icon: Users, color: 'green' },
            { label: 'Post Engagement', value: '4,567', change: '+23%', icon: Heart, color: 'red' },
            { label: 'Messages', value: '234', change: '+5%', icon: MessageSquare, color: 'purple' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${stat.color}-100 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Network Growth</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-blue-600 to-indigo-600 rounded-t-lg"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-gray-500">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'Posted an update', time: '2 hours ago' },
                { action: 'Connected with 5 alumni', time: '5 hours ago' },
                { action: 'Joined IT Department group', time: '1 day ago' },
                { action: 'Donated to Scholarship Fund', time: '2 days ago' },
                { action: 'Attended Career Guidance session', time: '3 days ago' },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-3 pb-4 border-b last:border-b-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Settings View Component
  const SettingsView = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Pradeep M"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="pradeep@pec.edu"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
                <textarea
                  rows="4"
                  defaultValue="Final year IT student at Panimalar Engineering College. Passionate about web development and AI."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Settings</h3>
            <div className="space-y-4">
              {[
                { label: 'Make my profile public', checked: true },
                { label: 'Allow messages from non-connections', checked: false },
                { label: 'Show my activity status', checked: true },
                { label: 'Email notifications', checked: true },
              ].map((setting) => (
                <div key={setting.label} className="flex items-center justify-between py-3">
                  <span className="text-gray-900 font-medium">{setting.label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={setting.checked} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Account Actions</h3>
            <div className="space-y-3">
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Save Changes
              </button>
              <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">
                Change Password
              </button>
              <button
                onClick={() => setActiveView('auth')}
                className="w-full py-3 bg-red-50 text-red-600 rounded-lg font-semibold hover:bg-red-100 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main Render Logic
  if (activeView === 'auth') {
    return <AuthView />;
  }

  return (
    <div>
      {activeView === 'home' && <Dashboard />}
      {activeView === 'groups' && (
        <>
          <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <h1 className="text-xl font-bold text-gray-900">Panimalar Alumni</h1>
                </div>
                <button
                  onClick={() => setActiveView('home')}
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </header>
          <GroupsView />
        </>
      )}
      {activeView === 'notifications' && (
        <>
          <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <h1 className="text-xl font-bold text-gray-900">Panimalar Alumni</h1>
                </div>
                <button
                  onClick={() => setActiveView('home')}
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </header>
          <NotificationsView />
        </>
      )}
      {activeView === 'donation' && (
        <>
          <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <h1 className="text-xl font-bold text-gray-900">Panimalar Alumni</h1>
                </div>
                <button
                  onClick={() => setActiveView('home')}
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </header>
          <DonationView />
        </>
      )}
      {activeView === 'analytics' && (
        <>
          <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <h1 className="text-xl font-bold text-gray-900">Panimalar Alumni</h1>
                </div>
                <button
                  onClick={() => setActiveView('home')}
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </header>
          <AnalyticsView />
        </>
      )}
      {activeView === 'settings' && (
        <>
          <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <h1 className="text-xl font-bold text-gray-900">Panimalar Alumni</h1>
                </div>
                <button
                  onClick={() => setActiveView('home')}
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </header>
          <SettingsView />
        </>
      )}
    </div>
  );
};

export default AlumniRelationsApp;