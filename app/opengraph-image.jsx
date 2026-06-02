import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'justdebbie.ing — Creative direction for brands that need less "what now?" and more "watch this."';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0A0A0A',
          padding: '80px',
        }}
      >
        {/* Top: wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
          <span style={{ fontSize: 32, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.04em' }}>
            justdebbie
          </span>
          <span style={{ fontSize: 32, fontWeight: 800, color: '#00AA9F', letterSpacing: '-0.04em' }}>
            .ing
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 0.88,
              letterSpacing: '-0.07em',
            }}
          >
            debbie-ing.
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '-0.02em',
              maxWidth: 680,
            }}
          >
            Creative direction for brands that need less &ldquo;what now?&rdquo; and more &ldquo;watch this.&rdquo;
          </div>
        </div>

        {/* Bottom: location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#00AA9F' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Manila / remote
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
