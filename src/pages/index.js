import Image from "next/image";
import React, { useState } from "react";
import Modal from "./components/modal";
const imageStyle = "rounded-full relative";
const buttonStyle =
  "w-full h-10 text-center py-2 text-indigo-100 transition-colors " +
  "duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 font-semibold";
const linkStyle = "text-blue-300 duration-150 hover:text-blue-600";

const socialLinks = [
  { text: "Linkedin", url: "https://www.linkedin.com/in/adrianolucas" },
  { text: "Instagram", url: "https://www.instagram.com/oadrianolucas" },
  { text: "Github", url: "https://github.com/oadrianolucas" },
  { text: "TikTok", url: "https://www.tiktok.com/@oadrianolucas" },
  { text: "TabNews", url: "https://www.tabnews.com.br/adrianolucas" },
];

const createLink = (text, href, target = "_blank") => (
  <a
    className={buttonStyle}
    href={href}
    target={target}
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main
      className="flex h-full min-h-screen flex-col items-center
    justify-between pt-5 p-12 space-y-10"
    >
      <div className="space-y-5">
        <div className="flex items-center justify-center">
          <Image
            src="/img/avatar.jpg"
            alt="Adriano Lucas"
            height={140}
            width={140}
            className={imageStyle}
          />
        </div>
        <div className="grid grid-flow-col gap-x-2">
          <div>
            <h1 className="lg:text-3xl text-xl font-bold">Adriano Lucas</h1>
            <h3 className="lg:text-md text-sm">Fullstack Developer</h3>
          </div>
          <div className="justify-self-end">
            <h2 className="text-5xl">🧙‍♂️</h2>
          </div>
        </div>
        <p className="leading-relaxed font-semibold">
          This website is for sharing my links and life experiences.
        </p>
        <button onClick={() => setIsModalOpen(true)} className={buttonStyle}>
          Resume
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <div className="rounded p-2 px-6 bg-gray-800">
          <h3 className="font-semibold">Social Media</h3>
          <ul className="list-disc pl-4">
            {socialLinks.map((link) => (
              <li key={link.text}>
                <a
                  className={linkStyle}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="font-semibold">Contact Email</h3>
        <a className={linkStyle} href="mailto:contato@adrianolucas.com">
          contato@adrianolucas.com
        </a>
      </div>
      <footer className="text-center text-sm">
        <p>
          simple yet functional, give it a star on the{" "}
          <a className={linkStyle} href="#">
            repository
          </a>{" "}
          it will help a lot;
        </p>
      </footer>
    </main>
  );
}
