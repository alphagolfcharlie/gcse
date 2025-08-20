import { useEffect, useState } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target: 21 Aug 2025, 8 AM BST
      const target = new Date("2025-08-21T08:00:00+01:00"); // +01:00 for BST

      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Disaster has struck!");
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 bg-clip-text text-transparent animate-gradient">
          Countdown to disaster
        </h1>
        <div className="mt-8 text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 bg-clip-text text-transparent animate-gradient">
          {timeLeft}
        </div>
      </div>
    </div>
  );
}

export default App;
