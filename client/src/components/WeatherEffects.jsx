import { motion } from "framer-motion";

function Rain() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[32px] pointer-events-none">
      {[...Array(70)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-[2px] h-5 rounded-full bg-cyan-300/60"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          initial={{
            y: -50,
            opacity: 0.7,
          }}
          animate={{
            y: 700,
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6 + Math.random() * 0.6,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

function Clouds() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[32px] pointer-events-none">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl opacity-20"
          style={{
            top: `${20 + i * 18}%`,
          }}
          initial={{
            x: -250,
          }}
          animate={{
            x: 520,
          }}
          transition={{
            repeat: Infinity,
            duration: 18 + i * 4,
            ease: "linear",
          }}
        >
          ☁️
        </motion.div>
      ))}
    </div>
  );
}

function Sun() {
  return (
    <motion.div
      className="absolute top-5 right-5 text-7xl"
      animate={{
        rotate: 360,
        scale: [1, 1.08, 1],
      }}
      transition={{
        rotate: {
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        },
        scale: {
          repeat: Infinity,
          duration: 2,
        },
      }}
    >
      ☀️
    </motion.div>
  );
}

function Snow() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[32px] pointer-events-none">
      {[...Array(35)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          initial={{
            y: -30,
          }}
          animate={{
            y: 700,
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + Math.random() * 3,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        >
          ❄
        </motion.div>
      ))}
    </div>
  );
}

function Thunder() {
  return (
    <>
      <motion.div
        className="absolute inset-0 bg-white"
        animate={{
          opacity: [0, 0.9, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          times: [0, 0.03, 0.06],
        }}
      />

      <motion.div
        className="absolute left-1/2 top-10 text-6xl"
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          times: [0, 0.03, 0.06],
        }}
      >
        ⚡
      </motion.div>
    </>
  );
}

export default function WeatherEffects({ condition = "" }) {
  const text = condition.toLowerCase();

  if (
    text.includes("rain") ||
    text.includes("drizzle") ||
    text.includes("shower")
  ) {
    return <Rain />;
  }

  if (
    text.includes("cloud") ||
    text.includes("overcast")
  ) {
    return <Clouds />;
  }

  if (
    text.includes("snow") ||
    text.includes("blizzard") ||
    text.includes("ice")
  ) {
    return <Snow />;
  }

  if (
    text.includes("thunder") ||
    text.includes("storm")
  ) {
    return <Thunder />;
  }

  if (
    text.includes("clear") ||
    text.includes("sunny")
  ) {
    return <Sun />;
  }

  return null;
}