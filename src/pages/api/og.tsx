/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from '@vercel/og';
import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

const satoshiBoldFont = fetch(
  new URL('../../assets/fonts/Satoshi-Bold.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

const satoshiMediumFont = fetch(
  new URL('../../assets/fonts/Satoshi-Medium.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

const faviconUrl =
  'https://ik.imagekit.io/up2dul/tr:w-100,h-100/up2dul-favicon.png';

export default async function handler(req: NextRequest) {
  const boldFontData = await satoshiBoldFont;
  const mediumFontData = await satoshiMediumFont;

  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : "Abdul malik's personal website";

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            padding: '150px 80px 50px',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundImage:
              'linear-gradient(to right bottom, #0D1117, #263449)',
            fontFamily: 'Satoshi',
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              backgroundImage: 'linear-gradient(90deg, #83DDFF, #48C7FF)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {title}
          </div>

          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                fontSize: 32,
                fontWeight: 500,
                color: '#F5F7F9',
              }}
            >
              <div>🌐 up2dul.com</div>
              <div>🧩 Next.js • TailwindCSS • Vercel</div>
            </div>

            <img width='78' height='78' src={faviconUrl} alt='icon' />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Satoshi',
            data: boldFontData,
            weight: 700,
            style: 'normal',
          },
          {
            name: 'Satoshi',
            data: mediumFontData,
            weight: 500,
            style: 'normal',
          },
        ],
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    }
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
