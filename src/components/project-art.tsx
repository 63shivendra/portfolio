import type { CSSProperties, ReactNode } from "react";
import { type Project } from "@/content/site";
import { getProjectVisual } from "@/content/project-visuals";

type ArtSize = "compact" | "wide";

const svgProps = {
  viewBox: "0 0 320 180",
  role: "presentation",
  focusable: "false",
} as const;

function DocROI() {
  return (
    <>
      <g className="pa-doc-tokens">
        {[
          [68, 42],
          [252, 58],
          [54, 124],
          [265, 126],
        ].map(([x, y], index) => (
          <rect
            key={index}
            x={x}
            y={y}
            width="7"
            height="7"
            rx="1.5"
            fill="currentColor"
            opacity="0.45"
            className="pa-doc-token"
            style={{ animationDelay: `${index * 0.32}s` }}
          />
        ))}
      </g>
      <rect x="103" y="24" width="114" height="132" rx="5" fill="#ece8dc" />
      <g fill="#8f897b" opacity="0.52">
        <rect x="116" y="38" width="42" height="5" rx="1" />
        <rect x="116" y="49" width="68" height="3" rx="1" />
        <rect x="116" y="57" width="52" height="3" rx="1" />
        <rect x="116" y="96" width="72" height="3" rx="1" />
        <rect x="116" y="104" width="58" height="3" rx="1" />
        <rect x="116" y="132" width="42" height="3" rx="1" />
      </g>
      <rect
        x="116"
        y="71"
        width="58"
        height="17"
        rx="2"
        fill="currentColor"
        opacity="0.13"
        stroke="currentColor"
        strokeWidth="1.4"
        className="pa-doc-roi pa-doc-roi-a"
      />
      <rect
        x="188"
        y="112"
        width="18"
        height="28"
        rx="2"
        fill="currentColor"
        opacity="0.09"
        stroke="currentColor"
        strokeWidth="1.2"
        className="pa-doc-roi pa-doc-roi-b"
      />
      <g className="pa-doc-beam">
        <rect x="99" y="0" width="122" height="3" fill="currentColor" opacity="0.8" />
        <rect x="99" y="3" width="122" height="10" fill="currentColor" opacity="0.08" />
      </g>
      <circle cx="242" cy="34" r="3" fill="currentColor" />
    </>
  );
}

function JobAgent() {
  const checks = [
    [0, 0.94],
    [1, 0.81],
    [2, 0.76],
    [3, 0.38],
    [4, 0.88],
  ] as const;
  return (
    <>
      <g className="pa-job-window">
        <rect x="50" y="34" width="220" height="116" rx="9" fill="#0d121a" stroke="#fff" strokeOpacity="0.14" />
        <circle cx="64" cy="47" r="2.4" fill="#fff" opacity="0.2" />
        <circle cx="72" cy="47" r="2.4" fill="#fff" opacity="0.2" />
        <circle cx="80" cy="47" r="2.4" fill="#fff" opacity="0.2" />
        <rect x="50" y="58" width="220" height="1" fill="#fff" opacity="0.08" />
        <rect x="66" y="70" width="101" height="7" rx="2" fill="#fff" opacity="0.55" />
        <rect x="66" y="82" width="72" height="3" rx="1" fill="#fff" opacity="0.2" />
      </g>
      {checks.map(([index, value]) => (
        <g
          key={index}
          className="pa-job-check"
          style={{ animationDelay: `${index * 0.38}s` }}
        >
          <circle cx="69" cy="99" r="6" fill="none" stroke="#fff" strokeOpacity="0.2" />
          <path
            d="M66.3 99.1l1.8 1.8 3.4-3.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="81" y="96" width="62" height="3" rx="1" fill="#fff" opacity="0.28" />
          <rect
            x="81"
            y="103"
            width={value * 62}
            height="2"
            rx="1"
            fill="currentColor"
            opacity="0.7"
          />
        </g>
      ))}
      <g className="pa-job-shield" transform="translate(227 74)">
        <path
          d="M0-22 17-15v13c0 12-7 20-17 25-10-5-17-13-17-25v-13L0-22Z"
          fill="currentColor"
          opacity="0.1"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path d="M-7 0  -1 6 8-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <rect x="216" y="114" width="38" height="3" rx="1.5" fill="#fff" opacity="0.15" />
      <rect x="216" y="114" width="27" height="3" rx="1.5" fill="currentColor" opacity="0.8" className="pa-job-risk" />
    </>
  );
}

function Ranking() {
  const rows = [
    { y: 45, w: 95, score: "0.981" },
    { y: 68, w: 78, score: "0.964" },
    { y: 91, w: 86, score: "0.947" },
    { y: 114, w: 62, score: "0.112", trap: true },
    { y: 137, w: 73, score: "0.902" },
  ];
  return (
    <>
      <rect x="44" y="28" width="232" height="124" rx="8" fill="#0d121a" stroke="#fff" strokeOpacity="0.12" />
      <rect x="44" y="44" width="232" height="1" fill="#fff" opacity="0.08" />
      <text x="58" y="39" fill="#fff" opacity="0.28" fontSize="5" fontFamily="monospace" letterSpacing="1.4">
        CANDIDATE_ID
      </text>
      <text x="237" y="39" fill="#fff" opacity="0.28" fontSize="5" fontFamily="monospace" letterSpacing="1.4">
        RRF
      </text>
      <line x1="248" y1="54" x2="248" y2="146" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.45" className="pa-rank-gate" />
      {rows.map((row, index) => (
        <g
          key={row.y}
          className={row.trap ? "pa-rank-trap" : "pa-rank-row"}
          style={{ animationDelay: row.trap ? "0s" : `${index * 0.22}s` }}
        >
          <circle cx="61" cy={row.y} r="5.5" fill={row.trap ? "currentColor" : "#fff"} opacity={row.trap ? 0.16 : 0.08} />
          <text x="59" y={row.y + 1.5} fill={row.trap ? "currentColor" : "#fff"} opacity={row.trap ? 1 : 0.4} fontSize="5" fontFamily="monospace">
            {row.trap ? "!" : String(index + 1).padStart(2, "0")}
          </text>
          <rect x="73" y={row.y - 5} width="118" height="4" rx="2" fill="#fff" opacity="0.1" />
          <rect
            x="73"
            y={row.y - 5}
            width={row.w}
            height="4"
            rx="2"
            fill={row.trap ? "currentColor" : "#fff"}
            opacity={row.trap ? 0.85 : 0.32}
          />
          <rect x="73" y={row.y + 2} width={row.w * 0.55} height="2" rx="1" fill="#fff" opacity="0.09" />
          <text x="258" y={row.y + 1.5} fill={row.trap ? "currentColor" : "#fff"} opacity={row.trap ? 1 : 0.45} fontSize="5.5" fontFamily="monospace">
            {row.score}
          </text>
        </g>
      ))}
      <g className="pa-rank-verdict">
        <rect x="176" y="55" width="58" height="15" rx="7.5" fill="currentColor" opacity="0.12" stroke="currentColor" strokeOpacity="0.3" />
        <circle cx="184" cy="62.5" r="2" fill="currentColor" />
        <text x="190" y="64.8" fill="currentColor" fontSize="5" fontFamily="monospace" letterSpacing="0.8">
          0 LEAKS
        </text>
      </g>
    </>
  );
}

