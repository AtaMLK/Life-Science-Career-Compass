"""Permanently remove private identity text from the public IHK certificate.

This edits the actual pixels, not a CSS overlay, and rewrites the PNG without
carrying metadata. Keep the unredacted document out of public web directories.
"""
from pathlib import Path
from PIL import Image, ImageDraw

PUBLIC_CERTIFICATE = Path("public/assets/farzaneh/certificate-public.png")

def main() -> None:
    with Image.open(PUBLIC_CERTIFICATE) as source:
        certificate = source.convert("RGB")
    width, height = certificate.size
    # Original source front page: the "geb. am ..." line is directly below
    # the person's name. An opaque background permanently erases its pixels.
    # The rest of the issued qualification, date and signature remain intact.
    box = (
        round(width * 0.080),
        round(height * 0.246),
        round(width * 0.605),
        round(height * 0.278),
    )
    ImageDraw.Draw(certificate).rectangle(box, fill="white")
    certificate.save(PUBLIC_CERTIFICATE, format="PNG", optimize=True)
    print(f"Privacy-redacted certificate: {PUBLIC_CERTIFICATE} ({width}x{height})")

if __name__ == "__main__":
    main()
