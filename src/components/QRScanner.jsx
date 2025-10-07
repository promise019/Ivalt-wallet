import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Button from "./ui/Button";

export default function QRScanner() {
  const [scannedData, setScannedData] = useState("");
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,               // frames per second
      qrbox: { width: 250, height: 250 }, // scanning box size
    });

    scanner.render(
      (decodedText) => {
        setScannedData(decodedText);
        scanner.clear(); // stop scanning after success
      },
      (error) => {
        console.warn("Scan error:", error);
      }
    );

    scannerRef.current = scanner;

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div id="reader" className="flex flex-col items-center justify-center min-h-screen ">
        <Button className={'text-white'}>X</Button>
      {/* {!scannedData ? (
        <div id="reader" className="w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg" />
      ) : ( */}
        <div className="bg-white rounded-lg p-4 shadow-lg text-center">
          <h2 className="text-lg font-semibold mb-2">QR Code Scanned</h2>
          <p className="text-sm break-all text-gray-600">{scannedData}</p>
        </div>
      {/* )} */}
    </div>
  );
}
