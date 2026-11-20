"""Make WebP copies of every JPG/PNG in public/images/work at 640px and 1280px wide.

Run after adding photos:  python3 scripts/optimize-images.py
Output: public/images/work/<name>-640.webp and <name>-1280.webp (smaller originals are not upscaled).
"""
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parent.parent / "public" / "images" / "work"
for src in sorted(root.glob("*.jp*g")) + sorted(root.glob("*.png")):
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    for w in (640, 1280):
        out = src.with_name(f"{src.stem}-{w}.webp")
        copy = im.copy()
        if copy.width > w:
            copy = copy.resize((w, round(copy.height * w / copy.width)), Image.LANCZOS)
        copy.save(out, "WEBP", quality=74, method=6)
        print(f"{out.name}: {copy.width}x{copy.height}, {out.stat().st_size // 1024} KB")
