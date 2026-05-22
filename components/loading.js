/* =============================================================
   Auroveon — Page Loading Component
   File: components/loading.js
   Usage: <script type="text/babel" src="components/loading.js"></script>
   Render: <LoadingScreen /> inside your App() BEFORE everything else
   ============================================================= */

function LoadingScreen() {
  const [phase, setPhase] = React.useState("visible"); // "visible" | "wiping" | "done"
  const [progress, setProgress] = React.useState(0);
  const [statusText, setStatusText] = React.useState("Initialising systems");

  const statusMessages = [
    "Initialising systems",
    "Loading assets",
    "Calibrating UI",
    "Almost ready",
  ];

  React.useEffect(() => {
    /* Lock scroll while loader is active */
    document.body.style.overflow = "hidden";

    /* Progress counter — reaches 100 in ~2.2s */
    let current = 0;
    const step = () => {
      current += Math.random() * 4 + 1.5;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setStatusText("Ready");
        /* Small pause at 100%, then trigger wipe */
        setTimeout(() => setPhase("wiping"), 260);
        return;
      }
      setProgress(Math.floor(current));
      const idx = Math.min(
        statusMessages.length - 1,
        Math.floor((current / 100) * statusMessages.length),
      );
      setStatusText(statusMessages[idx]);
      setTimeout(step, 55 + Math.random() * 40);
    };
    setTimeout(step, 180);
  }, []);

  /* After wipe animation finishes, unmount completely */
  const handleAnimationEnd = (e) => {
    if (phase === "wiping" && e.animationName === "auroveon-wipe-exit") {
      document.body.style.overflow = "";
      setPhase("done");
    }
  };

  if (phase === "done") return null;

  return (
    <>
      <style>{`
        @keyframes auroveon-wipe-exit {
          0%   { clip-path: inset(0 0% 0 0); }
          100% { clip-path: inset(0 100% 0 0); }
        }
        @keyframes auroveon-bar-fill {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes auroveon-pulse-dot {
          0%, 100% { opacity: 0.22; transform: scale(0.72); }
          50%       { opacity: 1;    transform: scale(1);    }
        }
        @keyframes auroveon-fade-in {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes auroveon-grid-pan {
          from { background-position: 0 0; }
          to   { background-position: 74px 74px; }
        }
        @keyframes auroveon-orb-spin {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes auroveon-logo-reveal {
          0%   { opacity: 0; letter-spacing: 0.55em; }
          100% { opacity: 1; letter-spacing: 0.18em; }
        }
        @keyframes auroveon-scanline {
          0%   { top: -4px; }
          100% { top: 100%; }
        }
        .auroveon-loader-wrap {
          position: fixed;
          inset: 0;
          z-index: 99999;
          overflow: hidden;
          /* wipe off to the RIGHT when phase = wiping */
          animation: ${phase === "wiping" ? "auroveon-wipe-exit 0.82s cubic-bezier(0.76,0,0.24,1) forwards" : "none"};
        }
      `}</style>

      <div className="auroveon-loader-wrap" onAnimationEnd={handleAnimationEnd}>
        {/* ── Dark background layer ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, #080a08 0%, #0a0d0a 48%, #070907 100%)",
          }}
        />

        {/* ── Radial green glow top-center ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 18%, rgba(57,255,20,0.13), transparent 52%)",
            pointerEvents: "none",
          }}
        />

        {/* ── Animated grid ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            linear-gradient(rgba(57,255,20,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57,255,20,0.04) 1px, transparent 1px)
          `,
            backgroundSize: "74px 74px",
            animation: "auroveon-grid-pan 4s linear infinite",
            maskImage:
              "radial-gradient(ellipse at 50% 50%, black 0%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 50%, black 0%, transparent 80%)",
            pointerEvents: "none",
          }}
        />

        {/* ── Scanline sweep ── */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, rgba(57,255,20,0.18), transparent)",
            animation: "auroveon-scanline 2.4s linear infinite",
            pointerEvents: "none",
          }}
        />

        {/* ── Noise overlay ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.034,
            pointerEvents: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "240px 240px",
          }}
        />

        {/* ── Main centered content ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
          }}
        >
          {/* Orbital ring + spinning arc */}
          <div
            style={{
              position: "relative",
              width: "110px",
              height: "110px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "auroveon-fade-in 0.6s ease forwards",
              marginBottom: "2rem",
            }}
          >
            {/* Static outer ring */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1px solid rgba(57,255,20,0.1)",
              }}
            />
            {/* Spinning arc */}
            <div
              style={{
                position: "absolute",
                inset: "-6px",
                borderRadius: "50%",
                border: "1.5px solid transparent",
                borderTopColor: "rgba(57,255,20,0.7)",
                borderRightColor: "rgba(57,255,20,0.2)",
                animation: "auroveon-orb-spin 1.4s linear infinite",
              }}
            />
            {/* Inner static ring */}
            <div
              style={{
                position: "absolute",
                inset: "14px",
                borderRadius: "50%",
                border: "1px solid rgba(57,255,20,0.07)",
              }}
            />
            {/* Center glow dot */}
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: "#39ff14",
                boxShadow:
                  "0 0 22px rgba(57,255,20,0.8), 0 0 44px rgba(57,255,20,0.4)",
                animation: "auroveon-pulse-dot 1.8s ease-in-out infinite",
              }}
            />
            {/* 3 satellite dots */}
            {[0, 120, 240].map((deg) => (
              <div
                key={deg}
                style={{
                  position: "absolute",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "rgba(57,255,20,0.55)",
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${deg}deg) translateX(48px) translateY(-50%)`,
                }}
              />
            ))}
          </div>

          {/* Brand name */}
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(1.4rem, 4vw, 2rem)",
              fontWeight: 800,
              fontStyle: "italic",
              letterSpacing: "0.18em",
              color: "#f0f5f0",
              textTransform: "uppercase",
              animation:
                "auroveon-logo-reveal 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both",
            }}
          >
            Auroveon
          </div>

          {/* Eyebrow tag */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#39ff14",
              marginTop: "0.5rem",
              animation: "auroveon-fade-in 0.7s ease 0.3s both",
            }}
          >
            AI-native software agency
          </div>

          {/* Progress bar container */}
          <div
            style={{
              marginTop: "2.8rem",
              width: "min(340px, 72vw)",
              animation: "auroveon-fade-in 0.6s ease 0.4s both",
            }}
          >
            {/* Track */}
            <div
              style={{
                width: "100%",
                height: "2px",
                background: "rgba(57,255,20,0.1)",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              {/* Fill */}
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, rgba(57,255,20,0.5), #39ff14)",
                  borderRadius: "999px",
                  transition: "width 0.08s linear",
                  boxShadow: "0 0 8px rgba(57,255,20,0.6)",
                }}
              />
            </div>

            {/* Status row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "0.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(122,138,122,0.8)",
                  transition: "opacity 0.3s",
                }}
              >
                {statusText}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  color: "#39ff14",
                }}
              >
                {progress}%
              </span>
            </div>
          </div>

          {/* Three blinking dots */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "2rem",
              animation: "auroveon-fade-in 0.6s ease 0.5s both",
            }}
          >
            {[0, 0.28, 0.56].map((delay, i) => (
              <div
                key={i}
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#39ff14",
                  animation: `auroveon-pulse-dot 1.4s ease-in-out ${delay}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom-left corner tag ── */}
        <div
          style={{
            position: "absolute",
            bottom: "1.8rem",
            left: "2rem",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(57,255,20,0.35)",
            animation: "auroveon-fade-in 0.6s ease 0.6s both",
          }}
        >
          v2.0 — auroveon.io
        </div>

        {/* ── Bottom-right corner tag ── */}
        <div
          style={{
            position: "absolute",
            bottom: "1.8rem",
            right: "2rem",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(57,255,20,0.35)",
            animation: "auroveon-fade-in 0.6s ease 0.6s both",
          }}
        >
          Loading experience
        </div>

        {/* ── Left accent bar ── */}
        <div
          style={{
            position: "absolute",
            top: "8%",
            bottom: "8%",
            left: "0",
            width: "2px",
            background:
              "linear-gradient(180deg, transparent, rgba(57,255,20,0.3) 30%, rgba(57,255,20,0.3) 70%, transparent)",
          }}
        />

        {/* ── Right accent bar ── */}
        <div
          style={{
            position: "absolute",
            top: "8%",
            bottom: "8%",
            right: "0",
            width: "2px",
            background:
              "linear-gradient(180deg, transparent, rgba(57,255,20,0.3) 30%, rgba(57,255,20,0.3) 70%, transparent)",
          }}
        />
      </div>
    </>
  );
}
