import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 600,
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
              fontSize: '56px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px',
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
              fontSize: '24px',
              color: '#cbd5e1',
              marginBottom: '32px',
              lineHeight: '1.4',
              maxWidth: '700px',
            }}
          >
            Clean PRs in 72 hours—standardized errors, structured logging, +15% test coverage
          </p>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '12px 24px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              🔧 Errors
            </div>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '12px 24px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              📊 Logging
            </div>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '12px 24px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              🎯 Coverage
            </div>
          </div>
          
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '40px',
              fontSize: '20px',
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