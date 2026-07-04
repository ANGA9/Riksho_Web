from PIL import Image
import numpy as np

def remove_white(input_path, output_path, threshold=240):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    r, g, b, a = data.T
    
    # Replace areas close to pure white with transparent
    white_areas = (r >= threshold) & (g >= threshold) & (b >= threshold)
    data[..., :-1][white_areas.T] = (0, 0, 0)
    data[..., -1][white_areas.T] = 0
    
    Image.fromarray(data).save(output_path)

print("Processing phone mockup...")
remove_white(r"C:\Users\shaws\.gemini\antigravity-ide\brain\faf86e97-b5fd-48db-ba6a-3a0fbc5168e3\phone_mockup_1783068214546.png", r"c:\Users\shaws\Riksho\riksho_web\public\images\phone_mockup_transparent.png")
print("Processing abstract shape...")
remove_white(r"C:\Users\shaws\.gemini\antigravity-ide\brain\faf86e97-b5fd-48db-ba6a-3a0fbc5168e3\abstract_route_shape_1783068223609.png", r"c:\Users\shaws\Riksho\riksho_web\public\images\abstract_route_shape_transparent.png")
print("Done!")
