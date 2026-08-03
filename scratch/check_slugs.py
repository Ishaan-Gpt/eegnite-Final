import re
import os

filepath = r"c:\Users\ISHAAN\New folder (2)\src\app\blog\[slug]\page.tsx"
if os.path.exists(filepath):
    content = open(filepath, encoding="utf-8").read()
    # Find all occurences of "slug-name": {
    # and print details of the HTML tag classes
    slugs = ['why-your-business-struggles-with-online-visibility', 
             '8-reasons-why-your-website-traffic-isnt-generating-leads', 
             'top-10-seo-agencies-kolkata-2026', 
             'local-seo-strategies-2026-google-maps', 
             'how-to-get-content-cited-in-ai-search-results-2026', 
             'how-to-choose-the-right-seo-agency-in-india-2026', 
             'ppc-agency-india-maximize-roi']
    
    for i in range(len(slugs)):
        start_slug = slugs[i]
        start_idx = content.find(f'"{start_slug}":')
        if start_idx == -1:
            start_idx = content.find(f"'{start_slug}':")
        
        if start_idx != -1:
            # Find content between this slug and next slug or end of dictionary
            end_idx = len(content)
            if i + 1 < len(slugs):
                next_slug = slugs[i+1]
                end_idx = content.find(f'"{next_slug}":')
                if end_idx == -1:
                    end_idx = content.find(f"'{next_slug}':")
            
            subcontent = content[start_idx:end_idx]
            content_match = re.search(r'content:\s*`([\s\S]+?)`', subcontent)
            if content_match:
                html = content_match.group(1)
                p_classes = re.findall(r'<p(?:\s+class="([^"]*)")?', html)
                h2_classes = re.findall(r'<h2(?:\s+class="([^"]*)")?', html)
                h3_classes = re.findall(r'<h3(?:\s+class="([^"]*)")?', html)
                print(f"Slug: {start_slug}")
                # We filter out None/empty values to see actual classes
                p_unique = {c for c in p_classes if c}
                h2_unique = {c for c in h2_classes if c}
                h3_unique = {c for c in h3_classes if c}
                print(f"  P total: {len(p_classes)}, Unique classes: {p_unique}")
                print(f"  H2 total: {len(h2_classes)}, Unique classes: {h2_unique}")
                print(f"  H3 total: {len(h3_classes)}, Unique classes: {h3_unique}")
            else:
                print(f"Slug: {start_slug} - content template literal not found")
        else:
            print(f"Slug: {start_slug} - not found in file")
else:
    print("File not found")
