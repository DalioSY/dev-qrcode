import React from 'react';

type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
type CrossOrigin = 'anonymous' | 'use-credentials' | '' | undefined;
type ImageSettings = {
  src: string;
  height: number;
  width: number;
  excavate: boolean;
  x?: number;
  y?: number;
  opacity?: number;
  crossOrigin?: CrossOrigin;
};
type QRProps = {
  value: string;
  size?: number;
  level?: ErrorCorrectionLevel;
  bgColor?: string;
  fgColor?: string;
  includeMargin?: boolean;
  marginSize?: number;
  title?: string;
  minVersion?: number;
  imageSettings?: ImageSettings;
};
declare const QRCodeCanvas: React.ForwardRefExoticComponent<
  QRProps &
    React.CanvasHTMLAttributes<HTMLCanvasElement> &
    React.RefAttributes<HTMLCanvasElement>
>;
declare const QRCodeSVG: React.ForwardRefExoticComponent<
  QRProps &
    React.SVGAttributes<SVGSVGElement> &
    React.RefAttributes<SVGSVGElement>
>;

export { QRCodeCanvas, QRCodeSVG };
