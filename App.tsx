
import React, { useState } from 'react';
import { UnitData, ViewState } from './types';
import { KIDS_BOX_UNITS, STAR_CHARACTERS } from './constants';

// --- Sub-components ---

const Header: React.FC<{ onViewHome: () => void }> = ({ onViewHome }) => (
  <header className="bg-yellow-400 p-4 shadow-md flex justify-between items-center sticky top-0 z-50">
    <button onClick={onViewHome} className="text-3xl font-bold text-white flex items-center gap-2 hover:scale-105 transition-transform">
      <span className="bg-white p-1 rounded-lg text-yellow-400">📦</span>
      KidsBox Adventure
    </button>
    <div className="flex gap-2">
      {STAR_CHARACTERS.slice(0, 4).map(char => (
        <div key={char.name} className={`${char.color} w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner border-2 border-white`} title={char.name}>
          {char.icon}
        </div>
      ))}
    </div>
  </header>
);

const UnitCard: React.FC<{ unit: UnitData; onSelect: (u: UnitData) => void }> = ({ unit, onSelect }) => {
  const charInfo = STAR_CHARACTERS.find(c => c.name === unit.character) || STAR_CHARACTERS[0];
  
  return (
    <div 
      onClick={() => onSelect(unit)}
      className="bg-white rounded-3xl p-6 shadow-xl border-4 border-transparent hover:border-yellow-400 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 group"
    >
      <div className={`${charInfo.color} w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-3xl text-white group-hover:rotate-12 transition-transform`}>
        {charInfo.icon}
      </div>
      <h3 className="text-xl font-bold text-blue-800">Unit {unit.id}</h3>
      <h2 className="text-2xl font-black text-gray-800 mb-1">{unit.title}</h2>
      <p className="text-gray-500 font-bold mb-4">{unit.chineseTitle}</p>
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
          {unit.theme.split('&')[0]}
        </span>
        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
          ➜
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedUnit, setSelectedUnit] = useState<UnitData | null>(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startStudy = (unit: UnitData) => {
    setSelectedUnit(unit);
    setView('STUDY');
  };

  const startQuiz = () => {
    setView('QUIZ');
    setCurrentQuizIndex(0);
    setScore(0);
  };

  const handleQuizAnswer = (index: number) => {
    if (!selectedUnit) return;
    if (index === selectedUnit.quizzes[currentQuizIndex].correctAnswer) {
      setScore(s => s + 1);
    }
    
    if (currentQuizIndex + 1 < selectedUnit.quizzes.length) {
      setCurrentQuizIndex(i => i + 1);
    } else {
      setView('RESULT');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 pb-20">
      <Header onViewHome={() => setView('HOME')} />

      <main className="container mx-auto px-4 pt-8">
        {view === 'HOME' && (
          <div>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 mb-10 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
              <div className="z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Welcome to <br/> English World!</h1>
                <p className="text-xl font-bold opacity-90">Choose a unit and start your adventure with the Star family!</p>
              </div>
              <div className="text-8xl md:text-9xl opacity-20 absolute -right-10 top-0 rotate-12 z-0">🌟</div>
              <div className="flex gap-4 mt-6 md:mt-0 z-10">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 text-center">
                  <div className="text-3xl">🏆</div>
                  <div className="text-sm font-bold mt-1">10 Units</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 text-center">
                  <div className="text-3xl">✨</div>
                  <div className="text-sm font-bold mt-1">Quiz Mode</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {KIDS_BOX_UNITS.map(unit => (
                <UnitCard key={unit.id} unit={unit} onSelect={startStudy} />
              ))}
            </div>
          </div>
        )}

        {view === 'STUDY' && selectedUnit && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={() => setView('HOME')} 
                className="bg-white text-blue-600 px-4 py-2 rounded-xl font-bold shadow-sm hover:bg-blue-50 transition-colors"
              >
                ← Back Home
              </button>
              <h2 className="text-3xl font-black text-blue-900">Unit {selectedUnit.id}: {selectedUnit.title}</h2>
              <button 
                onClick={startQuiz}
                className="bg-green-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
              >
                Quiz Start! ✍️
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-blue-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="text-3xl">🔤</span> Vocabulary
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedUnit.vocabulary.map((v, i) => (
                    <div 
                      key={i} 
                      className="bg-blue-50 p-4 rounded-2xl text-left"
                    >
                      <div className="font-black text-xl text-blue-700">{v.word}</div>
                      <div className="text-gray-500 font-bold text-sm">{v.translation}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-purple-400 h-fit">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="text-3xl">💬</span> Say It!
                </h3>
                <div className="space-y-4">
                  {selectedUnit.sentences.map((s, i) => (
                    <div key={i} className="bg-purple-50 p-4 rounded-2xl">
                      <div className="text-purple-900 font-black text-lg mb-1">{s.english}</div>
                      <div className="text-purple-400 font-bold text-sm">{s.chinese}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'QUIZ' && selectedUnit && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-8">
              <span className="text-gray-400 font-bold">Question {currentQuizIndex + 1} of {selectedUnit.quizzes.length}</span>
              <div className="h-4 w-32 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-300" 
                  style={{ width: `${((currentQuizIndex + 1) / selectedUnit.quizzes.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-800 mb-10 text-center">
              {selectedUnit.quizzes[currentQuizIndex].question}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {selectedUnit.quizzes[currentQuizIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuizAnswer(idx)}
                  className="group bg-blue-50 hover:bg-blue-500 p-5 rounded-2xl flex items-center justify-between transition-all"
                >
                  <span className="text-2xl font-bold text-blue-700 group-hover:text-white">{option}</span>
                  <div className="w-8 h-8 rounded-full border-2 border-blue-200 group-hover:border-white flex items-center justify-center">
                    {String.fromCharCode(65 + idx)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'RESULT' && selectedUnit && (
          <div className="max-w-xl mx-auto text-center space-y-8 animate-in slide-in-from-bottom-10">
            <div className="text-9xl mb-4">
              {score === selectedUnit.quizzes.length ? '👑' : score > 0 ? '🌟' : '💪'}
            </div>
            <h2 className="text-4xl font-black text-blue-900">Well Done!</h2>
            <div className="bg-white p-10 rounded-full w-64 h-64 mx-auto flex flex-col items-center justify-center shadow-2xl border-8 border-yellow-400">
              <div className="text-6xl font-black text-blue-600">{score}/{selectedUnit.quizzes.length}</div>
              <div className="text-gray-400 font-bold mt-2">Score</div>
            </div>
            <p className="text-xl font-bold text-gray-600">
              {score === selectedUnit.quizzes.length 
                ? "Perfect! You're an English Star!" 
                : "Great job! Keep practicing!"}
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => setView('HOME')} 
                className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={startQuiz} 
                className="bg-yellow-400 text-white px-8 py-3 rounded-2xl font-bold text-lg shadow-lg hover:bg-yellow-500 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Floating Action Button for Home */}
      {view !== 'HOME' && (
        <button 
          onClick={() => setView('HOME')}
          className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 active:scale-95 transition-all z-40"
        >
          🏠
        </button>
      )}
    </div>
  );
};

export default App;
