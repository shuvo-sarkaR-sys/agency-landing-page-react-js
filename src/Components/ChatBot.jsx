import React, { useState } from 'react'

const ChatBot = () => {
  const [Showbot, setShowBot] = useState(false)
  const handleClick = () => {
    setShowBot(!Showbot)
  }
  const [input, setInput] = useState('')
  const [messages, setMessage] = useState([])


  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessage([...messages, userMessage]);
    try {
      const response = await fetch("https://chatbot-j11k.onrender.com/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      })

      const data = await response.json();
      setMessage([...messages, userMessage, { text: data.reply, sender: "bot" }])
    }
    catch (error) {
      console.error("Error fetching chatbot response:", error)
    }
    setInput("");

  }

  return (
    <div>
      {!Showbot ? (<div className='fixed left-3 bottom-8'>
        <button onClick={handleClick} className='relative text-white p-3 rounded-full bg-green-700'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </svg>
        </button>
        <p className='absolute top-1 right-[-20px] bg-red-500 p-1 px-3 text-white rounded-full'>1</p>
      </div>) :
        (<div className='fixed bottom-8 w-[230px] xl:w-[400px] left-5 rounded-xl overflow-auto h-[200px] xl:h-[350px] bg-slate-50 '>
          <div className='flex justify-between sticky top-0    bg-white px-5 pt-4'><p className='text-lg font-semibold'>Chat bot</p><button onClick={handleClick} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg></button>
          </div>
          <div className='min-h-[120px] xl:min-h-64'>
          {messages.map((msg, index) => (
            <div key={index} className={`p-1  ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              <span className={`inline-block px-4 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                {msg.text}
              </span>

            </div>
          ))}</div>

          <div className='ml-4 flex sticky bottom-0'>
            <input className='xl:w-[270px] w-full border-2 rounded-md h-[40px]' onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} type="text" />
            <button className='xl:p-2 px-2 xl:text-md text-xs bg-green-800 rounded-md text-white xl:px-5' onClick={() => sendMessage()}>send</button>
          </div>
        </div>)}


    </div>
  )
}

export default ChatBot
