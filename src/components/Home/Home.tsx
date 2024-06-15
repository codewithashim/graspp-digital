import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Home = () => {
  const calculateTimeLeft = () => {
    const deadline = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24 hours from now
    const now = new Date();
    const difference = deadline.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen py-6 text-white">
      <div className="flex flex-col justify-center items-center gap-6 h-full px-4 md:px-8">
        <div className="mb-8">
          <div className="flex w-full flex-col justify-center items-center space-x-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-4 rounded-lg">
            <div className="flex justify-around gap-4">
              <div className="text-center border rounded p-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-lg font-medium text-white">
                  Days
                </div>
              </div>
              <div className="text-center border rounded p-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-lg font-medium text-white">
                  Hours
                </div>
              </div>
              <div className="text-center border rounded p-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-lg font-medium text-white">
                  Minutes
                </div>
              </div>
              <div className="text-center border rounded p-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-lg font-medium text-white">
                  Seconds
                </div>
              </div>
            </div>

            <div className="my-4">
                <p className="text-[1.6rem] md:text-[2.6rem] font-bold ">Register Before the Timer Ends to Get an Early Bird OFFER...</p>
            </div> 
          </div>
        </div>

        <div className="flex lg:flex-row  flex-col gap-6">
          <div className="flex flex-col lg:w-1/2 w-full gap-4">
            <h1 className="text-2xl md:text-3xl lg:text-[3.2rem] leading-tight md:leading-snug lg:leading-normal font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Struggling to build a Profitable Online Business?
            </h1>
            <p className="text-lg font-bold w-full md:w-3/4 mx-auto md:mx-0 bg-gradient-to-r from-red-400 via-yellow-500 to-green-500 bg-clip-text text-transparent">
              Learn my 4-Steps Secret Framework to Earn 1 Lakh/Month on
              Automation With Digital Products Online Business
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              This is what you need to learn...
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              3.5 Hours Step By Step LIVE Training
            </p>
            <button className="mt-2 text-[1.5rem] w-fit px-8 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg">
              Book Now
            </button>
          </div>
          <div className="flex lg:w-1/2 w-full justify-center items-center">
            <iframe
              className="w-full h-[16rem] lg:h-[25rem] border-2 rounded"
              src="https://www.youtube.com/embed/N_sUsq_y10U?si=ZRAh_TLJ1VWXLb36" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
