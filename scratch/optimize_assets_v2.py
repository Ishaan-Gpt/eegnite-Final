import os
from PIL import Image

PUBLIC_DIR = "public"
SRC_DIR = "src"

def optimize_all_assets():
    replacements = {}
    print("--- Phase 1: Scanning and converting images in public/ ---")
    
    for root, dirs, files in os.walk(PUBLIC_DIR):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                src_path = os.path.join(root, file)
                src_size_bytes = os.path.getsize(src_path)
                
                # Check if file is larger than 100 KB
                if src_size_bytes > 100 * 1024:
                    base_no_ext, ext = os.path.splitext(file)
                    dest_filename = base_no_ext + ".webp"
                    dest_path = os.path.join(root, dest_filename)
                    
                    try:
                        with Image.open(src_path) as img:
                            # Convert RGBA to RGB only if necessary (WebP supports both, so no conversion needed)
                            img.save(dest_path, "WEBP", quality=80)
                            
                        dest_size_bytes = os.path.getsize(dest_path)
                        src_size_kb = src_size_bytes / 1024
                        dest_size_kb = dest_size_bytes / 1024
                        
                        print(f"Success: {src_path} ({src_size_kb:.1f} KB) -> {dest_filename} ({dest_size_kb:.1f} KB) - Saved: {src_size_kb - dest_size_kb:.1f} KB")
                        
                        # Store mapping
                        replacements[file] = dest_filename
                        
                        # Remove original file
                        os.remove(src_path)
                        print(f"Deleted original file: {src_path}")
                        
                    except Exception as e:
                        print(f"Error converting {src_path}: {e}")

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
                        if old_name in new_content:
                            new_content = new_content.replace(old_name, new_name)
                            print(f"Replacing reference '{old_name}' -> '{new_name}' in {file_path}")
                            modified = True
                            
                    if modified:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                except Exception as e:
                    print(f"Error updating file {file_path}: {e}")

    print("\nAll assets optimized successfully!")

if __name__ == "__main__":
    optimize_all_assets()
