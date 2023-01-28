import Quagga from "client/src/Scanner/Quagga";

export default function Scanner2() {
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#interactive"),
      },
      decoder: {
        readers: ["code_128_reader"],
      },
    },
    function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    }
  );

  return (
    <>
      <div id="interactive" className="viewport" />
    </>
  );
}
