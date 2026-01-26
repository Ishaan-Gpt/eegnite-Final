import os

def list_files(startpath):
    output = []
    for root, dirs, files in os.walk(startpath):
        level = root.replace(startpath, '').count(os.sep)
        indent = ' ' * 4 * (level)
        output.append(f'{indent}{os.path.basename(root)}/')
        subindent = ' ' * 4 * (level + 1)
        for f in files:
            output.append(f'{subindent}{f}')
    return "\n".join(output)

if __name__ == "__main__":
    out_dir = r"c:\Users\ISHAAN\New folder (2)\out"
    if os.path.exists(out_dir):
        structure = list_files(out_dir)
        with open("out_structure.txt", "w", encoding="utf-8") as f:
            f.write(structure)
        print("Structure saved to out_structure.txt")
    else:
        print("out directory not found")
