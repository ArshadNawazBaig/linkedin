import { bookmarks, fromPDF, toPDF } from "@/data";
import Card from "./components/global/card";
import Heading from "./components/global/Heading";
import Carousel from "./components/global/carousel";

export default function Home() {
  return (
    <div className="px-16 mt-8">
      <Heading className="mb-5">Your Bookmarks</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {bookmarks.map((bookmark, index) => (
          <div key={index}>
            <Card bookmark={bookmark} />
          </div>
        ))}
      </div>
      <Heading className="mb-5">Conver from PDF</Heading>
      <div className="-mb-1">
        <Carousel slides={fromPDF} />
      </div>
      <Heading className="mb-5">Conver from PDF</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {fromPDF.map((bookmark, index) => (
          <div key={index}>
            <Card bookmark={bookmark} />
          </div>
        ))}
      </div>
      <Heading className="mb-5">Conver to PDF</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {toPDF.map((bookmark, index) => (
          <div key={index}>
            <Card bookmark={bookmark} />
          </div>
        ))}
      </div>
    </div>
  );
}
