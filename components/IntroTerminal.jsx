'use client';

import { useEffect, useState } from 'react';

const codeLines = [
  'public class Portfolio {',
  '    public static void main(String[] args) {',
  '        System.out.println("Swapnil Devkate Portfolio");',
  '    }',
  '}',
];

const command = 'java Portfolio.java';

export default function IntroTerminal({ children }) {
  const [commandText, setCommandText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [codeFinished, setCodeFinished] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);

  /* ---------------------------------------
     Type command
  --------------------------------------- */
  useEffect(() => {
    if (commandText.length >= command.length) return;

    const timer = setTimeout(() => {
      setCommandText(command.slice(0, commandText.length + 1));
    }, 60);

    return () => clearTimeout(timer);
  }, [commandText]);

  /* ---------------------------------------
     Type code character-by-character
  --------------------------------------- */
  useEffect(() => {
    if (commandText.length < command.length) return;
    if (codeFinished) return;

    const line = codeLines[currentLine];

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setCurrentChar((prev) => prev + 1);
      }, 35);

      return () => clearTimeout(timer);
    }

    /* Move to next line */
    if (currentLine < codeLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 180);

      return () => clearTimeout(timer);
    }

    /* Code completely finished */
    const timer = setTimeout(() => {
      setCodeFinished(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [
    commandText,
    currentLine,
    currentChar,
    codeFinished,
  ]);

  /* ---------------------------------------
     Show "Loading portfolio..."
  --------------------------------------- */
  useEffect(() => {
    if (!codeFinished) return;

    const timer = setTimeout(() => {
      setShowLoading(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [codeFinished]);

  /* ---------------------------------------
     Reveal actual portfolio
  --------------------------------------- */
  useEffect(() => {
    if (!showLoading) return;

    const timer = setTimeout(() => {
      setShowWebsite(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, [showLoading]);

  /* ---------------------------------------
     Show actual website
  --------------------------------------- */
  if (showWebsite) {
    return (
      <div className="portfolio-reveal">
        {children}

        <style jsx>{`
          .portfolio-reveal {
            animation: revealWebsite 0.8s ease-out forwards;
          }

          @keyframes revealWebsite {
            from {
              opacity: 0;
              transform: scale(0.985);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="intro-screen fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden px-4">

      {/* ---------------------------------------
          Background square pattern
          Similar to Home section
      --------------------------------------- */}
      <div className="intro-grid absolute inset-0" />

      {/* Violet glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      {/* ---------------------------------------
          Terminal
      --------------------------------------- */}
      <div className="terminal-window relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.18)]">

        {/* macOS header */}
        <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#151515]/95 px-4 backdrop-blur">

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>

          <span className="font-mono text-xs text-neutral-500">
            swapnil@portfolio
          </span>

          <div className="w-[42px]" />
        </div>

        {/* Terminal body */}
        <div className="min-h-[390px] bg-[#090909]/95 p-5 font-mono text-sm backdrop-blur sm:p-8 sm:text-base">

          {/* Terminal command */}
          <div className="flex flex-wrap">

            <span className="text-emerald-400">
              swapnil
            </span>

            <span className="text-neutral-600">
              @
            </span>

            <span className="text-violet-400">
              portfolio
            </span>

            <span className="text-neutral-500">
              :~$
            </span>

            <span className="ml-2 text-neutral-300">
              {commandText}

              {commandText.length < command.length && (
                <span className="cursor-blink ml-1 text-violet-300">
                  ▋
                </span>
              )}
            </span>

          </div>

          {/* ---------------------------------------
              Code block
          --------------------------------------- */}
          <div className="mt-7 rounded-xl border border-white/10 bg-[#050505] p-5 sm:p-6">

            {codeLines.map((line, index) => {

              if (index > currentLine) return null;

              const visibleText =
                index === currentLine
                  ? line.slice(0, currentChar)
                  : line;

              return (
                <div
                  key={index}
                  className="min-h-[28px] whitespace-pre leading-7"
                >
                  {formatCode(visibleText)}

                  {/* Typing cursor */}
                  {index === currentLine &&
                    !codeFinished &&
                    currentChar < line.length && (
                      <span className="cursor-blink ml-[1px] text-violet-300">
                        ▋
                      </span>
                    )}
                </div>
              );
            })}

          </div>

          {/* ---------------------------------------
              Loading
          --------------------------------------- */}
          {codeFinished && showLoading && (
            <div className="mt-7 flex items-center gap-2 text-neutral-300 animate-loading">

              <span className="text-violet-400">
                →
              </span>

              <span>
                Loading portfolio
              </span>

              <span className="loading-dots">
                ...
              </span>

            </div>
          )}

          {/* Tiny status before loading appears */}
          {codeFinished && !showLoading && (
            <div className="mt-7 flex items-center gap-2 text-neutral-500">

              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              <span>
                Running...
              </span>

            </div>
          )}

        </div>
      </div>

      {/* ---------------------------------------
          Animations
      --------------------------------------- */}
      <style jsx>{`

        .intro-screen {
          background: #050505;
        }

        /* Square background pattern */
        .intro-grid {
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            );

          background-size: 45px 45px;

          mask-image: radial-gradient(
            ellipse at center,
            black 30%,
            transparent 85%
          );

          -webkit-mask-image: radial-gradient(
            ellipse at center,
            black 30%,
            transparent 85%
          );
        }

        .terminal-window {
          background: rgba(8, 8, 8, 0.94);
        }

        .cursor-blink {
          animation: blink 0.8s step-end infinite;
        }

        .animate-loading {
          animation: loadingIn 0.5s ease-out forwards;
        }

        .loading-dots {
          display: inline-block;
          overflow: hidden;
          width: 18px;
          animation: dots 1.2s infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        @keyframes loadingIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dots {
          0% {
            width: 0;
          }

          33% {
            width: 6px;
          }

          66% {
            width: 12px;
          }

          100% {
            width: 18px;
          }
        }

        @media (max-width: 640px) {
          .intro-grid {
            background-size: 32px 32px;
          }
        }

      `}</style>
    </div>
  );
}

/* ---------------------------------------
   Java syntax highlighting
--------------------------------------- */
function formatCode(text) {
  const tokens = text.split(
    /(public|class|static|void|main|String|System|out|println|Portfolio|"[^"]*"|\{|\}|\(|\)|;|\[|\])/
  );

  return tokens.map((token, index) => {
    if (!token) return null;

    if (
      ['public', 'class', 'static', 'void'].includes(token)
    ) {
      return (
        <span key={index} className="text-violet-400">
          {token}
        </span>
      );
    }

    if (
      ['main', 'println'].includes(token)
    ) {
      return (
        <span key={index} className="text-blue-300">
          {token}
        </span>
      );
    }

    if (
      ['String', 'Portfolio'].includes(token)
    ) {
      return (
        <span key={index} className="text-yellow-300">
          {token}
        </span>
      );
    }

    if (
      ['System', 'out'].includes(token)
    ) {
      return (
        <span key={index} className="text-sky-300">
          {token}
        </span>
      );
    }

    if (token.startsWith('"')) {
      return (
        <span key={index} className="text-emerald-300">
          {token}
        </span>
      );
    }

    return (
      <span key={index} className="text-neutral-300">
        {token}
      </span>
    );
  });
}