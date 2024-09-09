"use client";

import Compressor from "@/components/Compressor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import imageCompression from "browser-image-compression";
import { useState, useEffect } from "react";

export default function Home() {
  const [imageFile, setImageFile] = useState<any>(null);
  const [originalImage, setOriginalImage] = useState<any>(null);
  const [compressedImage, setCompressedImage] = useState<any>(null);
  const [originalSize, setOriginalSize] = useState<{
    size: number;
    width: number;
    height: number;
  }>({
    size: 0,
    width: 0,
    height: 0,
  });
  const [compressedSize, setCompressedSize] = useState<{
    size: number;
    width: number;
    height: number;
  }>({
    size: 0,
    width: 0,
    height: 0,
  });
  const [isCompressing, setIsCompressing] = useState(false);

  useEffect(() => {
    const compressedImage = async () => {
      setOriginalSize({
        size: parseFloat((imageFile.size / 1024).toFixed(2)),
        width: 0,
        height: 0,
      });

      const originalImageObject = new Image();
      originalImageObject.src = URL.createObjectURL(imageFile);
      originalImageObject.onload = () => {
        setOriginalSize((prev: any) => ({
          ...prev,
          width: originalImageObject.width,
          height: originalImageObject.height,
        }));
      };

      setOriginalImage(URL.createObjectURL(imageFile));

      // Compression options
      const options = {
        maxSizeMB: 0.1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        setIsCompressing(true);

        const compressedFile = await imageCompression(imageFile, options);

        // Get compressed file size
        setCompressedSize({
          size: parseFloat((compressedFile.size / 1024).toFixed(2)), // Convert bytes to KB
          width: 0,
          height: 0,
        });

        // Create an Image object to extract dimensions for the compressed image
        const compressedImageObject = new Image();
        compressedImageObject.src = URL.createObjectURL(compressedFile);
        compressedImageObject.onload = () => {
          setCompressedSize((prev) => ({
            ...prev,
            width: compressedImageObject.width,
            height: compressedImageObject.height,
          }));
        };

        // Scroll to the #compressor div after the image upload
        const element = document.getElementById("compressor");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error("Element with ID 'compressor' not found.");
        }

        // Set the compressed image URL
        const compressedImageUrl = URL.createObjectURL(compressedFile);
        setCompressedImage(compressedImageUrl);
      } catch (error) {
        console.log(error);
      } finally {
        setIsCompressing(false);
      }
    };

    if (imageFile != null) {
      compressedImage();
    }
  }, [imageFile]);

  return (
    <div className="min-h-screen bg-black-400">
      <Header />
      <Hero setImageFile={setImageFile} />
      {originalImage != null ? (
        <Compressor
          originalImage={originalImage}
          compressedImage={compressedImage}
          originalSize={originalSize}
          compressedSize={compressedSize}
          isCompressing={isCompressing}
        />
      ) : (
        ""
      )}
    </div>
  );
}
