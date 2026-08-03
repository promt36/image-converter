import { ImageResponse } from "next/og";

export const alt = "ImageConvert free online image converter";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eef2ff 100%)",
          color: "#0f172a",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "24px",
              background: "#2563eb",
              color: "#ffffff",
              fontSize: "38px",
              fontWeight: 900,
            }}
          >
            IC
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "58px",
                fontWeight: 900,
                letterSpacing: "-2px",
              }}
            >
              ImageConvert
            </div>

            <div
              style={{
                marginTop: "4px",
                fontSize: "24px",
                color: "#64748b",
                fontWeight: 700,
              }}
            >
              Fast • Free • Private
            </div>
          </div>
        </div>

        <h1
          style={{
            marginTop: "65px",
            marginBottom: "0",
            maxWidth: "950px",
            fontSize: "70px",
            lineHeight: 1.05,
            fontWeight: 900,
            letterSpacing: "-3px",
          }}
        >
          Convert images online in seconds
        </h1>

        <p
          style={{
            marginTop: "28px",
            marginBottom: "0",
            maxWidth: "900px",
            fontSize: "30px",
            lineHeight: 1.45,
            color: "#475569",
          }}
        >
          Convert JPG, PNG, WEBP and AVIF images directly in your browser.
        </p>

        <div
          style={{
            marginTop: "48px",
            display: "flex",
            gap: "18px",
          }}
        >
          {["JPG", "PNG", "WEBP", "AVIF"].map((format) => (
            <div
              key={format}
              style={{
                display: "flex",
                padding: "14px 24px",
                borderRadius: "16px",
                background: "#ffffff",
                border: "2px solid #bfdbfe",
                color: "#1d4ed8",
                fontSize: "24px",
                fontWeight: 900,
              }}
            >
              {format}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}