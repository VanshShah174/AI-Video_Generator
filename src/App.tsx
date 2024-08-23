function App() {
  return (
    <>
      <main className="max-w-2xl mx-auto gap-8 flex px-4">
        <div className="py-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold uppercase mb-4">
           <span className="text-5xl">
            URL to Video
            </span>
            <br />
            <span className="bg-gradient-to-br from-emerald-300 from-30% to-sky-300 bg-clip-text text-transparent">
              with power of AI
            </span>
            </h1> 
          <form className="grid gap-2"> 
            <input
            className=" border-2 rounded-full bg-transparent text-white  px-5 py-3 grow"
            type="url" placeholder="https://...." />
            <button
            className="bg-emerald-500 text-white px-4 py-2 rounded-full uppercase"
             type="submit">
              Create&nbsp;video   
            </button>
          </form>
        </div>
        <div className="py-8">
          <div
           className="bg-gray-200 w-[240px] h-[380px] text-gray-500 rounded-2xl p-8">
            Video Here
            </div>
        </div>
      </main>
    </>
  );
}

export default App;
