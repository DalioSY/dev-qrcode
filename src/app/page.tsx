'use client';
import { DarkMode } from '@/components/darkMode';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import * as React from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

export default function Home() {
  const [link, setLink] = React.useState<string>('');
  const [qrcodeLink, setQrcodeLink] = React.useState<string>('');
  const inputLink = React.useRef<HTMLInputElement>(null);
  const qrCodeRef = React.createRef<HTMLDivElement>();

  function handleGenerate(link: string) {
    if (!link) {
      alert('Digite o seu link');
    }

    QRCodeLink.toDataURL(
      link,
      {
        width: 300,
        margin: 3,
      },
      (err: Error | null, url: string) => {
        if (err) {
          console.error('Erro ao gerar QR Code', err);
          return;
        }
        setQrcodeLink(url);
      }
    );
  }

  function createQrcode() {
    if (inputLink.current) {
      setLink(inputLink.current.value);
      handleGenerate(inputLink.current.value);
    }
  }

  return (
    <main className='h-screen flex flex-col items-center justify-center m-5'>
      <div className='flex items-center justify-center gap-4'>
        <h1 className='text-2xl'>QR Code</h1>
        <DarkMode />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center m-5'>
        <div ref={qrCodeRef} className='w-60 h-60 border m-5'>
          {link && <QRCode value={link} className='w-60 h-60 border p-4' />}
        </div>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle>QR Code</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label typeof='link'>Link:</Label>
                  <Input
                    id='link'
                    placeholder='Digite o seu link'
                    ref={inputLink}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline' onClick={createQrcode}>
              Gerar QR Code
            </Button>
            <Button>
              <a href={qrcodeLink} download='qrcode.png'>
                Baixar QR Code
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
