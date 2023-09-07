
export default function Navigation({ links }) {
    return (
    <nav className="bg-white shadow-lg">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
            <div className="flex justify-between items-center">
               <div>
                    <a className="text-5xl font-bold text-slate-900" href="#">Zach</a>
               </div>
            </div>
            <div className="flex flex-col md:flex-row hidden md:block -mx-2">
                {links.map((link) => link)}
            </div>
        </div>
    </nav>
    )
}
