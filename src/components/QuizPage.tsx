import { useState, useEffect } from "react";

interface Command {
    command: string;
    version_option: string;
}

interface QuizPageProps {
    questionNumber: (ans:string) => void;
    currentNumber: number;
    commandList: Command[];
}

const QuizPage: React.FC<QuizPageProps> = ({ questionNumber, currentNumber, commandList }) => {
    const options: string[] = ['-v', '--version', 'version']
    const [index, setIndex] = useState<number>(0)
    const [text, setText] = useState<string>('')

    useEffect(() => {
        // currentNumberが変わったときにのみリセット
        setIndex(0);
        setText('');
    
      }, [currentNumber]); // currentNumberが変わった時にのみ実行
    
      useEffect(() => {
        if (index < commandList[currentNumber - 1].command.length) {
          const currentChar = commandList[currentNumber - 1].command.charAt(index);
          const timer = setTimeout(() => {
            setText((prevText) => prevText + currentChar);
            setIndex(index + 1);
          }, 100);
    
          return () => clearTimeout(timer);
        }
      }, [index, commandList, currentNumber]); 

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">{currentNumber}問目</h1>
               {currentNumber <= 5 && 
                <div className="max-w p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-white text-left">
                    $ {text}
                    <span className="inline-block w-2 h-6 ml-1 bg-black animation-blink"></span>
                </div>
                }
                {currentNumber <= 5 && options.map((option, index) => (
                <button 
                    key={index}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 m-2"
                    onClick={() => questionNumber(option)}
                >
                    {option}
                </button>
                ))}

                </div>
        </div>
    )
}

export default QuizPage