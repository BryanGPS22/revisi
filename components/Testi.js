"use client";
import clsxm from "@/lib/clsxm";
import { Transition } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";

const TestimonialSliders = () => {
  const testimonialsRef = useRef(null);
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 3000;

  const testimonials = [
    {
      initialName: "SK",
      quote:
        "Rekomendasi banget buat beli sapu yang berkualitas, prodaknya bagus dan selernya amanah terimakasih banyak",
      name: "Sarah Kartika",
      role: "Mahasiswa",
    },
    {
      initialName: "AW",
      quote:
        "Rekomendasi banget buat ibu ibu rumah tanga seperti saya bisa membersihkan rumah tanpa menyapu dua kali, sekali usap langsung kinclong tidak menggores lantai",
      name: "Ayu Wahyuningsih",
      role: "Ibu Rumah Tangga",
    },
    {
      initialName: "PH",
      quote:
        "Sapu yang sangan membantu saya untuk membersihkan halaman sekolah dengan bersih sampai tidak ada debu satu pun.",
      name: "Pak Hendra",
      role: "Tukang Kebun",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : active + 1);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) {
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="">
      <div
        className={clsxm(
          "bg-[url(/images/e-attendance/bg-review.webp)] w-full h-full relative overflow-hidden"
        )}
      >
        <div className=" py-10 md:mx-auto">
          <h1 className="text-center font-semibold">Pendapat Pengguna</h1>
          <p className="mt-2 text-center">
            Dengarlah dari mereka yang telah mengalami perubahan positif dengan
            layanan absensi sekolah kami
          </p>
          <div className="w-full max-w-3xl mx-auto text-center mt-10 lg:mt-14 px-6 lg:px-0">
            {/* Testimonial image */}
            <div className="relative h-32">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
                <div className="h-32 ">
                  {testimonials.map((testimonial, index) => (
                    <Transition
                      key={index}
                      show={active === index}
                      className="absolute inset-0 h-full -z-10"
                      enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                      enterFrom="opacity-0 -rotate-[60deg]"
                      enterTo="opacity-100 rotate-0"
                      leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                      leaveFrom="opacity-100 rotate-0"
                      leaveTo="opacity-0 rotate-[60deg]"
                    >
                      <div
                        className={clsxm(
                          "bg-purple-500 w-14 h-14 flex justify-center items-center",
                          "relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                        )}
                      >
                        <h5 className="text-center text-white font-bold">
                          {testimonial.initialName}
                        </h5>
                      </div>
                    </Transition>
                  ))}
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
              <div className="relative flex flex-col" ref={testimonialsRef}>
                {testimonials.map((testimonial, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                  >
                    <p className="font-medium">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
                    active === index
                      ? "bg-indigo-500 text-white shadow-indigo-950/10"
                      : "bg-white hover:bg-indigo-100 text-slate-900"
                  }`}
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  <span>{testimonial.name}</span>{" "}
                  <span
                    className={`${
                      active === index ? "text-indigo-200" : "text-slate-300"
                    }`}
                  >
                    -
                  </span>{" "}
                  <span>{testimonial.role}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliders;
