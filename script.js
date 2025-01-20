// script.js

// Datos de las flashcards para Ágata
const flashcards = [
    // Tasa de Variación Media (TVM)
    {
      front: {
        title: "¿Qué es la Tasa de Variación Media (TVM)?",
        content:
          "Define la Tasa de Variación Media de una función $f$ entre dos puntos $x = a$ y $x = b$.",
      },
      back: {
        explanation:
          "La <strong>Tasa de Variación Media (TVM)</strong> de una función $f$ entre los puntos $x = a$ y $x = b$ se define como:",
        math: [
          "$$\\text{TVM} = \\frac{f(b) - f(a)}{b - a}$$",
          "Esta tasa mide el cambio promedio de la función en el intervalo $[a, b]$.",
        ],
      },
    },
    {
      front: {
        title: "Interpretación Geométrica de la TVM",
        content:
          "¿Qué representa geométricamente la TVM en el gráfico de una función?",
      },
      back: {
        explanation:
          "Geométricamente, la <strong>TVM</strong> es la pendiente de la recta secante que une los puntos $(a, f(a))$ y $(b, f(b))$ en el gráfico de la función.",
        math: [
          "$$\\text{TVM} = m_{secante} = \\frac{f(b) - f(a)}{b - a}$$",
          "Esta pendiente indica cómo varía la función en promedio entre los dos puntos.",
        ],
      },
    },
    {
      front: {
        title: "TVM vs. Derivada",
        content:
          "¿Cómo se relaciona la Tasa de Variación Media con la derivada de una función?",
      },
      back: {
        explanation:
          "La <strong>derivada</strong> de una función en un punto es el límite de la <strong>TVM</strong> cuando el intervalo se hace infinitamente pequeño. Es decir:",
        math: [
          "$$f'(a) = \\lim_{b \\to a} \\frac{f(b) - f(a)}{b - a}$$",
          "Por lo tanto, la derivada representa la <strong>Tasa de Variación Instantánea</strong> en un punto específico.",
        ],
      },
    },
    // Derivadas Conceptuales
    {
      front: {
        title: "¿Qué es una Derivada?",
        content:
          "Define de manera conceptual qué es la derivada de una función en un punto.",
      },
      back: {
        explanation:
          "La <strong>derivada</strong> de una función en un punto mide la <strong>tasa de cambio instantánea</strong> de la función en ese punto. Es la pendiente de la recta tangente al gráfico de la función en ese punto.",
        math: [
          "$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$",
          "Representa cómo cambia la función en un instante específico.",
        ],
      },
    },
    {
      front: {
        title: "Derivada y Movimiento",
        content:
          "Si la posición de un objeto está dada por $s(t)$, ¿qué representa la derivada $s'(t)$?",
      },
      back: {
        explanation:
          "La derivada $s'(t)$ representa la <strong>velocidad instantánea</strong> del objeto en el tiempo $t$.",
        math: [
          "$$s'(t) = \\frac{ds}{dt}$$",
          "Indica qué tan rápido está cambiando la posición del objeto en ese instante.",
        ],
      },
    },
    {
      front: {
        title: "Interpretación de la Derivada Positiva",
        content:
          "¿Qué indica que la derivada de una función en un punto sea positiva?",
      },
      back: {
        explanation:
          "Si la derivada de una función en un punto es <strong>positiva</strong>, indica que la función está <strong>creciendo</strong> en ese punto.",
        math: [
          "$$f'(a) > 0$$",
          "La pendiente de la tangente es ascendente, lo que significa que $f(x)$ aumenta conforme $x$ aumenta.",
        ],
      },
    },
    {
      front: {
        title: "Interpretación de la Derivada Negativa",
        content:
          "¿Qué significa que la derivada de una función en un punto sea negativa?",
      },
      back: {
        explanation:
          "Si la derivada de una función en un punto es <strong>negativa</strong>, indica que la función está <strong>disminuyendo</strong> en ese punto.",
        math: [
          "$$f'(a) < 0$$",
          "La pendiente de la tangente es descendente, lo que significa que $f(x)$ disminuye conforme $x$ aumenta.",
        ],
      },
    },
    {
      front: {
        title: "Derivada en un Punto Máximo",
        content:
          "¿Qué valor tiene la derivada de una función en un punto máximo local?",
      },
      back: {
        explanation:
          "En un <strong>punto máximo local</strong>, la derivada de la función es <strong>cero</strong>.",
        math: [
          "$$f'(a) = 0$$",
          "Esto indica que la pendiente de la tangente es horizontal en ese punto.",
        ],
      },
    },
    {
      front: {
        title: "Derivada y Puntos de Inflexión",
        content:
          "¿Cómo se relaciona la derivada con los puntos de inflexión de una función?",
      },
      back: {
        explanation:
          "En los <strong>puntos de inflexión</strong>, la derivada puede cambiar de signo, indicando un cambio en la concavidad de la función.",
        math: [
          "No necesariamente la derivada es cero, pero hay un cambio en la tendencia de la derivada.",
        ],
      },
    },
    {
      front: {
        title: "Concavidad y Segunda Derivada",
        content:
          "Define concavidad y cómo se relaciona con la segunda derivada de una función.",
      },
      back: {
        explanation:
          "La <strong>concavidad</strong> de una función indica si el gráfico de la función está curvado hacia arriba o hacia abajo.",
        math: [
          "$$f''(x) > 0$$: Concavidad hacia arriba (forma de una sonrisa).",
          "$$f''(x) < 0$$: Concavidad hacia abajo (forma de una mueca).",
        ],
      },
    },
    {
      front: {
        title: "Puntos de Inflexión",
        content:
          "¿Qué caracteriza a un punto de inflexión en una función?",
      },
      back: {
        explanation:
          "Un <strong>punto de inflexión</strong> es donde la concavidad de la función cambia de hacia arriba a hacia abajo o viceversa. En estos puntos, la segunda derivada puede ser cero o no existir.",
        math: [
          "$$f''(x) = 0$$ o no existe en el punto.",
          "Indica un cambio en la forma de la curva.",
        ],
      },
    },
    // Aplicaciones y Conceptos Avanzados
    {
      front: {
        title: "Derivada y Tasa de Cambio",
        content:
          "¿Cómo se relaciona la derivada con las tasas de cambio en el mundo real?",
      },
      back: {
        explanation:
          "La derivada representa las <strong>tasas de cambio instantáneas</strong> en diversas aplicaciones, como la velocidad en física, la tasa de crecimiento en economía, entre otras.",
        math: [
          "Ejemplo: $v(t) = s'(t)$ representa la velocidad instantánea en función del tiempo.",
        ],
      },
    },
    {
      front: {
        title: "Diferenciabilidad",
        content:
          "¿Qué significa que una función sea diferenciable en un punto?",
      },
      back: {
        explanation:
          "Una función es <strong>diferenciable</strong> en un punto si tiene una derivada definida en ese punto. Esto implica que la función es suave y no presenta esquinas o discontinuidades en ese punto.",
        math: [
          "Matemáticamente:",
          "$$f'(a) \\text{ existe}$$",
        ],
      },
    },
    {
      front: {
        title: "Derivada de Funciones Constantes",
        content:
          "¿Cuál es la derivada de una función constante $f(x) = c$, donde $c$ es una constante?",
      },
      back: {
        explanation:
          "La derivada de una función constante es <strong>cero</strong>.",
        math: [
          "$$f(x) = c$$",
          "$$f'(x) = 0$$",
          "Esto se debe a que una función constante no cambia su valor, por lo tanto, su tasa de cambio es cero.",
        ],
      },
    },
    {
      front: {
        title: "Interpretación de Derivadas en Gráficos",
        content:
          "¿Cómo puedes identificar la derivada de una función observando su gráfico?",
      },
      back: {
        explanation:
          "Observando el gráfico de una función, la derivada en un punto corresponde a la pendiente de la recta tangente en ese punto.",
        math: [
          "Una pendiente ascendente indica una derivada positiva, mientras que una pendiente descendente indica una derivada negativa.",
        ],
      },
    },
    {
      front: {
        title: "Derivada y Optimización",
        content:
          "¿Cómo se utiliza la derivada en problemas de optimización?",
      },
      back: {
        explanation:
          "La derivada se utiliza para encontrar los <strong>puntos críticos</strong> de una función, que pueden corresponder a máximos o mínimos locales. Estos puntos son esenciales para resolver problemas de optimización, donde se busca maximizar o minimizar una cantidad.",
        math: [
          "$$f'(x) = 0$$",
          "Resolviendo esta ecuación se encuentran los puntos críticos.",
        ],
      },
    },
    // Conceptos Avanzados de Derivadas
    {
      front: {
        title: "Derivada y Crecimiento de Funciones",
        content:
          "¿Qué nos indica la derivada sobre el crecimiento o decrecimiento de una función?",
      },
      back: {
        explanation:
          "La derivada nos indica si una función está <strong>creciendo</strong> o <strong>decreciendo</strong> en un intervalo:",
        math: [
          "$$f'(x) > 0$$: La función está creciendo.",
          "$$f'(x) < 0$$: La función está decreciendo.",
        ],
      },
    },
    {
      front: {
        title: "Derivada y Puntos Críticos",
        content:
          "Define qué son los puntos críticos de una función y cómo se encuentran.",
      },
      back: {
        explanation:
          "Los <strong>puntos críticos</strong> son aquellos valores de $x$ donde la derivada es cero o no existe. Se encuentran resolviendo la ecuación:",
        math: [
          "$$f'(x) = 0$$",
          "Estos puntos son candidatos para ser máximos, mínimos o puntos de inflexión.",
        ],
      },
    },
    {
      front: {
        title: "Función Creciente vs. Derivada Positiva",
        content:
          "¿Es cierto que si una función es creciente en un intervalo, su derivada es positiva en ese intervalo?",
      },
      back: {
        explanation:
          "Sí, si una función es <strong>estrictamente creciente</strong> en un intervalo, su derivada es <strong>positiva</strong> en ese intervalo.",
        math: [
          "$$f'(x) > 0$$ para todo $x$ en el intervalo.",
        ],
      },
    },
    {
      front: {
        title: "Función Decreciente vs. Derivada Negativa",
        content:
          "¿Es cierto que si una función es decreciente en un intervalo, su derivada es negativa en ese intervalo?",
      },
      back: {
        explanation:
          "Sí, si una función es <strong>estrictamente decreciente</strong> en un intervalo, su derivada es <strong>negativa</strong> en ese intervalo.",
        math: [
          "$$f'(x) < 0$$ para todo $x$ en el intervalo.",
        ],
      },
    },
    {
      front: {
        title: "Concavidad y Segunda Derivada",
        content:
          "¿Cómo se relaciona la segunda derivada de una función con su concavidad?",
      },
      back: {
        explanation:
          "La <strong>segunda derivada</strong> de una función indica su <strong>concavidad</strong>:",
        math: [
          "$$f''(x) > 0$$: La función es <strong>cóncava hacia arriba</strong>.",
          "$$f''(x) < 0$$: La función es <strong>cóncava hacia abajo</strong>.",
        ],
      },
    },
    {
      front: {
        title: "Puntos de Inflexión",
        content:
          "¿Qué caracteriza a un punto de inflexión en una función?",
      },
      back: {
        explanation:
          "Un <strong>punto de inflexión</strong> es donde la concavidad de la función cambia de hacia arriba a hacia abajo o viceversa. En estos puntos, la segunda derivada puede ser cero o no existir.",
        math: [
          "$$f''(x) = 0$$ o no existe en el punto.",
          "Indica un cambio en la forma de la curva.",
        ],
      },
    },
  ];
  
  // Variables de estado del quiz
  let currentCard = 0;
  let isFlipped = false;
  let timer;
  let timeLeft = 5; // Restaurado a 10 segundos
  let canFlip = false;
  
  // Inicia la sesión de flashcards
  function startFlashcards() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("flashcardContainer").style.display = "block";
    document.getElementById(
      "progressText"
    ).textContent = `Tarjeta 1 de ${flashcards.length}`;
    document.getElementById("progressFill").style.width = "0%";
    displayCard(currentCard);
    startTimer();
  }
  
  // Manejo del temporizador de 10 segundos
  function startTimer() {
    timeLeft = 5;
    canFlip = false;
    isFlipped = false; // Restablecer el estado de volteo
    document.getElementById(
      "timer"
    ).textContent = `Tiempo restante: ${timeLeft}s`;
    document.getElementById("flashcard").style.cursor = "not-allowed";
    document.getElementById("prevButton").style.display = "none";
    document.getElementById("nextButton").style.display = "none";
  
    if (timer) clearInterval(timer);
  
    timer = setInterval(() => {
      timeLeft--;
      if (timeLeft > 0) {
        document.getElementById(
          "timer"
        ).textContent = `Tiempo restante: ${timeLeft}s`;
      } else {
        clearInterval(timer);
        canFlip = true;
        document.getElementById("flashcard").style.cursor = "pointer";
        document.getElementById(
          "timer"
        ).textContent = `¡Puedes girar la tarjeta!`;
      }
    }, 1000);
  }
  
  // Muestra la tarjeta correspondiente
  function displayCard(index) {
    const card = flashcards[index];
    const front = document.querySelector(
      ".flashcard-front .flashcard-content"
    );
    const back = document.querySelector(
      ".flashcard-back .flashcard-content"
    );
  
    // Contenido del frente
    front.innerHTML = `
            <h2>${card.front.title}</h2>
            <div class="latex-content">${card.front.content}</div>
        `;
  
    // Contenido del reverso
    back.innerHTML = `
            <h2>Explicación</h2>
            <div class="latex-content">${card.back.explanation}</div>
            ${card.back.math
              .map(
                (item) => `
                    <div class="latex-content">${item}</div>
                `
              )
              .join("")}
        `;
  
    // Restablecer el estado de la tarjeta
    const flashcard = document.getElementById("flashcard");
    flashcard.classList.remove("flipped");
    isFlipped = false;
  
    // Actualizar progreso
    document.getElementById("progressText").textContent = `Tarjeta ${
      index + 1
    } de ${flashcards.length}`;
    const progressPercentage = ((index + 1) / flashcards.length) * 100;
    document.getElementById(
      "progressFill"
    ).style.width = `${progressPercentage}%`;
  
    // Limpiar motivación
    document.getElementById("motivation").textContent = "";
  
    // Forzar el renderizado de MathJax en la tarjeta actual
    MathJax.typesetPromise([front, back]).then(() => {
      // Render completo
    });
  }
  
  // Voltea la tarjeta al hacer clic (solo tras 10s)
  function flipCard() {
    if (canFlip) {
      const flashcard = document.getElementById("flashcard");
      flashcard.classList.toggle("flipped");
      isFlipped = !isFlipped;
  
      if (isFlipped) {
        document.getElementById("motivation").textContent =
          "¡Excelente! Continúa aprendiendo.";
        // Mostrar los botones de navegación
        document.getElementById("prevButton").style.display =
          "inline-block";
        document.getElementById("nextButton").style.display =
          "inline-block";
  
        // Deshabilitar botones si es necesario
        document.getElementById("prevButton").disabled =
          currentCard === 0;
        document.getElementById("nextButton").disabled =
          currentCard === flashcards.length - 1;
      } else {
        document.getElementById("motivation").textContent = "";
        // Ocultar navegación
        document.getElementById("prevButton").style.display = "none";
        document.getElementById("nextButton").style.display = "none";
      }
    }
  }
  
  // Funciones para avanzar y retroceder tarjetas
  function nextCard() {
    if (currentCard < flashcards.length - 1) {
      currentCard++;
      displayCard(currentCard);
      startTimer();
    }
  }
  
  function previousCard() {
    if (currentCard > 0) {
      currentCard--;
      displayCard(currentCard);
      startTimer();
    }
  }
  
  // Evento para voltear la tarjeta al hacer clic
  document
    .getElementById("flashcard")
    .addEventListener("click", flipCard);
  
