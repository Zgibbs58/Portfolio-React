export default function About({ setCurrentPage }) {
  const handleLink = (e, page) => {
    console.log(page);
    e.preventDefault();
    setCurrentPage(page);
  };
  return (
    <div className="flex justify-center w-full bg-slate-900 md:min-h-screen h-screen">
      <div className="flex">
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div className="lg:hidden pb-10 rounded-full">
            <img className="w-64 rounded-full" src="/assets/images/zachHeadshot1.png" alt="" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Hello, I&#39;m <span className="text-blue-600">Zach</span>.
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              As an experienced Inventory Control Specialist of 8 years at LifeWay, I have honed my skills in problem-solving, process improvement,
              and team leadership. Alongside my current enrollment in Vanderbilt University&#39;s Coding Bootcamp, I have completed multiple courses
              and certifications, including Udemy&#39;s Responsive HTML Email Mastery and LinkedIn Learning&#39;s JavaScript Essential Training. My
              proficiency in web markup, client-side scripting, and modern JavaScript concepts, methodologies, best practices, and coding conventions
              demonstrate my expertise in web development.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                href="#"
                onClick={(e) => handleLink(e, "portfolio")}
                className="px-4 py-3 bg-slate-900 text-slate-200 text-s font-semibold rounded hover:bg-slate-200 hover:text-slate-900 transition ease-in-out delay-100"
              >
                Portfolio
              </a>
              <a
                href="/contact"
                onClick={(e) => handleLink(e, "contact")}
                className="mx-4 px-4 py-3 bg-slate-200 text-slate-900 text-s font-semibold rounded hover:bg-slate-900 hover:text-slate-200 transition ease-in-out delay-100"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}>
          <div
            className="h-full object-cover"
            style={{
              backgroundImage: `url(/assets/images/zachHeadshot1.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
