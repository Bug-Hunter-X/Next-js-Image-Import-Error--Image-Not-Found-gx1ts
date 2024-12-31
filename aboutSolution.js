```javascript
// pages/aboutSolution.js

export default function About() {
  const imageExists = true; // Replace with your actual image existence check

  return (
    <div>
      <h1>About Page</h1>
      {imageExists ? (
        <img src='/existingImage.jpg' alt='Existing image' />
      ) : (
        <p>Image not found.</p>
      )}
    </div>
  );
}
```