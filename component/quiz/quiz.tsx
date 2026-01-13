"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
const quizzes = [
  {
    id: 1,
    question: "沖縄の守り神であるシーサーは、何から家を守っているでしょうか？",
    image: "/assets/quiz1.png",
    choices: ["災害や悪霊", "災害や鬼"],
    answer: 0,
  },
  {
    id: 2,
    question: "元々シーサーのモデルになった動物はなんでしょうか？",
    image: "/assets/quiz2.png",
    choices: ["ライオン", "こま犬"],
    answer: 0,
  },
  {
    id: 3,
    question: "シーサーは、どこから沖縄にやってきたと言われている？",
    image: "/assets/quiz3.png",
    choices: ["アフリカ", "中国"],
    answer: 1,
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(quizzes.length).fill(null)
  );
  const [perfect, setPerfect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleSelect = (quizIndex: number, choiceIndex: number) => {
    if (answers[quizIndex] !== null) return;

    const newAnswers = [...answers];
    newAnswers[quizIndex] = choiceIndex;
    setAnswers(newAnswers);
  };
  const allAnswered = answers.every((a) => a !== null);
  const correctCount = answers.filter(
    (a, i) => a === quizzes[i].answer
  ).length;
  useEffect(() => {
    if (allAnswered && correctCount === quizzes.length) {
      setPerfect(true);
      setShowModal(true);
    }
  }, [allAnswered, correctCount]);

  return (
    <section
      id="quiz"
      className="w-full bg-gradient-to-r from-sky-400 to-sky-200 py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-white mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            シーサークイズに挑戦！
          </h2>
          <p className="text-sm md:text-base">
            クイズに正解してシーサー博士になろう！
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          {quizzes.map((quiz, quizIndex) => (
            <div
              key={quiz.id}
              className="w-[260px] rounded-2xl bg-white p-6 text-center shadow-lg"
            >
              <p className="text-sky-400 text-sm mb-2">Q.{quiz.id}</p>

              <Image
                src={quiz.image}
                alt={`クイズ${quiz.id}`}
                width={200}
                height={130}
                className="mx-auto rounded-lg mb-4"
              />

              <p className="text-sm mb-4">{quiz.question}</p>
              <div className="flex flex-col gap-2">
                {quiz.choices.map((choice, choiceIndex) => {
                  const selected = answers[quizIndex];
                  const isCorrect = choiceIndex === quiz.answer;

                  return (
                    <button
                      key={choiceIndex}
                      onClick={() => handleSelect(quizIndex, choiceIndex)}
                      className={`
                        rounded-full py-1 text-sm transition-all duration-300
                        ${
                          selected === null
                            ? "bg-sky-400 text-white hover:scale-105"
                            : selected === choiceIndex
                              ? isCorrect
                                ? "bg-green-500 text-white scale-110 animate-pop"
                                : "bg-red-500 text-white animate-shake"
                              : "bg-gray-200 text-gray-400"
                        }
                      `}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        {allAnswered && !perfect && (
          <div className="mt-20 text-center text-white animate-fadeIn">
            <p className="text-2xl font-bold">
              {correctCount} / {quizzes.length} 正解！
            </p>
          </div>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-3xl p-10 text-center shadow-2xl animate-pop max-w-sm w-full">
            <h3 className="text-2xl font-bold text-sky-400 mb-2">
              完 全 制 覇！
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              あんたもうシーサー博士や！！
            </p>
            <Image
              src="/assets/shisa.png"
              alt="シーサー"
              width={144}
              height={80}
              className="mb-6 m-auto"
            />
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 rounded-full bg-sky-400 text-white hover:bg-sky-500 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
