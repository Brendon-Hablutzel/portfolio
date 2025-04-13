import GitHub from './svg/GitHub'
import LinkedIn from './svg/LinkedIn'

function App() {
  return (
    <div className="p-2 flex justify-center h-screen">
      <div className="flex flex-col items-center gap-6 mt-[15vh]">
        <h1 className="text-center text-4xl font-medium">Brendon Hablutzel</h1>
        <h2 className="text-lg text-gray-600 tracking-wide">
          CS @ <a href="https://csc.ncsu.edu/">NC State</a> | SWE Intern @{' '}
          <a href="https://lucid.co/">Lucid</a>
        </h2>
        <div className="flex justify-between gap-4">
          <a
            href="https://github.com/Brendon-Hablutzel"
            target="_blank"
            className="text-gray-700 flex items-center gap-2 border-[1px] border-black/20 py-2 px-3 rounded-lg"
          >
            GitHub
            <div className="w-6 h-6">
              <GitHub />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/brendon-hablutzel"
            target="_blank"
            className="text-gray-700 flex items-center gap-2 border-[1px] border-black/20 py-2 px-3 rounded-lg"
          >
            LinkedIn
            <div className="w-6 h-6">
              <LinkedIn />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
