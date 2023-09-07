
export default function Navigation( {links} ) {
    return (
        <nav className="bg-slate-200">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
            <div className="flex justify-between items-center">
               <div>
                    <a className="text-5xl font-bold text-slate-900" href="/">Zach</a>
               </div>
            </div>
            <div className="flex flex-col md:flex-row hidden md:block -mx-2">
                {/* {links.map((link) => link)} */}
                {links}
                <a href="/" className="text-gray-800 rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2">About</a>
                <a href="/portfolio" className="text-gray-800 rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2">Portfolio</a>
            </div>
        </div>
    </nav>
    )
}
