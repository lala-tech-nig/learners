import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Learners - Master Any Concept';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Background Patterns */}
                <div
                    style={{
                        position: 'absolute',
                        top: -50,
                        right: -50,
                        width: 300,
                        height: 300,
                        background: '#fff0eb', // Light orange
                        borderRadius: '50%',
                        opacity: 0.5,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: -100,
                        left: -50,
                        width: 400,
                        height: 400,
                        background: '#f3f4f6', // Light gray
                        borderRadius: '50%',
                        opacity: 0.5,
                    }}
                />

                {/* Brand Content */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                    zIndex: 10
                }}>
                    <div style={{
                        width: 80,
                        height: 80,
                        background: '#ff6b35',
                        borderRadius: 16,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: 48,
                        fontWeight: 'bold',
                        marginRight: 24,
                        boxShadow: '0 10px 25px rgba(255, 107, 53, 0.3)'
                    }}>L</div>
                    <div style={{ fontSize: 80, fontWeight: 'bold', color: '#0a0a0a', letterSpacing: '-0.03em' }}>Learners</div>
                </div>

                <div style={{
                    fontSize: 32,
                    color: '#4b5563',
                    marginTop: 10,
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    zIndex: 10
                }}>
                    Master Any Concept. 1-on-1 Mentorship.
                </div>

                {/* Decorative elements */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: 12,
                    background: 'linear-gradient(90deg, #ff6b35 0%, #ff8c61 100%)'
                }} />
            </div>
        ),
        {
            ...size,
        }
    );
}
