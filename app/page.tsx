
"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What can I expect from therapy?",
      answer:
        "Therapy is a collaborative process. Sessions offer space to understand your concerns, explore patterns, and work toward meaningful changes at a comfortable pace.",
    },
    {
      question: "What approaches do you use?",
      answer:
        "Therapy approaches can be discussed with the therapist to understand which options best suit your individual needs.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Please contact the practice to confirm online session availability.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#333d36]">
      <header className="sticky top-0 z-10 border-b bg-[#faf8f4]">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <a href="#home" className="text-xl font-semibold">
            Maya Reynolds Therapy
          </a>
          <div className="flex flex-wrap gap-5 text-sm">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#office">Our Office</a>
            <a href="#faq">FAQs</a>
            <a href="#contact" className="font-semibold text-[#536b59]">
              Get in Touch
            </a>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24"
      >
        <div>
          <p className="mb-4 uppercase tracking-widest text-sm text-[#71816c]">
            A space to feel heard
          </p>
          <h1 className="text-4xl leading-tight md:text-6xl">
            Find your way toward a more balanced life.
          </h1>
          <p className="mt-6 leading-8 text-[#626960]">
            A welcoming space to explore your feelings, navigate life's
            challenges, and work toward meaningful change.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-block rounded-full bg-[#536b59] px-7 py-3 text-white"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src="/maya.png"
            alt="Dr. Maya Reynolds"
            className="h-[380px] w-full max-w-md rounded-2xl object-cover"
          />
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-[#71816c]">
            About
          </p>
          <h2 className="mt-3 text-3xl">Meet Dr. Maya Reynolds, PsyD</h2>
          <p className="mt-5 leading-8 text-[#626960]">
            Therapy can provide a supportive space to understand your
            experiences, explore personal goals, and develop strategies for
            navigating life's challenges. Care should reflect each person's
            individual needs and circumstances.
          </p>
        </div>
      </section>

      <section id="services" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 text-center">
            <p className="text-sm uppercase tracking-widest text-[#71816c]">
              Services
            </p>
            <h2 className="mt-3 text-3xl">Ways we can work together</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Anxiety Therapy",
                text: "Explore anxious thoughts and develop practical ways to manage everyday stress.",
              },
              {
                title: "Trauma Support",
                text: "Explore difficult experiences in a supportive environment and at a comfortable pace.",
              },
              {
                title: "Burnout Support",
                text: "Reflect on stress, boundaries, and ways to support your overall well-being.",
              },
            ].map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-[#e5dfd5] bg-white p-7"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#626960]">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9eee6] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl">A thoughtful approach to therapy</h2>
          <p className="mt-5 leading-8 text-[#59635a]">
            Meaningful conversations can help you understand your needs,
            explore patterns, and work toward changes that matter to you.
          </p>
        </div>
      </section>

      <section id="office" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm uppercase tracking-widest text-[#71816c]">
              Our Office
            </p>
            <h2 className="mt-3 text-3xl">A welcoming space for you</h2>
            <p className="mt-4 leading-7 text-[#626960]">
              The environment around us can help set the tone for meaningful
              conversations. Explore the office images below to get a sense
              of a welcoming, comfortable therapy space.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl bg-[#faf8f4]">
              <img
                src="/office1.png"
                alt="Therapy office interior"
                className="block h-72 w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <figcaption className="p-4 text-center">
                Therapy office interior
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl bg-[#faf8f4]">
              <img
                src="/office2.png"
                alt="Comfortable counseling space"
                className="block h-72 w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <figcaption className="p-4 text-center">
                Comfortable counseling space
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl">
            A few things you may be wondering
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="mb-3 rounded-xl border border-[#e5dfd5] bg-white"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between p-5 text-left font-medium"
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
              >
                {faq.question}
                <span>{openFaq === index ? "−" : "+"}</span>
              </button>

              {openFaq === index && (
                <p className="px-5 pb-5 leading-7 text-[#626960]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#536b59] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">
            You don’t have to figure it all out alone.
          </h2>
          <p className="mt-5 leading-8">
            Reaching out can be the beginning of a conversation about what
            you need and whether working together feels right for you.
          </p>
          <p className="mt-4 text-sm">
            Add verified contact details from the supplied profile before
            submitting the website.
          </p>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-[#626960]">
        <p className="font-semibold">Dr. Maya Reynolds, PsyD</p>
        <p className="mt-1">Santa Monica, California</p>
        <p className="mt-4">
          © 2026 Maya Reynolds Therapy. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
