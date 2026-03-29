import { ImageResponse } from 'next/og';

export const alt = 'Taylor Your Leadership Coaching - Guiding you through life\'s transitions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Use higher quality headshot image
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/Janice%20Headshot%202.jpeg?alt=media&token=93274d77-f97d-4a2e-92e0-0da2715a6ccd';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#1e3a5f',
        }}
      >
        {/* Left side - Photo */}
        <div
          style={{
            width: '45%',
            height: '100%',
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt="Janice Brown-Taylor"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
            }}
          />
        </div>

        {/* Right side - Text content */}
        <div
          style={{
            width: '55%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px 50px 40px 30px',
          }}
        >
          {/* Logo/Brand Name */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#c9a227',
                letterSpacing: '2px',
              }}
            >
              TAYLOR YOUR LEADERSHIP
            </span>
            <span
              style={{
                fontSize: '42px',
                fontWeight: 'bold',
                color: 'white',
                marginTop: '5px',
              }}
            >
              Coaching
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.4,
              marginTop: '20px',
            }}
          >
            Guiding you through life&apos;s transitions with professional coaching and support.
          </p>

          {/* Call to action hint */}
          <div
            style={{
              display: 'flex',
              marginTop: '30px',
            }}
          >
            <span
              style={{
                padding: '12px 20px',
                backgroundColor: '#c9a227',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1e3a5f',
              }}
            >
              Book a Free Consultation
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
