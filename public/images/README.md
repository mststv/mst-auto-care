# Replacing the demo images

Every image on the site is a clearly labelled "DEMO IMAGE" placeholder. To use real photos:

1. Put your photos in this folder (JPG or WebP).
   - Hero: about 2400 x 1350 px, landscape, car on the right side looks best (headline sits on the left).
   - Service cards and gallery: about 1600 x 1000 px, landscape.
   - Before/after pairs: shoot both photos from the same angle and distance so the slider lines up.
2. Open `src/lib/images.ts` and change the paths, for example
   `colorChange: "/images/services/color-change.jpg"`.
3. Add or remove gallery pairs in the `gallery` list. Give each new pair a title in
   `src/lib/content.ts` under `gallery.items` (English and Russian).

Real photos are automatically resized and served in modern formats by Next.js.
The "Demo images" notice in the gallery disappears once no `.svg` placeholders are left there.
