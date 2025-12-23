Instructions pour générer les variantes d'icônes à partir de `LOGO PRIORITÉS RDC.png`.

Prerequis:
- ImageMagick (macOS: `brew install imagemagick`)

Commandes utiles (exécuter depuis la racine du projet):

```bash
mkdir -p assets
magick convert "LOGO PRIORITÉS RDC.png" -resize 512x512 assets/logo-priorites-rdc-512.png
magick convert "LOGO PRIORITÉS RDC.png" -resize 192x192 assets/logo-priorites-rdc-192.png
magick convert "LOGO PRIORITÉS RDC.png" -resize 32x32   assets/logo-priorites-rdc-32.png
magick convert "LOGO PRIORITÉS RDC.png" -resize 16x16   assets/logo-priorites-rdc-16.png
magick convert "LOGO PRIORITÉS RDC.png" -resize 180x180 assets/apple-touch-icon.png
# maskable (512) transparent background
magick convert "LOGO PRIORITÉS RDC.png" -resize 512x512 -background none -gravity center -extent 512x512 assets/logo-priorites-rdc-maskable.png
# créer un favicon.ico contenant plusieurs tailles
magick convert assets/logo-priorites-rdc-16.png assets/logo-priorites-rdc-32.png assets/logo-priorites-rdc-512.png -colors 256 assets/favicon.ico
```

Notes:
- Si vous préférez vectoriser proprement, ouvrez `LOGO PRIORITÉS RDC.png` dans Inkscape/Illustrator et exportez en SVG optimisé sous `assets/logo-priorites-rdc.svg` (en gardant les formes en vecteur plutôt que d'embedder le PNG).
