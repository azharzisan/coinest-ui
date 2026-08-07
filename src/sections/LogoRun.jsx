import LogoLoop from '@/components/ui/LogoLoop';
import React from 'react'

const LogoRun = () => {
    const techLogos = [
      {
        src: "/samsung.png",
        alt: "Company 1",
        href: "https://company1.com",
      },
      {
        src: "/nvidia.png",
        alt: "Company 2",
        href: "https://company2.com",
      },
      {
        src: "/intel.png",
        alt: "Company 3",
        href: "https://company3.com",
      },
      {
        src: "/google.png",
        alt: "Company 3",
        href: "https://company3.com",
      },
      {
        src: "/zoom.png",
        alt: "Company 3",
        href: "https://company3.com",
      },
    ];
  return (
    <>
      <div className='w-full py-5'>
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={70}
          gap={120}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </>
  );
}

export default LogoRun