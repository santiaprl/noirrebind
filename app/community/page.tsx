"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, MessageCircle, Filter, BookOpen, Sparkles } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
type QuizAnswer = {
  text: string
  arc: number
}
type QuizQuestion = {
  question: string
  answers: QuizAnswer[]
}

// Arc data with descriptions and book recommendations
const arcDetails = [
  {
    id: 1,
    title: "Arc I – This Is Where You Begin Again",
    color: "#E69E6C",
    textColor: "white",
    description:
      "You are not broken. You're just done performing. People call it stength-what they really mean is you've learned to hide it well. But you're tired. Of shirinking. Of smiling. Of surviving. You're not here to be fixed. You're here to remember who you were before the world told you how to act. Before you shrunk yourself to be loved. Before you lost track of what you actually needed. You're not falling apart - you're shedding what was never yours.",
    tone: "Emotional and raw",
    books: ["Breaking the Habit of Being Yourself", "The Mountain is You", "Man's Search for Meaning"],
  },
  {
    id: 2,
    title: "Arc II – Discipline Is a Love Language",
    color: "#D98C7C",
    quote: "Discipline isn't punishment. It's remembering your own power.",
    description:
      "This isn't about motivation - it's about honoring your word. You don't need more information. You need integrity with your promises, with yourself. Discipline is the bridge between who you've been and who you are meant to become. You want change? Then stop talking and start doing. You already know what to do. Now do it tired. Do it unsure. But Do it ANYWAY.",
    tone: "Empowering and grounded",
    books: ["Atomic Habits", "Can't Hurt Me", "Ego Is the Enemy"],
  },
  {
    id: 3,
    title: "Arc III – Return to Yourself",
    color: "#E3DAC9",
    textColor: "#2C2C2C",
    quote: "You don't have to become anything. You just have to remember who you were before the world got loud.",
    description:
      "It's not a coincidence you landed here, they say that the teacher appears when the student is ready. When the student is ready to learn that peace was never something to find -  but something to return to, within. These books will guide you to the next step of your evolution as a human being. Read them with an open mind and leave behind whatever doesn't serve you. Trust your intuition - it's always being guiding you from the start.",
    tone: "Spiritual and earthy",
    books: ["The Power of Now", "The Daily Stoic", "The Mastery of Love"],
  },
  {
    id: 4,
    title: "Arc IV – Build in Silence",
    color: "#8198AD",
    quote: "They won't see you coming until it's too late. And that's the point.",
    description:
      "You want to leave a legacy? Then earn it in the silence. In the early mornings. In the reps no one claps for. You are not interested in being seen, yet. You came here to win, but winning requires strategy, knowledege, systems and consistency. The grind's isn't loud. But the results will be.",
    tone: "Powerful and egocentric",
    books: ["The Millionaire Fastlane", "The 48 Laws of Power", "Principles"],
  },
]

// Quiz questions and answers
const quizQuestions: QuizQuestion [] = [
  {
    question: "What's the phase you're in right now?",
    answers: [
      { text: "I feel  like I've lost myself. I just want to start over", arc: 1 },
      { text: "I keep making promises I don't keep. I want to finally stay consistent", arc: 2 },
      { text: "I'm overwhelmed and disconnected. I need space to hear myself again.", arc: 3 },
      { text: "I have big goals - but I keep stalling. I don't know where to start", arc: 4 },
    ],
  },
  {
    question: "What's the biggest challenge you're facing right now?",
    answers: [
      { text: "Letting go", arc: 1 },
      { text: "Following through", arc: 2 },
      { text: "Staying present", arc: 3 },
      { text: "Staying focused", arc: 4 },
    ],
  },
  {
    question: "How does your higher self looks like?",
    answers: [
      { text: "Calm and Peaceful", arc: 1 },
      { text: "Focused and Organized", arc: 2 },
      { text: "Spirtual and Grounded", arc: 3 },
      { text: "Powerful and Mysterious", arc: 4 },
    ],
  },
  {
    question: "What are you most afraid of becoming?",
    answers: [
      { text: "Afraid of becoming the kind of person who carries old pain so long it becomes their identity.", arc: 1 },
      { text: "Afraid of being the one who always plans but never delivers - who let's themselves down again and again.", arc: 2 },
      { text: "Afraid of taking life too seriously and forgetting what it feels to be fully alive", arc: 3 },
      { text: "Afraid of being the one who dreams big...but never figures out how to make it real", arc: 4 },
    ],
  },
  {
    question: "Pick the quote that resonates with you most:",
    answers: [
      { text: '"Your thoughts have consequences so great that they create your reality."', arc: 1 },
      { text: '"We don\'t rise to the level of our goals. We fall to the level of our systems."', arc: 2 },
      { text: '"You are not the voice in your mind, but the one who is aware of it."', arc: 3 },
      {
        text: '"Reputation is the cornerstone of power. Guard it with your life."',
        arc: 4,
      },
    ],
  },
  {
    question: "What do you secretly wish someone would tell you?",
    answers: [
      { text: '"You\'re allowed to begin again - this time, for real"', arc: 1 },
      { text: '"You\'re not lazy. You just never had the right system."', arc: 2 },
      { text: '"Trust your intution, it knows the way."', arc: 3 },
      { text: '"You\'re not falling behind. You are playing a longer game."', arc: 4 },
    ],
  },
]