function NexusStitch() {
  const nodes = [
    { x: 64, y: 48, shape: "cookie" },
    { x: 250, y: 48, shape: "device" },
    { x: 50, y: 128, shape: "mail" },
    { x: 266, y: 128, shape: "phone" },
    { x: 156, y: 34, shape: "card" },
  ];
  return (
    <>
      <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" className="pa-stitch-lines">
        {nodes.map((node, index) => (
          <path
            key={index}
            d={`M${node.x} ${node.y} Q160 90 160 90`}
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset="1"
            className="pa-stitch-line"
            style={{ animationDelay: `${index * 0.35}s` }}
          />
        ))}
      </g>
      {nodes.map((node, index) => (
        <g key={index} className="pa-stitch-node" style={{ animationDelay: `${index * 0.26}s` }}>
          <circle cx={node.x} cy={node.y} r="17" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
          <g fill="currentColor" opacity="0.9">
            {node.shape === "cookie" && (
              <>
                <circle cx={node.x} cy={node.y} r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <circle cx={node.x - 2} cy={node.y - 2} r="1" />
                <circle cx={node.x + 2} cy={node.y + 1} r="1" />
              </>
            )}
            {node.shape === "device" && (
              <>
                <rect x={node.x - 4} y={node.y - 6} width="8" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <circle cx={node.x} cy={node.y + 3.5} r="0.8" />
              </>
            )}
            {node.shape === "mail" && (
              <>
                <rect x={node.x - 6} y={node.y - 4} width="12" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <path d={`M${node.x - 6} ${node.y - 3}l6 4 6-4`} fill="none" stroke="currentColor" strokeWidth="1.2" />
              </>
            )}
            {node.shape === "phone" && (
              <path d={`M${node.x - 4} ${node.y - 6}h8v12h-8z`} fill="none" stroke="currentColor" strokeWidth="1.2" />
            )}
            {node.shape === "card" && (
              <>
                <rect x={node.x - 6} y={node.y - 4} width="12" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <rect x={node.x - 6} y={node.y - 1} width="12" height="2" fill="currentColor" opacity="0.5" />
              </>
            )}
          </g>
        </g>
      ))}
      <g className="pa-stitch-core" transform="translate(160 90)">
        <circle r="32" fill="currentColor" opacity="0.06" />
        <circle r="22" fill="#0d121a" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 4" />
        <circle r="6" fill="currentColor" />
        <path d="M-14 0h8M6 0h8" stroke="currentColor" strokeWidth="1.2" />
      </g>
      <rect x="112" y="145" width="96" height="15" rx="7.5" fill="currentColor" opacity="0.1" stroke="currentColor" strokeOpacity="0.22" />
      <text x="160" y="155" fill="currentColor" textAnchor="middle" fontSize="5.5" fontFamily="monospace" letterSpacing="1">
        ONE TIMELINE
      </text>
    </>
  );
}

function SecureDoctor() {
  return (
    <>
      <g className="pa-crypt-bubble-a">
        <path d="M54 44h86a9 9 0 0 1 9 9v34a9 9 0 0 1-9 9H81l-11 10v-10H54a9 9 0 0 1-9-9V53a9 9 0 0 1 9-9Z" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
        <rect x="59" y="58" width="56" height="3" rx="1" fill="#fff" opacity="0.25" />
        <rect x="59" y="66" width="42" height="3" rx="1" fill="#fff" opacity="0.15" />
        <rect x="59" y="78" width="62" height="3" rx="1" fill="currentColor" opacity="0.35" className="pa-crypt-scramble" />
      </g>
      <g className="pa-crypt-bubble-b">
        <path d="M266 62h-86a9 9 0 0 0-9 9v34a9 9 0 0 0 9 9h59l11 10v-10h16a9 9 0 0 0 9-9V71a9 9 0 0 0-9-9Z" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
        <rect x="196" y="76" width="56" height="3" rx="1" fill="#fff" opacity="0.25" />
        <rect x="210" y="84" width="42" height="3" rx="1" fill="#fff" opacity="0.15" />
        <rect x="196" y="96" width="62" height="3" rx="1" fill="currentColor" opacity="0.35" className="pa-crypt-scramble" />
      </g>
      <g className="pa-crypt-key" transform="translate(160 90)">
        <g className="pa-crypt-key-left">
          <circle cx="-18" cy="0" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M-27 0h-18" stroke="currentColor" strokeWidth="1.8" />
        </g>
        <g className="pa-crypt-key-right">
          <path d="M18 0h18v-5h4v5h4v-8h4v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 0h-7" stroke="currentColor" strokeWidth="1.8" />
        </g>
        <circle r="2.4" fill="currentColor" />
      </g>
      <g className="pa-crypt-lock" transform="translate(160 132)">
        <rect x="-8" y="0" width="16" height="12" rx="3" fill="currentColor" opacity="0.9" />
        <path d="M-4 0v-4a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </g>
    </>
  );
}

