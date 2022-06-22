let sentences = document.querySelectorAll('.sentence');
let characterCount = 0;

for (let i = 0; i < sentences.length; i++) {
  let sentence = sentences[i];
  let newContent = '';

  // go through all characters of the sentence
  for (let j = 0; j < sentence.textContent.length; j++) {
    let substring = sentence.textContent.substr(j, 1);
    // if we have a character, wrap it
    if (substring !== " ") {
      newContent += `<span style="--animation-order: ${characterCount};">${substring}</span>`;
    } else {
      newContent += substring;
    }
    characterCount++;
  }
  sentence.innerHTML = newContent;
}


