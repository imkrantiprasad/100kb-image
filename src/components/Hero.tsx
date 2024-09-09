import Image from "next/image";
import React from "react";

const Hero = ({ setImageFile }: { setImageFile: any }) => {
  function handleImageUpload(event: any) {
    const imageFile = event.target.files[0];

    if (imageFile) {
      setImageFile(imageFile);
    }
  }

  return (
    <div className="md:container md:mx-auto mx-5 md:py-20 py-4">
      <div className="grid md:grid-cols-2 grid-cols-1 md:items-center gap-8">
        <div className="md:order-last">
          <Image
            src="/assets/hero.svg"
            alt="100kb-image hero"
            unoptimized
            priority
            width={600}
            height={334}
          />

        </div>
        <div className="md:ml-10">
          <h1 className="md:text-6xl text-4xl md:leading-[72px] font-semibold">
            Get any <br />
            image compressed <br />
            under <span className="text-brand">100kb </span>!
          </h1>
          <div className="mt-10">
            <label htmlFor="file-upload" className="sr-only">
              Upload an image
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="text-sm text-primary md:w-[300px] w-full file:mr-5 file:py-3 file:px-5 file:border-[1px] file:text-sm file:font-medium file:bg-brand file:text-black-400 hover:file:cursor-pointer hover:file:bg-black-400 hover:file:text-brand border border-brand"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
