export interface BlogPost {
  id: number;
  title: string;
  url: string;
  platform: "LinkedIn" | "Medium" | "Gorilla";
  date: string;
  tags?: string[];
  series?: string;
  language: "en" | "es";
}

export const posts: BlogPost[] = [
    // LinkedIn Articles
    {
      id: 1,
      title:
        "Evaluating Component Generation: ChatGPT vs Claude - Which One is Better?",
      url: "https://www.linkedin.com/pulse/evaluating-component-generation-chatgpt-vs-claude-which-mantilla-1sume",
      platform: "LinkedIn",
      date: "2024-03",
      language: "en",
    },
  
    // Medium Articles
    {
      id: 2,
      title: "Construyendo Algo: Capítulo 6.3 - REST Mejores Prácticas",
      url: "https://medium.com/@felipemantillagomez/construyendo-algo-capítulo-6-3-rest-mejores-prácticas-81c901083f8f",
      platform: "Medium",
      date: "2024-02",
      language: "es",
    },
    {
      id: 3,
      title: "Construyendo Algo: Capítulo 6.2 - REST Health Checks",
      url: "https://medium.com/@felipemantillagomez/construyendo-algo-capítulo-6-2-rest-health-checks-1e69cc8d4c7a",
      platform: "Medium",
      date: "2024-02",
      language: "es",
    },
    {
      id: 4,
      title:
        "Construyendo Algo: Capítulo 6.1 - REST, HTTP, RESTful y Open API Spec",
      url: "https://medium.com/@felipemantillagomez/construyendo-algo-capítulo-6-1-rest-http-restful-y-open-api-spec-db666bfe8c87",
      platform: "Medium",
      date: "2024-02",
      language: "es",
    },
    {
      id: 5,
      title: "Construyendo Algo: Capítulo 6 - Creando una REST API",
      url: "https://medium.com/@felipemantillagomez/construyendo-algo-capítulo-6-creando-una-rest-api-5dc296ee730d",
      platform: "Medium",
      date: "2024-01",
      language: "es",
    },
    {
      id: 6,
      title:
        "Construyendo Algo: Capítulo 5 - Validación de Variables de Entorno con Joi",
      url: "https://medium.com/@felipemantillagomez/construyendo-algo-capítulo-5-validación-de-variables-de-entorno-con-joi-8500041cf5a3",
      platform: "Medium",
      date: "2024-01",
      language: "es",
    },
    {
      id: 7,
      title: "Construyendo Algo: Capítulo 4 - Variables de Entorno con Doppler",
      url: "https://medium.com/@felipemantillagomez/construyendo-algo-capitulo-4-variables-de-entorno-con-doppler-92bf8e72e24a",
      platform: "Medium",
      date: "2024-01",
      language: "es",
      },
    {
      id: 8,
      title: "Construyendo Algo: Capítulo 3 - Manejando Variables de Entorno",
      url: "https://medium.com/@felipemantillagomez/construyendo-algo-capitulo-3-manejando-variables-de-entorno-4abf9f5ed2ad",
      platform: "Medium",
      date: "2024-01",
      language: "es",
    },
    {
      id: 9,
      title: "Construyendo Algo: Capítulo 2 - Debug en NodeJS",
      url: "https://medium.com/@felipemantillagomez/construyendo-algo-capitulo-2-debug-en-nodejs-66b502caae07",
      platform: "Medium",
      date: "2024-01",
      language: "es",
    },
    {
      id: 10,
      title:
        "Construyendo Algo: Capítulo 1 - Configurando NodeJS, Express & TypeScript",
      url: "https://medium.com/@felipemantillagomez/construyendo-algo-capitulo-1-configurando-nodejs-express-typescript-ca3334ddd408",
      platform: "Medium",
      date: "2024-01",
      language: "es",
    },
    {
      id: 11,
      title: "Construyendo Algo: Una Guía Completa de NodeJS",
      url: "https://medium.com/@felipemantillagomez/construyendo-algo-una-guia-completa-de-nodejs-01daf2e43e60",
      platform: "Medium",
      date: "2024-01",
      language: "es",
    },
    {
      id: 12,
      title: "Data Journey: From Binary to Buffers and Streams",
      url: "https://blog.stackademic.com/data-journey-from-binary-to-buffers-and-streams-e127cfa28549",
      platform: "Medium",
      date: "2024-01",
      language: "en",
    },
    {
      id: 13,
      title:
        "From Client Work to Open Source: My Rollercoaster React Native Journey",
      url: "https://blog.stackademic.com/from-client-work-to-open-source-my-rollercoaster-react-native-journey-9273eba33cb0",
      platform: "Medium",
      date: "2023-12",
      language: "en",
    },
    {
      id: 14,
      title:
        "Recreating NodeJS from Scratch: Chapter 3 - V8 Hello World & Main Concepts Explained",
      url: "https://medium.com/@felipemantillagomez/recreating-nodejs-from-scratch-chapter-3-v8-hello-world-main-concepts-explained-58d58676db36",
      platform: "Medium",
      date: "2023-12",
      language: "en",
      },
    {
      id: 15,
      title: "HTTP Journey: From Request to Response",
      url: "https://blog.stackademic.com/http-journey-from-request-to-response-7b122b8e74e9",
      platform: "Medium",
      date: "2023-11",
      language: "en",
    },
    {
      id: 16,
      title:
        "Recreating NodeJS from Scratch: Chapter 2 - Compiling Google's V8 Engine on Local",
      url: "https://medium.com/@felipemantillagomez/recreating-nodejs-from-scratch-chapter-2-compiling-googles-v8-engine-on-local-c4ab57172360",
      platform: "Medium",
      date: "2023-11",
      language: "en",
    },
    {
      id: 17,
      title:
        "Recreating NodeJS from Scratch: Chapter 1 - C++ for JavaScript Developers",
      url: "https://medium.com/@felipemantillagomez/recreating-nodejs-from-scratch-chapter-1-c-for-javascript-developers-b4e0db8e1604",
      platform: "Medium",
      date: "2023-11",
      language: "en",
    },
    {
      id: 18,
      title:
        "How I Saved My Plants with an Arduino UNO: A Tale of Gardening and Automation",
      url: "https://medium.com/@felipemantillagomez/how-i-saved-my-plants-with-an-arduino-uno-a-tale-of-gardening-and-automation-e500c894c8e5",
      platform: "Medium",
      date: "2023-10",
      language: "es",
    },
    {
      id: 19,
      title: "Construyendo Algo: Capítulo 6.4 - REST Ordenamiento, Filtrado y Paginación",
      url: "https://medium.com/@felipemantillagomez/cap%C3%ADtulo-6-4-rest-ordenamiento-filtrado-y-paginaci%C3%B3n-db55c80d081f",
      platform: "Medium",
      date: "2023-10",
      language: "es",
    },
    {
      id: 20,
      title: "Conecta con AI: Bases de OpenAI y TypeScript",
      url: "https://medium.com/@felipemantillagomez/conecta-con-ai-bases-openai-y-typescript-98f41282c7a5",
      platform: "Medium",
      date: "2023-10",
      language: "es",
    },
    {
      id: 21,
      title: "Conecta con AI: Bases OpenAI - Imágenes",
      url: "https://medium.com/@felipemantillagomez/conecta-con-ai-bases-openai-imágenes-00fa97e4195f",
      platform: "Medium",
      date: "2023-10",
      language: "es",
    },
    {
      id: 23,
      title: "Conecta con AI: Bases OpenAI - Audio",
      url: "https://medium.com/@felipemantillagomez/conecta-con-ai-bases-openai-audio-90f171b0ed14",
      platform: "Medium",
      date: "2023-10",
      language: "es",
    },
    {
      id: 24,
      title: "Conecta con AI: Bases OpenAI - Text to Speech & Speech to Text",
      url: "https://medium.com/@felipemantillagomez/conecta-con-ai-bases-openai-text-to-speech-speech-to-text-bcc4646897e6",
      platform: "Medium",
      date: "2023-10",
      language: "es",
    },
    {
      id: 25,
      title: "Conecta con AI: Bases OpenAI - Embeddings Fundamentos",
      url: "https://medium.com/@felipemantillagomez/conecta-con-ai-bases-openai-embeddings-fundamentos-a012d402c01e",
      platform: "Medium",
      date: "2023-10",
      language: "es",
    },
    {
      id: 26,
      title: "Conecta con AI: Bases OpenAI - Embeddings Práctica",
      url: "https://medium.com/@felipemantillagomez/conecta-con-ai-bases-openai-embeddings-práctica-a7dda2e51f2c",
      platform: "Medium",
      date: "2023-10",
      language: "es",
    },
  
    // Gorilla Articles
    {
      id: 22,
      title: "Behind the Scenes of Node.js",
      url: "https://gorillalogic.com/blog/behind-the-scenes-of-node.js",
      platform: "Gorilla",
      date: "2024-01",
      language: "en",
    },
  ];

// Helper functions
export function getPostTags(title: string): string[] {
  const tags = [];
  if (title.includes("NodeJS") || title.includes("Node.js")) tags.push("NodeJS");
  if (title.includes("REST") || title.includes("API")) tags.push("API");
  if (title.includes("React")) tags.push("React");
  if (title.includes("TypeScript")) tags.push("TypeScript");
  if (title.includes("V8")) tags.push("V8");
  if (title.includes("Arduino")) tags.push("Arduino");
  return tags;
}

export function getPostSeries(title: string): string | undefined {
  if (title.includes("Construyendo Algo")) return "Construyendo Algo";
  if (title.includes("Recreating NodeJS")) return "Recreating NodeJS";
  if (title.includes("Conecta con AI")) return "Conecta con AI";
  return undefined;
} 