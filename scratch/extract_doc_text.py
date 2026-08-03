import re
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.in_script_or_style = False

    def handle_starttag(self, tag, attrs):
        if tag in ['script', 'style']:
            self.in_script_or_style = True

    def handle_endtag(self, tag):
        if tag in ['script', 'style']:
            self.in_script_or_style = False
        if tag in ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'br']:
            self.text.append('\n')

    def handle_data(self, data):
        if not self.in_script_or_style:
            self.text.append(data)

    def get_text(self):
        return "".join(self.text)

# Read the HTML content
path = r"C:\Users\ISHAAN\.gemini\antigravity-ide\brain\d42bdb32-0458-4e38-9703-2cb2a82df434\.system_generated\steps\214\content.md"
with open(path, "r", encoding="utf-8") as f:
    html_content = f.read()

extractor = TextExtractor()
extractor.feed(html_content)
text = extractor.get_text()

# Clean up multiple newlines
text = re.sub(r'\n+', '\n', text)
text = re.sub(r'[ \t]+', ' ', text)

# Write out clean text
out_path = r"C:\Users\ISHAAN\.gemini\antigravity-ide\brain\d42bdb32-0458-4e38-9703-2cb2a82df434\blog2_clean.txt"
with open(out_path, "w", encoding="utf-8") as f:
    f.write(text)

print("Parsed successfully!")