function LedgerVoting() {
  const blocks = [58, 126, 194];
  return (
    <>
      <g className="pa-chain">
        {blocks.map((x, index) => (
          <g key={x} className="pa-chain-block" style={{ animationDelay: `${index * 0.45}s` }}>
            <rect x={x} y="58" width="42" height="42" rx="3" fill="#0d121a" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.2" />
            <text x={x + 21} y="77" fill="currentColor" textAnchor="middle" fontSize="6" fontFamily="monospace" opacity="0.9">
              BLK
            </text>
            <text x={x + 21} y="86" fill="currentColor" textAnchor="middle" fontSize="4.5" fontFamily="monospace" opacity="0.45">
              {["8A1F", "C204", "F90E"][index]}
            </text>
            {index < 2 ? (
              <path d={`M${x + 42} 79h26`} stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" className="pa-chain-link" />
            ) : null}
          </g>
        ))}
      </g>
      <g className="pa-ballot" transform="translate(254 44)">
        <rect x="-16" y="-12" width="32" height="42" rx="3" fill="#ece8dc" />
        <rect x="-9" y="-5" width="18" height="2.5" rx="1" fill="#7c7668" opacity="0.5" />
        <rect x="-9" y="2" width="13" height="2.5" rx="1" fill="#7c7668" opacity="0.35" />
        <path d="M-7 16l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="pa-ballot-dup" transform="translate(271 55)">
        <rect x="-16" y="-12" width="32" height="42" rx="3" fill="#ece8dc" opacity="0.45" />
      </g>
      <text x="160" y="125" fill="#fff" opacity="0.35" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        SHA-256 HASH CHAIN
      </text>
    </>
  );
}

function DDESChannel() {
  return (
    <>
      <g className="pa-ddes-client">
        <rect x="44" y="54" width="70" height="72" rx="7" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
        <rect x="52" y="63" width="54" height="1" fill="#fff" opacity="0.08" />
        <circle cx="58" cy="69" r="2" fill="currentColor" opacity="0.7" />
        <rect x="55" y="80" width="40" height="3" rx="1" fill="#fff" opacity="0.2" />
        <rect x="55" y="88" width="28" height="3" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="55" y="101" width="46" height="3" rx="1" fill="#fff" opacity="0.12" />
      </g>
      <g className="pa-ddes-server">
        <rect x="206" y="42" width="70" height="94" rx="7" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="215" y={55 + i * 24} width="52" height="16" rx="3" fill="#fff" opacity="0.05" />
            <circle cx="223" cy={63 + i * 24} r="2" fill="currentColor" opacity={i === 0 ? 0.9 : 0.3} />
            <rect x="231" y={61.5 + i * 24} width="24" height="2.5" rx="1" fill="#fff" opacity="0.16" />
          </g>
        ))}
      </g>
      <path d="M116 90h88" stroke="#fff" strokeOpacity="0.16" strokeDasharray="3 5" />
      <g className="pa-key-left" transform="translate(129 90)">
        <circle cx="0" cy="0" r="7" fill="#0d121a" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 0h13" stroke="currentColor" strokeWidth="2" />
      </g>
      <g className="pa-key-right" transform="translate(192 90)">
        <path d="M-7 0h-13" stroke="currentColor" strokeWidth="2" />
        <path d="M0 0h13v-4h4v4h4v-6h4v6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </g>
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={126 + i * 14} cy="104" r="1.5" fill="currentColor" opacity="0.5" className="pa-ddes-bit" style={{ animationDelay: `${i * 0.18}s` }} />
      ))}
      <text x="160" y="146" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        DISTRIBUTED KEY EXCHANGE
      </text>
    </>
  );
}

function SelfIndex() {
  const bars = [
    { x: 90, h: 82, label: "RAW" },
    { x: 148, h: 46, label: "ZLIB" },
    { x: 206, h: 24, label: "ELIAS" },
  ];
  return (
    <>
      <g className="pa-index-query" transform="translate(160 38)">
        <rect x="-83" y="-11" width="166" height="22" rx="11" fill="#0d121a" stroke="currentColor" strokeOpacity="0.28" />
        <circle cx="-68" cy="0" r="4" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M-65 3l4 4" stroke="currentColor" strokeWidth="1.3" />
        <text x="-54" y="2.5" fill="currentColor" fontSize="6" fontFamily="monospace" letterSpacing="0.6">
          retrieval AND fraud AND document
        </text>
      </g>
      <g className="pa-index-bars">
        {bars.map((bar, index) => (
          <g key={bar.label}>
            <rect
              x={bar.x}
              y={112 - bar.h}
              width="32"
              height={bar.h}
              rx="3"
              fill="currentColor"
              opacity={index === 2 ? 0.9 : index === 1 ? 0.35 : 0.14}
              className="pa-index-bar"
              style={{ animationDelay: `${index * 0.35}s` }}
            />
            <text x={bar.x + 16} y="128" fill="#fff" opacity="0.35" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1">
              {bar.label}
            </text>
            <text x={bar.x + 16} y="140" fill="#fff" opacity="0.18" textAnchor="middle" fontSize="4.5" fontFamily="monospace">
              {["651 MB", "−59.6%", "−74.8%"][index]}
            </text>
          </g>
        ))}
      </g>
      <path d="M240 58v54" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" />
      <path d="M236 66l4 6 4-6" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <text x="254" y="90" fill="currentColor" fontSize="14" fontFamily="monospace" opacity="0.85" textAnchor="middle">
        ↓
      </text>
      <text x="160" y="160" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        100k DOCS · 15M TOKENS
      </text>
    </>
  );
}

