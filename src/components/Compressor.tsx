import React from "react";

const Compressor = ({
  originalImage,
  compressedImage,
  originalSize,
  compressedSize,
  isCompressing,
}) => {
  return (
    <div
      id="compressor"
      className="flex flex-col items-center justify-center min-h-screen text-black-400 bg-secondary p-6"
    >
      <div className="bg-primary p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Original Image Card */}
          {originalImage && (
            <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
              <h3 className="text-lg font-medium text-center">
                Original Image
              </h3>
              <img
                src={originalImage}
                alt="Original"
                className="mt-4 mx-auto w-full h-auto rounded-lg shadow-sm"
              />
              <p className="text-center text-sm mt-2">
                Size: {originalSize.size} KB | Resolution: {originalSize.width}{" "}
                x {originalSize.height}
              </p>
            </div>
          )}

          {/* Compressed Image Card */}
          {compressedImage && (
            <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
              <h3 className="text-lg font-medium text-center">
                Compressed Image
              </h3>
              <img
                src={compressedImage}
                alt="Compressed"
                className="mt-4 mx-auto w-full h-auto rounded-lg shadow-sm"
              />
              <p className="text-center text-sm mt-2">
                Size: {compressedSize.size} KB | Resolution:{" "}
                {compressedSize.width} x {compressedSize.height}
              </p>
            </div>
          )}
        </div>

        {/* Download Button */}
        {compressedImage && (
          <div className="mt-10 text-center">
            <a
              href={compressedImage}
              download="compressed-image.jpg"
              className="bg-brand text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition duration-200"
            >
              Download Compressed Image
            </a>
          </div>
        )}

        {/* Loading Spinner */}
        {isCompressing && (
          <div className="mt-6 flex justify-center">
            <div className="loader border-t-4 border-b-4 border-blue-500 w-8 h-8 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compressor;
