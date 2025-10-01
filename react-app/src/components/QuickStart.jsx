import { useState } from 'react';

export default function QuickStart({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="mb-12">
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="text-4xl">🚀</span>
          빠르게 시작하기
        </h2>
        <p className="text-blue-200/80 mb-8">
          Vite + React + Tailwind CSS로 5분 안에 프로젝트 시작
        </p>

        {/* Step Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeStep === idx
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Step {step.step}: {step.title}
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="bg-black/20 rounded-xl p-6 border border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {steps[activeStep].step}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                {steps[activeStep].title}
              </h3>
              <p className="text-blue-200/70">
                {steps[activeStep].description}
              </p>
            </div>
          </div>

          {/* Commands */}
          <div className="space-y-4 mb-6">
            {steps[activeStep].commands.map((cmd, idx) => (
              <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                {cmd.label && (
                  <div className="text-sm text-blue-300 mb-2 font-medium">
                    {cmd.label}
                  </div>
                )}
                <div className="relative">
                  <pre className="text-white font-mono text-sm overflow-x-auto">
                    <code>{cmd.code}</code>
                  </pre>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(cmd.code);
                    }}
                    className="absolute top-2 right-2 px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 rounded text-xs transition-colors"
                  >
                    복사
                  </button>
                </div>
                {cmd.result && (
                  <div className="mt-2 text-green-400 text-sm font-mono">
                    {cmd.result}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tips */}
          {steps[activeStep].tips && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <div className="text-yellow-300 font-semibold mb-2 flex items-center gap-2">
                <span>💡</span>
                팁
              </div>
              <ul className="space-y-1">
                {steps[activeStep].tips.map((tip, idx) => (
                  <li key={idx} className="text-yellow-200/80 text-sm">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← 이전
          </button>
          <button
            onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
            disabled={activeStep === steps.length - 1}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            다음 →
          </button>
        </div>
      </div>
    </section>
  );
}
