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
     Type terminal command
  --------------------------------------- */
  useEffect(() => {
    if (commandText.length >= command.length) return;

    const timer = setTimeout(() => {
      setCommandText(command.slice(0, commandText.length + 1));
    }, 60);

    return () => clearTimeout(timer);
  }, [commandText]);

  /* ---------------------------------------
     Type code character by character
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

    if (currentLine < codeLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 180);

      return () => clearTimeout(timer);
    }

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
     Show loading
  --------------------------------------- */
  useEffect(() => {
    if (!codeFinished) return;

    const timer = setTimeout(() => {
      setShowLoading(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [codeFinished]);

  /* ---------------------------------------
     Reveal website
  --------------------------------------- */
  useEffect(() => {
    if (!showLoading) return;

    const timer = setTimeout(() => {
      setShowWebsite(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, [showLoading]);

  /* ---------------------------------------
     Actual website
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
    <div className="intro-screen fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden px-3 py-4 sm:px-5">

      {/* ---------------------------------------
          Square background pattern
      --------------------------------------- */}
      <div className="intro-grid pointer-events-none absolute inset-0" />

      {/* Violet glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[110px] sm:h-[450px] sm:w-[450px] sm:blur-[150px]" />

      {/* ---------------------------------------
          Terminal
      --------------------------------------- */}
      <div className="terminal-window relative w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 shadow-[0_0_60px_rgba(139,92,246,0.15)] sm:rounded-2xl sm:shadow-[0_0_100px_rgba(139,92,246,0.18)]">

        {/* macOS header */}
        <div className="flex h-10 items-center justify-between border-b border-white/10 bg-[#151515]/95 px-3 backdrop-blur sm:h-12 sm:px-4">

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3" />
          </div>

          <span className="max-w-[150px] truncate font-mono text-[10px] text-neutral-500 sm:max-w-none sm:text-xs">
            swapnil@portfolio
          </span>

          <div className="w-[30px] sm:w-[42px]" />
        </div>

        {/* ---------------------------------------
            Terminal body
        --------------------------------------- */}
        <div className="max-h-[78vh] min-h-[320px] overflow-y-auto bg-[#090909]/95 p-3.5 font-mono text-[12px] leading-6 backdrop-blur sm:min-h-[390px] sm:p-8 sm:text-base sm:leading-7">

          {/* Command */}
          <div className="flex min-w-0 flex-wrap break-words">

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

            <span className="ml-1.5 text-neutral-300 sm:ml-2">
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
          <div className="mt-5 overflow-x-auto rounded-lg border border-white/10 bg-[#050505] p-3.5 sm:mt-7 sm:rounded-xl sm:p-6">

            <div className="min-w-max">

              {codeLines.map((line, index) => {
                if (index > currentLine) return null;

                const visibleText =
                  index === currentLine
                    ? line.slice(0, currentChar)
                    : line;

                return (
                  <div
                    key={index}
                    className="whitespace-pre leading-6 sm:leading-7"
                  >
                    {formatCode(visibleText)}

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
          </div>

          {/* ---------------------------------------
              Running
          --------------------------------------- */}
          {codeFinished && !showLoading && (
            <div className="mt-5 flex items-center gap-2 text-[12px] text-neutral-500 sm:mt-7 sm:text-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 sm:h-2 sm:w-2" />

              <span>
                Running...
              </span>
            </div>
          )}

          {/* ---------------------------------------
              Loading portfolio
          --------------------------------------- */}
          {codeFinished && showLoading && (
            <div className="mt-5 flex items-center gap-2 text-[13px] text-neutral-300 animate-loading sm:mt-7 sm:text-base">

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

        </div>
      </div>

      {/* ---------------------------------------
          Animations
      --------------------------------------- */}
      <style jsx>{`
        .intro-screen {
          background: #050505;
        }

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

          background-size: 32px 32px;

          mask-image: radial-gradient(
            ellipse at center,
            black 25%,
            transparent 85%
          );

          -webkit-mask-image: radial-gradient(
            ellipse at center,
            black 25%,
            transparent 85%
          );
        }

        .terminal-window {
          background: rgba(8, 8, 8, 0.95);
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
          width: 16px;
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
            width: 5px;
          }

          66% {
            width: 10px;
          }

          100% {
            width: 16px;
          }
        }

        @media (min-width: 640px) {
          .intro-grid {
            background-size: 45px 45px;
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