function MultiTaskUNet() {
  return (
    <>
      <g className="pa-unet-frame">
        <rect x="43" y="50" width="48" height="42" rx="4" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
        <rect x="51" y="59" width="32" height="24" rx="2" fill="currentColor" opacity="0.16" />
        <text x="67" y="103" fill="#fff" opacity="0.3" textAnchor="middle" fontSize="4.5" fontFamily="monospace">
          RGB
        </text>
      </g>
      <path
        d="M96 70h25v50c0 9 7 16 16 16h46c9 0 16-7 16-16V70h25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.7"
        className="pa-unet-path"
      />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={116 + i * 28} y="70" width="18" height="12" rx="3" fill="currentColor" opacity={0.24 + i * 0.12} />
          <rect x={116 + i * 28} y="112" width="18" height="12" rx="3" fill="currentColor" opacity={0.2 + (3 - i) * 0.12} />
        </g>
      ))}
      <g className="pa-unet-pulse">
        <circle cx="121" cy="76" r="3" fill="currentColor" />
      </g>
      <g className="pa-unet-outputs">
        <rect x="219" y="55" width="55" height="24" rx="5" fill="#0d121a" stroke="currentColor" strokeOpacity="0.3" />
        <text x="246" y="65" fill="currentColor" textAnchor="middle" fontSize="5" fontFamily="monospace">
          MASK
        </text>
        <rect x="226" y="69" width="22" height="4" rx="2" fill="currentColor" opacity="0.75" />
        <rect x="219" y="86" width="55" height="24" rx="5" fill="#0d121a" stroke="currentColor" strokeOpacity="0.3" />
        <text x="246" y="96" fill="currentColor" textAnchor="middle" fontSize="5" fontFamily="monospace">
          DEPTH
        </text>
        <path d="M228 106c8-9 11-9 16 0" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
      </g>
      <text x="160" y="156" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        ONE ENCODER · TWO HEADS
      </text>
    </>
  );
}

function PointCloud() {
  const points = [
    [120, 64], [134, 58], [148, 64], [162, 58], [176, 64],
    [112, 78], [126, 72], [140, 80], [154, 72], [168, 80], [182, 72], [196, 78],
    [120, 92], [134, 86], [148, 94], [162, 86], [176, 94],
    [128, 106], [142, 100], [156, 108], [170, 100], [184, 106],
    [136, 120], [150, 114], [164, 120], [178, 114],
    [144, 132], [158, 126], [172, 132],
  ];
  return (
    <>
      <ellipse cx="160" cy="132" rx="78" ry="14" fill="currentColor" opacity="0.07" />
      <g className="pa-cloud-points">
        {points.map(([x, y], index) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={index % 5 === 0 ? 2.2 : 1.2}
            fill="currentColor"
            opacity={0.35 + (index % 4) * 0.15}
          />
        ))}
        {[
          [46, 44], [274, 58], [74, 142], [246, 136], [160, 28],
        ].map(([x, y], index) => (
          <circle key={`star-${index}`} cx={x} cy={y} r="1.1" fill="#fff" opacity="0.18" />
        ))}
      </g>
      <g className="pa-cloud-axis" stroke="#fff" strokeOpacity="0.14" strokeWidth="1">
        <path d="M160 138v-100M160 138l70 20M160 138l-70 20" />
      </g>
      <text x="160" y="158" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        ROTATION-INVARIANT
      </text>
    </>
  );
}

function LineSegmentation() {
  const lines = [54, 70, 86, 102, 118];
  return (
    <>
      <rect x="88" y="24" width="144" height="132" rx="4" fill="#ece8dc" />
      <g fill="#7e786b" opacity="0.38">
        <rect x="100" y="36" width="38" height="4" rx="1" />
        <rect x="100" y="44" width="62" height="2.5" rx="1" />
      </g>
      {lines.map((y, index) => (
        <g key={y} className="pa-line-row" style={{ animationDelay: `${index * 0.26}s` }}>
          <rect x="100" y={y} width={index % 2 === 0 ? 100 : 80} height="6" rx="1" fill="#a39c8e" opacity="0.45" />
          <rect
            x="96"
            y={y - 4}
            width="118"
            height="14"
            rx="1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 2"
            opacity="0.8"
          />
          <circle cx="222" cy={y + 3} r="2.5" fill="currentColor" />
        </g>
      ))}
      <g className="pa-line-stages" transform="translate(92 144)">
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <circle cx={i * 28} cy="0" r="4" fill="#0d121a" stroke="currentColor" strokeWidth="1" opacity={0.4 + i * 0.12} />
            <text x={i * 28} y="1.8" fill="currentColor" textAnchor="middle" fontSize="4" fontFamily="monospace">
              {i + 1}
            </text>
          </g>
        ))}
        <path d="M0 0h112" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      </g>
    </>
  );
}

function SeamCarving() {
  return (
    <>
      <g className="pa-seam-grid">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={64 + col * 19}
              y={32 + row * 14}
              width="15"
              height="10"
              rx="1"
              fill="#fff"
              opacity={0.06 + ((row + col) % 4) * 0.035}
            />
          )),
        )}
      </g>
      <path
        d="M147 30  l-9 18 12 18-10 18 11 18-8 18 12 18-9 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="pa-seam-path"
        pathLength="1"
      />
      <rect x="142" y="30" width="18" height="118" fill="currentColor" opacity="0.06" className="pa-seam-band" />
      <g className="pa-seam-removed">
        <rect x="142" y="30" width="18" height="118" fill="currentColor" opacity="0.13" />
        <path d="M151 36l-7 12 8 12-7 12 8 12-7 12 8 12-7 12" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
      </g>
      <text x="160" y="164" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        LOW-ENERGY SEAM
      </text>
    </>
  );
}

