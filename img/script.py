from PIL import Image
import os

for file in os.listdir():
    if file.endswith(".png"):
        im = Image.open(file)
        im.save(file[:-4] + ".webp", "webp")
