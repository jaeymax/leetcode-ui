import React, { useState } from 'react';
import { Search, Filter, Check, Star, Lock } from 'lucide-react';

const ProblemsListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  // Sample problems data
  const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", acceptance: "48.2%", status: "solved", isPremium: false },
    { id: 2, title: "Add Two Numbers", difficulty: "Medium", acceptance: "39.1%", status: "attempted", isPremium: false },
    { id: 3, title: "Median of Two Sorted Arrays", difficulty: "Hard", acceptance: "35.4%", status: null, isPremium: true },
    { id: 4, title: "Longest Palindromic Substring", difficulty: "Medium", acceptance: "42.3%", status: null, isPremium: false },
    { id: 5, title: "Regular Expression Matching", difficulty: "Hard", acceptance: "28.1%", status: null, isPremium: true },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'hard': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'solved':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'attempted':
        return <div className="h-5 w-5 rounded-full border-2 border-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Problems</h1>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow mb-6 p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="Search problems"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Difficulty Filter */}
            <div className="flex gap-2">
              {['all', 'easy', 'medium', 'hard'].map((difficulty) => (
                <button
                  key={difficulty}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    selectedDifficulty === difficulty
                      ? 'bg-orange-100 text-orange-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedDifficulty(difficulty)}
                >
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Problems Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acceptance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {problems.map((problem) => (
                <tr key={problem.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap w-16">
                    {getStatusIcon(problem.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <a href="#" className="text-gray-900 hover:text-orange-600">
                        {problem.title}
                      </a>
                      {problem.isPremium && (
                        <Lock className="ml-2 h-4 w-4 text-orange-400" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`${getDifficultyColor(problem.difficulty)} font-medium`}>
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {problem.acceptance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProblemsListPage;