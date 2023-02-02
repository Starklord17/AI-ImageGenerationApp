import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompt.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if(randomPrompt === propmt) return getRandomPrompt(prompt);

  return randomPrompt;
}