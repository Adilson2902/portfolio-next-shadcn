# 🚀 Guia Rápido - Portfólio Modernizado

## ⚡ Início Rápido

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

---

## 🎨 Personalizações Rápidas

### 1. **Alterar Informações Pessoais**

**Arquivo:** `src/components/Hero/index.tsx`

```typescript
// Linha ~62
<span className="gradient-text">Seu Nome</span>

// Linha ~70
<ColourfulText text={"Suas • Tecnologias • Aqui"} />

// Linha ~82
Seu texto de apresentação aqui...
```

### 2. **Adicionar/Remover Projetos**

**Arquivo:** `src/components/Projects/index.tsx`

```typescript
// Linha ~20
const projects: Project[] = [
  {
    title: "Nome do Projeto",
    website: "https://seu-site.com",
    cover: "URL_da_imagem",
    description: "Descrição curta",
    whatIDid: ["Item 1", "Item 2"],
    impact: ["Resultado 1", "Resultado 2"],
    stack: ["React", "Next.js"],
    year: "2025",
  },
  // Adicione mais projetos aqui
];
```

### 3. **Modificar Tecnologias (Skills)**

**Arquivo:** `src/components/Skills/index.tsx`

```typescript
// Linha ~22
const skills = [
  {
    name: "Nome da Tech",
    icon: SiReact, // Importar de 'react-icons/si'
    color: "from-cyan-400 to-blue-500",
    description: "Descrição breve",
  },
  // Adicione mais skills aqui
];
```

### 4. **Atualizar Estatísticas**

**Arquivo:** `src/components/Stats/index.tsx`

```typescript
// Linha ~55
const stats = [
  {
    icon: <Briefcase className="w-7 h-7 text-white" />,
    value: 15, // Altere o número
    suffix: "+",
    label: "Projetos Entregues",
    gradient: "from-purple-500 to-violet-500",
  },
  // Modifique ou adicione mais stats
];
```

### 5. **Mudar Informações de Contato**

**Arquivo:** `src/components/Contact/index.tsx`

```typescript
// Linha ~25
<ContactPinCard type="mail" handle="seu-email@email.com" />
<ContactPinCard type="instagram" handle="seu_instagram" />
<ContactPinCard type="whatsApp" handle="5511999999999" />
```

### 6. **Modificar Cores do Tema**

**Arquivo:** `src/app/globals.css`

```css
:root {
  --primary: #8b5cf6;    /* Cor principal - Roxo */
  --secondary: #ec4899;  /* Cor secundária - Rosa */
  --accent: #06b6d4;     /* Cor de destaque - Ciano */
}
```

### 7. **Ajustar Serviços Oferecidos**

**Arquivo:** `src/components/Services/index.tsx`

```typescript
// Linha ~22
const cards = [
  {
    title: "Seu Serviço",
    icon: <Globe className="h-8 w-8 text-purple-400" />,
    backgroundClassName: "bg-gradient-to-br from-purple-600/30...",
  },
  // Adicione mais serviços
];
```

---

## 🎯 Ativar/Desativar Funcionalidades

### **Desabilitar Cursor Customizado**

**Arquivo:** `src/app/layout.tsx`

```typescript
// Remova ou comente estas linhas:
import { CustomCursor } from "../components/ui/custom-cursor";
// e
<CustomCursor />

// E remova a classe cursor-none do body
className="... antialiased" // Sem cursor-none
```

### **Desabilitar Loading Screen**

**Arquivo:** `src/app/layout.tsx`

```typescript
// Remova ou comente:
import { LoadingScreen } from "../components/ui/loading-screen";
// e
<LoadingScreen />
```

### **Desabilitar Background Animado**

**Arquivo:** `src/app/layout.tsx`

```typescript
// Remova ou comente:
import { AnimatedBackground } from "../components/ui/animated-background";
// e
<AnimatedBackground />
```

### **Remover Seção**

**Arquivo:** `src/app/page.tsx`

```typescript
// Comente a seção que não quer:
// <Stats />
// <Skills />
// etc...
```

---

## 📱 Testar Responsividade

```bash
# No navegador, abra DevTools (F12)
# Ative o modo de dispositivo móvel
# Teste nos tamanhos:
# - Mobile: 375px, 414px
# - Tablet: 768px, 1024px
# - Desktop: 1440px, 1920px
```

---

## 🎨 Customizar Gradientes

### **Gradientes Disponíveis:**

```css
/* Roxo */
from-purple-500 to-violet-500

/* Rosa */
from-pink-500 to-rose-500

/* Azul/Ciano */
from-cyan-500 to-blue-500

/* Verde */
from-emerald-500 to-teal-500

/* Laranja */
from-amber-500 to-orange-500
```

### **Aplicar em Elemento:**

```jsx
<div className="bg-gradient-to-r from-purple-500 to-pink-500">
  Conteúdo
</div>
```

---

## 🔧 Comandos Úteis

```bash
# Verificar erros de lint
npm run lint

# Build de produção
npm run build

# Testar build localmente
npm run build && npm start

# Limpar cache do Next.js
rm -rf .next

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

---

## 🚀 Deploy

### **Vercel (Recomendado)**

1. Faça push para GitHub
2. Conecte no Vercel
3. Deploy automático!

### **Netlify**

```bash
# Build command
npm run build

# Publish directory
.next
```

### **Outras Plataformas**

- Certifique-se de usar Node.js 18+
- Configure variáveis de ambiente se necessário
- Use `npm run build` e `npm start`

---

## 📝 Metadados SEO

**Arquivo:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Seu Nome - Desenvolvedor Front-end",
  description: "Sua descrição aqui",
  keywords: ["suas", "palavras", "chave"],
  // ... mais metadados
};
```

---

## 🐛 Problemas Comuns

### **Erro de Imagem Externa**

Se imagens externas não carregarem, adicione o domínio em:

**Arquivo:** `next.config.ts`

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'seu-dominio.com',
    },
  ],
},
```

### **Erro de Módulo Não Encontrado**

```bash
npm install
```

### **Port 3000 já em uso**

```bash
# Use outra porta
npm run dev -- -p 3001
```

---

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Lucide Icons](https://lucide.dev/)

---

## 💡 Dicas Profissionais

1. **Performance:** Use Next.js Image para todas as imagens
2. **SEO:** Adicione alt text descritivos
3. **Acessibilidade:** Teste com teclado e leitor de tela
4. **Mobile:** Sempre teste em dispositivos reais
5. **Analytics:** Adicione Google Analytics ou similar
6. **Forms:** Use FormSpree, Netlify Forms ou similares
7. **Backup:** Faça commits frequentes no Git

---

## 🎉 Pronto para Impressionar!

Seu portfólio está modernizado e pronto para mostrar suas habilidades de front-end!

**Próximos Passos:**
1. ✅ Personalize com suas informações
2. ✅ Adicione seus projetos reais
3. ✅ Teste em diferentes dispositivos
4. ✅ Faça deploy
5. ✅ Compartilhe com o mundo! 🚀

---

**Dúvidas?** Consulte o arquivo `MODERNIZACOES.md` para mais detalhes técnicos.
