import { useEffect, useState } from "react";


interface Command {
    command: string;
    version_option: string;
}

interface ResultPageProps {
    answer: string[];
    commandList: Command[];
}

const ResultPage: React.FC<ResultPageProps> = ({ answer, commandList }) => {

    return (
        <div className="flex justify-center items-center overflow-auto">
            <div className="text-center">
            <div className="text-3xl font-bold mb-4 text-white mt-5">結果発表</div>
            {commandList.map((command, index) => (
            <div className="">
                <div className="text-3xl font-bold mb-4 text-white">{index+1}問目　
                    {answer[index] === command.version_option && <span>正解</span>}
                    {answer[index] !== command.version_option && <span>不正解</span>}
                </div>
                <div className="p-6 border rounded-lg bg-gray-800 
                border-gray-700 text-white text-left mb-4">
                解答：$ {command.command} {answer[index]} <br />
                正解：$ {command.command} {command.version_option} 
                </div>
            </div>
            ))}
            </div>
        </div>
    )
}

export default ResultPage