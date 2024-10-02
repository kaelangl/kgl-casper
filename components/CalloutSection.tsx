"use client";

export default function CalloutSection() {
  // Pulled SVG files from the site
  const callouts = [
    {
      icon: `<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.32236 15.7817C1.32236 15.2462 1.75651 14.812 2.29205 14.812L2.28236 14.7975L5.19145 14.3126C5.38061 14.2979 5.55565 14.2069 5.6763 14.0605L9.0363 8.78049C9.31428 8.36756 9.77973 8.12029 10.2775 8.1211H25.4242C26.2516 8.1211 26.9224 8.79185 26.9224 9.61928V13.2847H29.2108C29.4572 13.2847 29.6569 13.4844 29.6569 13.7308C29.6569 13.9771 29.4572 14.1769 29.2108 14.1769H26.9272V17.6193H27.383C27.6041 17.652 27.7679 17.8418 27.7679 18.0653C27.7679 18.2889 27.6041 18.4787 27.383 18.5114H23.0484C22.8021 18.5114 22.6024 18.3117 22.6024 18.0653C22.6024 17.819 22.8021 17.6193 23.0484 17.6193H26.0545V14.1478H18.6848C18.4384 14.1478 18.2387 13.9481 18.2387 13.7017C18.2387 13.4553 18.4384 13.2556 18.6848 13.2556H26.0351V9.59988C26.0351 9.26517 25.7637 8.99382 25.429 8.99382H10.2872C10.0945 8.99531 9.91423 9.08906 9.80236 9.24594L6.43751 14.5453C6.14405 14.9329 5.70002 15.1778 5.21569 15.2193L2.3066 15.7041C2.26211 15.7065 2.22659 15.7421 2.22418 15.7866L2.03024 21.7647C2.03265 21.8092 2.06818 21.8447 2.11266 21.8472H5.5066C5.70916 20.6204 6.76987 19.7204 8.01327 19.7204C9.25667 19.7204 10.3174 20.6204 10.5199 21.8472H17.909C18.1116 20.6204 19.1723 19.7204 20.4157 19.7204C21.6591 19.7204 22.7198 20.6204 22.9224 21.8472H27.063C27.3093 21.8472 27.509 22.0469 27.509 22.2932C27.509 22.5396 27.3093 22.7393 27.063 22.7393H22.9078C22.6768 23.9372 21.6284 24.8027 20.4084 24.8027C19.1885 24.8027 18.1401 23.9372 17.909 22.7393H10.4957C10.2699 23.9431 9.21871 24.8154 7.99387 24.8154C6.76904 24.8154 5.71788 23.9431 5.49205 22.7393H2.09811C1.56257 22.7393 1.12842 22.3051 1.12842 21.7696L1.32236 15.7817Z" fill="#1E306E"></path></svg>`,
      text: "Free, no-contact delivery*",
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.33337 15.9999C5.3414 21.922 10.1459 26.7178 16.0679 26.7151C21.2376 26.7151 23.7115 23.4484 23.9626 23.1168C23.9712 23.1054 23.9773 23.0975 23.9806 23.0933C24.0858 22.9564 24.1026 22.7713 24.0237 22.6178C23.9449 22.4643 23.7846 22.37 23.6122 22.3757C19.7339 22.3899 16.2103 20.1209 14.6185 16.5843C13.0268 13.0477 13.6649 8.90561 16.2473 6.01207C16.3629 5.87738 16.3877 5.68698 16.3103 5.52722C16.2321 5.35668 16.0495 5.25944 15.8643 5.28964C15.7625 5.29934 5.33337 6.57449 5.33337 15.9999ZM6.24489 15.9999C6.24489 9.06176 12.2813 6.95752 14.8606 6.35146L14.8558 6.3757C12.6526 9.50891 12.2886 13.5796 13.9008 17.054C15.513 20.5284 18.8565 22.8787 22.6716 23.2193C20.9065 24.9345 18.5286 25.8721 16.0679 25.823C10.6472 25.8123 6.25556 21.4206 6.24489 15.9999Z" fill="#1E306E"></path></svg>`,
      text: "100-night risk-free trial*",
    },
    {
      icon: `<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.2908 8.81948H24.8072V7.6413C24.8072 7.10575 24.373 6.6716 23.8375 6.6716H21.6605V5.47887C21.6605 5.08792 21.3436 4.771 20.9526 4.771H19.3817C18.9908 4.771 18.6739 5.08792 18.6739 5.47887V6.6716H12.2254V5.47887C12.2202 5.09463 11.9114 4.78365 11.5272 4.77584H9.94659C9.55564 4.77584 9.23871 5.09277 9.23871 5.48372V6.6716H7.06174C6.52619 6.6716 6.09204 7.10575 6.09204 7.6413V23.2728C6.09204 23.8084 6.52619 24.2425 7.06174 24.2425H8.13325V25.988C8.13325 26.5235 8.5674 26.9577 9.10295 26.9577H26.2908C26.8264 26.9577 27.2605 26.5235 27.2605 25.988V9.78918C27.2605 9.25363 26.8264 8.81948 26.2908 8.81948Z" fill="#1E306E"></path></svg>`,
      text: "10-year limited warranty*",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-md shadow-sm mb-6">
      <div className="flex justify-around">
        {callouts.map((callout, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div
              dangerouslySetInnerHTML={{ __html: callout.icon }}
              className="w-8 h-8 mb-2"
            />
            <p className="text-sm text-gray-700">{callout.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