function FederatedHealthcare() {
  return (
    <>
      <g className="pa-fed-node pa-fed-node-a">
        <rect x="42" y="58" width="64" height="62" rx="7" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
        <path d="M64 86h20M74 76v20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <text x="74" y="108" fill="#fff" opacity="0.35" textAnchor="middle" fontSize="5" fontFamily="monospace">
          HOSPITAL A
        </text>
      </g>
      <g className="pa-fed-node pa-fed-node-b">
        <rect x="214" y="58" width="64" height="62" rx="7" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
        <path d="M236 86h20M246 76v20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <text x="246" y="108" fill="#fff" opacity="0.35" textAnchor="middle" fontSize="5" fontFamily="monospace">
          HOSPITAL B
        </text>
      </g>
      <path d="M106 82c28-24 42-24 54 0M214 82c-28-24-42-24-54 0" fill="none" stroke="currentColor" strokeWidth="1.1" strokeDasharray="3 4" opacity="0.45" />
      <g className="pa-fed-core" transform="translate(160 82)">
        <circle r="30" fill="currentColor" opacity="0.08" />
        <circle r="21" fill="#0d121a" stroke="currentColor" strokeWidth="1.2" />
        <path d="M-8 0h6M2 0h6M0-7v14" stroke="currentColor" strokeWidth="1.4" />
        <circle r="4.5" fill="currentColor" opacity="0.8" />
      </g>
      <g className="pa-fed-packet pa-fed-packet-a">
        <circle cx="117" cy="78" r="2.5" fill="currentColor" />
      </g>
      <g className="pa-fed-packet pa-fed-packet-b">
        <circle cx="203" cy="78" r="2.5" fill="currentColor" />
      </g>
      <g className="pa-fed-lock" transform="translate(160 128)">
        <rect x="-7" y="-1" width="14" height="10" rx="2.5" fill="currentColor" opacity="0.9" />
        <path d="M-3 -1v-3a3 3 0 0 1 6 0v3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </g>
      <text x="160" y="154" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        PROBABILITIES ONLY
      </text>
    </>
  );
}

function GrowthEngine() {
  return (
    <>
      <g className="pa-reel-side pa-reel-left">
        <rect x="68" y="48" width="42" height="74" rx="6" fill="#0d121a" stroke="#fff" strokeOpacity="0.12" />
        <rect x="75" y="56" width="28" height="3" rx="1" fill="#fff" opacity="0.2" />
        <rect x="75" y="64" width="19" height="2.5" rx="1" fill="currentColor" opacity="0.35" />
        <circle cx="89" cy="96" r="7" fill="#fff" opacity="0.12" />
        <path d="M87 92l6 4-6 4z" fill="#fff" opacity="0.6" />
      </g>
      <g className="pa-reel-main">
        <rect x="126" y="30" width="68" height="108" rx="9" fill="#0d121a" stroke="currentColor" strokeOpacity="0.5" />
        <rect x="133" y="38" width="54" height="82" rx="5" fill="currentColor" opacity="0.12" />
        <rect x="139" y="48" width="42" height="4" rx="1" fill="#fff" opacity="0.5" />
        <rect x="139" y="56" width="29" height="3" rx="1" fill="#fff" opacity="0.25" />
        <circle cx="160" cy="84" r="15" fill="#0d121a" stroke="currentColor" strokeWidth="1.4" />
        <path d="M156 77l12 7-12 7z" fill="currentColor" />
        <rect x="139" y="107" width="42" height="4" rx="2" fill="#fff" opacity="0.1" />
        <rect x="139" y="107" width="27" height="4" rx="2" fill="currentColor" opacity="0.8" className="pa-reel-progress" />
      </g>
      <g className="pa-reel-side pa-reel-right">
        <rect x="210" y="48" width="42" height="74" rx="6" fill="#0d121a" stroke="#fff" strokeOpacity="0.12" />
        <rect x="217" y="56" width="27" height="3" rx="1" fill="#fff" opacity="0.2" />
        <rect x="217" y="64" width="20" height="2.5" rx="1" fill="currentColor" opacity="0.35" />
        <circle cx="231" cy="96" r="7" fill="#fff" opacity="0.12" />
        <path d="M229 92l6 4-6 4z" fill="#fff" opacity="0.6" />
      </g>
      <g className="pa-wave" transform="translate(58 146)">
        {Array.from({ length: 34 }).map((_, i) => (
          <rect
            key={i}
            x={i * 6.2}
            y={-((i % 4 === 0 ? 9 : i % 2 === 0 ? 5 : 2))}
            width="2.5"
            height={i % 4 === 0 ? 9 : i % 2 === 0 ? 5 : 2}
            rx="1"
            fill={i % 4 === 0 ? "currentColor" : "#fff"}
            opacity={i % 4 === 0 ? 0.8 : 0.15}
            className="pa-wave-bar"
            style={{ animationDelay: `${i * 0.06}s` }}
          />
        ))}
      </g>
      <text x="160" y="164" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        1080 × 1920 · 30 FPS
      </text>
    </>
  );
}

function DemandForecast() {
  return (
    <>
      <g className="pa-forecast-axes" stroke="#fff" strokeOpacity="0.12" strokeWidth="1">
        <path d="M58 47v104h206" />
        {[70, 92, 114, 136].map((y) => (
          <path key={y} d={`M58 ${y}h206`} strokeDasharray="2 5" opacity="0.5" />
        ))}
      </g>
      <path
        d="M58 128c18-7 28-9 44-6s22 4 37-10 24-5 38-18 24-4 39-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="pa-forecast-history"
        pathLength="1"
      />
      <path
        d="M216 83c16-7 25-4 48-18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
        className="pa-forecast-future"
        pathLength="1"
      />
      <path
        d="M216 83c16-14 28-12 48-26v24c-17 8-29 6-48 10Z"
        fill="currentColor"
        opacity="0.1"
        className="pa-forecast-band"
      />
      <circle cx="216" cy="83" r="3.5" fill="#0d121a" stroke="currentColor" strokeWidth="1.6" />
      <g className="pa-forecast-dot">
        <circle cx="264" cy="65" r="3.5" fill="currentColor" />
      </g>
      <g transform="translate(58 34)">
        <rect x="0" y="-9" width="54" height="18" rx="9" fill="currentColor" opacity="0.1" stroke="currentColor" strokeOpacity="0.25" />
        <text x="27" y="2.5" fill="currentColor" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="0.7">
          FORECAST
        </text>
        <rect x="62" y="-9" width="46" height="18" rx="9" fill="#0d121a" stroke="#fff" strokeOpacity="0.12" />
        <text x="85" y="2.5" fill="#fff" opacity="0.35" textAnchor="middle" fontSize="5" fontFamily="monospace">
          MAE / RMSE
        </text>
      </g>
      <text x="160" y="164" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        DEMAND · COUNTRY · PRODUCT
      </text>
    </>
  );
}

