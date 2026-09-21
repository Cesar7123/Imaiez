export default function manifest() {
  return {
    name: 'Imai Photo',
    short_name: 'Imai Photo',
    description: 'Fotografía y cine editorial de Imai Photo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf7f3',
    theme_color: '#176b6b',
    icons: [{ src: '/images/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
