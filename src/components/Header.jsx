export default function Header() {
    return (
<div className="flex justify-center w-full bg-slate-900 h-96">
    <div className="flex">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">Hello, I&#39;m  <span className="text-blue-600">Zach</span>.</h2>
                <p className="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
                <div className="flex justify-center lg:justify-start mt-6">
                    <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-600" href="#">View Projects</a>
                    <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                </div>
            </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
            <div className="h-full object-cover" style={{backgroundImage: "url(https://placehold.co/600x400)"}}>
                <div className="h-full bg-black opacity-25"></div>
            </div>
        </div>
    </div>
</div>
    )
}