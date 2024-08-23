import Image from "next/image";
import "./styles/home.css";
import blogs from "./articles/blogs.json";

function ArticleCard({id, title, date, content, wScale = 1, hScale = 1, src}) {
  const h = hScale * 250;
  const w = wScale * 250;
  const dimension = {width: w + 'px', height: h + 'px'};
  return (
    <a className={`bg-gray-500 inline-block m-4] overflow-hidden`} href={"./articles/" + id} style={dimension}>
      {/* Card image */}
      <img src={src} style={{
        position: 'absolute',
        ...dimension
      }}/>
      <header className="relative inline-block text-2xl font-semibold text-white text-start p-1 bg-gray-700 bg-opacity-30 w-fit">
        {title}
      </header>
    </a>
  )
}

export default function Home() {
  return (
    <main className="pb-20">
      <div>
        {/* Banner image */}
        <Image
          src="/home_banner.jpg"
          alt=""
          className="absolute h-[450px] w-4/5 z-0 banner"
          width={1920}
          height={1000}
        />
        {/* Banner texts */}
        <div className="text-center text-white absolute w-4/5 mx-auto z-10 top-[260px] banner">
          <h1 className="text-4xl text-center mb-[20px]">My First Blog!</h1>
          <p>
            Innovation is the ability to see change as an opportunity rather than a threat. It involves embracing new ideas, taking risks, and continuously evolving.
          </p>
        </div>
      </div>

      <div id="contents" className="inline-block w-4/5 z-20 relative mt-[460px] ml-[10%] py-2 text-center">
        <div className="mx-auto flex gap-3 flex-wrap">
          {blogs["items"].map((item) => <ArticleCard key={item.id} src={item.img} title={item.title} id={item.id} wScale={item.wScale || 1}/>)}
        </div>
      </div>

    </main>
  );
}
