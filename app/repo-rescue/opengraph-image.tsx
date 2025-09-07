import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(45deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            maxWidth: '1000px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '20px',
              lineHeight: '1.1',
            }}
          >
            AI Code{' '}
            <span
              style={{
                background: 'linear-gradient(45deg, #a855f7, #ec4899)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Modernization
            </span>{' '}
            Sprint
          </h1>
          
          <p
            style={{
              fontSize: '28px',
              color: '#cbd5e1',
              marginBottom: '40px',
              lineHeight: '1.4',
              maxWidth: '800px',
            }}
          >
            Clean PRs in 72 hours—standardized error codes, structured logging, and +15% targeted test coverage
          </p>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '15px 30px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              🔧 Standardized Errors
            </div>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '15px 30px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              📊 Structured Logging
            </div>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '15px 30px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              🎯 +15% Coverage
            </div>
          </div>
          
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#a855f7',
            }}
          >
            Soul7OS
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}