
/**
 * Native Speech Synthesis Service
 * Provides offline-capable text-to-speech using browser built-in APIs.
 */

export const speak = (text: string) => {
  if (!('speechSynthesis' in window)) {
    console.warn("Speech synthesis not supported in this browser.");
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Try to find a high-quality English voice
  const voices = window.speechSynthesis.getVoices();
  
  // Prefer English (UK or US) voices
  const englishVoice = voices.find(voice => 
    voice.lang.includes('en-GB') || voice.lang.includes('en-US')
  ) || voices.find(voice => voice.lang.startsWith('en'));

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  utterance.lang = 'en-GB';
  utterance.rate = 0.9; // Slightly slower for children to hear clearly
  utterance.pitch = 1.1; // Friendly tone

  window.speechSynthesis.speak(utterance);
};

// Ensure voices are loaded (some browsers load them asynchronously)
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
}
