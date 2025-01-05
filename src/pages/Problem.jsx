import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, CheckCircle, XCircle } from 'lucide-react';

const ProblemPage = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [testResults, setTestResults] = useState(null);
  const [code, setCode] = useState(`function twoSum(nums, target) {
    // Your solution here
}`);

  const sampleProblem = {
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers in nums such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      }
    ]
  };

  const runCode = () => {
    // Simulate test results
    setTestResults({
      passed: 2,
      total: 3,
      cases: [
        { status: 'passed', input: '[2,7,11,15], 9', output: '[0,1]', expected: '[0,1]' },
        { status: 'passed', input: '[3,2,4], 6', output: '[1,2]', expected: '[1,2]' },
        { status: 'failed', input: '[3,3], 6', output: '[0,1]', expected: '[0,1]' }
      ]
    });
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Navigation Bar */}
      <div className="bg-white border-b px-4 py-2 flex items-center justify-between">
        <div className="font-bold text-xl text-gray-800">LeetCode Clone</div>
        <Button onClick={runCode} className="bg-green-600 hover:bg-green-700 flex gap-2">
          <Play className="w-4 h-4" />
          Run Code
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Panel - Problem Description */}
        <div className="w-1/2 border-r bg-white p-4 overflow-y-auto">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-2xl font-bold">{sampleProblem.title}</h1>
            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              {sampleProblem.difficulty}
            </span>
          </div>

          <div className="space-y-4">
            <div className="prose">
              <p>{sampleProblem.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold">Example 1:</h3>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div><strong>Input:</strong> {sampleProblem.examples[0].input}</div>
                <div><strong>Output:</strong> {sampleProblem.examples[0].output}</div>
                <div><strong>Explanation:</strong> {sampleProblem.examples[0].explanation}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Code Editor and Results */}
        <div className="w-1/2 flex flex-col">
          {/* Code Editor */}
          <div className="flex-1 p-4 bg-gray-900">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-gray-900 text-white font-mono p-4 resize-none focus:outline-none"
              spellCheck="false"
            />
          </div>

          {/* Test Results */}
          {testResults && (
            <div className="h-1/3 border-t bg-white overflow-y-auto">
              <div className="p-4">
                <h3 className="font-bold mb-4">
                  Test Results: {testResults.passed}/{testResults.total} Passed
                </h3>
                <div className="space-y-4">
                  {testResults.cases.map((test, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                      {test.status === 'passed' ? (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                      <div>
                        <div><strong>Input:</strong> {test.input}</div>
                        <div><strong>Output:</strong> {test.output}</div>
                        <div><strong>Expected:</strong> {test.expected}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;