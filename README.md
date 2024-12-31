# Next.js Image Import Error: Image Not Found

This repository demonstrates a common error in Next.js applications where an attempt to import an image that does not exist in the `public` directory results in an error.  The solution involves proper image handling and error prevention.

## Bug Description

The `about.js` file attempts to import an image using the path `/non-existent.jpg`.  Since this image does not reside in the `public` directory, Next.js throws an error preventing the page from rendering correctly.

## Solution

The `aboutSolution.js` file offers a solution that includes error handling and a fallback mechanism to gracefully handle the absence of the image.  This prevents the application from crashing and ensures a smoother user experience.