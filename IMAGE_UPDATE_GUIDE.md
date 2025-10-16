# Image Update Guide for Sanitahairbraiding

This guide outlines all the images that need to be updated to complete the Sanitahairbraiding website transformation.

## Required Images

### 1. Logo Images
**Current:** `/public/images/logo.png`
**Purpose:** Used in Header and Footer components
**Requirements:** 
- High resolution (at least 200x200px)
- Transparent background preferred
- Should represent Sanitahairbraiding branding
- Formats: PNG, SVG, or JPG

### 2. Hero Background Image
**Current:** `/public/images/hero-braids.jpg` (referenced in Hero.tsx)
**Purpose:** Background image for the main hero section
**Requirements:**
- High resolution (1920x1080px or larger)
- Professional hair braiding imagery
- Should complement the purple/pink color scheme
- Formats: JPG, WebP, or PNG

### 3. About Section Image
**Current:** `/public/images/about-niki.png`
**Purpose:** About section image
**Requirements:**
- Portrait orientation (4:5 aspect ratio)
- Professional salon or stylist image
- High quality and well-lit
- Formats: PNG or JPG

### 4. Social Media Preview Image
**Current:** `/public/images/og-image.jpg` (referenced in layout.tsx)
**Purpose:** Open Graph and Twitter card preview image
**Requirements:**
- 1200x630px (Facebook/Open Graph standard)
- Professional branding image
- Should include Sanitahairbraiding logo or text
- Formats: JPG or PNG

### 5. Gallery Images
**Current:** Multiple gallery images referenced in data.ts
**Purpose:** Service showcase gallery
**Required Images:**
- `/public/images/gallery/box-braids-1.jpg`
- `/public/images/gallery/box-braids-2.jpg`
- `/public/images/gallery/boho-braids-1.jpg`
- `/public/images/gallery/cornrows-1.jpg`
- `/public/images/gallery/faux-locs-1.jpg`
- `/public/images/gallery/goddess-braids-1.jpg`
- `/public/images/gallery/goddess-braids-2.jpg`
- `/public/images/gallery/twist-braids-1.jpg`

**Requirements:**
- High resolution (at least 800x600px)
- Professional quality photos
- Showcase different braiding styles
- Consistent lighting and styling
- Formats: JPG or WebP

## Image Optimization Tips

1. **Compress images** for web use while maintaining quality
2. **Use WebP format** when possible for better performance
3. **Create multiple sizes** for responsive design
4. **Add proper alt text** for accessibility
5. **Ensure consistent branding** across all images

## File Structure
```
public/
├── images/
│   ├── logo.png (or .svg)
│   ├── hero-braids.jpg
│   ├── about-niki.png (rename to about-sanita.png)
│   ├── og-image.jpg
│   └── gallery/
│       ├── box-braids-1.jpg
│       ├── box-braids-2.jpg
│       ├── boho-braids-1.jpg
│       ├── cornrows-1.jpg
│       ├── faux-locs-1.jpg
│       ├── goddess-braids-1.jpg
│       ├── goddess-braids-2.jpg
│       └── twist-braids-1.jpg
```

## Next Steps

1. **Create or source** all required images
2. **Optimize** images for web use
3. **Replace** existing images in the `/public/images/` directory
4. **Test** the website to ensure all images load correctly
5. **Update** any image references if filenames change

## Notes

- The current images are placeholders from the original Niki's African Hair Braiding website
- All image paths are already configured in the codebase
- Simply replace the files with the same names to update the website
- Consider hiring a professional photographer for the gallery images
