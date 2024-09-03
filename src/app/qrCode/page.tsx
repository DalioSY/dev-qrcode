'use client';

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

export default function QrCode() {
  const [link, setLink] = React.useState<string>('');
  const inputLink = React.useRef<HTMLInputElement>(null);

  const createQrcode = () => {
    if (inputLink.current) {
      setLink(inputLink.current.value);
    }
  };

  return (
    <main className='h-screen flex flex-col items-center m-5'>
      <h1>Qr Code</h1>
      <div className='m-5 w-60 h-60 border'>
        {link && <QRCode value={link} className='w-60 h-60 p-4 border' />}
      </div>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>QR Code</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label typeof='name'>Link:</Label>
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
          <Button>Baixar</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
