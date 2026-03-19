import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import middleImage from "../assets/middleImage.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="hidden md:block bg-white">
        <div className="py-20">
          <div className="grid font-gilda grid-cols-3 place-items-center bg-custom-light h-72 w-3/4 mx-auto rounded-md">
            <div className="text-right p-5">
              <h3 className="text-3xl my-2 font-gilda">Chazelle</h3>
              <p className="text-gray-500 py-2 text-sm 2xl:text-md text-justify">
                My profession is HR, I’m also a special education teacher on the side, and in my third job, I’m an unpaid university housekeeper.
In my free time, I binge-watch Netflix with my loyal companion, Bütyike. If I’m not indulging in this passion, I’m probably playing foosball on the second floor or stuffing myself with sushi on my husband’s tab.
Many people say that getting married so young is like leaving a party early, so my motto is at least Norbi won’t need a young lover later.

              </p>
              <div className="mt-2 flex justify-end gap-4">
                <a
                  href="https://www.instagram.com//"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://wa.me/+265999281003"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaWhatsappSquare />
                </a>
              </div>
            </div>
            <div className="rounded-full overflow-hidden border-[1.5rem] border-zinc-50 shadow-3xl">
              <img
                className="h-92 object-cover"
                src={middleImage}
                alt="middleImage"
              />
            </div>
            <div className="p-5">
              <h3 className="text-3xl my-2">Alcides</h3>
              <p className="text-gray-500 text-sm 2xl:text-md py-2 text-justify">
                With a degree in electrical engineering in my pocket, I managed to end up in the world of sports
thanks to which I was able to travel the world,
and in the meantime I also learned to program. So actually, if anything doesn't
work on this website, that's my fault. In my free time,
leaving Démike behind, I indulge in my love for sports and programming
(because what could be more entertaining than searching for bugs in the code all night?)
My motto, and for everyone at the wedding, is:
"I'll drink this one more, then we'll stay!"

              </p>
              <div className="mt-2 flex gap-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://wa.me/+265999281003"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaWhatsappSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MOBILE */}
      <section id="mobile-about" className="md:hidden bg-white">
        <div className="pb-12">
          <div className="grid font-gilda place-items-center bg-custom-light mx-4 rounded-md">
            <div className="text-center py-4">
              <h3 className="text-3xl my-1">Chazelle</h3>
              <p className="text-gray-500 p-3 text-justify">
                My profession is HR, with a side job as a special education teacher and
in a third job, an unpaid university housekeeper.
In my free time, I hold Netflix marathons with my loyal companion
Bütyike. If I’m not indulging in this passion, then
I’m probably playing foosball on the second floor or stuffing myself with sushi
at my husband’s expense. Many say that marrying so young
is like going home early from a party, so my motto is
at least Norbi won’t need a young lover later.

              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://wa.me/+265999281003"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaWhatsappSquare />
                </a>
              </div>
            </div>
            <div className="my-5 rounded-full overflow-hidden border-[1.5rem] border-zinc-50 shadow-3xl">
              <img
                className="h-92 object-cover"
                src={middleImage}
                alt="middleImage"
              />
            </div>
            <div className="text-center py-4 mb-3">
              <h3 className="text-3xl my-1">Alcides</h3>
              <p className="text-gray-500 p-3 text-justify">
                With my degree in electrical engineering in hand, I managed to end up in the world of sports
which allowed me to travel the world,
and in the meantime, I also learned to program. So basically, if anything
doesn't work on this website, it's my fault. In my free time,
I indulge my love for sports and programming, leaving Demike behind
(because what could be more fun than searching for bugs in the code all night?).
My motto, and for everyone at the wedding, is:
"I'll just have this last drink, then we're staying!".

              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://wa.me/+265999281003"
                  target="_blank"
                  className="cursor-pointer text-custom-pink"
                >
                  <FaWhatsappSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
