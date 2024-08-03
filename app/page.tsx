import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>សួស្តីកម្ពុជា</p>
      <p
        className={`text-2xl text-center font-poppins`}
      >
        Poppin This is Poppins Font from Google
      </p>
      <p className="font-khmer" >នេះជាម៉ូតអក្សរខ្មែរមួយមកពី Google</p>
    </main>
  );
}
