import localFont from 'next/font/local';

const PretendardFont = localFont({
  src: './fonts/PretendardVariable.ttf',
  variable: '--Pretendard-Variable',
});

const ImFellGreatPrimerFont = localFont({
  src: './fonts/ImFellGreatPrimer.ttf',
  variable: '--Im-Fell-Great-Primer',
});

const StoopidMarkersFont = localFont({
  src: './fonts/StoopidMarkers.ttf',
  variable: '--Stoopid-Markers',
});

const font = {
  Pretendard: PretendardFont.style.fontFamily,
  ImFellGreatPrimer: ImFellGreatPrimerFont.style.fontFamily,
  StoopidMarkers: StoopidMarkersFont.style.fontFamily,
} as const;

export default font;