function CausalTraffic() {
  return (
    <>
      <g stroke="#fff" strokeOpacity="0.12" strokeWidth="1">
        <path d="M54 50v100h212" />
      </g>
      <path
        d="M54 126c30-2 52-3 74-10s30-3 52-8 30-13 55-20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.45"
        className="pa-causal-control"
      />
      <path
        d="M54 126c30-2 52-3 74-18s30-1 52-17 30-7 55-24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        className="pa-causal-treated"
        pathLength="1"
      />
      <path d="M129 54v92" stroke="#fff" strokeOpacity="0.3" strokeDasharray="3 4" />
      <g className="pa-causal-bracket" stroke="currentColor" strokeWidth="1.2" fill="none">
        <path d="M178 90v-14h62v14" />
        <path d="M209 76v-8" />
      </g>
      <text x="209" y="62" fill="currentColor" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1">
        DiD
      </text>
      <g className="pa-causal-placebo">
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={188 + i * 13} cy={112 - (i % 2) * 7} r="2" fill="#fff" opacity="0.35" />
        ))}
      </g>
      <text x="160" y="164" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        POLICY EFFECT · PLACEBO TESTS
      </text>
    </>
  );
}

function CricketDeception() {
  return (
    <>
      <path d="M48 142h224" stroke="#fff" strokeOpacity="0.15" strokeWidth="1" />
      <path d="M248 80v62M258 80v62M238 80v62" stroke="#fff" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M238 80h20" stroke="#fff" strokeOpacity="0.18" strokeWidth="2" />
      <path
        d="M78 112c36-44 74-22 100-44s30-2 55-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeDasharray="3 5"
        opacity="0.45"
      />
      <g className="pa-cricket-ball">
        <circle cx="78" cy="112" r="5" fill="currentColor" />
        <path d="M78 107v10M73 112h10" stroke="#0d121a" strokeWidth="0.8" opacity="0.6" />
      </g>
      <g className="pa-cricket-zone">
        <ellipse cx="218" cy="78" rx="26" ry="20" fill="currentColor" opacity="0.08" />
        <ellipse cx="218" cy="78" rx="18" ry="12" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
      </g>
      <text x="218" y="60" fill="currentColor" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="0.8">
        DECEPTION
      </text>
      <text x="160" y="164" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        BALL-BY-BALL · BALL TRACKING
      </text>
    </>
  );
}

function TextSummarizer() {
  return (
    <>
      <g className="pa-summary-source">
        <rect x="42" y="34" width="94" height="112" rx="6" fill="#0d121a" stroke="#fff" strokeOpacity="0.12" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <rect
            key={i}
            x="52"
            y={48 + i * 10}
            width={i % 3 === 0 ? 68 : i % 2 === 0 ? 56 : 72}
            height="3"
            rx="1.5"
            fill="#fff"
            opacity={0.14 + (i % 4) * 0.04}
            className="pa-summary-line"
            style={{ animationDelay: `${i * 0.16}s` }}
          />
        ))}
      </g>
      <path d="M146 90h30" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" className="pa-summary-arrow" />
      <path d="M170 85l7 5-7 5" fill="none" stroke="currentColor" strokeWidth="1.4" className="pa-summary-arrow" />
      <g className="pa-summary-out">
        <rect x="188" y="48" width="88" height="80" rx="6" fill="currentColor" opacity="0.08" stroke="currentColor" strokeOpacity="0.3" />
        {[0, 1, 2].map((i) => (
          <g key={i} className="pa-summary-bullet" style={{ animationDelay: `${0.3 + i * 0.35}s` }}>
            <circle cx="200" cy={67 + i * 18} r="2.5" fill="currentColor" />
            <rect x="208" y={63 + i * 18} width={i === 1 ? 54 : 44} height="4" rx="2" fill="#fff" opacity="0.4" />
            <rect x="208" y={71 + i * 18} width={i === 0 ? 36 : 48} height="2.5" rx="1" fill="#fff" opacity="0.15" />
          </g>
        ))}
      </g>
      <text x="160" y="162" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        DISTILBART · BFLOAT16
      </text>
    </>
  );
}

function TextSimilarity() {
  return (
    <>
      <g className="pa-sim-doc pa-sim-doc-a" transform="rotate(-6 115 90)">
        <rect x="70" y="40" width="92" height="102" rx="5" fill="#0d121a" stroke="#fff" strokeOpacity="0.12" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x="82" y={54 + i * 13} width={i % 2 === 0 ? 66 : 48} height="3" rx="1" fill="#fff" opacity="0.18" />
        ))}
      </g>
      <g className="pa-sim-doc pa-sim-doc-b" transform="rotate(6 205 90)">
        <rect x="158" y="40" width="92" height="102" rx="5" fill="#0d121a" stroke="#fff" strokeOpacity="0.12" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x="170" y={54 + i * 13} width={i % 2 === 0 ? 52 : 68} height="3" rx="1" fill="#fff" opacity="0.18" />
        ))}
      </g>
      <g className="pa-sim-tokens">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={137 + (i % 2) * 10}
            y={64 + i * 10}
            width={i % 2 === 0 ? 38 : 28}
            height="7"
            rx="3.5"
            fill="currentColor"
            opacity="0.12"
            stroke="currentColor"
            strokeOpacity="0.3"
            className="pa-sim-token"
            style={{ animationDelay: `${i * 0.22}s` }}
          />
        ))}
      </g>
      <g className="pa-sim-score" transform="translate(160 142)">
        <rect x="-34" y="-10" width="68" height="18" rx="9" fill="currentColor" opacity="0.12" stroke="currentColor" strokeOpacity="0.3" />
        <text x="0" y="2.5" fill="currentColor" textAnchor="middle" fontSize="6" fontFamily="monospace" letterSpacing="0.8">
          0.86 OVERLAP
        </text>
      </g>
    </>
  );
}

