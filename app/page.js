import Image from "next/image";
import Card from "next"
import "./styles/home.css";

function ArticleCard({id, title, date, content, wScale = 1, hScale = 1, src}) {
  const h = hScale * 250;
  const w = wScale * 250;
  return (
    <a className={`bg-gray-500 inline-block m-4 h-[${h}px] w-[${w}px] overflow-hidden`} href={"./articles/" + id}>
      {/* Card image */}
      <Image
      src={src}
      alt=""
      className="absolute z-0"
      width={w}
      height={h}
      />
      <header className="relative text-2xl font-semibold text-white text-start p-1 bg-gray-700 bg-opacity-30">
        {title}
      </header>
      <div className={`relative`} style={{marginTop: h + "px"}}>
        hello
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <main className="">
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

      <div id="contents" className="inline-block w-4/5 z-20 relative mt-[460px] ml-[10%] p-2 text-center">
        <div className="flex gap-4 flex-wrap">
          <ArticleCard src="/article-images/malaysia-flag.jpg" title="Malaysia economic outlook is looking better for 2025" wScale={2}/>
          <ArticleCard src="/article-images/elon-musk.jpg" title="Elon Musk reportedly being sued by investors" wScale={1} id="1"/>
          <ArticleCard title="Hello"/>
          <ArticleCard title="Hello"/>
        </div>
      </div>

    </main>
  );
}
