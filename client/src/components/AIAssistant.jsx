import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  Copy,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

function AIAssistant({
  advice,
  loading,
  onRegenerate,
  theme,
}) {
  const [copied, setCopied] = useState(false);

  async function copyAdvice() {
    if (!advice) return;

    await navigator.clipboard.writeText(advice);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`rounded-3xl overflow-hidden border backdrop-blur-xl
        ${
          theme === "dark"
            ? "bg-white/10 border-white/10"
            : "bg-slate-100 border-slate-200"
        }`}
      >
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 flex items-center justify-center">
            <Bot className="text-white" size={24} />
          </div>

          <div>
            <h2 className="font-bold text-xl">
              AI Weather Assistant
            </h2>

            <p className="text-sm opacity-70">
              Thinking...
            </p>
          </div>
        </div>

        <div className="p-6 space-y-4 animate-pulse">
          <div className="h-4 rounded bg-slate-500/30"></div>
          <div className="h-4 rounded w-10/12 bg-slate-500/30"></div>
          <div className="h-4 rounded w-8/12 bg-slate-500/30"></div>

          <div className="h-4 rounded mt-8 bg-slate-500/30"></div>
          <div className="h-4 rounded w-11/12 bg-slate-500/30"></div>

          <div className="h-4 rounded w-9/12 bg-slate-500/30"></div>
        </div>
      </motion.div>
    );
  }

  if (!advice) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .6,
      }}
      className={`rounded-3xl overflow-hidden border backdrop-blur-xl shadow-xl
      ${
        theme === "dark"
          ? "bg-white/10 border-white/10"
          : "bg-slate-100 border-slate-200"
      }`}
    >
      {/* Header */}

      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-6 py-5 flex justify-between items-center">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">

            <Bot className="text-white" />

          </div>

          <div>

            <h2 className="font-bold text-xl text-white">
              AI Weather Assistant
            </h2>

            <p className="text-white/80 text-sm">
              Powered by Gemini AI
            </p>

          </div>

        </div>

        <Sparkles
          className="text-yellow-300"
          size={28}
        />

      </div>

      {/* Response */}

      <div className="p-6">

        <div
          className={`rounded-2xl p-5 leading-8 whitespace-pre-line
          ${
            theme === "dark"
              ? "bg-white/5"
              : "bg-white"
          }`}
        >
          {advice}
        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-4 px-6 pb-6">

        <motion.button
          whileTap={{ scale: .95 }}
          whileHover={{ scale: 1.03 }}
          onClick={copyAdvice}
          className="flex-1 bg-cyan-500 hover:bg-cyan-600 transition rounded-xl py-3 text-white font-semibold flex justify-center items-center gap-2"
        >
          {copied ? (
            <>
              <CheckCircle2 size={18} />
              Copied
            </>
          ) : (
            <>
              <Copy size={18} />
              Copy
            </>
          )}
        </motion.button>

        <motion.button
          whileTap={{ scale: .95 }}
          whileHover={{ scale: 1.03 }}
          onClick={onRegenerate}
          className="flex-1 bg-violet-600 hover:bg-violet-700 transition rounded-xl py-3 text-white font-semibold flex justify-center items-center gap-2"
        >
          <RefreshCw size={18} />
          Regenerate
        </motion.button>

      </div>

    </motion.div>
  );
}

export default AIAssistant;