function TweetSentiment() {
  return (
    <>
      <g className="pa-sent-bubble">
        <path d="M78 42h164a12 12 0 0 1 12 12v58a12 12 0 0 1-12 12H145l-18 16v-16H78a12 12 0 0 1-12-12V54a12 12 0 0 1 12-12Z" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
        <g className="pa-sent-face-happy">
          <circle cx="160" cy="84" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="153" cy="79" r="2" fill="currentColor" />
          <circle cx="167" cy="79" r="2" fill="currentColor" />
          <path d="M151 89c4 6 14 6 18 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </g>
        <g className="pa-sent-face-sad">
          <circle cx="160" cy="84" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="153" cy="79" r="2" fill="currentColor" />
          <circle cx="167" cy="79" r="2" fill="currentColor" />
          <path d="M151 92c4-6 14-6 18 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </g>
        <text x="160" y="122" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1">
          HAPPY / SAD
        </text>
      </g>
      <g className="pa-sent-gauge" transform="translate(270 90)">
        <path d="M-18 18a18 18 0 1 1 36 0" fill="none" stroke="#fff" strokeOpacity="0.16" strokeWidth="1.2" />
        <path d="M0 18V0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="pa-sent-needle" />
        <circle r="2.5" fill="currentColor" />
      </g>
      <g className="pa-sent-chips" transform="translate(42 142)">
        {["noisy", "short", "tf-idf"].map((label, i) => (
          <g key={label} transform={`translate(${i * 43} 0)`}>
            <rect width="38" height="14" rx="7" fill="currentColor" opacity="0.08" stroke="currentColor" strokeOpacity="0.22" />
            <text x="19" y="9.5" fill="currentColor" textAnchor="middle" fontSize="4.5" fontFamily="monospace">
              {label}
            </text>
          </g>
        ))}
      </g>
    </>
  );
}

function POSIXShell() {
  return (
    <>
      <g className="pa-shell-window">
        <rect x="38" y="29" width="176" height="124" rx="7" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
        <rect x="38" y="45" width="176" height="1" fill="#fff" opacity="0.08" />
        <circle cx="50" cy="37" r="2.2" fill="#fff" opacity="0.2" />
        <circle cx="58" cy="37" r="2.2" fill="#fff" opacity="0.2" />
        <circle cx="66" cy="37" r="2.2" fill="#fff" opacity="0.2" />
        <text x="50" y="64" fill="currentColor" fontSize="7" fontFamily="monospace">
          $
        </text>
        <g className="pa-shell-command">
          <text x="62" y="64" fill="#fff" opacity="0.7" fontSize="6.5" fontFamily="monospace">
            ls -la | grep .log
          </text>
        </g>
        <g className="pa-shell-output">
          <rect x="50" y="76" width="104" height="3" rx="1" fill="#fff" opacity="0.18" />
          <rect x="50" y="86" width="134" height="3" rx="1" fill="#fff" opacity="0.12" />
          <rect x="50" y="96" width="86" height="3" rx="1" fill="currentColor" opacity="0.45" />
          <rect x="50" y="112" width="64" height="3" rx="1" fill="#fff" opacity="0.12" />
        </g>
        <g className="pa-shell-cursor">
          <rect x="50" y="128" width="5" height="8" fill="currentColor" />
        </g>
      </g>
      <g className="pa-shell-tree" transform="translate(232 54)" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.7">
        <path d="M0 8v12M0 20h26M0 20v12M26 20v12" />
        <circle cx="0" cy="8" r="4" fill="#0d121a" />
        <circle cx="26" cy="20" r="4" fill="#0d121a" />
        <circle cx="0" cy="32" r="4" fill="#0d121a" />
        <circle cx="26" cy="32" r="4" fill="#0d121a" />
        <text x="0" y="52" fill="currentColor" textAnchor="middle" fontSize="4.5" fontFamily="monospace">
          JOBS
        </text>
      </g>
      <text x="126" y="166" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        BUILT-INS · HISTORY · PID
      </text>
    </>
  );
}

function MiniVCS() {
  return (
    <>
      <g className="pa-vcs-nodes">
        {[
          { x: 66, y: 64, label: "BLOB", hash: "a91f" },
          { x: 148, y: 52, label: "TREE", hash: "c204" },
          { x: 228, y: 72, label: "COMMIT", hash: "f90e" },
        ].map((node, index) => (
          <g key={node.label} className="pa-vcs-node" style={{ animationDelay: `${index * 0.4}s` }}>
            <rect x={node.x} y={node.y} width="48" height="52" rx="4" fill="#0d121a" stroke="currentColor" strokeOpacity="0.4" />
            <text x={node.x + 24} y={node.y + 23} fill="currentColor" textAnchor="middle" fontSize="5.5" fontFamily="monospace">
              {node.label}
            </text>
            <text x={node.x + 24} y={node.y + 34} fill="#fff" opacity="0.3" textAnchor="middle" fontSize="4.5" fontFamily="monospace">
              {node.hash}
            </text>
            <circle cx={node.x + 24} cy={node.y + 44} r="2.2" fill="currentColor" opacity="0.65" />
          </g>
        ))}
        <path d="M114 88h18M196 78l18-4" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.5" />
      </g>
      <g className="pa-vcs-stamp" transform="translate(160 126)">
        <rect x="-25" y="-10" width="50" height="20" rx="10" fill="currentColor" opacity="0.1" stroke="currentColor" strokeOpacity="0.3" />
        <text x="0" y="2.5" fill="currentColor" textAnchor="middle" fontSize="5.5" fontFamily="monospace" letterSpacing="0.8">
          VERIFIED
        </text>
      </g>
      <text x="160" y="160" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        SHA-1 · CAT-FILE · LS-TREE
      </text>
    </>
  );
}

