export async function getUnsplashImage(query: string): Promise<string> {
  // Cette fonction serait normalement appelée côté serveur avec unsplash_tool
  // Pour l'instant, nous retournons une URL placeholder
  const encodedQuery = encodeURIComponent(query);
  return `https://source.unsplash.com/800x600/?${encodedQuery}`;
}
