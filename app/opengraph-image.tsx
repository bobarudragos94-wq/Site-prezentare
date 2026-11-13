import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

// Imaginea care apare când dai share la link (Facebook, WhatsApp, LinkedIn).
export const alt = `${siteConfig.brand}: ${siteConfig.titluSeo}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [latin, latinExt] = await Promise.all([
  readFile(join(process.cwd(), "assets/archivo-latin-800-normal.woff")),
  readFile(join(process.cwd(), "assets/archivo-latin-ext-800-normal.woff")),
]);

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e0e0c",
          color: "#f4f2ec",
          padding: 72,
          fontFamily: "Archivo, ArchivoExt",
        }}
      >
        <div style={{ display: "flex", fontSize: 34 }}>{siteConfig.brand}</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1.02, letterSpacing: -3 }}>
          <div style={{ display: "flex" }}>Mai mulți clienți preluați.</div>
          <div style={{ display: "flex", color: "#a9a79d" }}>Mai puțin timp pierdut cu</div>
          <div style={{ display: "flex", marginTop: 14 }}>
            <div style={{ display: "flex", background: "#ffd600", color: "#11110f", padding: "2px 18px 8px" }}>
              munca repetitivă
            </div>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a9a79d" }}>
          Site-uri și automatizări pentru firme mici · Audit gratuit
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: latin, weight: 800, style: "normal" },
        // Subsetul cu ș, ț, ă: nume separat, ca literele românești să fie luate de aici.
        { name: "ArchivoExt", data: latinExt, weight: 800, style: "normal" },
      ],
    },
  );
}