function ThreadsSimulation() {
  return (
    <>
      <g className="pa-thread-queue">
        {[0, 1, 2, 3].map((i) => (
          <g key={i} className="pa-thread-dot" style={{ animationDelay: `${i * 0.45}s` }}>
            <circle cx={64 + i * 20} cy={74} r="7" fill="currentColor" opacity={0.25 + i * 0.12} />
            <text x={64 + i * 20} y={76.5} fill="#0d121a" textAnchor="middle" fontSize="5" fontFamily="monospace">
              {i + 1}
            </text>
          </g>
        ))}
      </g>
      <g className="pa-thread-machine" transform="translate(214 92)">
        <rect x="-42" y="-34" width="84" height="68" rx="8" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
        <circle cx="0" cy="-2" r="19" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
        <circle cx="0" cy="-2" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.25" />
        <path d="M0 9v14M-8-8h16" stroke="currentColor" strokeWidth="1.4" />
        <g className="pa-thread-lock" transform="translate(25 -23)">
          <rect x="-5" y="0" width="10" height="7" rx="1.5" fill="currentColor" />
          <path d="M-2 0v-3a2 2 0 0 1 4 0v3" fill="none" stroke="currentColor" strokeWidth="1.1" />
        </g>
      </g>
      <g className="pa-thread-conflict" transform="translate(150 126)">
        <path d="M-8 0h16M0-8v16" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
        <circle r="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </g>
      <text x="160" y="160" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="5" fontFamily="monospace" letterSpacing="1.2">
        PTHREADS · SHARED STATE
      </text>
    </>
  );
}

function FileReversal() {
  const bytes = [0, 1, 2, 3, 4];
  return (
    <>
      <g className="pa-file-left" transform="translate(46 44)">
        <rect width="70" height="94" rx="5" fill="#0d121a" stroke="#fff" strokeOpacity="0.13" />
        <text x="9" y="15" fill="#fff" opacity="0.35" fontSize="4.5" fontFamily="monospace">
          INPUT
        </text>
        {bytes.map((i) => (
          <rect key={i} x="9" y={24 + i * 12} width={38 + (i % 3) * 8} height="5" rx="1" fill="#fff" opacity={0.14 + i * 0.03} />
        ))}
      </g>
      <g className="pa-file-right" transform="translate(204 44)">
        <rect width="70" height="94" rx="5" fill="#0d121a" stroke="currentColor" strokeOpacity="0.3" />
        <text x="9" y="15" fill="currentColor" opacity="0.6" fontSize="4.5" fontFamily="monospace">
          OUTPUT
        </text>
        {bytes.map((i) => (
          <rect key={i} x="9" y={24 + i * 12} width={38 + ((4 - i) % 3) * 8} height="5" rx="1" fill="currentColor" opacity={0.2 + i * 0.06} />
        ))}
      </g>
      <g className="pa-reverse-arrow" transform="translate(160 90)">
        <path d="M-34 0h68" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 4" />
        <path d="M28-5l7 5-7 5M-28-5l-7 5 7 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </g>
      <g className="pa-reverse-check" transform="translate(160 148)">
        <circle r="9" fill="currentColor" opacity="0.13" stroke="currentColor" strokeOpacity="0.3" />
        <path d="M-4 0l2.5 2.5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="160" y="170" fill="#fff" opacity="0.32" textAnchor="middle" fontSize="4.5" fontFamily="monospace" letterSpacing="1.2">
        RAW SYSCALLS · VERIFIED
      </text>
    </>
  );
}

const scenes: Record<string, () => ReactNode> = {
  docroi: DocROI,
  "job-authenticity": JobAgent,
  "candidate-ranking": Ranking,
  "nexus-stitch": NexusStitch,
  "secure-doctor": SecureDoctor,
  "blockchain-voting": LedgerVoting,
  "ddes-channel": DDESChannel,
  selfindex: SelfIndex,
  "multitask-unet": MultiTaskUNet,
  "point-cloud": PointCloud,
  "line-segmentation": LineSegmentation,
  "seam-carving": SeamCarving,
  "federated-healthcare": FederatedHealthcare,
  "growth-engine": GrowthEngine,
  "demand-forecasting": DemandForecast,
  "causal-traffic": CausalTraffic,
  "cricket-deception": CricketDeception,
  "text-summarizer": TextSummarizer,
  "text-similarity": TextSimilarity,
  "tweet-sentiment": TweetSentiment,
  "posix-shell": POSIXShell,
  "mini-vcs": MiniVCS,
  "threads-sim": ThreadsSimulation,
  "file-reversal": FileReversal,
};

export function ProjectArt({
  project,
  size = "compact",
}: {
  project: Project;
  size?: ArtSize;
}) {
  const visual = getProjectVisual(project.slug);
  const Scene = scenes[project.slug];
  const large = size === "wide";

  return (
    <div
      aria-hidden="true"
      data-project-art={project.slug}
      data-project-accent={visual.accent}
      className={`project-art ${large ? "project-art--wide" : ""}`}
      style={{ "--pa": visual.accent } as CSSProperties}
    >
      <div className="project-art-glow" />
      <div className="project-art-scene">
        <svg {...svgProps} className="project-art-svg" style={{ color: visual.accent }}>
          {Scene ? <Scene /> : null}
        </svg>
      </div>
      {large ? (
        <div className="project-art-meta">
          <span>{project.hook}</span>
          <span>{project.metric?.value ?? project.year}</span>
        </div>
      ) : null}
    </div>
  );
}
