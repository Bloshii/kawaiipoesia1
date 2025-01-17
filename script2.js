const glitchEffect = (text) => {
  const glitchChars = ['#', '@', '%', '&', '$', '*', '!', '^', '-'];
  let newText = text.split('').map(char => {
    if (Math.random() < 0.1) {
      return glitchChars[Math.floor(Math.random() * glitchChars.length)];
    }
    return char;
  }).join('');
  return `<span class="glitch" data-text="${newText}">${newText}</span>`; // Wrap glitch text with the glitch class
};

const applyColorChange = (word) => {
  const words = word.split(' ').map((w, index) => {
    if (index % 3 === 0) {
      return `<span class="appear-disappear">${w}</span>`; // Apply animation every third word
    }
    return w;
  }).join(' ');
  return words;
};

// Image to be displayed when clicked
const imageHTML = `<img src="https://drive.google.com/thumbnail?id=1TwtNyfKzQSTtvmy4D31LCg81vyXMd9IG" 
alt="Interactive Image"
id="interactive-image" />`;

const generateKawaiiPoem = () => {
  const lines = [
    "Cuando pensamos en ‘kawaii’,",
    "Imágenes de ojos grandes y brillantes,",
    "Colores suaves, ternura, vulnerabilidad,",
    "Pero detrás de todo eso, hay una historia profunda.",
    "Un refugio emocional, un lenguaje,",
    "Que comunica desde la fragilidad humana.",
    "En los años 70, comenzó en Japón,",
    "Como respuesta a la presión de la vida adulta.",
    "La juventud buscaba lo simple, lo tierno,",
    "Un escudo contra la dureza de la realidad.",
    "Kawaii no es solo un estilo, es un refugio,",
    "Un lenguaje de emociones, un símbolo de resistencia.",
    "Hoy, es un espejo global de nuestras necesidades,",
    "De nostalgia, alegría, pero también fragilidad.",
    "Cada personaje, cada accesorio,",
    "Cuenta una historia de ternura, y de lucha.",
    "Lo kawaii es más que lo superficial,",
    "Indaga en la psique humana,",
    "Generando emociones vistas como positivas,",
    "Un sentimiento que trasciende lo visual.",
    "Cuando te acercas a lo kawaii,",
    "Siempre es a través del anime o de la cultura pop,",
    "No está mal, pero el entendimiento que genera es limitado,",
    "¿Qué pasaría si lo kawaii no fuera solo una moda?",
    "Propongo una reflexión desde el arte,",
    "En la que lo kawaii pueda experimentarse como un sentimiento,",
    "No solo fugaz por ver algo lindo, sino un sentimiento que perdura.",
    "Un sentimiento que emancipa, que trastorna,",
    "La frialdad y mecanicidad del mundo actual,",
    "Un sentimiento que desafía lo que conocemos.",
    "Lo kawaii puede ser el antídoto,",
    "A la desconexión, a la dureza de nuestro tiempo.",
    "ES UN LENGUAJE QUE SE SIENTE, NO SOLO SE VE",  // Targeted line
    "Y puede transformar nuestra relación con el mundo."
  ];

  // Create a string to display on the page
  let poemText = '';
  lines.forEach((line, index) => {
    if (index % 3 === 0) {
      poemText += `<p>${glitchEffect(applyColorChange(line))}</p>`; // Apply glitch and color change effects
    } else {
      poemText += `<p>${applyColorChange(line)}</p>`;
    }
  });

  // Insert poemText into the page
  const poemContainer = document.getElementById('poem-container');
  poemContainer.innerHTML = poemText;
  poemContainer.setAttribute('data-text', poemText); // Set the flashing background to the whole poem

  // Add event listener for the targeted line
  document.querySelectorAll("p").forEach((p) => {
    if (p.innerText === "ES UN LENGUAJE QUE SE SIENTE, NO SOLO SE VE") {
      p.addEventListener("click", () => {
        // Show the modal when clicked
        document.getElementById('imageModal').style.display = "block"; // Show modal with the image
      });
    }
  });

  // Close the modal when the 'x' is clicked
  const closeModal = document.querySelector('.close');
  closeModal.addEventListener("click", () => {
    document.getElementById('imageModal').style.display = "none"; // Hide the modal
  });

  // Close the modal when clicking outside the modal content
  window.onclick = (event) => {
    if (event.target == document.getElementById('imageModal')) {
      document.getElementById('imageModal').style.display = "none"; // Hide the modal if outside is clicked
    }
  };
};

generateKawaiiPoem(); // Initialize the poem generation