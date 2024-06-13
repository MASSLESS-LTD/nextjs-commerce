export default function LogoIcon(props: React.ComponentProps<'img'>) {
  const src = '/logo-combined-low-res.png';
  const alt = 'Ninja Shanti Logos';
  return <img src={src} alt={alt} />;
}