export default function CommunityPage() {
  const [selectedArc, setSelectedArc] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [resultArc, setResultArc] = useState<number | null>(null)
  const [filterBy, setFilterBy] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [showFilters, setShowFilters] = useState(false)


  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null))
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([])
  const [quizComplete, setQuizComplete] = useState(false)

  // Shuffle answers for each question on component mount
  useEffect(() => {
    const shuffled = quizQuestions.map((question) => {
      // Create a copy of the question
      const questionCopy = { ...question }

      // Shuffle the answers
      questionCopy.answers = [...question.answers].sort(() => Math.random() - 0.5)

      return questionCopy
    })

    setShuffledQuestions(shuffled)
  }, [])

  const handleAnswerSelect = (answerIndex:number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = shuffledQuestions[currentQuestion].answers[answerIndex].arc
    setAnswers(newAnswers)

    // Move to next question or show result if last question
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (selectedAnswers: (number | null)[]) => {
    // Count the frequency of each arc in the answers
    const arcCounts = { 1: 0, 2: 0, 3: 0, 4: 0 }

    selectedAnswers.forEach((arc) => {
      if (arc !== null) {
        arcCounts[arc as keyof typeof arcCounts]++
      }
    })

    // Find the arc with the highest count
    let maxCount = 0
    let resultArcId = 1 // Default to Arc 1

    Object.entries(arcCounts).forEach(([arc, count]) => {
      if (count > maxCount) {
        maxCount = count
        resultArcId = Number(arc)
      }
    })

    setResultArc (resultArcId)
    setQuizComplete(true)

    // Wait a moment before showing the result for animation purposes
    setTimeout(() => {
      setShowResult(true)
    }, 500)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers(Array(quizQuestions.length).fill(null))
    setShowResult(false)
    setQuizComplete(false)
    setResultArc(null)
  }

  // Calculate progress percentage for the progress bar
  const progressPercentage = (currentQuestion / quizQuestions.length) * 100

  return (
    <div className="bg-white">
      <div className="container mx-auto py-2  px-2">
          <div className="mt-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 text-center">Community</h2>
              <p className="text-center text-gray-700 mb-8 max-w-2X1 mx-auto">
               Your journey is personal. This quiz helps you find the emotional arc that resonates most right now. 
              </p>

              <div className="max-w-2xl mx-auto">
                {!quizComplete ? (
                  <div>
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
                      <div
                        className="bg-black h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>

                    {shuffledQuestions.length > 0 && (
                      <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium mb-6">
                          {currentQuestion + 1}. {shuffledQuestions[currentQuestion].question}
                        </h3>

                        <div className="space-y-3">
                          {shuffledQuestions[currentQuestion].answers.map((answer, index) => (
                            <button
                              key={index}
                              onClick={() => handleAnswerSelect(index)}
                              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black"
                            >
                              {answer.text}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <AnimatePresence>
  {showResult && resultArc && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg overflow-hidden shadow-lg max-w-xl mx-auto"
    >
      <div
        className="p-8 text-center"
        style={{
          backgroundColor: arcDetails[resultArc - 1].color,
          color: arcDetails[resultArc - 1].textColor ? arcDetails[resultArc - 1].textColor : "white",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Sparkles className="h-8 w-20 mx-auto mb-4 opacity-80" />
          <h3 className="font-serif text-3xl md:text-3xl font-medium mb-3">
            {arcDetails[resultArc - 1].title}
          </h3>
          <p className="text-sm md:text-base opacity-70 mb-10">
            Your path is unfolding. Here's what it's revealing...
          </p>

          <div className="text-sm md:text-base leading-relaxed opacity-90 max-w-md md:max-w-[45ch] mx-auto text-center px-5">
            {arcDetails[resultArc - 1].description}
          </div>
          <p className="italic mt-6 text-sm opacity-70">
            This arc mirrors your current journey. Let it guide your next read.
          </p>
        </motion.div>
      </div>

      <div className="bg-white p-8">
        <h4 className="font-serif text-lg font-medium mb-6 flex items-center justify-center gap-2">
          <BookOpen className="h-5 w-5" />
          Book Recommendations
        </h4>
        <div className="space-y-4">
          {arcDetails[resultArc - 1].books.map((book) => (
            <div
              key={book}
              className="p-4 border border-gray-100 rounded-md text-center hover:bg-gray-50 transition-colors duration-200"
            >
              <h5 className="font-medium">{book}</h5>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button onClick={resetQuiz} variant="outline" className="mx-auto">
            Take the Quiz Again
          </Button>
        </div>
      
      <p className="italic text-xs text-center mt-5 text-gray-900 max-w-sm mx-auto">
        Private spaces are coming soon—one for each emotional arc. Not everyone will be allowed in.
        But if this arc speaks to where you are right now,{" "}
        <a
          href="https://forms.gle/NVEGTg8gmonLmxxW7"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-black hover:text-gray-800"
        >
          you’re welcome to leave your name
        </a>
        . We’ll notify you when applications open.
      </p>
        </div>
    </motion.div>
  )}
</AnimatePresence>

                )}
              </div>
            </div>
          </div>
        
      </div>
    </div>
  )
}
