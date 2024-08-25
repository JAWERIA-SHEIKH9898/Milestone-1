import Image from "next/image";

export default function HelloWorld() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/gif2.gif')] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4 hover:bg-yellow-600 transition duration-100">Milestone 01 Achieved</h1>
        <div className="p-8 rounded-lg text-white text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-yellow-500 via-green-500 via-teal-500 via-blue-500 via-indigo-500 via-purple-700 via-pink-700 to-red-700">
          Hello World
        </div>
        <p className="text-2xl font-extrabold text-white mb-10 mt-5 hover:bg-yellow-600">Create By Senior Student Jaweria Talib</p>
      </div>
    </div>
  );
}