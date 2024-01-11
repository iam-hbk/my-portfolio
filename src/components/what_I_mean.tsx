/* eslint-disable */

"use client";
import { useEffect, useState } from "react";

type Quote = {
  say: string;
  mean: string;
};

// Full array of quotes
const quotes: Quote[] = [
  {
    say: "That's an interesting idea; let me see what I can do.",
    mean: "That's not really how things work, but I'll try to find a workaround or explain why it's not feasible.",
  },
  {
    say: "We can certainly customize that feature to meet your needs.",
    mean: "This is going to take some time and extra budget because it's not included in any standard package.",
  },
  {
    say: "I'll need to do some research on that feature to see how it integrates with your current system.",
    mean: "I have no idea how to do that right now, but I'll figure it out and make sure it works.",
  },
  {
    say: "That's on my radar for the next update cycle.",
    mean: "I haven't started working on that yet, but it's on the to-do list.",
  },
  {
    say: "The server is experiencing some unexpected traffic, which is causing delays.",
    mean: "Someone messed up, possibly me, and I'm trying to fix it before anyone notices.",
  },
  {
    say: "The project is progressing at a steady pace.",
    mean: "I'm behind schedule, and I'm not sure how to catch up yet.",
  },
  {
    say: "We need to ensure that the backend architecture supports your requirements.",
    mean: "The current system can't handle what you're asking for, and it's going to be a major undertaking to change that.",
  },
  {
    say: "It would be more efficient to start from scratch than to try to update the existing system.",
    mean: "The code is a mess, and no one can understand how it works anymore.",
  },
  {
    say: "I'm optimizing the site for enhanced performance.",
    mean: "I'm trying to fix the slow load times that are being caused by the excessive features you insisted on adding.",
  },
  {
    say: "Let's schedule a meeting to discuss the project's progress.",
    mean: "I need to buy some time to figure out how to explain why things aren't going as planned.",
  },
];
const getRandomQuote = (): Quote => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex] as Quote;
};

const RandomQuote: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[7] as Quote);
  const [toggleState, setToggleState] = useState(true); // false for 'say', true for 'mean'

  const toggleQuote = () => {
    setToggleState(!toggleState);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="label swap swap-flip cursor-pointer items-start p-0">
        <input checked={toggleState} type="checkbox" onChange={toggleQuote} />
        <div className="glass swap-on m-0 flex w-96 flex-col space-y-2 rounded-lg bg-base-100 p-3 shadow-xl">
          <h2 className="badge badge-ghost self-end rounded-md p-2">
            Click the card to see what I mean 🫣
          </h2>
          <p className="text-lg">{currentQuote?.say}</p>
          <button
            className=" link-accent link self-end"
            onClick={() => setCurrentQuote(getRandomQuote())}
          >
            Another thing say
          </button>
        </div>
        <div className=" glass swap-off m-0 flex w-96 flex-col space-y-2 rounded-lg bg-base-100 p-3 shadow-xl">
          <h2 className="badge badge-ghost self-end rounded-md p-2">
            Click the card to see what I say 😎
          </h2>
          <p className="text-lg">{currentQuote?.mean}</p>
        </div>
      </label>
    </div>
  );
};

export default RandomQuote;
