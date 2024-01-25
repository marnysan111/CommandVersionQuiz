import { useState, useEffect } from "react";
interface TopPageProps {
    onStart: () => void;
}

const TopPage: React.FC<TopPageProps> = ({ onStart }) => {
    const exampleCommand = 'sampleCommand --version'
    const [text, setText] = useState<string>('')
    const [versionText, setVersion] = useState<string>('')
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        if (index < exampleCommand.length) {
          const currentChar = exampleCommand.charAt(index);
          const timer = setTimeout(() => {
            setText((prevText) => prevText + currentChar);
            setIndex(index + 1);
          }, 100);
      
          return () => clearTimeout(timer);
        } else {
            setTimeout(()=>{
                setVersion('sampleCommand version: 3.2.6')
            }, 500)
        }
      }, [index, exampleCommand]);

    return (
    <div className="flex justify-center items-center h-screen">
        <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-white mb-3">コマンドバージョンクイズ</h1>
        <div className="font-bold mb-4 text-white mb-3">コマンドにおけるバージョン確認のオプションを当てるクイズゲームです</div>
        <div className="mb-4 text-white mb-3">※環境によってコマンドが違ったらすみません ＜(_ _)＞</div>
        <div className="max-w p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-white text-left">
            $ {text}
            <span className="inline-block w-2 h-6 ml-1 bg-black animation-blink"></span>
            <br />
            {versionText}
        </div>
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
            onClick={onStart}
        >
            スタート
        </button>
        <div className="text-white">
            製作者：mani
        </div>
        </div>
    </div>
    )
};

export default TopPage