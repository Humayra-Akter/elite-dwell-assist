import React, { useEffect } from "react";

const LanguageSwitcher = () => {
  useEffect(() => {
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'bn,en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
      
      // Get the iframe and set its width and height
      // const translateElementIframe = document.querySelector('.goog-te-gadget-simple');
      // if (translateElementIframe) {
      //   translateElementIframe.style.width = '50px'; // Set your desired width
      //   translateElementIframe.style.height = '90px'; // Set your desired height
      // }
      // const translateElementIframe2 = document.querySelector('.goog-te-gadget-icon');
      // if (translateElementIframe2) {
      //   translateElementIframe2.style.width = '0px'; // Set your desired width
      //   translateElementIframe2.style.height = '0px'; // Set your desired height
      // }
      // const translateElementIframe3 = document.querySelector('.VIpgJd-ZVi9od-xl07Ob-lTBxed');
      // if (translateElementIframe3) {
      //   translateElementIframe3.style.width = '100%'; // Set your desired width
      //   translateElementIframe3.style.height = '100%'; // Set your desired height
      // }
      // VIpgJd-ZVi9od-xl07Ob-lTBxed
      // class="goog-te-gadget-icon"
    }
    
    googleTranslateElementInit();
  }, []);

  return <button id="google_translate_element" className=""></button>;
};

export default LanguageSwitcher;