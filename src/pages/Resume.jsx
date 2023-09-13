export default function Resume() {
  return (
    <>
      <h1 className="py-10 px-5 text-5xl font-bold text-slate-900">Resume & Skills</h1>
      <div className="flex justify-center">
        <a
          href="/assets/devResume.pdf"
          className="px-10 py-6 bg-slate-900 text-slate-200 text-2xl font-semibold rounded hover:bg-slate-200 hover:text-slate-900 transition ease-in-out delay-100"
        >
          Download Resume
        </a>
      </div>
      <div className="max-w-lg mx-auto py-10">
        <div className="bg-slate-100 rounded-lg border border-slate-200 w-80 text-slate-900 text-lg font-medium">
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
          >
            HTML5
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
          >
            CSS3
          </a>
          <a
            href="https://react.dev/"
            className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
          >
            React
          </a>
          <a
            href="https://nodejs.org/en"
            className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
          >
            Node.js
          </a>
          <a
            href="https://expressjs.com/"
            className="block px-4 py-2 border-b border-gray-200 w-full rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
          >
            Express.js
          </a>
          <a
            href="https://dev.mysql.com/doc/"
            className="block px-4 py-2 border-b border-gray-200 w-full rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
          >
            SQL
          </a>
          <a
            href="https://www.mongodb.com/docs/manual/reference/operator/query/in/"
            className="block px-4 py-2 border-b border-gray-200 w-full rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
          >
            MongoDB
          </a>
        </div>
      </div>
    </>
  );
}
