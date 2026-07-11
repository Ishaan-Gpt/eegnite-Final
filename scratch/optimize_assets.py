import os
from PIL import Image

# Define the images we want to optimize (relative to the 'public' directory)
IMAGES_TO_OPTIMIZE = [
    "ppc-blog.jpg",
    "rajeev.png",
    "ashwani.png",
    "logos/eshaarya-logo.png",
    "growth_strategy.png",
    "seo_analytics.png",
    "services/email.png",
    "services/ecommerce.png",
    "services/ppc.png",
    "services/seo.png",
    "services/seo-process.png",
    "services/seo-hero.png",
    "anish-founder.png"
]

PUBLIC_DIR = "public"
SRC_DIR = "src"

def optimize_images():
    replacements = {}
    print("--- Phase 1: Converting images to WebP ---")
    
    for relative_path in IMAGES_TO_OPTIMIZE:
        src_path = os.path.join(PUBLIC_DIR, relative_path)
        if not os.path.exists(src_path):
            print(f"Skipping {relative_path}: file does not exist in 'public'")
            continue
            
        base_no_ext, ext = os.path.splitext(relative_path)
        dest_rel_path = base_no_ext + ".webp"
        dest_path = os.path.join(PUBLIC_DIR, dest_rel_path)
        
        try:
            with Image.open(src_path) as img:
                # Keep original resolution, save to WebP with 80% quality
                img.save(dest_path, "WEBP", quality=80)
                
            src_size = os.path.getsize(src_path) / 1024
            dest_size = os.path.getsize(dest_path) / 1024
            print(f"Success: {relative_path} ({src_size:.1f} KB) -> {dest_rel_path} ({dest_size:.1f} KB) - Saved: {src_size - dest_size:.1f} KB")
            
            # Record the replacement mapping (e.g. "ppc-blog.jpg" -> "ppc-blog.webp")
            # We map just the filename part to be safe
            old_filename = os.path.basename(relative_path)
            new_filename = os.path.basename(dest_rel_path)
            replacements[old_filename] = new_filename
            
            # Delete original file
            os.remove(src_path)
            print(f"Deleted original file: {src_path}")
            
        except Exception as e:
            print(f"Error converting {relative_path}: {e}")

    if not replacements:
        print("No files converted. Exiting.")
        return

    print("\n--- Phase 2: Updating references in source code ---")
    for root, dirs, files in os.walk(SRC_DIR):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.css', '.html')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    modified = False
                    new_content = content
                    for old_name, new_name in replacements.items():
                        # Replace exact matches of old filename
                        if old_name in new_content:
                            new_content = new_content.replace(old_name, new_name)
                            print(f"Replacing reference '{old_name}' -> '{new_name}' in {file_path}")
                            modified = True
                            
                    if modified:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                except Exception as e:
                    print(f"Error updating file {file_path}: {e}")

    print("\nOptimization completed successfully!")

if __name__ == "__main__":
    optimize_images()
