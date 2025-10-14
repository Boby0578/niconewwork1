let voices: SpeechSynthesisVoice[] = [];

// Function to load and cache French voices
const loadVoices = () => {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    voices = window.speechSynthesis.getVoices().filter(v => v.lang === 'fr-FR');
  }
};

// Load voices when they are ready
if (typeof window !== 'undefined' && window.speechSynthesis) {
  if (window.speechSynthesis.getVoices().length) {
    loadVoices();
  } else {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

/**
 * Speaks a given text in French using the best available "pleasant" female voice.
 * @param text The text to speak.
 */
export const speak = (text: string) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    console.error("La synthèse vocale n'est pas supportée par ce navigateur.");
    return;
  }

  // Ensure voices are loaded if they weren't ready initially
  if (!voices.length) {
    loadVoices();
  }

  // Cancel any ongoing speech to prevent overlap
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';

  // --- Voice Selection Logic ---
  // Define a priority list to find the best voice
  const voicePriorities = [
    (v: SpeechSynthesisVoice) => v.name.includes("Google") && !v.localService, // Prioritize Google's high-quality cloud voice
    (v: SpeechSynthesisVoice) => v.name.includes("Julie"), // Microsoft's voice
    (v: SpeechSynthesisVoice) => v.name.includes("Amelie"),
    (v: SpeechSynthesisVoice) => !v.localService, // Any other cloud-based voice
    (v: SpeechSynthesisVoice) => v.name.toLowerCase().includes("female") || v.name.toLowerCase().includes("femme"), // Any local female voice
  ];

  let selectedVoice: SpeechSynthesisVoice | undefined;

  for (const priority of voicePriorities) {
    selectedVoice = voices.find(priority);
    if (selectedVoice) break;
  }

  // Fallback to the first available French voice
  if (!selectedVoice) {
    selectedVoice = voices[0];
  }
  
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  // Adjust for a softer, more pleasant tone
  utterance.pitch = 1; // Normal pitch
  utterance.rate = 0.9; // Slightly slower for clarity and a calmer tone

  window.speechSynthesis.speak(utterance);
};