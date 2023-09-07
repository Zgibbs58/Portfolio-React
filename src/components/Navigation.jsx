export default function Navigation() {
    return (
    <nav className="bg-white shadow-lg">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
            <div className="flex justify-between items-center">
               <div>
                    <a className="text-5xl font-bold text-slate-900" href="#">Zach</a>
               </div>
            </div>
            <div className="flex flex-col md:flex-row hidden md:block -mx-2">
                <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Home</a>
                <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">About</a>
                <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Contact</a>
            </div>
        </div>
    </nav>
    )
}
